const webpackConfig = require('./webpack.config.js');
const webpackDevConfig = require('./webpack.config.dev.js');

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        banner: '/*\n' +
        '** <%= pkg.name %> - v<%= pkg.version %>\n' +
        '** <%= pkg.author %>\n' +
        '** <%= pkg.homepage %>\n' +
        '** Under <%= pkg.license %> license \n' +
        '*/ \n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['dist/**/*.js', 'dist/**/*css']
                }
            }
        },
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                files: {
                    'dist/css/<%= pkg.name %>.css': 'src/sass/persian-datepicker.scss',
                }
            },
            prod: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: true
                },
                files: {
                    'dist/css/<%= pkg.name %>.min.css': 'src/sass/persian-datepicker.scss',
                }
            }
        },
        watch: {
            sass: {
                files: ['src/sass/**/*.scss', 'src/sass/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['src/es6/*.js'],
                tasks: ['webpack:dev']
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
        },
        webpack: {
            prod: webpackConfig,
            dev: webpackDevConfig
        }
    });

    if (grunt.option("dev") === true) {
        grunt.registerTask('default', ['sass:dev', 'webpack:dev', 'watch']);
    }
    else if (grunt.option("doc") === true) {
        grunt.registerTask('default', ['jsdoc2md', 'watch:doc']);
    }
    else {
        grunt.registerTask('default', ['sass', 'webpack', 'jsdoc2md', 'usebanner']);
    }
};