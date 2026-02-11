#!/usr/bin/env node
/**
 * Scans the prototypes/ directory for subdirectories and writes
 * src/prototypes-list.json so the homepage can list them.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PROTOTYPES_DIR = path.join(ROOT, 'public', 'prototypes');
const OUT_FILE = path.join(ROOT, 'src', 'prototypes-list.json');

if (!fs.existsSync(PROTOTYPES_DIR)) {
  fs.mkdirSync(PROTOTYPES_DIR, { recursive: true });
}

const names = fs.readdirSync(PROTOTYPES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
  .map((d) => d.name)
  .sort();

fs.writeFileSync(OUT_FILE, JSON.stringify(names, null, 2), 'utf-8');
console.log('[generate-prototypes-list]', names.length, 'prototype(s):', names.join(', ') || '(none)');
