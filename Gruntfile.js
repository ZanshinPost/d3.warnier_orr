module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['uglify:dist']
            }
        },
        uglify: {
            options: {
                compress: {
                    dead_code: true
                },
                preserveComments: false,
                mangle: true
            },
            dist: {
                files: {
                    'dist/d3.warnier_orr.min.js': 'src/d3.warnier_orr.js'
                }
            }
        },
        jshint: {
            all: 'src/**/*.js'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['uglify', 'watch']);
};
