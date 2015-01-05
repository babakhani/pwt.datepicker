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
                    'src/js/plugin.js',
                    'src/js/config.js',
                    'src/js/constant.js',
                    'src/js/template.js',
                    'src/js/base-class.js',
                    'src/js/compat-class.js',
                    'src/js/constant.js',
                    'src/js/helper.js',
                    'src/js/monthgrid.js',
                    'src/js/monthgrid-view.js',
                    'src/js/datepicker-view.js',
                    'src/js/datepicker.js',
                    'src/js/navigator.js',
                    'src/js/daypicker.js',
                    'src/js/monthpicker.js',
                    'src/js/yearpicker.js',
                    'src/js/toolbox.js',
                    'src/js/timepicker.js',
                    'src/js/state.js',
                    'src/js/mousewheel.js'
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
                banner: fileBanner,
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
                    }
                ]
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['src/css/<%= pkg.name %>.css'],
                        dest: 'dist/<%= pkg.version %>/css/<%= pkg.name %>-<%= pkg.version %>.css' }
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
        jsdoc: {
            dist: {
                src: 'src/js',
                options: {
                    destination: 'doc/<%= pkg.version %>',
                    configure: 'doc/conf.json',
                    template: 'doc/templates/default'
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
        yuidoc: {
            all: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    paths: ['src/js'],
                    outdir: 'doc/yui/'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-watch');

    if (grunt.option("doc") === true) {
        grunt.registerTask('default', ['jsdoc', 'watch']);
    } else {
        grunt.registerTask('default', ['concat', 'sass', 'cssmin' , 'uglify', 'watch']);
    }

};