
const runTimeDependencies = {
    "load": {
        "@youwol/flux-view": "^1.0.3",
        "rxjs": "^6.5.5"
    },
    "differed": {},
    "includedInBundle": []
}
const externals = {
    "@youwol/flux-view": {
        "commonjs": "@youwol/flux-view",
        "commonjs2": "@youwol/flux-view",
        "root": "@youwol/flux-view_APIv1"
    },
    "rxjs": {
        "commonjs": "rxjs",
        "commonjs2": "rxjs",
        "root": "rxjs_APIv6"
    },
    "rxjs/operators": {
        "commonjs": "rxjs/operators",
        "commonjs2": "rxjs/operators",
        "root": [
            "rxjs_APIv6",
            "operators"
        ]
    }
}
const exportedSymbols = {
    "@youwol/flux-view": {
        "apiKey": "1",
        "exportedSymbol": "@youwol/flux-view"
    },
    "rxjs": {
        "apiKey": "6",
        "exportedSymbol": "rxjs"
    }
}
export const setup = {
    name:'@youwol/grapes-basics',
        assetId:'QHlvdXdvbC9ncmFwZXMtYmFzaWNz',
    version:'0.1.1',
    shortDescription:"Basics components for grapes from YouWol team.",
    developerDocumentation:'https://platform.youwol.com/applications/@youwol/cdn-explorer/latest?package=@youwol/grapes-basics',
    npmPackage:'https://www.npmjs.com/package/@youwol/grapes-basics',
    sourceGithub:'https://github.com/youwol/grapes-basics',
    userGuide:'https://l.youwol.com/doc/@youwol/grapes-basics',
    apiVersion:'01',
    runTimeDependencies,
    externals,
    exportedSymbols,
    getDependencySymbolExported: (module:string) => {
        return `${exportedSymbols[module].exportedSymbol}_APIv${exportedSymbols[module].apiKey}`
    }
}
