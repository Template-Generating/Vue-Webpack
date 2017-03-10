process.env.NODE_ENV = 'production';

var chalk = require('chalk');
var rimraf = require('rimraf').sync;
var webpack = require('webpack');
var config = require('../webpack.config.js');

rimraf('../dist/*');

webpack(config).run(function (err, stats) {
    if (err) {
        console.error('Failed to create a production build. Reason:');
        console.error(err.message || err);
        process.exit(1);
    }

    console.log(chalk.green('Compiled successfully.'));
    console.log();
});

