currentDirectory:: /user/username/projects/noEmitOnError useCaseSensitiveFileNames:: false
Input::
//// [/user/username/projects/noEmitOnError/tsconfig.json]
{
  "compilerOptions": {
    "outDir": "./dev-build",
    "declaration": true,
    "noEmitOnError": true
  }
}

//// [/user/username/projects/noEmitOnError/shared/types/db.ts]
export interface A {
    name: string;
}


//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
;


//// [/user/username/projects/noEmitOnError/src/other.ts]
console.log("hi");
export { }


//// [/home/src/tslibs/TS/Lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };


/home/src/tslibs/TS/Lib/tsc.js --w
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[96msrc/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.




PolledWatches::
/user/username/projects/noEmitOnError/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/home/src/tslibs/TS/Lib/lib.d.ts: *new*
  {}
/user/username/projects/noEmitOnError/shared/types/db.ts: *new*
  {}
/user/username/projects/noEmitOnError/src/main.ts: *new*
  {}
/user/username/projects/noEmitOnError/src/other.ts: *new*
  {}
/user/username/projects/noEmitOnError/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/noEmitOnError: *new*
  {}

Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outDir": "/user/username/projects/noEmitOnError/dev-build",
  "declaration": true,
  "noEmitOnError": true,
  "watch": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/TS/Lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/TS/Lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/user/username/projects/noemitonerror/shared/types/db.ts (used version)
/user/username/projects/noemitonerror/src/main.ts (used version)
/user/username/projects/noemitonerror/src/other.ts (used version)

exitCode:: ExitStatus.undefined

Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Timeout callback:: count: 1
1: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
1: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0


exitCode:: ExitStatus.undefined

Change:: Fix syntax errors

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
};


Timeout callback:: count: 1
2: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
2: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/noEmitOnError/dev-build/shared/types/db.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/user/username/projects/noEmitOnError/dev-build/shared/types/db.d.ts]
export interface A {
    name: string;
}


//// [/user/username/projects/noEmitOnError/dev-build/src/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = {
    lastName: 'sdsd'
};


//// [/user/username/projects/noEmitOnError/dev-build/src/main.d.ts]
export {};


//// [/user/username/projects/noEmitOnError/dev-build/src/other.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hi");


//// [/user/username/projects/noEmitOnError/dev-build/src/other.d.ts]
export {};




Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outDir": "/user/username/projects/noEmitOnError/dev-build",
  "declaration": true,
  "noEmitOnError": true,
  "watch": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Completely
Program files::
/home/src/tslibs/TS/Lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Timeout callback:: count: 1
3: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
3: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0


exitCode:: ExitStatus.undefined

Change:: semantic errors

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a: string = 10;


Timeout callback:: count: 1
4: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
4: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[96msrc/main.ts[0m:[93m2[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'number' is not assignable to type 'string'.

[7m2[0m const a: string = 10;
[7m [0m [91m      ~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.





Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outDir": "/user/username/projects/noEmitOnError/dev-build",
  "declaration": true,
  "noEmitOnError": true,
  "watch": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Completely
Program files::
/home/src/tslibs/TS/Lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Timeout callback:: count: 1
5: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
5: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0


exitCode:: ExitStatus.undefined

Change:: Fix semantic errors

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a: string = "hello";


Timeout callback:: count: 1
6: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
6: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/noEmitOnError/dev-build/src/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = "hello";


//// [/user/username/projects/noEmitOnError/dev-build/src/main.d.ts] file written with same contents


Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outDir": "/user/username/projects/noEmitOnError/dev-build",
  "declaration": true,
  "noEmitOnError": true,
  "watch": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Completely
Program files::
/home/src/tslibs/TS/Lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Timeout callback:: count: 1
7: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
7: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0


exitCode:: ExitStatus.undefined

Change:: dts errors

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
export const a = class { private p = 10; };



Timeout callback:: count: 1
8: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
8: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[96msrc/main.ts[0m:[93m2[0m:[93m14[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported anonymous class type may not be private or protected.

[7m2[0m export const a = class { private p = 10; };
[7m [0m [91m             ~[0m

  [96msrc/main.ts[0m:[93m2[0m:[93m14[0m
    [7m2[0m export const a = class { private p = 10; };
    [7m [0m [96m             ~[0m
    Add a type annotation to the variable a.

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.





Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outDir": "/user/username/projects/noEmitOnError/dev-build",
  "declaration": true,
  "noEmitOnError": true,
  "watch": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Completely
Program files::
/home/src/tslibs/TS/Lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Timeout callback:: count: 1
9: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
9: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0


exitCode:: ExitStatus.undefined

Change:: Fix dts errors

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
export const a = class { p = 10; };



Timeout callback:: count: 1
10: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
10: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/noEmitOnError/dev-build/src/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = /** @class */ (function () {
    function class_1() {
        this.p = 10;
    }
    return class_1;
}());


//// [/user/username/projects/noEmitOnError/dev-build/src/main.d.ts]
export declare const a: {
    new (): {
        p: number;
    };
};




Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outDir": "/user/username/projects/noEmitOnError/dev-build",
  "declaration": true,
  "noEmitOnError": true,
  "watch": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Completely
Program files::
/home/src/tslibs/TS/Lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Timeout callback:: count: 1
11: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
11: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0


exitCode:: ExitStatus.undefined
