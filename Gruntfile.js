module.exports = function (grunt) {

    let banner =
        '/*\n' +
        '** <%= pkg.name %> - v<%= pkg.version %>\n' +
        '** <%= pkg.author %>\n' +
        '** <%= pkg.homepage %>\n' +
        '** Under <%= pkg.license %> license \n' +
        '*/ \n';

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
                    'src/.tmp/tmp.js'
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
            scripts: {
                files: ['src/.tmp/*.js'],
                tasks: ['concat']
            },
            sass: {
                files: ['src/sass/**/*.scss', 'src/sass/*.scss'],
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
        grunt.registerTask('default', ['sass:dev', 'concat', 'usebanner', 'watch']);
    }
    else if (grunt.option("doc") === true) {
        grunt.registerTask('default', ['jsdoc2md', 'watch:doc']);
    }
    else {
        grunt.registerTask('default', ['sass', 'jsdoc2md', 'concat', 'uglify', 'usebanner']);
    }
};