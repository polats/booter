#!/usr/bin/env node
const execSync = require('child_process').execSync

console.log(`============================================================`)
console.log(`Initializing game package info via npm init.`);
console.log(`Please choose your own unique package name for publish to work.`)
console.log(`=============================================================`)

let exitCode = 0;

try {
  execSync('npm init', {stdio: 'inherit'})
} catch (err) {
  exitCode = err.status
}
if (exitCode) {
  process.exit(exitCode);
}
