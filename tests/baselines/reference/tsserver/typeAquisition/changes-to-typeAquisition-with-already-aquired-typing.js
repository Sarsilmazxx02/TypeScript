Info seq  [hh:mm:ss:mss] currentDirectory:: /home/src/Vscode/Projects/bin useCaseSensitiveFileNames:: false
Info seq  [hh:mm:ss:mss] libs Location:: /home/src/tslibs/TS/Lib
Info seq  [hh:mm:ss:mss] globalTypingsCacheLocation:: /home/src/Library/Caches/typescript
Info seq  [hh:mm:ss:mss] Provided types map file "/home/src/tslibs/TS/Lib/typesMap.json" doesn't exist
Before request
//// [/users/user/projects/project1/app.js]
var x = require('bar');

//// [/users/user/projects/project1/node_modules/bar/index.js]
export const x = 1

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

//// [/users/user/projects/project1/jsconfig.json]
{
  "compilerOptions": {
    "allowJs": true,
    "traceResolution": true
  }
}

//// [/home/src/Library/Caches/typescript/node_modules/@types/bar/index.d.ts]
export const x = 1;


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/users/user/projects/project1/app.js"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /users/user/projects/project1/app.js ProjectRootPath: undefined:: Result: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] Creating ConfiguredProject: /users/user/projects/project1/jsconfig.json, currentDirectory: /users/user/projects/project1
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /users/user/projects/project1/jsconfig.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /users/user/projects/project1/jsconfig.json : {
 "rootNames": [
  "/users/user/projects/project1/app.js"
 ],
 "options": {
  "allowJs": true,
  "maxNodeModuleJsDepth": 2,
  "allowSyntheticDefaultImports": true,
  "skipLibCheck": true,
  "noEmit": true,
  "traceResolution": true,
  "configFilePath": "/users/user/projects/project1/jsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/users/user/projects/project1/jsconfig.json",
        "reason": "Creating possible configured project for /users/user/projects/project1/app.js to open"
      }
    }
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1 1 undefined Config: /users/user/projects/project1/jsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1 1 undefined Config: /users/user/projects/project1/jsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] ======== Resolving module 'bar' from '/users/user/projects/project1/app.js'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/users/user/projects/project1/node_modules/@types' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/users/user/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/users/user/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/users/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: JavaScript.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.js' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.jsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.js' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/users/user/projects/project1/node_modules/bar/index.js', result '/users/user/projects/project1/node_modules/bar/index.js'.
Info seq  [hh:mm:ss:mss] ======== Module name 'bar' was successfully resolved to '/users/user/projects/project1/node_modules/bar/index.js'. ========
Info seq  [hh:mm:ss:mss] Auto discovery for typings is enabled in project '/users/user/projects/project1/jsconfig.json'. Running extra resolution pass for module 'bar' using cache location '/home/src/Library/Caches/typescript'.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/bar.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/bar/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/bar.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/bar/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/package.json' does not exist.
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/tslibs/TS/Lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/Library/Caches/typescript/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/Library/Caches/typescript/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/Library/Caches/typescript/node_modules/@types/bar/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/Library/Caches/typescript/node_modules/@types/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/Library/Caches/typescript/node_modules/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/Library/Caches/typescript/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules/@types 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules/@types 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/node_modules/@types 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/node_modules/@types 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/home/src/tslibs/TS/Lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/home/src/Library/Caches/typescript/node_modules/@types/bar/index.d.ts Text-1 "export const x = 1;"
	/users/user/projects/project1/app.js SVC-1-0 "var x = require('bar');"


	../../../../home/src/tslibs/TS/Lib/lib.d.ts
	  Default library for target 'es5'
	../../../../home/src/Library/Caches/typescript/node_modules/@types/bar/index.d.ts
	  Imported via 'bar' from file 'app.js'
	app.js
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] getUnresolvedImports:: Files:: 3
Info seq  [hh:mm:ss:mss] extractUnresolvedImportsFromSourceFile:: /home/src/tslibs/ts/lib/lib.d.ts:: []
Info seq  [hh:mm:ss:mss] extractUnresolvedImportsFromSourceFile:: /home/src/library/caches/typescript/node_modules/@types/bar/index.d.ts:: []
Info seq  [hh:mm:ss:mss] extractUnresolvedImportsFromSourceFile:: /users/user/projects/project1/app.js:: []
Info seq  [hh:mm:ss:mss] getUnresolvedImports:: Files:: 3 Done: []
TI:: Creating typing installer

PolledWatches::
/home/src/Library/Caches/typescript/node_modules/@types/bar/package.json: *new*
  {"pollingInterval":2000}
/home/src/Library/Caches/typescript/node_modules/@types/package.json: *new*
  {"pollingInterval":2000}
/home/src/Library/Caches/typescript/node_modules/package.json: *new*
  {"pollingInterval":2000}
/home/src/Library/Caches/typescript/package.json: *new*
  {"pollingInterval":2000}
/users/user/projects/node_modules: *new*
  {"pollingInterval":500}
/users/user/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/users/user/projects/project1/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/home/src/tslibs/TS/Lib/lib.d.ts: *new*
  {}
/users/user/projects/project1/jsconfig.json: *new*
  {}

FsWatchesRecursive::
/home/src/Library/Caches/typescript/node_modules: *new*
  {}
/users/user/projects/project1: *new*
  {}
/users/user/projects/project1/node_modules: *new*
  {}

Projects::
/users/user/projects/project1/jsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 0

ScriptInfos::
/home/src/Library/Caches/typescript/node_modules/@types/bar/index.d.ts *new*
    version: Text-1
    containingProjects: 1
        /users/user/projects/project1/jsconfig.json
/home/src/tslibs/TS/Lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /users/user/projects/project1/jsconfig.json
/users/user/projects/project1/app.js (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /users/user/projects/project1/jsconfig.json *default*

TI:: [hh:mm:ss:mss] Global cache location '/home/src/Library/Caches/typescript', safe file path '/home/src/tslibs/TS/Lib/typingSafeList.json', types map path /home/src/tslibs/TS/Lib/typesMap.json
TI:: [hh:mm:ss:mss] Processing cache location '/home/src/Library/Caches/typescript'
TI:: [hh:mm:ss:mss] Trying to find '/home/src/Library/Caches/typescript/package.json'...
TI:: [hh:mm:ss:mss] Finished processing cache location '/home/src/Library/Caches/typescript'
TI:: [hh:mm:ss:mss] Npm config file: /home/src/Library/Caches/typescript/package.json
TI:: [hh:mm:ss:mss] Npm config file: '/home/src/Library/Caches/typescript/package.json' is missing, creating new one...
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/Library/Caches/typescript/package.json 0:: WatchInfo: /home/src/Library/Caches/typescript/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /users/user/projects/project1/jsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/Library/Caches/typescript/package.json 0:: WatchInfo: /home/src/Library/Caches/typescript/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/Library/Caches/typescript/package.json 0:: WatchInfo: /home/src/Library/Caches/typescript/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /users/user/projects/project1/jsconfig.jsonFailedLookupInvalidation, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/Library/Caches/typescript/package.json 0:: WatchInfo: /home/src/Library/Caches/typescript/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
TI:: [hh:mm:ss:mss] Updating types-registry npm package...
TI:: [hh:mm:ss:mss] npm install --ignore-scripts types-registry@latest
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/Library/Caches/typescript/node_modules/types-registry :: WatchInfo: /home/src/Library/Caches/typescript/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /users/user/projects/project1/jsconfig.jsonFailedLookupInvalidation, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/Library/Caches/typescript/node_modules/types-registry :: WatchInfo: /home/src/Library/Caches/typescript/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/Library/Caches/typescript/node_modules/types-registry/index.json :: WatchInfo: /home/src/Library/Caches/typescript/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /users/user/projects/project1/jsconfig.jsonFailedLookupInvalidation, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/Library/Caches/typescript/node_modules/types-registry/index.json :: WatchInfo: /home/src/Library/Caches/typescript/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
TI:: [hh:mm:ss:mss] Updated types-registry npm package
TI:: typing installer creation complete
//// [/home/src/Library/Caches/typescript/package.json]
{ "private": true }

//// [/home/src/Library/Caches/typescript/node_modules/types-registry/index.json]
{
  "entries": {
    "bar": {
      "latest": "1.3.0",
      "ts2.0": "1.0.0",
      "ts2.1": "1.0.0",
      "ts2.2": "1.2.0",
      "ts2.3": "1.3.0",
      "ts2.4": "1.3.0",
      "ts2.5": "1.3.0",
      "ts2.6": "1.3.0",
      "ts2.7": "1.3.0"
    }
  }
}


PolledWatches::
/home/src/Library/Caches/typescript/node_modules/@types/bar/package.json:
  {"pollingInterval":2000}
/home/src/Library/Caches/typescript/node_modules/@types/package.json:
  {"pollingInterval":2000}
/home/src/Library/Caches/typescript/node_modules/package.json:
  {"pollingInterval":2000}
/users/user/projects/node_modules:
  {"pollingInterval":500}
/users/user/projects/node_modules/@types:
  {"pollingInterval":500}
/users/user/projects/project1/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/home/src/Library/Caches/typescript/package.json:
  {"pollingInterval":2000}

FsWatches::
/home/src/Library/Caches/typescript/package.json: *new*
  {}
/home/src/tslibs/TS/Lib/lib.d.ts:
  {}
/users/user/projects/project1/jsconfig.json:
  {}

FsWatchesRecursive::
/home/src/Library/Caches/typescript/node_modules:
  {}
/users/user/projects/project1:
  {}
/users/user/projects/project1/node_modules:
  {}

Timeout callback:: count: 1
4: /users/user/projects/project1/jsconfig.jsonFailedLookupInvalidation *new*

TI:: [hh:mm:ss:mss] Got install request
    {
      "projectName": "/users/user/projects/project1/jsconfig.json",
      "fileNames": [
        "/home/src/tslibs/TS/Lib/lib.d.ts",
        "/users/user/projects/project1/app.js"
      ],
      "compilerOptions": {
        "allowJs": true,
        "maxNodeModuleJsDepth": 2,
        "allowSyntheticDefaultImports": true,
        "skipLibCheck": true,
        "noEmit": true,
        "traceResolution": true,
        "configFilePath": "/users/user/projects/project1/jsconfig.json",
        "allowNonTsExtensions": true
      },
      "typeAcquisition": {
        "enable": true,
        "include": [],
        "exclude": []
      },
      "unresolvedImports": [],
      "projectRootPath": "/users/user/projects/project1",
      "kind": "discover"
    }
TI:: [hh:mm:ss:mss] Failed to load safelist from types map file '/home/src/tslibs/TS/Lib/typesMap.json'
TI:: [hh:mm:ss:mss] Explicitly included types: []
TI:: [hh:mm:ss:mss] Searching for typing names in /users/user/projects/project1/node_modules; all files: []
TI:: [hh:mm:ss:mss]     Found package names: []
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: []
TI:: [hh:mm:ss:mss] Finished typings discovery:
    {
      "cachedTypingPaths": [],
      "newTypingNames": [],
      "filesToWatch": [
        "/users/user/projects/project1/bower_components",
        "/users/user/projects/project1/node_modules"
      ]
    }
TI:: [hh:mm:ss:mss] Sending response:
    {
      "kind": "action::watchTypingLocations",
      "projectName": "/users/user/projects/project1/jsconfig.json",
      "files": [
        "/users/user/projects/project1/bower_components",
        "/users/user/projects/project1/node_modules"
      ]
    }
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/bower_components 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/bower_components 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
TI:: [hh:mm:ss:mss] Sending response:
    {
      "projectName": "/users/user/projects/project1/jsconfig.json",
      "typeAcquisition": {
        "enable": true,
        "include": [],
        "exclude": []
      },
      "compilerOptions": {
        "allowJs": true,
        "maxNodeModuleJsDepth": 2,
        "allowSyntheticDefaultImports": true,
        "skipLibCheck": true,
        "noEmit": true,
        "traceResolution": true,
        "configFilePath": "/users/user/projects/project1/jsconfig.json",
        "allowNonTsExtensions": true
      },
      "typings": [],
      "unresolvedImports": [],
      "kind": "action::set"
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "setTypings",
      "body": {
        "projectName": "/users/user/projects/project1/jsconfig.json",
        "typeAcquisition": {
          "enable": true,
          "include": [],
          "exclude": []
        },
        "compilerOptions": {
          "allowJs": true,
          "maxNodeModuleJsDepth": 2,
          "allowSyntheticDefaultImports": true,
          "skipLibCheck": true,
          "noEmit": true,
          "traceResolution": true,
          "configFilePath": "/users/user/projects/project1/jsconfig.json",
          "allowNonTsExtensions": true
        },
        "typings": [],
        "unresolvedImports": [],
        "kind": "action::set"
      }
    }
TI:: [hh:mm:ss:mss] No new typings were requested as a result of typings discovery
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/users/user/projects/project1/jsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "a24ce251bb636300af6d4777b3f4b21687a6424baa3ae50af422af2a5b2dd7f0",
          "fileStats": {
            "js": 1,
            "jsSize": 23,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 0,
            "tsSize": 0,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 2,
            "dtsSize": 432,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "allowJs": true,
            "maxNodeModuleJsDepth": 2,
            "allowSyntheticDefaultImports": true,
            "skipLibCheck": true,
            "noEmit": true,
            "traceResolution": true
          },
          "typeAcquisition": {
            "enable": true,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "jsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/Library/Caches/typescript/package.json'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar' from '/users/user/projects/project1/app.js' of old program, it was successfully resolved to '/home/src/Library/Caches/typescript/node_modules/@types/bar/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/home/src/tslibs/TS/Lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/home/src/Library/Caches/typescript/node_modules/@types/bar/index.d.ts Text-1 "export const x = 1;"
	/users/user/projects/project1/app.js SVC-1-0 "var x = require('bar');"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] getUnresolvedImports:: Files:: 3
Info seq  [hh:mm:ss:mss] getUnresolvedImports:: Files:: 3 Done: []
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/users/user/projects/project1/app.js",
        "configFile": "/users/user/projects/project1/jsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/user/projects/project1/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 1,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After request

PolledWatches::
/home/src/Library/Caches/typescript/node_modules/@types/bar/package.json:
  {"pollingInterval":2000}
/home/src/Library/Caches/typescript/node_modules/@types/package.json:
  {"pollingInterval":2000}
/home/src/Library/Caches/typescript/node_modules/package.json:
  {"pollingInterval":2000}
/users/user/projects/node_modules:
  {"pollingInterval":500}
/users/user/projects/node_modules/@types:
  {"pollingInterval":500}
/users/user/projects/project1/bower_components: *new*
  {"pollingInterval":500}
/users/user/projects/project1/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/home/src/Library/Caches/typescript/package.json:
  {}
/home/src/tslibs/TS/Lib/lib.d.ts:
  {}
/users/user/projects/project1/jsconfig.json:
  {}

FsWatchesRecursive::
/home/src/Library/Caches/typescript/node_modules:
  {}
/users/user/projects/project1:
  {}
/users/user/projects/project1/node_modules:
  {}

Timeout callback:: count: 1
4: /users/user/projects/project1/jsconfig.jsonFailedLookupInvalidation *deleted*
5: *ensureProjectForOpenFiles* *new*

Projects::
/users/user/projects/project1/jsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 2 *changed*
    autoImportProviderHost: false *changed*

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /users/user/projects/project1/jsconfig.json 1:: WatchInfo: /users/user/projects/project1/jsconfig.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /users/user/projects/project1/app.js ProjectRootPath: undefined:: Result: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /users/user/projects/project1/jsconfig.json 1:: WatchInfo: /users/user/projects/project1/jsconfig.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
6: /users/user/projects/project1/jsconfig.json
7: *ensureProjectForOpenFiles*
//// [/users/user/projects/project1/jsconfig.json]
{
  "compilerOptions": {
    "allowJs": true,
    "traceResolution": true
  },
  "typeAcquisition": {
    "enable": false
  }
}


Timeout callback:: count: 2
5: *ensureProjectForOpenFiles* *deleted*
6: /users/user/projects/project1/jsconfig.json *new*
7: *ensureProjectForOpenFiles* *new*

Projects::
/users/user/projects/project1/jsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 2
    dirty: true *changed*
    autoImportProviderHost: undefined *changed*

Info seq  [hh:mm:ss:mss] Running: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/users/user/projects/project1/jsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /users/user/projects/project1/jsconfig.json : {
 "rootNames": [
  "/users/user/projects/project1/app.js"
 ],
 "options": {
  "allowJs": true,
  "maxNodeModuleJsDepth": 2,
  "allowSyntheticDefaultImports": true,
  "skipLibCheck": true,
  "noEmit": true,
  "traceResolution": true,
  "configFilePath": "/users/user/projects/project1/jsconfig.json"
 }
}
TI:: [hh:mm:ss:mss] Closing file watchers for project '/users/user/projects/project1/jsconfig.json'
TI:: [hh:mm:ss:mss] Sending response:
    {
      "kind": "action::watchTypingLocations",
      "projectName": "/users/user/projects/project1/jsconfig.json",
      "files": []
    }
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /users/user/projects/project1/bower_components 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/user/projects/project1/bower_components 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
TI:: [hh:mm:ss:mss] Closing file watchers for project '/users/user/projects/project1/jsconfig.json' - done.
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'bar' from '/users/user/projects/project1/app.js'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/users/user/projects/project1/node_modules/@types' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/users/user/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/users/user/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/users/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: JavaScript.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.js' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.jsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.js' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/users/user/projects/project1/node_modules/bar/index.js', result '/users/user/projects/project1/node_modules/bar/index.js'.
Info seq  [hh:mm:ss:mss] ======== Module name 'bar' was successfully resolved to '/users/user/projects/project1/node_modules/bar/index.js'. ========
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist.
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules/bar/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /users/user/projects/project1/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /users/user/projects/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/Library/Caches/typescript/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/Library/Caches/typescript/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/Library/Caches/typescript/node_modules/@types/bar/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/Library/Caches/typescript/node_modules/@types/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/Library/Caches/typescript/node_modules/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/Library/Caches/typescript/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json projectStateVersion: 3 projectProgramVersion: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/home/src/tslibs/TS/Lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/users/user/projects/project1/node_modules/bar/index.js Text-1 "export const x = 1"
	/users/user/projects/project1/app.js SVC-1-0 "var x = require('bar');"


	../../../../home/src/tslibs/TS/Lib/lib.d.ts
	  Default library for target 'es5'
	node_modules/bar/index.js
	  Imported via 'bar' from file 'app.js'
	app.js
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/users/user/projects/project1/jsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/users/user/projects/project1/jsconfig.json",
        "configFile": "/users/user/projects/project1/jsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/user/projects/project1/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/user/projects/project1/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /users/user/projects/project1/app.js
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/users/user/projects/project1/app.js"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/users/user/projects/node_modules:
  {"pollingInterval":500}
/users/user/projects/node_modules/@types:
  {"pollingInterval":500}
/users/user/projects/package.json: *new*
  {"pollingInterval":2000}
/users/user/projects/project1/node_modules/@types:
  {"pollingInterval":500}
/users/user/projects/project1/node_modules/bar/package.json: *new*
  {"pollingInterval":2000}
/users/user/projects/project1/node_modules/package.json: *new*
  {"pollingInterval":2000}
/users/user/projects/project1/package.json: *new*
  {"pollingInterval":2000}

PolledWatches *deleted*::
/home/src/Library/Caches/typescript/node_modules/@types/bar/package.json:
  {"pollingInterval":2000}
/home/src/Library/Caches/typescript/node_modules/@types/package.json:
  {"pollingInterval":2000}
/home/src/Library/Caches/typescript/node_modules/package.json:
  {"pollingInterval":2000}
/users/user/projects/project1/bower_components:
  {"pollingInterval":500}

FsWatches::
/home/src/tslibs/TS/Lib/lib.d.ts:
  {}
/users/user/projects/project1/jsconfig.json:
  {}

FsWatches *deleted*::
/home/src/Library/Caches/typescript/package.json:
  {}

FsWatchesRecursive::
/users/user/projects/project1:
  {}
/users/user/projects/project1/node_modules:
  {}

FsWatchesRecursive *deleted*::
/home/src/Library/Caches/typescript/node_modules:
  {}

Projects::
/users/user/projects/project1/jsconfig.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 3 *changed*
    dirty: false *changed*

ScriptInfos::
/home/src/Library/Caches/typescript/node_modules/@types/bar/index.d.ts *changed*
    version: Text-1
    containingProjects: 0 *changed*
        /users/user/projects/project1/jsconfig.json *deleted*
/home/src/tslibs/TS/Lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /users/user/projects/project1/jsconfig.json
/users/user/projects/project1/app.js (Open)
    version: SVC-1-0
    containingProjects: 1
        /users/user/projects/project1/jsconfig.json *default*
/users/user/projects/project1/node_modules/bar/index.js *new*
    version: Text-1
    containingProjects: 1
        /users/user/projects/project1/jsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /users/user/projects/project1/jsconfig.json 1:: WatchInfo: /users/user/projects/project1/jsconfig.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /users/user/projects/project1/app.js ProjectRootPath: undefined:: Result: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /users/user/projects/project1/jsconfig.json 1:: WatchInfo: /users/user/projects/project1/jsconfig.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
8: /users/user/projects/project1/jsconfig.json
9: *ensureProjectForOpenFiles*
//// [/users/user/projects/project1/jsconfig.json]
{
  "compilerOptions": {
    "allowJs": true,
    "traceResolution": true
  }
}


Timeout callback:: count: 2
8: /users/user/projects/project1/jsconfig.json *new*
9: *ensureProjectForOpenFiles* *new*

Projects::
/users/user/projects/project1/jsconfig.json (Configured) *changed*
    projectStateVersion: 4 *changed*
    projectProgramVersion: 3
    dirty: true *changed*

Info seq  [hh:mm:ss:mss] Running: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/users/user/projects/project1/jsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /users/user/projects/project1/jsconfig.json : {
 "rootNames": [
  "/users/user/projects/project1/app.js"
 ],
 "options": {
  "allowJs": true,
  "maxNodeModuleJsDepth": 2,
  "allowSyntheticDefaultImports": true,
  "skipLibCheck": true,
  "noEmit": true,
  "traceResolution": true,
  "configFilePath": "/users/user/projects/project1/jsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/users/user/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/users/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'bar' from '/users/user/projects/project1/app.js'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/users/user/projects/project1/node_modules/@types' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/users/user/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/users/user/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/users/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: JavaScript.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.js' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.jsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.js' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/users/user/projects/project1/node_modules/bar/index.js', result '/users/user/projects/project1/node_modules/bar/index.js'.
Info seq  [hh:mm:ss:mss] ======== Module name 'bar' was successfully resolved to '/users/user/projects/project1/node_modules/bar/index.js'. ========
Info seq  [hh:mm:ss:mss] Auto discovery for typings is enabled in project '/users/user/projects/project1/jsconfig.json'. Running extra resolution pass for module 'bar' using cache location '/home/src/Library/Caches/typescript'.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/bar.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/bar.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/bar/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/@types/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/node_modules/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/Library/Caches/typescript/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/Library/Caches/typescript/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/Library/Caches/typescript/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/Library/Caches/typescript/node_modules/@types/bar/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/Library/Caches/typescript/node_modules/@types/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/Library/Caches/typescript/node_modules/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/Library/Caches/typescript/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /users/user/projects/project1/node_modules/bar/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /users/user/projects/project1/node_modules/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /users/user/projects/project1/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /users/user/projects/package.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json projectStateVersion: 4 projectProgramVersion: 3 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/home/src/tslibs/TS/Lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/home/src/Library/Caches/typescript/node_modules/@types/bar/index.d.ts Text-1 "export const x = 1;"
	/users/user/projects/project1/app.js SVC-1-0 "var x = require('bar');"


	../../../../home/src/tslibs/TS/Lib/lib.d.ts
	  Default library for target 'es5'
	../../../../home/src/Library/Caches/typescript/node_modules/@types/bar/index.d.ts
	  Imported via 'bar' from file 'app.js'
	app.js
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] getUnresolvedImports:: Files:: 3
Info seq  [hh:mm:ss:mss] extractUnresolvedImportsFromSourceFile:: /home/src/tslibs/ts/lib/lib.d.ts:: []
Info seq  [hh:mm:ss:mss] extractUnresolvedImportsFromSourceFile:: /home/src/library/caches/typescript/node_modules/@types/bar/index.d.ts:: []
Info seq  [hh:mm:ss:mss] extractUnresolvedImportsFromSourceFile:: /users/user/projects/project1/app.js:: []
Info seq  [hh:mm:ss:mss] getUnresolvedImports:: Files:: 3 Done: []
TI:: [hh:mm:ss:mss] Got install request
    {
      "projectName": "/users/user/projects/project1/jsconfig.json",
      "fileNames": [
        "/home/src/tslibs/TS/Lib/lib.d.ts",
        "/users/user/projects/project1/app.js"
      ],
      "compilerOptions": {
        "allowJs": true,
        "maxNodeModuleJsDepth": 2,
        "allowSyntheticDefaultImports": true,
        "skipLibCheck": true,
        "noEmit": true,
        "traceResolution": true,
        "configFilePath": "/users/user/projects/project1/jsconfig.json",
        "allowNonTsExtensions": true
      },
      "typeAcquisition": {
        "enable": true,
        "include": [],
        "exclude": []
      },
      "unresolvedImports": [],
      "projectRootPath": "/users/user/projects/project1",
      "kind": "discover"
    }
TI:: [hh:mm:ss:mss] Explicitly included types: []
TI:: [hh:mm:ss:mss] Searching for typing names in /users/user/projects/project1/node_modules; all files: []
TI:: [hh:mm:ss:mss]     Found package names: []
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: []
TI:: [hh:mm:ss:mss] Finished typings discovery:
    {
      "cachedTypingPaths": [],
      "newTypingNames": [],
      "filesToWatch": [
        "/users/user/projects/project1/bower_components",
        "/users/user/projects/project1/node_modules"
      ]
    }
TI:: [hh:mm:ss:mss] Sending response:
    {
      "kind": "action::watchTypingLocations",
      "projectName": "/users/user/projects/project1/jsconfig.json",
      "files": [
        "/users/user/projects/project1/bower_components",
        "/users/user/projects/project1/node_modules"
      ]
    }
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/bower_components 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/bower_components 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
TI:: [hh:mm:ss:mss] Sending response:
    {
      "projectName": "/users/user/projects/project1/jsconfig.json",
      "typeAcquisition": {
        "enable": true,
        "include": [],
        "exclude": []
      },
      "compilerOptions": {
        "allowJs": true,
        "maxNodeModuleJsDepth": 2,
        "allowSyntheticDefaultImports": true,
        "skipLibCheck": true,
        "noEmit": true,
        "traceResolution": true,
        "configFilePath": "/users/user/projects/project1/jsconfig.json",
        "allowNonTsExtensions": true
      },
      "typings": [],
      "unresolvedImports": [],
      "kind": "action::set"
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "setTypings",
      "body": {
        "projectName": "/users/user/projects/project1/jsconfig.json",
        "typeAcquisition": {
          "enable": true,
          "include": [],
          "exclude": []
        },
        "compilerOptions": {
          "allowJs": true,
          "maxNodeModuleJsDepth": 2,
          "allowSyntheticDefaultImports": true,
          "skipLibCheck": true,
          "noEmit": true,
          "traceResolution": true,
          "configFilePath": "/users/user/projects/project1/jsconfig.json",
          "allowNonTsExtensions": true
        },
        "typings": [],
        "unresolvedImports": [],
        "kind": "action::set"
      }
    }
TI:: [hh:mm:ss:mss] No new typings were requested as a result of typings discovery
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/users/user/projects/project1/jsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/users/user/projects/project1/jsconfig.json",
        "configFile": "/users/user/projects/project1/jsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/user/projects/project1/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/user/projects/project1/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /users/user/projects/project1/app.js
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/users/user/projects/project1/app.js"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/home/src/Library/Caches/typescript/node_modules/@types/bar/package.json: *new*
  {"pollingInterval":2000}
/home/src/Library/Caches/typescript/node_modules/@types/package.json: *new*
  {"pollingInterval":2000}
/home/src/Library/Caches/typescript/node_modules/package.json: *new*
  {"pollingInterval":2000}
/users/user/projects/node_modules:
  {"pollingInterval":500}
/users/user/projects/node_modules/@types:
  {"pollingInterval":500}
/users/user/projects/project1/bower_components: *new*
  {"pollingInterval":500}
/users/user/projects/project1/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/users/user/projects/package.json:
  {"pollingInterval":2000}
/users/user/projects/project1/node_modules/bar/package.json:
  {"pollingInterval":2000}
/users/user/projects/project1/node_modules/package.json:
  {"pollingInterval":2000}
/users/user/projects/project1/package.json:
  {"pollingInterval":2000}

FsWatches::
/home/src/Library/Caches/typescript/package.json: *new*
  {}
/home/src/tslibs/TS/Lib/lib.d.ts:
  {}
/users/user/projects/project1/jsconfig.json:
  {}

FsWatchesRecursive::
/home/src/Library/Caches/typescript/node_modules: *new*
  {}
/users/user/projects/project1:
  {}
/users/user/projects/project1/node_modules:
  {}

Projects::
/users/user/projects/project1/jsconfig.json (Configured) *changed*
    projectStateVersion: 4
    projectProgramVersion: 4 *changed*
    dirty: false *changed*

ScriptInfos::
/home/src/Library/Caches/typescript/node_modules/@types/bar/index.d.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /users/user/projects/project1/jsconfig.json *new*
/home/src/tslibs/TS/Lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /users/user/projects/project1/jsconfig.json
/users/user/projects/project1/app.js (Open)
    version: SVC-1-0
    containingProjects: 1
        /users/user/projects/project1/jsconfig.json *default*
/users/user/projects/project1/node_modules/bar/index.js *changed*
    version: Text-1
    containingProjects: 0 *changed*
        /users/user/projects/project1/jsconfig.json *deleted*

Before running Timeout callback:: count: 0

After running Timeout callback:: count: 0

Before running Timeout callback:: count: 0

After running Timeout callback:: count: 0
