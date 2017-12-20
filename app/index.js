'use strict';

// Dependencies
var util = require('util');
var path = require('path');
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var exec = require('child_process').exec;
var child;

// These variables need to be global
var root = 'site';
var id = '';

var KirbyGenerator = class extends Generator {
  checkForGit() {
    // Make sure this runs synchronously
    var done = this.async();

    //this.checkForGit();

    // execute git command
    child = exec('git --version', error => {
      if (error) {
        this.log(
          'Git does not seem to be installed or is not properly set up in the PATH, please configure this then come back.'
        );
        return; // you need git bitch
      }
      done();
    });
  }

  promptForFolder() {
    // Make sure this runs synchronously
    var done = this.async();

    //Generator description - keep it simple
    this.log(chalk.yellow('Lets get this party started!'));

    //Prompt the user for the folder to set up kirby
    this.prompt([
      {
        name: 'root',
        message: 'Name of the project:',
        default: root
      }
    ]).then(answers => {
      id = answers.root;
      root = answers.root + '.kirby';
      done();
    });
  }

  //get latest repository of Kirby, in this case we are using 2.0
  cloneKirby() {
    // Make sure this runs synchronously
    var done = this.async();

    this.log('Cloning Kirby plainkit');

    //clone repo
    child = exec('git clone --recursive https://github.com/getkirby/plainkit ' + root, error => {
      if (error) {
        this.log('CloneKirby Error:', error);
      }
      done();
    });
  }

  subUniform() {
    var done = this.async();

    this.log('Initializing submodule Uniform');

    child = exec(
      'cd ' +
        id +
        '.kirby && git submodule add https://github.com/mzur/kirby-uniform.git site/plugins/uniform',
      error => {
        if (error) {
          this.log('CloneUniform Error:', error);
        }
        done();
      }
    );
  }

  subKirby() {
    var done = this.async();

    this.log('Initializing submodule Kirby ');

    child = exec(
      'cd ' +
        id +
        '.kirby && rm -rf kirby && git rm --cached -r kirby && git submodule add --force https://github.com/getkirby/kirby.git',
      error => {
        if (error) {
          this.log('CloneUniform Error:', error);
        }
        done();
      }
    );
  }

  subPanel() {
    var done = this.async();

    this.log('Initializing submodule Panel');

    child = exec(
      'cd ' +
        id +
        '.kirby && rm -rf panel && git rm --cached -r panel && git submodule add --force https://github.com/getkirby/panel.git',
      error => {
        if (error) {
          this.log('CloneUniform Error:', error);
        }
        done();
      }
    );
  }

  updateSubmodules() {
    var done = this.async();

    this.log('Updating Submodules');

    child = exec('cd ' + id + '.kirby && git submodule update --init --recursive', error => {
      if (error) {
        this.log('CloneUniform Error:', error);
      }
      done();
    });
  }

  removeExtraneousFiles() {
    // Make sure this runs synchronously
    var done = this.async();

    this.log('Remove Extraneous Files');

    child = exec(
      'rm ./' +
        root +
        '/content/site.txt ./' +
        root +
        '/site/blueprints/default.yml ./' +
        root +
        '/site/templates/default.php ./' +
        root +
        '/site/snippets/header.php ./' +
        root +
        '/site/snippets/footer.php ./' +
        root +
        '/*.md ./' +
        root +
        '/.gitignore',
      error => {
        if (error) {
          this.log(error);
        }
        done();
      }
    );
  }

  setupQuestions() {
    // Make sure this runs synchronously
    var done = this.async();

    this.prompt([
      {
        name: 'licenseKey',
        message: 'License Key:'
      },
      {
        name: 'siteTitle',
        message: 'Site Name:',
        default: id
      },
      {
        name: 'siteAuthor',
        message: 'Site Author:',
        default: 'Bram Loosveld'
      },
      {
        name: 'siteDescription',
        message: 'Site Description:',
        default: ''
      },
      {
        name: 'siteKeywords',
        message: 'Site Keywords:',
        default: ''
      },
      {
        name: 'panelUsername',
        message: 'User Name:',
        default: 'admin'
      }
    ]).then(answers => {
      this.licenseKey = answers.licenseKey;
      this.siteTitle = answers.siteTitle;
      this.siteAuthor = answers.siteAuthor;
      this.siteDescription = answers.siteDescription;
      this.siteKeywords = answers.siteKeywords;
      this.panelUsername = answers.panelUsername;

      done();
    });
  }

  copyfiles() {
    //copy all files with new information into thier proper location
    var done = this.async();

    //toooo fix templates kopieren en en al de rest
    this.log('Copying files', this.templatePath(), root);

    this.fs.copy(this.sourceRoot, root);
    this.fs.copyTpl(this.sourceRoot + '/package.json', root + '/package.json');
  }

  runNpm() {
    var done = this.async();
    this.log('Installing npm Dependencies');
    this.installDependencies({ npm: true }).then(() => {
      this.log('\nEverything Setup !!!\n');
      done();
    });
  }

  firstCommit() {
    var done = this.async();

    this.log('First Commit');

    child = exec('cd ' + id + '.kirby && git add . && git commit -m "first commit"', error => {
      if (error) {
        this.log('CloneUniform Error:', error);
      }
      done();
    });
  }

  // addToTower(){
  //   // Make sure this runs synchronously
  //   var done = this.async();

  //   child = exec('gittower '+id+'.kirby && cd '+id+'.kirby',
  //     (error) => {
  //       if(error !==null ){
  //         this.log(error);
  //       }
  //       done();
  //     }
  // };
};

module.exports = KirbyGenerator;
