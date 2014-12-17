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
                    'src/js/plugin.js',
                    'src/js/config.js',
                    'src/js/template.js',
                    'src/js/datepicker-base.js',
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
                    'src/js/state.js'
                ],
                dest: 'dist/<%= pkg.version %>/<%= pkg.name %>.js'
            }
        },
        uglify: {
            build: {
                src: 'dist/<%= pkg.version %>/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.version %>/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            combine: {
                files: {
                    'build/<%= pkg.version %>/<%= pkg.name %>.min.css': ['dist/<%= pkg.version %>/<%= pkg.name %>.css']
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    { src: ['src/css/**'], dest: 'dist/<%= pkg.version %>/<%= pkg.name %>.css', filter: 'isFile'}
                ]
            }
        },
        jsdoc: {
            dist: {
                src: 'src/css',
                options: {
                    destination: 'doc/<%= pkg.version %>'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.registerTask('default', ['concat', 'copy', 'cssmin', 'uglify', 'jsdoc']);
};