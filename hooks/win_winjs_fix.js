const path = require('path');
const shell = require('shelljs');
const fs = require('fs');

module.exports = function (ctx)
{

    if (!ctx.opts.platforms.includes('windows'))
        return;


    return new Promise(function (resolve, reject)
    {
        const root = ctx.opts.projectRoot;
        const projectPath = path.join(root, 'platforms', 'windows');
        const destinationDirectory = path.join(projectPath, 'platform_www', 'WinJS', 'js');
        const destBaseJsPath = path.join(destinationDirectory, 'base.js');
        //var srcBaseJsPath = path.join(root, 'node_modules', 'winjs', 'js', 'base.js');
        const srcBaseJsPath = require.resolve('winjs/js/base');
        fs.mkdirSync(destinationDirectory, { recursive: true });
        shell.cp('-f', srcBaseJsPath, destBaseJsPath);
        resolve();
    });

};