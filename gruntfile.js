module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    debugInfo: false
                },
                files: [{
                    expand: true,
                    cwd: './client',
                    src: ['*.scss'],
                    dest: './public/styles',
                    ext: '.css'
                }]
            }
        },
        watch: {
            view: {
                files: ['client/app/**/*.html'],
                tasks:['ngtemplates'],
                options: {
                    livereload: true
                }
            },
            app: {
                files: ['client/app/{components,app}/**/*.js'],
                tasks:['copy:app'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['client/app/**/*.scss'],
                tasks:['copy:styles'],
                options: {
                    livereload: true
                }
            }
        },
        copy: {
            app: {
                files: [{
                    flatten: true,
                    cwd: 'client/app',
                    dest: 'public/app',
                    expand: true,
                    src: ['**/*.js']
                }],
            },
            styles: {
                files: [{
                    flatten: true,
                    cwd: 'client/app',
                    dest: 'public/styles',
                    expand: true,
                    src: ['**/*.{css,css.map}']
                }]
            }
        },
        nodemon: {
            debug: {
                script: 'server/app.js',
                options: {
                    env: {
                        port: 3000
                    }
                }
            }
        },
        ngtemplates: {
            main: {
                cwd: 'client/app',
                src: ['{main,components}/**/*.html'],
                dest: 'public/app/templates.js',
                options: {
                    module: 'app',
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.registerTask('default', ['sass', 'copy', 'ngtemplates', 'concurrent']);
};