#!/usr/bin/env node
/**
 * Apply the Cloudflare zone settings that resolve the Security Insights findings
 * for noahfares.com (Always Use HTTPS, SSL = Full strict, HSTS, Bot Fight Mode).
 *
 * Usage:
 *   CLOUDFLARE_API_TOKEN=xxxx node scripts/configure-cloudflare.mjs
 *   # PowerShell:
 *   $env:CLOUDFLARE_API_TOKEN="xxxx"; node scripts/configure-cloudflare.mjs
 *
 * Optional env:
 *   CLOUDFLARE_ZONE   domain to configure (default: noahfares.com)
 *
 * Required API token scopes (Cloudflare → My Profile → API Tokens → Create Token → Custom):
 *   Zone → Zone               → Read   (zone lookup)
 *   Zone → Zone Settings      → Edit   (Always Use HTTPS, SSL, HSTS)
 *   Zone → SSL and Certificates → Edit
 *   Zone → Bot Management     → Edit   (Bot Fight Mode — optional; skip + toggle manually if absent)
 *   Zone Resources: Include → Specific zone → noahfares.com
 *
 * Idempotent: re-running applies the same desired state. Each setting is applied
 * independently — one failure (e.g. missing scope) is reported but does not block the rest.
 */

const API = 'https://api.cloudflare.com/client/v4';
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const ZONE_NAME = process.env.CLOUDFLARE_ZONE || 'noahfares.com';

if (!TOKEN) {
  console.error('ERROR: CLOUDFLARE_API_TOKEN env var is required.');
  console.error('  PowerShell: $env:CLOUDFLARE_API_TOKEN="xxxx"; node scripts/configure-cloudflare.mjs');
  process.exit(1);
}

const authHeaders = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json',
};

/** Call the Cloudflare API and throw a readable error on a non-success response. */
async function cf(method, path, body) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: authHeaders,
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error(`HTTP ${res.status} (non-JSON response)`);
  }
  if (!res.ok || data.success === false) {
    const msg = (data.errors || [])
      .map((e) => `${e.code ?? '?'}: ${e.message ?? 'unknown'}`)
      .join('; ');
    throw new Error(msg || `HTTP ${res.status}`);
  }
  return data.result;
}

async function resolveZoneId() {
  const zones = await cf('GET', `/zones?name=${encodeURIComponent(ZONE_NAME)}`);
  if (!zones || zones.length === 0) {
    throw new Error(`No zone found for "${ZONE_NAME}" (check token scope / Zone Resources).`);
  }
  return zones[0].id;
}

/** Run one setting step, recording the outcome instead of throwing. */
async function step(results, label, fn) {
  try {
    await fn();
    results.push({ label, ok: true });
    console.log(`  ✓ ${label}`);
  } catch (err) {
    results.push({ label, ok: false, err: err.message });
    console.log(`  ✗ ${label} — ${err.message}`);
  }
}

async function main() {
  console.log(`Configuring Cloudflare zone: ${ZONE_NAME}`);
  const zoneId = await resolveZoneId();
  console.log(`Zone ID: ${zoneId}\n`);

  const results = [];

  await step(results, 'Always Use HTTPS = on', () =>
    cf('PATCH', `/zones/${zoneId}/settings/always_use_https`, { value: 'on' })
  );

  await step(results, 'SSL mode = Full (strict)', () =>
    cf('PATCH', `/zones/${zoneId}/settings/ssl`, { value: 'strict' })
  );

  await step(results, 'HSTS (max-age 6mo, includeSubDomains, no preload)', () =>
    cf('PATCH', `/zones/${zoneId}/settings/security_header`, {
      value: {
        strict_transport_security: {
          enabled: true,
          max_age: 15552000,
          include_subdomains: true,
          nosniff: true,
          preload: false,
        },
      },
    })
  );

  await step(results, 'Bot Fight Mode = on', () =>
    cf('PUT', `/zones/${zoneId}/bot_management`, { fight_mode: true })
  );

  const failed = results.filter((r) => !r.ok);
  console.log(`\nDone: ${results.length - failed.length}/${results.length} settings applied.`);
  if (failed.length) {
    console.log('\nSome settings failed. If "Bot Fight Mode" failed with a permission error,');
    console.log('toggle it manually: Cloudflare → Security → Bots → Bot Fight Mode.');
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(`\nFATAL: ${err.message}`);
  process.exit(1);
});
