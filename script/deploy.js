var chalk = require('chalk');
var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '../dist'), {
    message: 'Auto Update Github-Pages',
    logger: function (message) {
        console.log(chalk.blue(message));
    }
}, function (err) {
    if (err) {
        console.error('Failed to create a production build. Reason:');
        console.error(err.message || err);
        process.exit(1);
    }

    console.log(chalk.green('Update Successfully.'));
    console.log();
});