module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> */' +
                    '( function () {',
                footer: '}());'
            },
            dist: {
                src: [
                    'src/js/plugin.js',
                    'src/js/config.js',
                    'src/js/constant.js',
                    'src/js/template.js',
                    'src/js/datepicker-base.js',
                    'src/js/datepicker-compat.js',
                    'src/js/constant.js',
                    'src/js/datepicker-helper.js',
                    'src/js/datepicker-monthgrid.js',
                    'src/js/datepicker-monthgrid-view.js',
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
                dest: 'dist/<%= pkg.version %>/js/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        uglify: {
            build: {
                src: 'dist/<%= pkg.version %>/js/<%= pkg.name %>-<%= pkg.version %>.js',
                dest: 'dist/<%= pkg.version %>/js/<%= pkg.name %>-<%= pkg.version %>.min.js'
            }
        },
        sass: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            dist: {
                files: [
                    {
                        'src/css/<%= pkg.name %>.css': 'src/sass/persian-datepicker.scss'
                    },
                    {
                        'dist/<%= pkg.version %>/css/<%= pkg.name %>-<%= pkg.version %>.css': 'src/sass/persian-datepicker.scss'
                    },
                    {
                        'dist/<%= pkg.version %>/css/theme/<%= pkg.name %>-blue.css': 'src/sass/persian-datepicker-blue.scss'
                    },
                    {
                        'dist/<%= pkg.version %>/css/theme/<%= pkg.name %>-dark.css': 'src/sass/persian-datepicker-dark.scss'
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
            combine: {
                files: {
                    'dist/<%= pkg.version %>/css/<%= pkg.name %>-<%= pkg.version %>.min.css': ['src/css/<%= pkg.name %>.css']
                }
            }
        },
        jsdoc: {
            dist: {
                src: 'src/js',
                options: {
                    destination: 'doc/<%= pkg.version %>',
//                    configure: 'doc/conf.json',
//                    template: 'node_modules/ink-docstrap/template',
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
        grunt.registerTask('default', ['concat', 'sass', 'cssmin' , 'uglify', 'jsdoc']);
    } else {
        grunt.registerTask('default', ['concat', 'sass', 'cssmin' , 'uglify', 'watch']);
    }

};