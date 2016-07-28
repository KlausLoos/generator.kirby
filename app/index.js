'use strict';

// Dependencies
var util = require('util'),
  path = require('path'),
  yeoman = require('yeoman-generator'),
  chalk = require('chalk'),
  exec = require('child_process').exec,
  child;

// Bcrypt
//var bcrypt = require('bcrypt');

// These variables need to be global
var root = 'site', kirbyPanel, root, kirbyBlog, kirbyContactForm;
var slugedName = '';
var id = '';

var mlkshkKirbyGenerator = yeoman.generators.Base.extend({
  init:function(){
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));
    this.on('end', function(){
      if(!this.options['skip-install']){
        // this.npmInstall();
      }
    });
  },

  checkForGit:function(){
    // Make sure this runs synchronously
    var done = this.async();

    // execute git command
    child = exec('git --version',
      function (error){
        if (error) {
          console.log('Git does not seem to be installed or is not properly set up in the PATH, please configure this then come back.');
          return;// you need git bitch
        }
        done();
      }.bind(this));
  },

  promptForFolder: function(){
    // Make sure this runs synchronously
    var done = this.async();

    // Yeoman greets the user
    console.log(this.yeoman);

    //Generator description - keep it simple
    console.log(chalk.yellow('Lets get this party started!'));

    var prompt = {
      name: 'root',
      message: 'Name of the project:',
      default: root
    };

    //Prompt the user for the folder to set up kirby
    this.prompt(prompt, function (props){
      id = props.root;
      root = props.root+".kirby";
      done();
    }.bind(this));
  },

  // //NPM Boilerplate
  // cloneNPM: function(){
  //   // Make sure this runs synchronously
  //   var done = this.async();

  //   console.log('Cloning NPM boilerplate');

  //   //clone repo
  //   child = exec('git clone https://loosveld@bitbucket.org/loosveld/npm-boilerplate.git '+id+'.kirby && cd '+id+'.kirby && rm -rf .git',
  //     function (error){
  //       if (error !== null) {
  //         console.log("CloneNPM Error:", error);
  //       }
  //       done();
  //     }.bind(this));
  // },

  //get latest repository of Kirby, in this case we are using 2.0
  cloneKirby: function(){
    // Make sure this runs synchronously
    var done = this.async();

    console.log('Cloning Kirby plainkit');

    //clone repo
    child = exec('git clone --recursive https://github.com/getkirby/plainkit ' + root,
      function (error){
        if (error !== null) {
          console.log("CloneKirby Error:", error);
        }
        done();
      }.bind(this));
  },

  subUniform: function(){
    var done = this.async();

    console.log('Initializing submodule Uniform');

    child = exec('cd '+id+'.kirby && git submodule add https://github.com/mzur/kirby-uniform.git site/plugins/uniform',
      function (error){
        if (error !== null) {
          console.log("CloneUniform Error:", error);
        }
        done();
      }.bind(this));
  },

  subKirby: function(){
    var done = this.async();

    console.log('Initializing submodule Kirby ');

    child = exec('cd '+id+'.kirby && rm -rf kirby && git rm --cached -r kirby && git submodule add --force https://github.com/getkirby/kirby.git',
      function (error){
        if (error !== null) {
          console.log("CloneUniform Error:", error);
        }
        done();
      }.bind(this));
  },

  subPanel: function(){
    var done = this.async();

    console.log('Initializing submodule Panel');

    child = exec('cd '+id+'.kirby && rm -rf panel && git rm --cached -r panel && git submodule add --force https://github.com/getkirby/panel.git',
      function (error){
        if (error !== null) {
          console.log("CloneUniform Error:", error);
        }
        done();
      }.bind(this));
  },

  updateSubmodules: function(){
    var done = this.async();

    console.log('Updating Submodules');

    child = exec('cd '+id+'.kirby && git submodule update --init --recursive',
      function (error){
        if (error !== null) {
          console.log("CloneUniform Error:", error);
        }
        done();
      }.bind(this));
  },

  removeExtraneousFiles: function(){
    // Make sure this runs synchronously
    var done = this.async();

    child = exec('rm ./' + root + '/site/config/config.php ./' + root + '/content/site.txt ./' + root + '/site/blueprints/default.yml ./' + root + '/site/templates/default.php ./' + root + '/site/snippets/header.php ./' + root + '/site/snippets/footer.php' ,
      function (error){
        if(error !==null ){
          console.log(error);
        }
        done();
      }.bind(this));
  },

  setupQuestions: function(){
     // Make sure this runs synchronously
     var done = this.async();

     var prompts = [{
      name: 'licenseKey',
      message: 'License Key:'
     }, {
      name: 'siteTitle',
      message:'Site Name:',
      default: id
     }, {
      name: 'siteAuthor',
      message:'Site Author:',
      default: 'Bram Loosveld'
     }, {
      name: 'siteDescription',
      message:'Site Description:',
      default: ''
     }, {
      name: 'siteKeywords',
      message:'Site Keywords:',
      default: ''
     }, {
      name: 'panelUsername',
      message:'User Name:',
      default: 'admin'
    }//, {
    //   name: 'panelPassword',
    //   message:'Password:',
    //   default: 'password'
    // }
    ];

    this.prompt(prompts, function (props) {
      this.slugedName = this._.slugify(props.siteTitle);
      this.licenseKey = props.licenseKey;
      this.siteTitle = props.siteTitle;
      this.siteAuthor = props.siteAuthor;
      this.siteDescription = props.siteDescription;
      this.siteKeywords = props.siteKeywords;
      this.panelUsername = props.panelUsername;
      this.panelPassword = '$2a$10$7F6SAl.odJWEPW6nGO3m9uZdd5qLrc7TXQ7AKOHN.hj5J3Fhsfbdy';

      done();
    }.bind(this));

  },

  app:function(){
    //copy all files with new information into thier proper location
    //this.directory(this.sourceRoot()+'/app', root + '/app');
    this.directory(this.sourceRoot(), root);
  },

  runNpm: function(){
    var done = this.async();
    console.log('Installing npm Dependencies')
    this.npmInstall("--prefix "+root, function(){
        console.log("\nEverything Setup !!!\n");
        done();
    });
  },

  firstCommit: function(){
    var done = this.async();

    console.log('First Commit');

    child = exec('cd '+id+'.kirby && git add . && git commit -m "first commit"',
      function (error){
        if (error !== null) {
          console.log("CloneUniform Error:", error);
        }
        done();
      }.bind(this));
  },

  addToTower: function(){
    // Make sure this runs synchronously
    var done = this.async();

    child = exec('gittower '+id+'.kirby && cd '+id+'.kirby',
      function (error){
        if(error !==null ){
          console.log(error);
        }
        done();
      }.bind(this));
  },

  finish: function () {
    // Give the user info on how to start developing
    var howToInstall =
    'Nice! Now run ' + chalk.magenta('cd ' + root + '/') + '.';
    console.log(howToInstall);
  }
});


module.exports = mlkshkKirbyGenerator;
