
const runTimeDependencies = {
    "load": {
        "@youwol/flux-view": "^1.0.0",
        "rxjs": "^6.5.5"
    },
    "differed": {},
    "includedInBundle": []
}
const externals = {
    "@youwol/flux-view": "@youwol/flux-view_APIv1",
    "rxjs": "rxjs_APIv6",
    "rxjs/operators": {
        "commonjs": "rxjs/operators",
        "commonjs2": "rxjs/operators",
        "root": [
            "rxjs_APIv6",
            "operators"
        ]
    }
}
export const setup = {
    name:'@youwol/grapes-basics',
    assetId:'QHlvdXdvbC9ncmFwZXMtYmFzaWNz',
    version:'0.1.0',
    shortDescription:"Basics components for grapes from YouWol team.",
    developerDocumentation:'https://platform.youwol.com/applications/@youwol/cdn-explorer/latest?package=@youwol/grapes-basics',
    npmPackage:'https://www.npmjs.com/package/@youwol/grapes-basics',
    sourceGithub:'https://github.com/youwol/grapes-basics',
    userGuide:'https://l.youwol.com/doc/@youwol/grapes-basics',
    apiVersion:'01',
    runTimeDependencies,
    externals
}
