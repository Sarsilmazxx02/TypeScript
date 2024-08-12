// @strict: true
// @noemit: true
// @target: esnext

declare function deferred(cb: () => void): void;
declare function immediate1(immediate cb: () => void): void;
declare function immediate2(/** @immediate */ cb: () => void): void;
declare function immediate3(/** @immediate */ immediate cb: () => void): void;

function f01() {
    let x: string | number = "OK";
    deferred(() => {
        x = 42;
    });
    x;  // string
}

function f02() {
    let x: string | number = "OK";
    immediate1(() => {
        x = 42;
    });
    x;  // string | number
}

function f03() {
    let x: string | number = "OK";
    immediate2(() => {
        x = 42;
    });
    x;  // string | number
}

function f04() {
    let x: string | number = "OK";
    immediate3(() => {
        x = 42;
    });
    x;  // string | number
}

// Parameter is considered immediate if one or more overloads include the modifier in that parameter position

declare function overloaded<T>(cb: (x: T) => T): void;
declare function overloaded<T>(cb: (x: T, y: T) => T): void;
declare function overloaded(immediate cb: (...args: any) => any): void;

function f05() {
    let x: string | number = "OK";
    overloaded(() => {
        x = 42;
    });
    x;  // string | number
}

// immediate is permitted on a rest parameter

declare function invokeDeferred(...args: ((...args: any) => any)[]): void;
declare function invokeImmediate(immediate ...args: ((...args: any) => any)[]): void;

function f06() {
    let a = [];
    a.push("abc");
    a;  // string[]
    invokeImmediate(
        () => {
            a;  // string[]
            a.push(42);
            a;  // (string | number)[]
        },
        () => {
            a;  // string[]
            a.push(true);
            a;  // (string | boolean)[]
        }
    );
    a;  // (string | number | boolean)[]
}

function f07() {
    let a = [];
    a.push("abc");
    a;  // string[]
    invokeDeferred(
        () => {
            a;  // string[]
            a.push(42);
            a;  // (string | number)[]
        },
        () => {
            a;  // string[]
            a.push(true);
            a;  // (string | boolean)[]
        }
    );
    a;  // string[]
}

// immediate modifier must precede public/private/protected/readonly

class CC {
    constructor(immediate public readonly x: () => void) {}
}

// immediate requires parameter to have type that permits functions

declare function f10(immediate f: () => void): void;
declare function f11(immediate f: Function): void;
declare function f12(immediate f: any): void;
declare function f13(immediate f: object): void;
declare function f14(immediate f: {}): void;
declare function f15(immediate f: unknown): void;
declare function f16<T extends Function>(immediate f: T): void;
declare function f17<T extends (...args: any) => any>(immediate f: T): void;
declare function f18<T extends string | (() => void)>(immediate f: T): void;

declare function f20(immediate ...funcs: Function[]): void;
declare function f21<T extends ((...args: any) => any)[]>(immediate ...funcs: T): void;
declare function f22<T extends (string | (() => void))[]>(immediate ...funcs: T): void;
declare function f23<T extends string[] | (() => void)[]>(immediate ...funcs: T): void;
declare function f24<T extends (() => void)[]>(immediate ...funcs: T | string[]): void;

declare function f30(immediate f: { foo(): void }): void;
declare function f31(immediate f: number): void;
declare function f32(immediate ...funcs: number[]): void;

type T10 = (immediate f: () => void) => void;
type T11 = (immediate f: { (): void }) => void;
type T12 = (immediate f: Function) => void;
type T13 = (immediate f: any) => void;

type T20 = (immediate f: { foo(): void }) => void;
type T21 = (immediate f: number) => void;
type T22 = (immediate ...funcs: number[]) => void;
type T23 = { immediate x: () => void };

// immediate modifier is not captured in argument list tuples

declare function doStuff(immediate f: () => void): void;

declare function recreate<A extends unknown[], R>(f: (...args: A) => R): (...args: A) => R;
declare function recreateImmediate1<A extends unknown[], R>(f: (immediate ...args: A) => R): (...args: A) => R;
declare function recreateImmediate2<A extends unknown[], R>(f: (...args: A) => R): (immediate ...args: A) => R;

function ff1() {
    let x: string | number;
    x = 123;
    doStuff(() => {
        x = "hi";
    });
    x;  // string | number
}

function ff2() {
    let y: string | number;
    y = 123;
    recreate(doStuff)(() => {
        y = "hi";
    });
    y;  // number
}

function ff3() {
    let z: string | number;
    z = 123;
    recreateImmediate1(doStuff)(() => {
        z = "hi";
    });
    z;  // number
}

function ff4() {
    let z: string | number;
    z = 123;
    recreateImmediate2(doStuff)(() => {
        z = "hi";
    });
    z;  // string | number
}

// Subtype reduction considers (cb: () => void) => a subtype of (immediate cb: () => void) => void

declare function fa1(cb1: () => void): void;
declare function fa2(immediate cb2: () => void): void;

const fa = Math.random() > 0.5 ? fa1 : fa2;

function fta() {
    let x: string | number = "OK";
    fa(() => {
        x = 10;
    });
    x;  // string | number
}

declare function fb1(cb1: () => void): void;
declare function fb2(immediate cb2: () => void): void;

const fb = Math.random() > 0.5 ? fb2 : fb1;

function ftb() {
    let x: string | number = "OK";
    fb(() => {
        x = 10;
    });
    x;  // string | number
}

// A union signature parameter is immediate if any underlying parameter in same position is immediate

declare const fc: ((immediate cb: () => void) => void) | ((cb: () => void) => void);

function ftc() {
    let x: string | number = "OK";
    fc(() => {
        x = 10;
    });
    x;  // string | number
}

declare const fd: ((cb: () => void) => void) | ((immediate cb: () => void) => void);

function ftd() {
    let x: string | number = "OK";
    fd(() => {
        x = 10;
    });
    x;  // string | number
}

// https://github.com/microsoft/TypeScript/issues/11498

declare function mystery(immediate cb: () => void): void;

function fx1() {
    let x: string | number = "OK";
    x;  // string
    mystery(() => {
        x = 10;
    });
    x;  // string | number
    if (x === 10) {}
}

// https://github.com/microsoft/TypeScript/issues/15380

class Foo {
  public bar: string = "";
}

function fx2() {
  let foo: Foo | null = null;
  [1].forEach((item) => {
      foo = new Foo();
  });
  if (foo) {
      foo.bar;
  }
}

// https://github.com/microsoft/TypeScript/issues/57880

const call = (immediate f: () => void) => f();

const fx3 = () => {
    let a: undefined | number = undefined;
    call(() => { a = 1; });
    if (a !== undefined) {
        a.toString();
    }
};

// https://github.com/microsoft/TypeScript/issues/58291

async function execute(immediate onError: (_err: Error | undefined) => void) {
    onError(new Error("a"));
}

async function run() {
    let result: boolean = true;
    await execute(() => {
        result = false;
    });
    if (result === false) {
        console.log("error");
    }
    return result;
}
