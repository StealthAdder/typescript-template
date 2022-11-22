/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable import/no-dynamic-require */
const fs = require('fs');

const fileName = '../package.json';
const file = require(fileName);
require('dotenv').config();

const current_version = file.version;

const semVeri = current_version.split('.');
const major = semVeri[0];
const minor = semVeri[1];
const patch = semVeri[2];

let new_version;
if (process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'production') {
  new_version = `${major}.${Number(minor) + 1}.0`;
} else if (patch >= 9) {
  new_version = `${major}.${Number(minor) + 1}.0`;
} else {
  new_version = `${major}.${minor}.${Number(patch) + 1}`;
}

file.version = new_version;

fs.writeFile('package.json', JSON.stringify(file), (err) => {
  // eslint-disable-next-line no-console
  if (err) return console.log(err);
});
