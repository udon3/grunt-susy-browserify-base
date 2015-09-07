# Susy grid with Grunt and Bower...and stuff

If node already installed, `npm install` should install and set most of it up.

If Bowewr already installed, .

## This project is set up with:

- Grunt
- Bower
- Sass (no compass)
-	Susy grid
- PostCSS (currently just for autoprefixer)
- Browserify (for modular javascript)
- etc (see `package.json`) - for server, watch, minification and copy tasks

## Requirements are:

- [node and npm](http://nodejs.org/) (global install)
	- [Grunt CLI](http://gruntjs.com/getting-started#installing-the-cli) (global install)
	- [Bower](http://bower.io/#install-bower) (global install)

- Ruby (not everyone uses a Mac!)
	- Sass ruby gem (because I haven't got round to trying Libsass)

### Check whether installed

If you're not sure if any of this is installed, check for version or try to get a list of gems installed on your computer:

`ruby -v`
`sass -v`
or get a list of all gems installed: 
`gem list`

You _could_ install susy in your project with `gem install susy`, but here I'm using [Bower](http://bower.io/) (Susy gets installed under `/bower_components/`).

## `npm install`
 
Will install everything in `package.json`.

And all components loaded thus are configured in the `Gruntfile.js`

## import Susy

import it like any other sass file:

`@import "../../bower_components/susy/sass/susy";`

The path to the folder is relative to the file doing the importing.


## adding susy task to Grunt - FAIL

The below method of including Susy seems to fail for me:

	//After susy is installed, add a task to the sass task in grunt.
	sass: {
		options: {
			require: 'susy'
		},
		dist: {
			src: 'src/sass',
			dest: 'dist/css'
		}
	}

...not sure if because of location of susy files (in bower_components)? 


