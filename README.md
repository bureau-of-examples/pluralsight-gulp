

## My Notes
Use <code>npm list -g --depth=0</code> to list all top level npm packages.

Need to install gulp in the project locally:
<code>npm install --save-dev gulp</code>

Make sure you also install jshint locally.

You can use this comment to suppress a jshint check:
<pre>
/* jshint ignore:start */
var abc = 111
/* jshint ignore:end */
</pre>

If a task does not return stream, then it should either complete synchronously or use 'done' callback to indicate its completion.

If BrowserSync reloads the whole page when you change the less file, see this question for solution:

http://stackoverflow.com/questions/30325773/excluding-files-for-browsersync-not-working







# pluralsight-gulp
You've built your JavaScript application but how do you automate testing, code analysis, running it locally or deploying it? These redundant tasks can consume valuable time and resources. Stop working so hard and take advantage of JavaScript task automation using Gulp to streamline these tasks and give you back more time in the day. Studying this repo can help clarify how Gulp works, jump-start task automation with Gulp, find and resolve issues faster, and be a more productive.

## Requirements

- Install Node
	- on OSX install [home brew](http://brew.sh/) and type `brew install node`
	- on Windows install [chocolatey](https://chocolatey.org/) 
    - Read here for some [tips on Windows](http://jpapa.me/winnode)
    - open command prompt as administrator
        - type `choco install nodejs`
        - type `choco install nodejs.install`
- On OSX you can alleviate the need to run as sudo by [following these instructions](http://jpapa.me/nomoresudo). I highly recommend this step on OSX
- Open terminal
- Type `npm install -g node-inspector bower gulp`

## Quick Start
Prior to taking the course, clone this repo and run the content locally
```bash
$ npm install
$ bower install
$ npm start
```

