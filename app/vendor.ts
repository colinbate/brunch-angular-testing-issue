import 'es6-shim';
import 'es6-promise';
import 'zone.js/dist/zone';
import 'reflect-metadata';
import '@angular/compiler';
import '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
// To reproduce issue #1653, comment out the following line.
import 'rxjs';

const production: string = 'production';
if (production === 'BRUNCH_ENVIRONMENT') {
  enableProdMode();
}
