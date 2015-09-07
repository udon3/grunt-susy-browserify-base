module.exports = function(grunt){
	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //compile CSS
    sass: {
      options: {
      	//For susy, need to install susy, then add it in as a sass task:
	      // style: 'expanded',
	      //require: 'susy'
	    },
      dist: {
        src: 'src/scss/import-all.scss',
        dest: 'src/scss/_pre-postcss.css', //postCSS wont see a scss file - needs to be css
      },
    },
    //postCSS runs on the concatenated, compiled CSS file in /src/css/, 
    //and generates new (and final) css file in /dist/css/
    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
        	require('autoprefixer')({
            browsers: ['last 2 versions']  // add vendor prefixes
          })
          //require('pixrem')(), // add fallbacks for rem units (not yet installed)
          //require('cssnano')() // minify the result (not yet installed - actually, using cssmin)
        ]
      },
      dist: {
        src: 'src/scss/_pre-postcss.css', 
        dest: 'src/css/all.css'
      }
    },

    //javascript tasks
    browserify: {
      'src/js/app.js': ['src/js/main.js']
    },


    //server tasks:
    connect: {
			server: {
				options: {
					port: 8000,
					base: 'src/',
					livereload: true
				}
			}
		},

		watch: {
      options: {
        livereload: true
      },
			scss: {
				files: 'src/scss/**/*.scss',
				tasks: ['sass', 'postcss'],
				options: {}
			},
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: ['browserify'],
				options: {
					interrupt: true,
				},
			},
			html: {
				files: ['src/**/*.html']
			}
		},

		//build tasks:


		//minify js and css into the dist folder:
		uglify: {
			options: {
				report: 'gzip',
				sourceMap: true //don't need this, since only one file
			},
			target: {
			    files: {
	        'dist/js/app.js': ['src/js/app.js']
	      }
			}
		},
		cssmin: {
		  target: {
		    files: {
		      'dist/css/all.css': ['src/css/all.css']
		    }
		  }
		},
		//copy images and html to the dist folder
		copy: {
			//would like to minify js and css before/after copying...?
			options: {
				timestamp: true
			},
			html: {
				expand: true,
		    cwd: 'src/',
		    src: '**/*.html',
		    dest: 'dist/',
		    flatten: true,
		    filter: 'isFile',
		  },
		  images: {
				expand: true,
		    cwd: 'src/',
		    src: 'images/**/*',
		    dest: 'dist/images/',
		    flatten: true,
		    filter: 'isFile',
		  }
		}
		


  });
  grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-browserify');  
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('build', ['sass', 'postcss', 'browserify', 'uglify', 'cssmin', 'copy']);


};