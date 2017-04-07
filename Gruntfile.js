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
        concat: {
            options: {
                stripBanners: true,
                banner: '( function () {',
                footer: '}());'
            },
            dist: {
                src: [
                    'node_modules/mustache/mustache.js',
                    'node_modules/hamsterjs/hamster.js',
                    'src/.tmp/api.js',
                    'src/.tmp/const.js',
                    'src/.tmp/config.js',
                    'src/.tmp/date.js',
                    'src/.tmp/input.js',
                    'src/.tmp/model.js',
                    'src/.tmp/navigator.js',
                    'src/.tmp/options.js',
                    'src/.tmp/plugin.js',
                    'src/.tmp/state.js',
                    'src/.tmp/template.js',
                    'src/.tmp/toolbox.js',
                    'src/.tmp/view.js',
                ],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            build: {
                src: 'dist/js/<%= pkg.name %>.js',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: [
                    {
                        'dist/css/<%= pkg.name %>.css': 'src/sass/persian-datepicker.scss'
                    },
                    {
                        expand: true,
                        cwd: 'src/sass/theme',
                        src: ['*.scss'],
                        dest: 'dist/css/theme',
                        ext: '.css'
                    }
                ]
            },
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: [
                    {
                        'dist/css/<%= pkg.name %>.min.css': 'src/sass/persian-datepicker.scss'
                    },
                    {
                        expand: true,
                        cwd: 'src/sass/theme',
                        src: ['*.scss'],
                        dest: 'dist/css/theme',
                        ext: '.min.css'
                    }
                ]
            }
        },
        watch: {
            sass: {
                files: ['src/sass/**/*.scss', 'src/sass/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['src/es6/*.js'],
                tasks: ['babel', 'concat']
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
        },
        babel: {
            options: {
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/es6/',
                    src: ['*.js'],
                    dest: 'src/.tmp/',
                    ext: '.js'
                }]
            }
        }
    });

    if (grunt.option("dev") === true) {
        grunt.registerTask('default', ['babel', 'sass:dev', 'concat', 'uglify', 'usebanner', 'watch']);
    }
    else if (grunt.option("doc") === true) {
        grunt.registerTask('default', ['jsdoc2md', 'watch:doc']);
    }
    else {
        grunt.registerTask('default', ['babel', 'sass', 'jsdoc2md', 'concat', 'uglify', 'usebanner']);
    }
};