'use strict';

module.exports = function (grunt) {
    var vendorScriptFiles = [
        'vendor/jquery/dist/jquery.min.js',
        'vendor/handlebars/handlebars.min.js',
        'vendor/ember/ember.js',
        'vendor/bootstrap/dist/js/bootstrap.min.js',
        'vendor/socket.io-client/socket.io.js',
        'vendor/CryptoJS/build/rollups/aes.js',
        'vendor/CryptoJS/build/rollups/pbkdf2.js',
        'vendor/CryptoJS/build/rollups/sha256.js',
        'node_modules/bitcore/browser/bundle.js',
        'bitpay/copayBundle.js'
    ],
    vendorStylesheetFiles = [
        'vendor/bootswatch/lumen/bootstrap.min.css'
    ],
    sourceFiles = [
        'src/scripts/namespaces/**/*.js',
        'src/scripts/models/copay/**/*.js',
        'src/scripts/app.js',
        'src/scripts/mixins/**/*.js',
        'src/scripts/models/**/*.js',
        'src/scripts/routes/**/*.js',
        'src/scripts/controllers/**/*.js',
        'src/scripts/views/**/*.js',
        'src/scripts/components/**/*.js',
        'src/scripts/helpers/**/*.js'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        usebanner: {
            options: {
                banner: '/*!\n * <%= pkg.title || pkg.name %>\n * <%= pkg.description%>\n * Version <%= pkg.version%>\n * Compiled <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n */\n',
            },
            scripts: {
                src: '{lib/app,dist}/**/*.js'
            },
            stylesheets: {
                src: '{lib/app,dist}/**/*.css'
            }
        },
        clean: {
            dist: 'dist',
            lib: 'lib',
            libscripts: 'lib/app/scripts',
            libstylesheets: 'lib/app/stylesheets',
            postcompile: {
                src: 'dist/**/*',
                filter: function (path) {
                    return grunt.file.isDir(path) && grunt.file.expand({cwd: path}, '**/*').length === 0;
                }
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            node: ['bower.json', 'Gruntfile.js', 'package.json'],
            src: 'src/scripts/**/*.js'
        },
        concat: {
            options: {
                stripBanners: true,
            },
            src: {
                dest: 'lib/app/scripts/application.js',
                src: sourceFiles
            }
        },
        ember_handlebars: { //jshint ignore:line
            options: {
                namespace: 'Ember.TEMPLATES',
                processName: function (filename) {
                    return filename.replace(/^src\/templates\/(.+).hbs$/, '$1').replace('.', '/');
                }
            },
            src: {
                files: {
                    'lib/app/scripts/ember-templates.js': 'src/templates/**/*.hbs'
                }
            }
        },
        uglify: {
            options: {
                sourceMap: true
            },
            lib: {
                expand: true,
                cwd: 'lib/app/scripts/',
                src: ['**/*.js', '!**/*.min.js'],
                dest: 'lib/app/scripts/',
                ext: '.min.js'
            }
        },
        cssmin: {
            lib: {
                expand: true,
                cwd: 'lib/app/stylesheets/',
                src: '**/*.css',
                dest: 'lib/app/stylesheets/',
                ext: '.min.css'
            }
        },
        compass: {
            src: {
                options: {
                    config: '.compassrc',
                    specify: [
                        'src/stylesheets/reset.scss',
                        'src/stylesheets/style.scss'
                    ]
                }
            }
        },
        scsslint: {
            options: {
                config: '.scsslintrc'
            },
            src: 'src/**/*.scss'
        },
        copy: {
            assets: {
                expand: true,
                cwd: 'src/',
                src: ['**/*', '!**/*.{js,scss,hbs}'],
                dest: 'dist/',
                filter: function (path) {
                    return !grunt.file.isDir(path) || grunt.file.expand({cwd: path}, ['**/*', '!**/*.{js,scss,hbs}']).length;
                }
            },
            scripts: {
                files: [{
                    expand: true,
                    cwd: 'lib/app/scripts/',
                    src: '**/*.{js,map}',
                    dest: 'dist/scripts/'
                }]
            },
            stylesheets: {
                expand: true,
                cwd: 'lib/app/stylesheets/',
                src: '**/*.css',
                dest: 'dist/stylesheets/'
            }
        },
        watch: {
            options: {
                atBegin: true,
                livereload: true
            },
            node: {
                files: ['package.json', 'Gruntfile.js', '.csslintrc', '.jshintrc'],
                tasks: ['default']
            },
            scripts: {
                files: ['**/.jshintrc', 'src/scripts/**/*.js'],
                tasks: ['scripts', 'htmlcompiler']
            },
            stylesheets: {
                files: ['.compassrc', '.scsslintrc', 'src/stylesheets/**/*.scss'],
                tasks: ['stylesheets', 'htmlcompiler']
            },
            templates: {
                files: 'src/templates/**/*.hbs',
                tasks: ['ember_handlebars', 'copy:scripts']
            },
            assets: {
                files: ['src/**.*', '!src/**/*.{js,css,hbs}'],
                tasks: 'copy:assets'
            },
            vendor: {
                files: [].concat(vendorScriptFiles, vendorStylesheetFiles),
                tasks: 'htmlcompiler'
            },
            readme: {
                files: ['.verbrc', 'docs/**/*.md'],
                tasks: 'verb'
            }
        },
        htmlcompiler: {
            'dist/index.html': {
                options: {
                    vendors: vendorScriptFiles,
                    scripts: [].concat(
                        'lib/app/scripts/ember-templates.js',
                        sourceFiles,
                        'http://localhost:35729/livereload.js'
                    ),
                    stylesheets: [].concat('dist/stylesheets/reset.css', vendorStylesheetFiles, ['dist/**/*.css', '!dist/**/*.min.css']),
                    title: '<%= pkg.title || pkg.name %>',
                    meta: [
                        {
                            name: 'viewport',
                            content: 'width=device-width, user-scalable=no'
                        }
                    ],
                    body: '<div id="ember-app"></div>'
                }
            },
            'dist/index.dev.html': {
                options: {
                    vendors: vendorScriptFiles,
                    scripts: [
                        'dist/scripts/ember-templates.js',
                        'dist/**/*.js',
                        '!dist/**/*.min.js',
                        'http://localhost:35729/livereload.js'
                    ],
                    stylesheets: [].concat('dist/stylesheets/reset.css', vendorStylesheetFiles, ['dist/**/*.css', '!dist/**/*.min.css']),
                    title: '<%= pkg.title || pkg.name %>',
                    meta: [
                        {
                            name: 'viewport',
                            content: 'width=device-width, user-scalable=no'
                        }
                    ],
                    body: '<div id="ember-app"></div>'
                }
            }
        },
        verb: {
            readme: {
                files: {
                    'README.md': '.verbrc'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-handlebars');
    grunt.loadNpmTasks('grunt-html-compiler');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-verb');

    grunt.registerTask('default', ['verb:readme', 'jshint:node', 'clean:dist', 'clean:lib', 'scripts', 'stylesheets', 'copy', 'htmlcompiler', 'clean:postcompile']);
    grunt.registerTask('stylesheets', ['scsslint', 'clean:libstylesheets', 'compass', 'cssmin', 'copy:stylesheets', 'usebanner:stylesheets']);
    grunt.registerTask('scripts', ['jshint:src', 'clean:libscripts', 'concat:src', 'ember_handlebars', 'uglify', 'copy:scripts', 'usebanner:scripts']);
    grunt.registerTask('dev', ['compass', 'cssmin', 'concat:src', 'ember_handlebars', 'uglify', 'copy', 'htmlcompiler:dist/index.html']);
};