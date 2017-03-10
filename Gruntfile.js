module.exports = function (grunt) {
    var fileBanner = '/*\n  <%= pkg.name %> - v<%= pkg.version %> \n ' +//
        ' Author: reza babakhani \n ' + //
        'http://babakhani.github.io/PersianWebToolkit/datepicker \n */\n'

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: true,
                banner: fileBanner + '( function () {',
                footer: '}());'
            },
            dist: {
                src: [
                    'bower_components/mustache.js/mustache.min.js',
                    'bower_components/hamsterjs/hamster.js',
                    'src/js/persian-datepicker.js',
                ],
                dest: 'dist/js/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        uglify: {
            options: {
                banner: fileBanner
            },
            build: {
                src: 'dist/js/<%= pkg.name %>-<%= pkg.version %>.js',
                dest: 'dist/js/<%= pkg.name %>-<%= pkg.version %>.min.js'
            }
        },
        sass: {
            options: {
                //banner: fileBanner,
                sourcemap: 'none'
            },
            dist: {
                files: [
                    {
                        'src/css/<%= pkg.name %>.css': 'src/sass/persian-datepicker.scss'
                    },
                    {
                        'dist/css/<%= pkg.name %>-<%= pkg.version %>.css': 'src/sass/persian-datepicker.scss'
                    },
                    {
                        'dist/css/theme/<%= pkg.name %>-blue.css': 'src/sass/persian-datepicker-blue.scss'
                    },
                    {
                        'dist/css/theme/<%= pkg.name %>-dark.css': 'src/sass/persian-datepicker-dark.scss'
                    },
                    {
                        'dist/css/theme/<%= pkg.name %>-redblack.css': 'src/sass/persian-datepicker-redblack.scss'
                    },
                    {
                        'dist/css/theme/<%= pkg.name %>-cheerup.css': 'src/sass/persian-datepicker-cheerup.scss'
                    }
                ]
            }
        },
        cssmin: {
            options: {
                banner: fileBanner
            },
            combine: {
                files: {
                    'dist/css/<%= pkg.name %>-<%= pkg.version %>.min.css': ['src/css/<%= pkg.name %>.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['concat']
            },
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass', 'cssmin']
            },
            doc: {
                files: ['src/js/*.js'],
                tasks: ['jsdoc']
            }
        },
        jsdoc2md: {
            config: {
                options: {
                    'no-gfm': true,
                    'heading-depth': 2,
                    'example-lang': 'js'
                },
                src: 'src/es6/config.js',
                dest: 'doc/OPTIONS.md'
            },
            api: {
                options: {
                    'no-gfm': true,
                    'heading-depth': 2,
                    'example-lang': 'js'
                },
                src: 'src/es6/api.js',
                dest: 'doc/API.md'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsdoc-to-markdown');

    if (grunt.option("dev") === true) {
        grunt.registerTask('default', ['sass', 'watch']);
    }
    else if (grunt.option("build") === true) {
        grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);
    }
    else if (grunt.option("doc") === true) {
        grunt.registerTask('default', ['jsdoc2md']);
    }
    else {
        grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'uglify', 'watch']);
    }

};