module.exports = function (wallaby) {
    return {
        files: [
          { pattern: 'node_modules/systemjs/dist/system-polyfills.js', instrument: false },
          { pattern: 'node_modules/systemjs/dist/system.js', instrument: false },
          { pattern: 'node_modules/core-js/client/shim.js', instrument: false },

          { pattern: 'node_modules/zone.js/dist/zone.js', instrument: false },
          { pattern: 'node_modules/zone.js/dist/long-stack-trace-zone.js', instrument: false },
          { pattern: 'node_modules/zone.js/dist/proxy.js', instrument: false },
          { pattern: 'node_modules/zone.js/dist/sync-test.js', instrument: false },
          { pattern: 'node_modules/zone.js/dist/jasmine-patch.js', instrument: false },
          { pattern: 'node_modules/zone.js/dist/async-test.js', instrument: false },
          { pattern: 'node_modules/zone.js/dist/fake-async-test.js', instrument: false },
          { pattern: 'node_modules/reflect-metadata/Reflect.js', instrument: false },

          { pattern: 'app/**/**.ts', load: false },
          { pattern: 'app/**/*.spec.ts', ignore: true }
        ],
        tests: [
          { pattern: 'app/**/*.spec.ts', load: false }
        ],

        env: {
            kind: 'electron',
            options: {
                webPreferences: {
                    nodeIntegration: true
                }
            }
        },
        middleware: function (app, express) {
            app.use('/node_modules',
              express.static(
                require('path').join(__dirname, 'node_modules')));
        },
        bootstrap: function (wallaby) {
            wallaby.delayStart();

            System.config(
              {
                  defaultJSExtensions: true,
                  packages: {
                      app: {
                          defaultExtension: 'js',
                          format: 'cjs'
                      },
                      rxjs: {
                          defaultExtension: 'js'
                      },
                  }
                ,
                  paths: {
                      "npm:*": "node_modules/*"
                  },
                  map: {
                      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
                      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
                      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
                      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
                      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
                      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
                      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
                      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

                      '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
                      '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
                      '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
                      '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
                      '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',

                      'rxjs': 'npm:rxjs',
                  }
              }
            );

            var promises = [
              Promise.all([
                System.import('@angular/core/testing'),
                System.import('@angular/platform-browser-dynamic/testing')
              ])

                .then(function (providers) {
                    var coreTesting = providers[0];
                    var browserTesting = providers[1];

                    coreTesting.TestBed.initTestEnvironment(
                      browserTesting.BrowserDynamicTestingModule,
                      browserTesting.platformBrowserDynamicTesting());
                })
            ];
            for (var i = 0, len = wallaby.tests.length; i < len; i++) {
                promises.push(System['import'](wallaby.tests[i].replace(/\.js$/, '')));
            }

            Promise.all(promises).then(function () {
                wallaby.start();
            }).catch(function (e) {
                setTimeout(function () {
                    throw e;
                }, 0);
            });
        }
    };
};
