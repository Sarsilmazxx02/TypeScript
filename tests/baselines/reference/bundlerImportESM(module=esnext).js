//// [tests/cases/conformance/moduleResolution/bundler/bundlerImportESM.ts] ////

//// [esm.mts]
export const esm = 0;

//// [not-actually-cjs.cts]
import { esm } from "./esm.mjs";

//// [package.json]
{ "type": "commonjs" }

//// [still-not-cjs.ts]
import { esm } from "./esm.mjs";


//// [esm.mjs]
export var esm = 0;
//// [not-actually-cjs.cjs]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//// [still-not-cjs.js]
export {};
