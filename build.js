const esbuild = require('esbuild');
const glob = require('glob');
const fsExtra = require("fs-extra");
const entryPoints = glob.globSync('./src/**/*.ts').filter(f => !f.endsWith("index.d.ts"));

const isDev = process.argv[2] === "dev";

const dir = "./scripts";

if (!fsExtra.existsSync(dir)) {
    fsExtra.mkdirSync(dir);
}
fsExtra.emptyDirSync(dir);

const build = Date.now();

esbuild.build({
    entryPoints: entryPoints,
    outdir: "scripts",
    minify: !isDev,
    platform: "neutral",
    sourcemap: true,
    target: "es2020",
    watch: isDev ? {
        onRebuild(err, result) {
            if(err) {
                console.log(
                    `\x1b[33m%s\x1b[0m`,
                    `[${new Date().toLocaleTimeString()}]`,
                    `Build(${isDev ? "development" : "production"}) Failed: ${err.message + err.stack}`
                );
            } else {
                console.log(
                    `\x1b[33m%s\x1b[0m`,
                    `[${new Date().toLocaleTimeString()}]`,
                    `Build(${isDev ? "development" : "production"}) Ended`
                );
            }
        }
    } : false,
    legalComments: isDev ? "none" : "none",
}).then((r) => {
    console.log(
        `\x1b[33m%s\x1b[0m`,
        `[${new Date().toLocaleTimeString()}]`,
        `Build(${isDev ? "development" : "production"}) Ended in ${Date.now() - build}ms.`
    );
});