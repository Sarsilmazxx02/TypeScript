Info seq  [hh:mm:ss:mss] currentDirectory:: /home/src/Vscode/Projects/bin useCaseSensitiveFileNames:: false
Info seq  [hh:mm:ss:mss] libs Location:: /home/src/tslibs/TS/Lib
Info seq  [hh:mm:ss:mss] globalTypingsCacheLocation:: /home/src/Library/Caches/typescript
Info seq  [hh:mm:ss:mss] Provided types map file "/home/src/tslibs/TS/Lib/typesMap.json" doesn't exist
//// [/home/src/tslibs/TS/Lib/lib.d.ts]
lib.d.ts-Text

//// [/home/src/tslibs/TS/Lib/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/tests/cases/fourslash/server/jsdocCallbackTag.js]
/**
 * @callback FooHandler - A kind of magic
 * @param {string} eventName - So many words
 * @param eventName2 {number | string} - Silence is golden
 * @param eventName3 - Osterreich mos def
 * @return {number} - DIVEKICK
 */
/**
 * @type {FooHandler} callback
 */
var t;

/**
 * @callback FooHandler2 - What, another one?
 * @param {string=} eventName - it keeps happening
 * @param {string} [eventName2] - i WARNED you dog
 */
/**
 * @type {FooHandler2} callback
 */
var t2;
t("!", 12, false);


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/tests/cases/fourslash/server/jsdocCallbackTag.js"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /tests/cases/fourslash/server/jsdocCallbackTag.js ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Creating InferredProject: /dev/null/inferredProject1*, currentDirectory: /tests/cases/fourslash/server
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/tslibs/TS/Lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/tslibs/TS/Lib/lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/home/src/tslibs/TS/Lib/lib.d.ts Text-1 lib.d.ts-Text
	/home/src/tslibs/TS/Lib/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/tests/cases/fourslash/server/jsdocCallbackTag.js SVC-1-0 "/**\n * @callback FooHandler - A kind of magic\n * @param {string} eventName - So many words\n * @param eventName2 {number | string} - Silence is golden\n * @param eventName3 - Osterreich mos def\n * @return {number} - DIVEKICK\n */\n/**\n * @type {FooHandler} callback\n */\nvar t;\n\n/**\n * @callback FooHandler2 - What, another one?\n * @param {string=} eventName - it keeps happening\n * @param {string} [eventName2] - i WARNED you dog\n */\n/**\n * @type {FooHandler2} callback\n */\nvar t2;\nt(\"!\", 12, false);"


	../../../../home/src/tslibs/TS/Lib/lib.d.ts
	  Default library for target 'es5'
	../../../../home/src/tslibs/TS/Lib/lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../../../home/src/tslibs/TS/Lib/lib.d.ts'
	../../../../home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../../../home/src/tslibs/TS/Lib/lib.d.ts'
	jsdocCallbackTag.js
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] getUnresolvedImports:: Files:: 4
Info seq  [hh:mm:ss:mss] extractUnresolvedImportsFromSourceFile:: /home/src/tslibs/ts/lib/lib.d.ts:: []
Info seq  [hh:mm:ss:mss] extractUnresolvedImportsFromSourceFile:: /home/src/tslibs/ts/lib/lib.decorators.d.ts:: []
Info seq  [hh:mm:ss:mss] extractUnresolvedImportsFromSourceFile:: /home/src/tslibs/ts/lib/lib.decorators.legacy.d.ts:: []
Info seq  [hh:mm:ss:mss] extractUnresolvedImportsFromSourceFile:: /tests/cases/fourslash/server/jsdoccallbacktag.js:: []
Info seq  [hh:mm:ss:mss] getUnresolvedImports:: Files:: 4 Done: []
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tests/cases/fourslash/server/jsdocCallbackTag.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 0,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After Request
watchedFiles::
/home/src/tslibs/TS/Lib/lib.d.ts: *new*
  {"pollingInterval":500}
/home/src/tslibs/TS/Lib/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}
/tests/cases/fourslash/server/jsconfig.json: *new*
  {"pollingInterval":2000}
/tests/cases/fourslash/server/tsconfig.json: *new*
  {"pollingInterval":2000}

watchedDirectoriesRecursive::
/tests/cases/fourslash/node_modules: *new*
  {}
/tests/cases/fourslash/node_modules/@types: *new*
  {}
/tests/cases/fourslash/server/node_modules: *new*
  {}
/tests/cases/fourslash/server/node_modules/@types: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: false

ScriptInfos::
/home/src/tslibs/TS/Lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/tests/cases/fourslash/server/jsdocCallbackTag.js (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "file": "/tests/cases/fourslash/server/jsdocCallbackTag.js",
        "line": 22,
        "offset": 3
      },
      "command": "signatureHelp"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "signatureHelp",
      "request_seq": 1,
      "success": true,
      "body": {
        "items": [
          {
            "isVariadic": false,
            "prefixDisplayParts": [
              {
                "text": "t",
                "kind": "localName"
              },
              {
                "text": "(",
                "kind": "punctuation"
              }
            ],
            "suffixDisplayParts": [
              {
                "text": ")",
                "kind": "punctuation"
              },
              {
                "text": ":",
                "kind": "punctuation"
              },
              {
                "text": " ",
                "kind": "space"
              },
              {
                "text": "number",
                "kind": "keyword"
              }
            ],
            "separatorDisplayParts": [
              {
                "text": ",",
                "kind": "punctuation"
              },
              {
                "text": " ",
                "kind": "space"
              }
            ],
            "parameters": [
              {
                "name": "eventName",
                "documentation": [
                  {
                    "text": "- So many words",
                    "kind": "text"
                  }
                ],
                "displayParts": [
                  {
                    "text": "eventName",
                    "kind": "parameterName"
                  },
                  {
                    "text": ":",
                    "kind": "punctuation"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "string",
                    "kind": "keyword"
                  }
                ],
                "isOptional": false,
                "isRest": false
              },
              {
                "name": "eventName2",
                "documentation": [
                  {
                    "text": "- Silence is golden",
                    "kind": "text"
                  }
                ],
                "displayParts": [
                  {
                    "text": "eventName2",
                    "kind": "parameterName"
                  },
                  {
                    "text": ":",
                    "kind": "punctuation"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "number",
                    "kind": "keyword"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "|",
                    "kind": "punctuation"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "string",
                    "kind": "keyword"
                  }
                ],
                "isOptional": false,
                "isRest": false
              },
              {
                "name": "eventName3",
                "documentation": [
                  {
                    "text": "- Osterreich mos def",
                    "kind": "text"
                  }
                ],
                "displayParts": [
                  {
                    "text": "eventName3",
                    "kind": "parameterName"
                  },
                  {
                    "text": ":",
                    "kind": "punctuation"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "any",
                    "kind": "keyword"
                  }
                ],
                "isOptional": false,
                "isRest": false
              }
            ],
            "documentation": [],
            "tags": [
              {
                "name": "type",
                "text": "{FooHandler} callback"
              }
            ]
          }
        ],
        "applicableSpan": {
          "start": {
            "line": 22,
            "offset": 3
          },
          "end": {
            "line": 22,
            "offset": 17
          }
        },
        "selectedItemIndex": 0,
        "argumentIndex": 0,
        "argumentCount": 3
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "file": "/tests/cases/fourslash/server/jsdocCallbackTag.js",
        "line": 22,
        "offset": 8
      },
      "command": "signatureHelp"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "signatureHelp",
      "request_seq": 2,
      "success": true,
      "body": {
        "items": [
          {
            "isVariadic": false,
            "prefixDisplayParts": [
              {
                "text": "t",
                "kind": "localName"
              },
              {
                "text": "(",
                "kind": "punctuation"
              }
            ],
            "suffixDisplayParts": [
              {
                "text": ")",
                "kind": "punctuation"
              },
              {
                "text": ":",
                "kind": "punctuation"
              },
              {
                "text": " ",
                "kind": "space"
              },
              {
                "text": "number",
                "kind": "keyword"
              }
            ],
            "separatorDisplayParts": [
              {
                "text": ",",
                "kind": "punctuation"
              },
              {
                "text": " ",
                "kind": "space"
              }
            ],
            "parameters": [
              {
                "name": "eventName",
                "documentation": [
                  {
                    "text": "- So many words",
                    "kind": "text"
                  }
                ],
                "displayParts": [
                  {
                    "text": "eventName",
                    "kind": "parameterName"
                  },
                  {
                    "text": ":",
                    "kind": "punctuation"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "string",
                    "kind": "keyword"
                  }
                ],
                "isOptional": false,
                "isRest": false
              },
              {
                "name": "eventName2",
                "documentation": [
                  {
                    "text": "- Silence is golden",
                    "kind": "text"
                  }
                ],
                "displayParts": [
                  {
                    "text": "eventName2",
                    "kind": "parameterName"
                  },
                  {
                    "text": ":",
                    "kind": "punctuation"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "number",
                    "kind": "keyword"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "|",
                    "kind": "punctuation"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "string",
                    "kind": "keyword"
                  }
                ],
                "isOptional": false,
                "isRest": false
              },
              {
                "name": "eventName3",
                "documentation": [
                  {
                    "text": "- Osterreich mos def",
                    "kind": "text"
                  }
                ],
                "displayParts": [
                  {
                    "text": "eventName3",
                    "kind": "parameterName"
                  },
                  {
                    "text": ":",
                    "kind": "punctuation"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "any",
                    "kind": "keyword"
                  }
                ],
                "isOptional": false,
                "isRest": false
              }
            ],
            "documentation": [],
            "tags": [
              {
                "name": "type",
                "text": "{FooHandler} callback"
              }
            ]
          }
        ],
        "applicableSpan": {
          "start": {
            "line": 22,
            "offset": 3
          },
          "end": {
            "line": 22,
            "offset": 17
          }
        },
        "selectedItemIndex": 0,
        "argumentIndex": 1,
        "argumentCount": 3
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 3,
      "type": "request",
      "arguments": {
        "file": "/tests/cases/fourslash/server/jsdocCallbackTag.js",
        "line": 22,
        "offset": 12
      },
      "command": "signatureHelp"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "signatureHelp",
      "request_seq": 3,
      "success": true,
      "body": {
        "items": [
          {
            "isVariadic": false,
            "prefixDisplayParts": [
              {
                "text": "t",
                "kind": "localName"
              },
              {
                "text": "(",
                "kind": "punctuation"
              }
            ],
            "suffixDisplayParts": [
              {
                "text": ")",
                "kind": "punctuation"
              },
              {
                "text": ":",
                "kind": "punctuation"
              },
              {
                "text": " ",
                "kind": "space"
              },
              {
                "text": "number",
                "kind": "keyword"
              }
            ],
            "separatorDisplayParts": [
              {
                "text": ",",
                "kind": "punctuation"
              },
              {
                "text": " ",
                "kind": "space"
              }
            ],
            "parameters": [
              {
                "name": "eventName",
                "documentation": [
                  {
                    "text": "- So many words",
                    "kind": "text"
                  }
                ],
                "displayParts": [
                  {
                    "text": "eventName",
                    "kind": "parameterName"
                  },
                  {
                    "text": ":",
                    "kind": "punctuation"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "string",
                    "kind": "keyword"
                  }
                ],
                "isOptional": false,
                "isRest": false
              },
              {
                "name": "eventName2",
                "documentation": [
                  {
                    "text": "- Silence is golden",
                    "kind": "text"
                  }
                ],
                "displayParts": [
                  {
                    "text": "eventName2",
                    "kind": "parameterName"
                  },
                  {
                    "text": ":",
                    "kind": "punctuation"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "number",
                    "kind": "keyword"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "|",
                    "kind": "punctuation"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "string",
                    "kind": "keyword"
                  }
                ],
                "isOptional": false,
                "isRest": false
              },
              {
                "name": "eventName3",
                "documentation": [
                  {
                    "text": "- Osterreich mos def",
                    "kind": "text"
                  }
                ],
                "displayParts": [
                  {
                    "text": "eventName3",
                    "kind": "parameterName"
                  },
                  {
                    "text": ":",
                    "kind": "punctuation"
                  },
                  {
                    "text": " ",
                    "kind": "space"
                  },
                  {
                    "text": "any",
                    "kind": "keyword"
                  }
                ],
                "isOptional": false,
                "isRest": false
              }
            ],
            "documentation": [],
            "tags": [
              {
                "name": "type",
                "text": "{FooHandler} callback"
              }
            ]
          }
        ],
        "applicableSpan": {
          "start": {
            "line": 22,
            "offset": 3
          },
          "end": {
            "line": 22,
            "offset": 17
          }
        },
        "selectedItemIndex": 0,
        "argumentIndex": 2,
        "argumentCount": 3
      }
    }