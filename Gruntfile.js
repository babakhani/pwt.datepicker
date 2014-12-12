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
                src: ['src/js/pwt-datepicker.base.js', 'src/js/pwt-datepicker-helper.js',
                    'src/js/pwt-datepicker-monthgrid.js'
                    , 'src/js/pwt-datepicker-monthgrid-view.js',
                    'src/js/pwt-daypicker.js',
                    'src/js/pwt-datepicker-view.js',
                    'src/js/pwt-datepicker.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            build: {
                src: 'dist/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat', 'uglify']);
};