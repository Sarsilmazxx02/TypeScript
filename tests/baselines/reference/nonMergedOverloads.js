//// [tests/cases/compiler/nonMergedOverloads.ts] ////

//// [nonMergedOverloads.ts]
var f = 10;

export function f();
export function f() {
}

//// [nonMergedOverloads.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.f = void 0;
var f = 10;
function f() {
}
exports.f = f;
