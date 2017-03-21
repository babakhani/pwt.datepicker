module.exports = function (grunt) {
    var fileBanner = '/*\n  <%= pkg.name %> - v<%= pkg.version %> \n ' +//
        ' Author: reza babakhani \n ' + //
        'http://babakhani.github.io/PersianWebToolkit/datepicker \n */\n';

    require('load-grunt-tasks')(grunt);

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
                    'node_modules/mustache/mustache.js',
                    'node_modules/hamsterjs/hamster.js',
                    'src/.tmp/persian-datepicker.js'
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
                sourcemap: 'none'
            },
            dist: {
                files: [
                    {
                        'dist/css/<%= pkg.name %>-<%= pkg.version %>.css': 'src/sass/persian-datepicker.scss'
                    },
                    {
                        'dist/css/<%= pkg.name %>-<%= pkg.version %>.css': 'src/sass/persian-datepicker.scss'
                    },
                    {
                        'dist/css/theme/<%= pkg.name %>-blue-<%= pkg.version %>.css': 'src/sass/persian-datepicker-blue.scss'
                    },
                    {
                        'dist/css/theme/<%= pkg.name %>-dark-<%= pkg.version %>.css': 'src/sass/persian-datepicker-dark.scss'
                    },
                    {
                        'dist/css/theme/<%= pkg.name %>-redblack-<%= pkg.version %>.css': 'src/sass/persian-datepicker-redblack.scss'
                    },
                    {
                        'dist/css/theme/<%= pkg.name %>-cheerup-<%= pkg.version %>.css': 'src/sass/persian-datepicker-cheerup.scss'
                    }
                ]
            }
        },
        cssmin: {
            options: {
                banner: fileBanner,
                sourceMap: true,
                report: true
            },
            main: {
                files: [
                    {
                        'dist/css/<%= pkg.name %>-<%= pkg.version %>.min.css': 'dist/css/<%= pkg.name %>-<%= pkg.version %>.css'
                    },
                    {
                        'dist/css/theme/<%= pkg.name %>-blue-<%= pkg.version %>.min.css': 'dist/css/theme/<%= pkg.name %>-blue-<%= pkg.version %>.css'
                    },
                    {
                        'dist/css/theme/<%= pkg.name %>-dark-<%= pkg.version %>.min.css': 'dist/css/theme/<%= pkg.name %>-dark-<%= pkg.version %>.css'
                    },
                    {
                        'dist/css/theme/<%= pkg.name %>-redblack-<%= pkg.version %>.min.css': 'dist/css/theme/<%= pkg.name %>-redblack-<%= pkg.version %>.css'
                    },
                    {
                        'dist/css/theme/<%= pkg.name %>-cheerup-<%= pkg.version %>.min.css': 'dist/css/theme/<%= pkg.name %>-cheerup-<%= pkg.version %>.css'
                    }
                ]
            }
        },
        watch: {
            scripts: {
                files: ['src/.tmp/*.js'],
                tasks: ['concat']
            },
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass']
            },
            doc: {
                files: ['src/es6/*.js'],
                tasks: ['jsdoc2md']
            },
            livereload: {
                options: {livereload: true},
                files: ['dist/**/*'],
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
                dest: 'dist/doc/OPTIONS.md'
            },
            api: {
                options: {
                    'no-gfm': true,
                    'heading-depth': 2,
                    'example-lang': 'js'
                },
                src: 'src/es6/api.js',
                dest: 'dist/doc/API.md'
            }
        }
    });

    if (grunt.option("dev") === true) {
        grunt.registerTask('default', ['sass', 'concat', 'watch:scripts', 'watch:sass', 'watch:livereload']);
    }
    else if (grunt.option("build") === true) {
        grunt.registerTask('default', ['sass', 'jsdoc2md', 'concat', 'cssmin', 'uglify']);
    }
    else if (grunt.option("doc") === true) {
        grunt.registerTask('default', ['jsdoc2md', 'watch:doc']);
    }
    else {
        grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'uglify', 'watch']);
    }
};