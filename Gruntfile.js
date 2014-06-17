'use strict';

var walletScriptFiles = [
    'src/scripts/wallet.js',
    'src/scripts/wallet/routes/**/*.js',
    'src/scripts/wallet/controllers/**/*.js',
    'src/scripts/views/**/*.js',
    'src/scripts/wallet/views/**/*.js',
    'src/scripts/wallet/components/**/*.js',
    'src/scripts/wallet/helpers/**/*.js'
],
watchdogScriptFiles = [
    'src/scripts/watchdog.js',
    'src/scripts/views/**/*.js'
],
vendorFiles = [
    'vendor/jquery/dist/jquery.min.js',
    'vendor/handlebars/handlebars.min.js',
    'vendor/ember/ember.js',
    'vendor/bootstrap/dist/js/bootstrap.min.js',
    'vendor/socket.io-client/socket.io.js',
    'vendor/CryptoJS/build/rollups/aes.js',
    'vendor/CryptoJS/build/rollups/pbkdf2.js',
    'vendor/CryptoJS/build/rollups/sha256.js',
    'node_modules/bitcore/browser/bundle.js',
    'vendor/bootswatch/lumen/bootstrap.min.css'
];

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        usebanner: {
            options: {
                banner: '/*!\n * <%= pkg.title || pkg.name %>\n * <%= pkg.description%>\n * Version <%= pkg.version%>\n * Compiled <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n */\n',
            },
            walletscripts: {
                src: 'dist/scripts/wallet{.,.min.}js'
            },
            walletstylesheets: {
                src: 'dist/stylesheets/wallet{.,.min.}css'
            },
            watchdogscripts: {
                src: 'dist/scripts/watchdog{.,.min.}js'
            },
            watchdogstylesheets: {
                src: 'dist/stylesheets/watchdog{.,.min.}css'
            }
        },
        clean: {
            walletscripts: 'dist/scripts/wallet{.,.min.}js',
            walletstylesheets: 'dist/scripts/wallet{.,.min.}css',
            watchdogscripts: 'dist/scripts/watchdog{.,.min.}js',
            watchdogstylesheets: 'dist/scripts/watchdog{.,.min.}css',
            all: 'dist'
        },
        compass: {
            options: {
                config: '.compassrc'
            },
            wallet: {
                options: {
                    specify: [
                        'src/stylesheets/reset.scss',
                        'src/stylesheets/wallet.scss'
                    ]
                }
            },
            watchdog: {
                options: {
                    specify: [
                        'src/stylesheets/reset.scss',
                        'src/stylesheets/watchdog.scss'
                    ]
                }
            }
        },
        concat: {
            options: {
                stripBanners: true
            },
            wallet: {
                src: [].concat('.tmp/ember-templates.js', walletScriptFiles),
                dest: 'dist/scripts/wallet.js'
            },
            watchdog: {
                src: [].concat('.tmp/ember-templates.js', watchdogScriptFiles),
                dest: 'dist/scripts/watchdog.js'
            }
        },
        cssmin: {
            reset: {
                files: {
                    'dist/stylesheets/reset.min.css': 'dist/stylesheets/reset.css'
                }
            },
            wallet: {
                files: {
                    'dist/stylesheets/wallet.min.css': 'dist/stylesheets/wallet.css'
                }
            },
            watchdog: {
                files: {
                    'dist/stylesheets/watchdog.min.css': 'dist/stylesheets/watchdog.css'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            node: ['bower.json', 'Gruntfile.js', 'package.json', 'tasks/**/*.{js,node}'],
            src: 'src/scripts/**/*.js'
        },
        uglify: {
            options: {
                sourceMap: true
            },
            wallet: {
                files: {
                    'dist/scripts/wallet.min.js': 'dist/scripts/wallet.js'
                }
            },
            watchdog: {
                files: {
                    'dist/scripts/watchdog.min.js': 'dist/scripts/watchdog.js'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            node: {
                files: ['package.json', 'Gruntfile.js'],
                tasks: 'default'
            },
            scripts: {
                files: ['src/**/*.js', '**/.jshintrc'],
                tasks: 'scripts'
            },
            stylesheets: {
                files: ['src/**/*.scss', '.compassrc', '.scsslintrc'],
                tasks: 'stylesheets'
            },
            template: {
                files: 'src/**/*.hbs',
                takss: ['ember_handlebars', 'concat', 'uglify', 'usebanner']
            },
            vendor: {
                files: vendorFiles,
                tasks: 'htmlcompiler'
            },
            readme: {
                files: ['.verbrc', 'docs/**/*.md'],
                tasks: 'verb'
            }
        },
        ember_handlebars: { // jshint ignore:line
            options: {
                namespace: 'Ember.TEMPLATES',
                processName: function (filename) {
                    return filename.replace(/^src\/templates\/(.+).hbs$/, '$1').replace('.', '/');
                }
            },
            src: {
                files: {
                    '.tmp/ember-templates.js': 'src/templates/**/*.hbs'
                }
            }
        },
        htmlcompiler: {
            'dist/wallet.html': {
                options: {
                    vendors: [].concat('dist/stylesheets/reset.min.css', vendorFiles),
                    scripts: ['dist/scripts/wallet.min.js', 'http://localhost:35729/livereload.js'],
                    stylesheets: 'dist/stylesheets/wallet.min.css',
                    title: 'Wallet | <%= pkg.title || pkg.name %>',
                    meta: [
                        {
                            name: 'viewport',
                            content: 'width=device-width, user-scalable=no'
                        }
                    ],
                    body: '<div id="ember-app"></div>'
                }
            },
            'dist/watchdog.html': {
                options: {
                    vendors: [].concat('dist/stylesheets/reset.min.css', vendorFiles),
                    scripts: ['dist/scripts/watchdog.min.js', 'http://localhost:35729/livereload.js'],
                    stylesheets: 'dist/stylesheets/watchdog.min.css',
                    title: 'Watchdog | <%= pkg.title || pkg.name %>',
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
        scsslint: {
            options: {
                config: '.scsslintrc'
            },
            src: 'src/**/*.scss'
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-handlebars');
    grunt.loadNpmTasks('grunt-html-compiler');
    grunt.loadNpmTasks('grunt-scss-lint');
    
    grunt.loadNpmTasks('grunt-verb');
    
    grunt.registerTask('default', ['jshint:node', 'wallet', 'watchdog', 'verb:readme']);
    
    grunt.registerTask('wallet', ['walletscripts', 'walletstylesheets', 'walletassets']);
    
    grunt.registerTask('watchdog', ['watchdogscripts', 'watchdogstylesheets', 'watchdogassets']);

    grunt.registerTask('scripts', ['walletscripts', 'watchdogscripts']);

    grunt.registerTask('stylesheets', ['walletstylesheets', 'watchdogstylesheets']);
    
    grunt.registerTask('assets', ['walletassets', 'watchdogassets']);
    
    grunt.registerTask('walletstylesheets', ['scsslint:src', 'clean:walletstylesheets', 'compass:wallet', 'cssmin:reset', 'cssmin:wallet', 'usebanner:walletstylesheets']);
    
    grunt.registerTask('walletscripts', ['jshint:src', 'clean:walletscripts', 'ember_handlebars:src', 'concat:wallet', 'uglify:wallet', 'usebanner:walletscripts']);
    
    grunt.registerTask('watchdogstylesheets', ['scsslint:src', 'clean:watchdogstylesheets', 'compass:watchdog', 'cssmin:reset', 'cssmin:watchdog', 'usebanner:watchdogstylesheets']);
    
    grunt.registerTask('watchdogscripts', ['jshint:src', 'clean:watchdogscripts', 'ember_handlebars:src', 'concat:watchdog', 'uglify:watchdog', 'usebanner:watchdogscripts']);
    
    grunt.registerTask('walletassets', ['htmlcompiler:dist/wallet.html']);

    grunt.registerTask('watchdogassets', ['htmlcompiler:dist/watchdog.html']);
};