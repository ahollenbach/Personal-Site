module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: ['Gruntfile.js', 'src/**/*.js']
    },

    uglify: {
      options: {
        banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dev: {
        options: {
          // compress: false,
          beautify: true,
          mangle: false
        },
        files: {
          'dist/js/andrew.min.js': 'src/**/*.js'
        }
      },
      build: {
        files: {
          'dist/js/andrew.min.js': 'src/**/*.js'
        }
      }
    },

    less: {
      options: {
        cleancss: true
      },
      dev: {
        files: {
          "dist/css/andrew.css": "src/**/*.less"
        }
      },
      prod: {
        options: {
          compress: true
        },
        files: {
          "dist/css/andrew.css": "src/**/*.less"
        }
      }
    },

    imagemin: {
      build: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["**/*.{png,jpg,gif}"],
          dest: "dist/"
        }]
      }
    },

    watch: {
      stylesheets: {
        files: 'src/**/*.less',
        tasks: ['less']
      },
      scripts: {
        files: 'src/**/*.js',
        tasks: ['jshint', 'uglify:dev']
      }
    },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ['*.html', 'res/**'],
          dest: 'dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['jshint', 'uglify', 'less:prod', 'imagemin', 'copy']);
  grunt.registerTask('dev', ['jshint', 'uglify:dev', 'less:dev', 'copy']);
  grunt.registerTask('prod', ['jshint', 'uglify', 'less:prod', 'imagemin', 'copy']);
};
