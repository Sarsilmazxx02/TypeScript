//// [tests/cases/conformance/parser/ecmascript5/ErrorRecovery/IfStatements/parserErrorRecoveryIfStatement3.ts] ////

//// [parserErrorRecoveryIfStatement3.ts]
class Foo {
  f1() {
    if (a.b
  }
  f2() {
  }
  f3() {
  }
}

//// [parserErrorRecoveryIfStatement3.js]
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.f1 = function () {
        if (a.b)
            ;
    };
    Foo.prototype.f2 = function () {
    };
    Foo.prototype.f3 = function () {
    };
    return Foo;
}());
