module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> */ ( function () {',
                footer: '}());'
            },
            dist: {
                src: [
                    'source/js/plugin.js',
                    'source/js/config.js',
                    'source/js/template.js',
                    'source/js/datepicker-base.js',
                    'source/js/datepicker-helper.js',
                    'source/js/datepicker-monthgrid.js',
                    'source/js/datepicker-monthgrid-view.js',
                    'source/js/datepicker-view.js',
                    'source/js/datepicker.js',
                    'source/js/navigator.js',
                    'source/js/daypicker.js',
                    'source/js/monthpicker.js',
                    'source/js/yearpicker.js',
                    'source/js/toolbox.js',
                    'source/js/timepicker.js',
                    'source/js/state.js'
                ],
                dest: 'build/<%= pkg.version %>/<%= pkg.name %>.js'
            }
        },
        uglify: {
            build: {
                src: 'build/<%= pkg.version %>/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.version %>/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            combine: {
                files: {
                    'build/<%= pkg.version %>/<%= pkg.name %>.min.css': ['build/<%= pkg.version %>/<%= pkg.name %>.css']
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    { src: ['source/css/**'], dest: 'build/<%= pkg.version %>/<%= pkg.name %>.css', filter: 'isFile'}
                ]
            }
        },
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    paths: 'source/js/',
                    outdir: 'doc/<%= pkg.version %>/'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.registerTask('default', ['concat', 'copy', 'cssmin', 'uglify', 'yuidoc']);
};