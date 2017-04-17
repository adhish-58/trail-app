"use strict";
var path_1 = require("path");
var slash = require("slash");
var yargs_1 = require("yargs");
exports.BUILD_TYPES = {
    DEVELOPMENT: 'dev',
    PRODUCTION: 'prod'
};
var SeedConfig = (function () {
    function SeedConfig() {
        this.PORT = yargs_1.argv['port'] || 5555;
        this.PROJECT_ROOT = path_1.join(__dirname, '../..');
        this.BUILD_TYPE = getBuildType();
        this.DEBUG = yargs_1.argv['debug'] || false;
        this.DOCS_PORT = yargs_1.argv['docs-port'] || 4003;
        this.COVERAGE_PORT = yargs_1.argv['coverage-port'] || 4004;
        this.COVERAGE_DIR = 'coverage_js';
        this.COVERAGE_TS_DIR = 'coverage';
        this.APP_BASE = yargs_1.argv['base'] || '/';
        this.NPM_BASE = slash(path_1.join('.', this.APP_BASE, 'node_modules/'));
        this.TARGET_MOBILE_HYBRID = false;
        this.TARGET_DESKTOP = false;
        this.TARGET_DESKTOP_BUILD = false;
        this.TYPED_COMPILE_INTERVAL = 0;
        this.BOOTSTRAP_DIR = yargs_1.argv['app'] || 'app';
        this.APP_CLIENT = yargs_1.argv['client'] || 'client';
        this.BOOTSTRAP_MODULE = this.BOOTSTRAP_DIR + "/main";
        this.BOOTSTRAP_PROD_MODULE = this.BOOTSTRAP_DIR + "/" + 'main';
        this.NG_FACTORY_FILE = 'main-prod';
        this.BOOTSTRAP_FACTORY_PROD_MODULE = this.BOOTSTRAP_DIR + "/" + this.NG_FACTORY_FILE;
        this.APP_TITLE = 'Welcome to angular-seed!';
        this.APP_SRC = "src/" + this.APP_CLIENT;
        this.APP_PROJECTNAME = 'tsconfig.json';
        this.ASSETS_SRC = this.APP_SRC + "/assets";
        this.CSS_SRC = this.APP_SRC + "/css";
        this.E2E_SRC = 'src/e2e';
        this.SCSS_SRC = this.APP_SRC + "/scss";
        this.TOOLS_DIR = 'tools';
        this.SEED_TASKS_DIR = path_1.join(process.cwd(), this.TOOLS_DIR, 'tasks', 'seed');
        this.SEED_COMPOSITE_TASKS = path_1.join(process.cwd(), this.TOOLS_DIR, 'config', 'seed.tasks.json');
        this.PROJECT_COMPOSITE_TASKS = path_1.join(process.cwd(), this.TOOLS_DIR, 'config', 'project.tasks.json');
        this.DOCS_DEST = 'docs';
        this.DIST_DIR = 'dist';
        this.DEV_DEST = this.DIST_DIR + "/dev";
        this.PROD_DEST = this.DIST_DIR + "/prod";
        this.E2E_DEST = this.DIST_DIR + "/e2e";
        this.TMP_DIR = this.DIST_DIR + "/tmp";
        this.APP_DEST = this.BUILD_TYPE === exports.BUILD_TYPES.DEVELOPMENT ? this.DEV_DEST : this.PROD_DEST;
        this.CSS_DEST = this.APP_DEST + "/css";
        this.JS_DEST = this.APP_DEST + "/js";
        this.VERSION = appVersion();
        this.CSS_PROD_BUNDLE = 'main.css';
        this.JS_PROD_SHIMS_BUNDLE = 'shims.js';
        this.JS_PROD_APP_BUNDLE = 'app.js';
        this.VERSION_NPM = '3.0.0';
        this.VERSION_NODE = '5.0.0';
        this.ENABLE_SCSS = ['true', '1'].indexOf(("" + process.env.ENABLE_SCSS).toLowerCase()) !== -1 || yargs_1.argv['scss'] || false;
        this.FORCE_TSLINT_EMIT_ERROR = !!process.env.FORCE_TSLINT_EMIT_ERROR;
        this.EXTRA_WATCH_PATHS = [];
        this.NPM_DEPENDENCIES = [
            { src: 'core-js/client/shim.min.js', inject: 'shims' },
            { src: 'zone.js/dist/zone.js', inject: 'libs' },
            { src: 'zone.js/dist/long-stack-trace-zone.js', inject: 'libs', buildType: exports.BUILD_TYPES.DEVELOPMENT },
            { src: 'intl/dist/Intl.min.js', inject: 'shims' },
            { src: 'systemjs/dist/system.src.js', inject: 'shims', buildType: exports.BUILD_TYPES.DEVELOPMENT },
            { src: '.tmp/Rx.min.js', inject: 'libs', buildType: exports.BUILD_TYPES.DEVELOPMENT },
        ];
        this.APP_ASSETS = [
            { src: this.CSS_SRC + "/main." + this.getInjectableStyleExtension(), inject: true, vendor: false },
        ];
        this.TEMP_FILES = [
            '**/*___jb_tmp___',
            '**/*~',
            '**/*.tns.scss',
            '**/*.tns.css',
            '**/*.tns.html',
            'src/**/*.js',
            'src/**/*.js.map',
        ];
        this.SYSTEM_CONFIG_DEV = {
            defaultJSExtensions: true,
            paths: (_a = {},
                _a[this.BOOTSTRAP_MODULE] = "" + this.APP_BASE + this.BOOTSTRAP_MODULE,
                _a['@angular/common'] = 'node_modules/@angular/common/bundles/common.umd.js',
                _a['@angular/compiler'] = 'node_modules/@angular/compiler/bundles/compiler.umd.js',
                _a['@angular/core'] = 'node_modules/@angular/core/bundles/core.umd.js',
                _a['@angular/forms'] = 'node_modules/@angular/forms/bundles/forms.umd.js',
                _a['@angular/http'] = 'node_modules/@angular/http/bundles/http.umd.js',
                _a['@angular/platform-browser'] = 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
                _a['@angular/platform-browser-dynamic'] = 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
                _a['@angular/router'] = 'node_modules/@angular/router/bundles/router.umd.js',
                _a['@angular/common/testing'] = 'node_modules/@angular/common/bundles/common-testing.umd.js',
                _a['@angular/compiler/testing'] = 'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
                _a['@angular/core/testing'] = 'node_modules/@angular/core/bundles/core-testing.umd.js',
                _a['@angular/http/testing'] = 'node_modules/@angular/http/bundles/http-testing.umd.js',
                _a['@angular/platform-browser/testing'] = 'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
                _a['@angular/platform-browser-dynamic/testing'] = 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
                _a['@angular/router/testing'] = 'node_modules/@angular/router/bundles/router-testing.umd.js',
                _a['app/*'] = '/app/*',
                _a['dist/dev/*'] = '/base/dist/dev/*',
                _a['*'] = 'node_modules/*',
                _a),
            packages: {}
        };
        this.SYSTEM_CONFIG = this.SYSTEM_CONFIG_DEV;
        this.SYSTEM_BUILDER_CONFIG = {
            defaultJSExtensions: true,
            base: this.PROJECT_ROOT,
            packageConfigPaths: [
                path_1.join('node_modules', '*', 'package.json'),
                path_1.join('node_modules', '@angular', '*', 'package.json')
            ],
            paths: (_b = {},
                _b[path_1.join(this.TMP_DIR, '*')] = this.TMP_DIR + "/*",
                _b['dist/tmp/node_modules/*'] = 'dist/tmp/node_modules/*',
                _b['node_modules/*'] = 'node_modules/*',
                _b['*'] = 'node_modules/*',
                _b),
            packages: {
                '@angular/common': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/compiler': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/core/testing': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/core': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/forms': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/http': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/platform-browser': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/platform-browser-dynamic': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/router': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                'rxjs': {
                    main: 'Rx.js',
                    defaultExtension: 'js'
                }
            }
        };
        this.BROWSER_LIST = [
            'ie >= 10',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4.4',
            'bb >= 10'
        ];
        this.COLOR_GUARD_WHITE_LIST = [];
        this.DEV_REWRITE_RULES = [
            {
                from: /^\/node_modules\/.*$/,
                to: function (context) { return context.parsedUrl.pathname; }
            },
            {
                from: /^\/app\/.*$/,
                to: function (context) { return context.parsedUrl.pathname; }
            },
            {
                from: /^\/assets\/.*$/,
                to: function (context) { return context.parsedUrl.pathname; }
            },
            {
                from: /^\/css\/.*$/,
                to: function (context) { return context.parsedUrl.pathname; }
            }
        ];
        this.PLUGIN_CONFIGS = {
            'browser-sync': {
                middleware: [require('connect-history-api-fallback')({
                        index: this.APP_BASE + "index.html"
                    })],
                port: this.PORT,
                startPath: this.APP_BASE,
                open: yargs_1.argv['b'] ? false : true,
                injectChanges: false,
                server: {
                    baseDir: this.DIST_DIR + "/empty/",
                    routes: (_c = {},
                        _c["" + this.APP_BASE + this.APP_SRC] = this.APP_SRC,
                        _c["" + this.APP_BASE + this.APP_DEST] = this.APP_DEST,
                        _c[this.APP_BASE + "node_modules"] = 'node_modules',
                        _c["" + this.APP_BASE.replace(/\/$/, '')] = this.APP_DEST,
                        _c)
                }
            },
            'environment-config': path_1.join(this.PROJECT_ROOT, this.TOOLS_DIR, 'env'),
            'gulp-sass': {
                includePaths: ['./node_modules/']
            },
            'gulp-concat-css': {
                targetFile: this.CSS_PROD_BUNDLE,
                options: {
                    rebaseUrls: false
                }
            }
        };
        for (var _i = 0, _d = this.getProxyMiddleware(); _i < _d.length; _i++) {
            var proxy = _d[_i];
            this.PLUGIN_CONFIGS['browser-sync'].middleware.push(proxy);
        }
        var _a, _b, _c;
    }
    Object.defineProperty(SeedConfig.prototype, "DEPENDENCIES", {
        get: function () {
            return normalizeDependencies(this.NPM_DEPENDENCIES.filter(filterDependency.bind(null, this.BUILD_TYPE)))
                .concat(this.APP_ASSETS.filter(filterDependency.bind(null, this.BUILD_TYPE)));
        },
        enumerable: true,
        configurable: true
    });
    SeedConfig.prototype.getProxyMiddleware = function () {
        return [];
    };
    SeedConfig.prototype.getKarmaReporters = function () {
        return {
            preprocessors: {
                'dist/**/!(*spec|index|*.module|*.routes).js': ['coverage']
            },
            reporters: ['mocha', 'coverage', 'karma-remap-istanbul'],
            coverageReporter: {
                dir: this.COVERAGE_DIR + '/',
                reporters: [
                    { type: 'json', subdir: '.', file: 'coverage-final.json' },
                    { type: 'html', subdir: '.' }
                ]
            },
            remapIstanbulReporter: {
                reports: {
                    html: this.COVERAGE_TS_DIR
                }
            }
        };
    };
    ;
    SeedConfig.prototype.mergeObject = function (target, source) {
        var deepExtend = require('deep-extend');
        deepExtend(target, source);
    };
    SeedConfig.prototype.getPluginConfig = function (pluginKey) {
        if (this.PLUGIN_CONFIGS[pluginKey]) {
            return this.PLUGIN_CONFIGS[pluginKey];
        }
        return null;
    };
    SeedConfig.prototype.getInjectableStyleExtension = function () {
        return this.BUILD_TYPE === exports.BUILD_TYPES.PRODUCTION && this.ENABLE_SCSS ? 'scss' : 'css';
    };
    SeedConfig.prototype.addPackageBundles = function (pack) {
        if (pack.path) {
            this.SYSTEM_CONFIG_DEV.paths[pack.name] = pack.path;
            this.SYSTEM_BUILDER_CONFIG.paths[pack.name] = pack.path;
        }
        if (pack.packageMeta) {
            this.SYSTEM_CONFIG_DEV.packages[pack.name] = pack.packageMeta;
            this.SYSTEM_BUILDER_CONFIG.packages[pack.name] = pack.packageMeta;
        }
    };
    SeedConfig.prototype.addPackagesBundles = function (packs) {
        var _this = this;
        packs.forEach(function (pack) {
            _this.addPackageBundles(pack);
        });
    };
    return SeedConfig;
}());
exports.SeedConfig = SeedConfig;
function normalizeDependencies(deps) {
    deps
        .filter(function (d) { return !/\*/.test(d.src); })
        .forEach(function (d) { return d.src = require.resolve(d.src); });
    return deps;
}
exports.normalizeDependencies = normalizeDependencies;
function filterDependency(type, d) {
    var t = d.buildType || d.env;
    d.buildType = t;
    if (!t) {
        d.buildType = Object.keys(exports.BUILD_TYPES).map(function (k) { return exports.BUILD_TYPES[k]; });
    }
    if (!(d.buildType instanceof Array)) {
        d.env = [d.buildType];
    }
    return d.buildType.indexOf(type) >= 0;
}
function appVersion() {
    var pkg = require('../../package.json');
    return pkg.version;
}
function getBuildType() {
    var type = (yargs_1.argv['build-type'] || yargs_1.argv['env'] || '').toLowerCase();
    var base = yargs_1.argv['_'];
    var prodKeyword = !!base.filter(function (o) { return o.indexOf(exports.BUILD_TYPES.PRODUCTION) >= 0; }).pop();
    if ((base && prodKeyword) || type === exports.BUILD_TYPES.PRODUCTION) {
        return exports.BUILD_TYPES.PRODUCTION;
    }
    else {
        return exports.BUILD_TYPES.DEVELOPMENT;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWVkLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkJBQTRCO0FBQzVCLDZCQUErQjtBQUMvQiwrQkFBNkI7QUF3Q2hCLFFBQUEsV0FBVyxHQUFjO0lBQ3BDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFVBQVUsRUFBRSxNQUFNO0NBQ25CLENBQUM7QUFjRjtJQWdpQkU7UUF6aEJBLFNBQUksR0FBRyxZQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO1FBSzVCLGlCQUFZLEdBQUcsV0FBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQU14QyxlQUFVLEdBQUcsWUFBWSxFQUFFLENBQUM7UUFPNUIsVUFBSyxHQUFHLFlBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUM7UUFPL0IsY0FBUyxHQUFHLFlBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUM7UUFPdEMsa0JBQWEsR0FBRyxZQUFJLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDO1FBTTlDLGlCQUFZLEdBQUcsYUFBYSxDQUFDO1FBQzdCLG9CQUFlLEdBQUcsVUFBVSxDQUFDO1FBUTdCLGFBQVEsR0FBRyxZQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDO1FBTS9CLGFBQVEsR0FBRyxLQUFLLENBQUMsV0FBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFPNUQseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBTzdCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBT3ZCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQVc3QiwyQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFPM0Isa0JBQWEsR0FBRyxZQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDO1FBT3JDLGVBQVUsR0FBRyxZQUFJLENBQUMs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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgc2xhc2ggZnJvbSAnc2xhc2gnO1xuaW1wb3J0IHsgYXJndiB9IGZyb20gJ3lhcmdzJztcblxuaW1wb3J0IHsgQnVpbGRUeXBlLCBFeHRlbmRQYWNrYWdlcywgSW5qZWN0YWJsZURlcGVuZGVuY3kgfSBmcm9tICcuL3NlZWQuY29uZmlnLmludGVyZmFjZXMnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiBETyBOT1QgQ0hBTkdFICoqKioqKioqKioqKioqKioqKioqKioqKlxuICpcbiAqIERPIE5PVCBtYWtlIGFueSBjaGFuZ2VzIGluIHRoaXMgZmlsZSBiZWNhdXNlIGl0IHdpbGxcbiAqIG1ha2UgeW91ciBtaWdyYXRpb24gdG8gbmV3ZXIgdmVyc2lvbnMgb2YgdGhlIHNlZWQgaGFyZGVyLlxuICpcbiAqIFlvdXIgYXBwbGljYXRpb24tc3BlY2lmaWMgY29uZmlndXJhdGlvbnMgc2hvdWxkIGJlXG4gKiBpbiBwcm9qZWN0LmNvbmZpZy50cy4gSWYgeW91IG5lZWQgdG8gY2hhbmdlIGFueSB0YXNrc1xuICogZnJvbSBcIi4vdGFza3NcIiBvdmVyd3JpdGUgdGhlbSBieSBjcmVhdGluZyBhIHRhc2sgd2l0aCB0aGVcbiAqIHNhbWUgbmFtZSBpbiBcIi4vcHJvamVjdHNcIi4gRm9yIGZ1cnRoZXIgaW5mb3JtYXRpb24gdGFrZSBhXG4gKiBsb29rIGF0IHRoZSBkb2N1bWVudGF0aW9uOlxuICpcbiAqIDEpIGh0dHBzOi8vZ2l0aHViLmNvbS9tZ2VjaGV2L2FuZ3VsYXItc2VlZC90cmVlL21hc3Rlci90b29sc1xuICogMikgaHR0cHM6Ly9naXRodWIuY29tL21nZWNoZXYvYW5ndWxhci1zZWVkL3dpa2lcbiAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqIERPIE5PVCBDSEFOR0UgKioqKioqKioqKioqKioqKioqKioqKioqXG4gKlxuICogRE8gTk9UIG1ha2UgYW55IGNoYW5nZXMgaW4gdGhpcyBmaWxlIGJlY2F1c2UgaXQgd2lsbFxuICogbWFrZSB5b3VyIG1pZ3JhdGlvbiB0byBuZXdlciB2ZXJzaW9ucyBvZiB0aGUgc2VlZCBoYXJkZXIuXG4gKlxuICogWW91ciBhcHBsaWNhdGlvbi1zcGVjaWZpYyBjb25maWd1cmF0aW9ucyBzaG91bGQgYmVcbiAqIGluIHByb2plY3QuY29uZmlnLnRzLiBJZiB5b3UgbmVlZCB0byBjaGFuZ2UgYW55IHRhc2tzXG4gKiBmcm9tIFwiLi90YXNrc1wiIG92ZXJ3cml0ZSB0aGVtIGJ5IGNyZWF0aW5nIGEgdGFzayB3aXRoIHRoZVxuICogc2FtZSBuYW1lIGluIFwiLi9wcm9qZWN0c1wiLiBGb3IgZnVydGhlciBpbmZvcm1hdGlvbiB0YWtlIGFcbiAqIGxvb2sgYXQgdGhlIGRvY3VtZW50YXRpb246XG4gKlxuICogMSkgaHR0cHM6Ly9naXRodWIuY29tL21nZWNoZXYvYW5ndWxhci1zZWVkL3RyZWUvbWFzdGVyL3Rvb2xzXG4gKiAyKSBodHRwczovL2dpdGh1Yi5jb20vbWdlY2hldi9hbmd1bGFyLXNlZWQvd2lraVxuICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBUaGUgZW51bWVyYXRpb24gb2YgYXZhaWxhYmxlIGVudmlyb25tZW50cy5cbiAqIEB0eXBlIHtFbnZpcm9ubWVudHN9XG4gKi9cbmV4cG9ydCBjb25zdCBCVUlMRF9UWVBFUzogQnVpbGRUeXBlID0ge1xuICBERVZFTE9QTUVOVDogJ2RldicsXG4gIFBST0RVQ1RJT046ICdwcm9kJ1xufTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGJhc2ljIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHNlZWQuXG4gKiBJdCBwcm92aWRlcyB0aGUgZm9sbG93aW5nOlxuICogLSBDb25zdGFudHMgZm9yIGRpcmVjdG9yaWVzLCBwb3J0cywgdmVyc2lvbnMgZXRjLlxuICogLSBJbmplY3RhYmxlIE5QTSBkZXBlbmRlbmNpZXNcbiAqIC0gSW5qZWN0YWJsZSBhcHBsaWNhdGlvbiBhc3NldHNcbiAqIC0gVGVtcG9yYXJ5IGVkaXRvciBmaWxlcyB0byBiZSBpZ25vcmVkIGJ5IHRoZSB3YXRjaGVyIGFuZCBhc3NldCBidWlsZGVyXG4gKiAtIFN5c3RlbUpTIGNvbmZpZ3VyYXRpb25cbiAqIC0gQXV0b3ByZWZpeGVyIGNvbmZpZ3VyYXRpb25cbiAqIC0gQnJvd3NlclN5bmMgY29uZmlndXJhdGlvblxuICogLSBVdGlsaXRpZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFNlZWRDb25maWcge1xuXG4gIC8qKlxuICAgKiBUaGUgcG9ydCB3aGVyZSB0aGUgYXBwbGljYXRpb24gd2lsbCBydW4uXG4gICAqIFRoZSBkZWZhdWx0IHBvcnQgaXMgYDU1NTVgLCB3aGljaCBjYW4gYmUgb3ZlcnJpZGVuIGJ5IHRoZSAgYC0tcG9ydGAgZmxhZyB3aGVuIHJ1bm5pbmcgYG5wbSBzdGFydGAuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBQT1JUID0gYXJndlsncG9ydCddIHx8IDU1NTU7XG5cbiAgLyoqXG4gICAqIFRoZSByb290IGZvbGRlciBvZiB0aGUgcHJvamVjdCAodXAgdHdvIGxldmVscyBmcm9tIHRoZSBjdXJyZW50IGRpcmVjdG9yeSkuXG4gICAqL1xuICBQUk9KRUNUX1JPT1QgPSBqb2luKF9fZGlybmFtZSwgJy4uLy4uJyk7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IGJ1aWxkIHR5cGUuXG4gICAqIFRoZSBkZWZhdWx0IGJ1aWxkIHR5cGUgaXMgYGRldmAsIHdoaWNoIGNhbiBiZSBvdmVycmlkZW4gYnkgdGhlIGAtLWJ1aWxkLXR5cGUgZGV2fHByb2RgIGZsYWcgd2hlbiBydW5uaW5nIGBucG0gc3RhcnRgLlxuICAgKi9cbiAgQlVJTERfVFlQRSA9IGdldEJ1aWxkVHlwZSgpO1xuXG4gIC8qKlxuICAgKiBUaGUgZmxhZyBmb3IgdGhlIGRlYnVnIG9wdGlvbiBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAsIHdoaWNoIGNhbiBiZSBvdmVycmlkZW4gYnkgdGhlIGAtLWRlYnVnYCBmbGFnIHdoZW4gcnVubmluZyBgbnBtIHN0YXJ0YC5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBERUJVRyA9IGFyZ3ZbJ2RlYnVnJ10gfHwgZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3J0IHdoZXJlIHRoZSBkb2N1bWVudGF0aW9uIGFwcGxpY2F0aW9uIHdpbGwgcnVuLlxuICAgKiBUaGUgZGVmYXVsdCBkb2NzIHBvcnQgaXMgYDQwMDNgLCB3aGljaCBjYW4gYmUgb3ZlcnJpZGVuIGJ5IHRoZSBgLS1kb2NzLXBvcnRgIGZsYWcgd2hlbiBydW5uaW5nIGBucG0gc3RhcnRgLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRE9DU19QT1JUID0gYXJndlsnZG9jcy1wb3J0J10gfHwgNDAwMztcblxuICAvKipcbiAgICogVGhlIHBvcnQgd2hlcmUgdGhlIHVuaXQgdGVzdCBjb3ZlcmFnZSByZXBvcnQgYXBwbGljYXRpb24gd2lsbCBydW4uXG4gICAqIFRoZSBkZWZhdWx0IGNvdmVyYWdlIHBvcnQgaXMgYDQwMDRgLCB3aGljaCBjYW4gYnkgb3ZlcnJpZGVuIGJ5IHRoZSBgLS1jb3ZlcmFnZS1wb3J0YCBmbGFnIHdoZW4gcnVubmluZyBgbnBtIHN0YXJ0YC5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIENPVkVSQUdFX1BPUlQgPSBhcmd2Wydjb3ZlcmFnZS1wb3J0J10gfHwgNDAwNDtcblxuICAvKipcbiAgKiBUaGUgcGF0aCB0byB0aGUgY292ZXJhZ2Ugb3V0cHV0XG4gICogTkI6IHRoaXMgbXVzdCBtYXRjaCB3aGF0IGlzIGNvbmZpZ3VyZWQgaW4gLi9rYXJtYS5jb25mLmpzXG4gICovXG4gIENPVkVSQUdFX0RJUiA9ICdjb3ZlcmFnZV9qcyc7XG4gIENPVkVSQUdFX1RTX0RJUiA9ICdjb3ZlcmFnZSc7XG5cbiAgLyoqXG4gICAqIFRoZSBwYXRoIGZvciB0aGUgYmFzZSBvZiB0aGUgYXBwbGljYXRpb24gYXQgcnVudGltZS5cbiAgICogVGhlIGRlZmF1bHQgcGF0aCBpcyBiYXNlZCBvbiB0aGUgZW52aXJvbm1lbnQgJy8nLFxuICAgKiB3aGljaCBjYW4gYmUgb3ZlcnJpZGVuIGJ5IHRoZSBgLS1iYXNlYCBmbGFnIHdoZW4gcnVubmluZyBgbnBtIHN0YXJ0YC5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEFQUF9CQVNFID0gYXJndlsnYmFzZSddIHx8ICcvJztcblxuICAvKipcbiAgICogVGhlIGJhc2UgcGF0aCBvZiBub2RlIG1vZHVsZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBOUE1fQkFTRSA9IHNsYXNoKGpvaW4oJy4nLCB0aGlzLkFQUF9CQVNFLCAnbm9kZV9tb2R1bGVzLycpKTtcblxuICAvKipcbiAgICogVGhlIGZsYWcgZm9yIHRoZSB0YXJnZXRpbmcgb2YgbW9iaWxlIGh5YnJpZCBvcHRpb24gb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBQZXIgZGVmYXVsdCB0aGUgb3B0aW9uIGlzIGZhbHNlIGFuZCBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBidXQgbWF5IGJlIGluIHRoZSBmdXR1cmUuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgVEFSR0VUX01PQklMRV9IWUJSSUQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGZsYWcgZm9yIHRoZSB0YXJnZXRpbmcgb2YgZGVza3RvcCBvcHRpb24gb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBQZXIgZGVmYXVsdCB0aGUgb3B0aW9uIGlzIGZhbHNlLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIFRBUkdFVF9ERVNLVE9QID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBmbGFnIGZvciB0aGUgdGFyZ2V0aW5nIG9mIGRlc2t0b3AgYnVpbGQgb3B0aW9uIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogUGVyIGRlZmF1bHQgdGhlIG9wdGlvbiBpcyBmYWxzZS5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBUQVJHRVRfREVTS1RPUF9CVUlMRCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgYnVpbGQgaW50ZXJ2YWwgd2hpY2ggd2lsbCBmb3JjZSB0aGUgVHlwZVNjcmlwdCBjb21waWxlciB0byBwZXJmb3JtIGEgdHlwZWQgY29tcGlsZSBydW4uXG4gICAqIEJldHdlZW4gdGhlIHR5cGVkIHJ1bnMsIGEgdHlwZWxlc3MgY29tcGlsZSBpcyBydW4sIHdoaWNoIGlzIHR5cGljYWxseSBtdWNoIGZhc3Rlci5cbiAgICogRm9yIGV4YW1wbGUsIGlmIHNldCB0byA1LCB0aGUgaW5pdGlhbCBjb21waWxlIHdpbGwgYmUgdHlwZWQsIGZvbGxvd2VkIGJ5IDUgdHlwZWxlc3MgcnVucyxcbiAgICogdGhlbiBhbm90aGVyIHR5cGVkIHJ1biwgYW5kIHNvIG9uLlxuICAgKiBJZiBhIGNvbXBpbGUgZXJyb3IgaXMgZW5jb3VudGVyZWQsIHRoZSBidWlsZCB3aWxsIHVzZSB0eXBlZCBjb21waWxhdGlvbiB1bnRpbCB0aGUgZXJyb3IgaXMgcmVzb2x2ZWQuXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGAwYCwgbWVhbmluZyB0eXBlZCBjb21waWxhdGlvbiB3aWxsIGFsd2F5cyBiZSBwZXJmb3JtZWQuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBUWVBFRF9DT01QSUxFX0lOVEVSVkFMID0gMDtcblxuICAvKipcbiAgICogVGhlIGRpcmVjdG9yeSB3aGVyZSB0aGUgYm9vdHN0cmFwIGZpbGUgaXMgbG9jYXRlZC5cbiAgICogVGhlIGRlZmF1bHQgZGlyZWN0b3J5IGlzIGBhcHBgLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQk9PVFNUUkFQX0RJUiA9IGFyZ3ZbJ2FwcCddIHx8ICdhcHAnO1xuXG4gIC8qKlxuICAgKiBUaGUgZGlyZWN0b3J5IHdoZXJlIHRoZSBjbGllbnQgZmlsZXMgYXJlIGxvY2F0ZWQuXG4gICAqIFRoZSBkZWZhdWx0IGRpcmVjdG9yeSBpcyBgY2xpZW50YC5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEFQUF9DTElFTlQgPSBhcmd2WydjbGllbnQnXSB8fCAnY2xpZW50JztcblxuICAvKipcbiAgICogVGhlIGJvb3RzdHJhcCBmaWxlIHRvIGJlIHVzZWQgdG8gYm9vdCB0aGUgYXBwbGljYXRpb24uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBCT09UU1RSQVBfTU9EVUxFID0gYCR7dGhpcy5CT09UU1RSQVBfRElSfS9tYWluYDtcblxuICBCT09UU1RSQVBfUFJPRF9NT0RVTEUgPSBgJHt0aGlzLkJPT1RTVFJBUF9ESVJ9L2AgKyAnbWFpbic7XG5cbiAgTkdfRkFDVE9SWV9GSUxFID0gJ21haW4tcHJvZCc7XG5cbiAgQk9PVFNUUkFQX0ZBQ1RPUllfUFJPRF9NT0RVTEUgPSBgJHt0aGlzLkJPT1RTVFJBUF9ESVJ9LyR7dGhpcy5OR19GQUNUT1JZX0ZJTEV9YDtcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHRpdGxlIG9mIHRoZSBhcHBsaWNhdGlvbiBhcyB1c2VkIGluIHRoZSBgPHRpdGxlPmAgdGFnIG9mIHRoZVxuICAgKiBgaW5kZXguaHRtbGAuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBBUFBfVElUTEUgPSAnV2VsY29tZSB0byBhbmd1bGFyLXNlZWQhJztcblxuICAvKipcbiAgICogVGhlIGJhc2UgZm9sZGVyIG9mIHRoZSBhcHBsaWNhdGlvbnMgc291cmNlIGZpbGVzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQVBQX1NSQyA9IGBzcmMvJHt0aGlzLkFQUF9DTElFTlR9YDtcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIFR5cGVTY3JpcHQgcHJvamVjdCBmaWxlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBBUFBfUFJPSkVDVE5BTUUgPSAndHNjb25maWcuanNvbic7XG5cbiAgLyoqXG4gICAqIFRoZSBmb2xkZXIgb2YgdGhlIGFwcGxpY2F0aW9ucyBhc3NldCBmaWxlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEFTU0VUU19TUkMgPSBgJHt0aGlzLkFQUF9TUkN9L2Fzc2V0c2A7XG5cbiAgLyoqXG4gICAqIFRoZSBmb2xkZXIgb2YgdGhlIGFwcGxpY2F0aW9ucyBjc3MgZmlsZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBDU1NfU1JDID0gYCR7dGhpcy5BUFBfU1JDfS9jc3NgO1xuXG4gIC8qKlxuICAgKiBUaGUgZm9sZGVyIG9mIHRoZSBlMmUgc3BlY3MgYW5kIGZyYW1ld29ya1xuICAgKi9cbiAgRTJFX1NSQyA9ICdzcmMvZTJlJztcblxuICAvKipcbiAgICogVGhlIGZvbGRlciBvZiB0aGUgYXBwbGljYXRpb25zIHNjc3MgZmlsZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBTQ1NTX1NSQyA9IGAke3RoaXMuQVBQX1NSQ30vc2Nzc2A7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rvcnkgb2YgdGhlIGFwcGxpY2F0aW9ucyB0b29sc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgVE9PTFNfRElSID0gJ3Rvb2xzJztcblxuICAvKipcbiAgICogVGhlIGRpcmVjdG9yeSBvZiB0aGUgdGFza3MgcHJvdmlkZWQgYnkgdGhlIHNlZWQuXG4gICAqL1xuICBTRUVEX1RBU0tTX0RJUiA9IGpvaW4ocHJvY2Vzcy5jd2QoKSwgdGhpcy5UT09MU19ESVIsICd0YXNrcycsICdzZWVkJyk7XG5cbiAgLyoqXG4gICAqIFNlZWQgdGFza3Mgd2hpY2ggYXJlIGNvbXBvc2l0aW9uIG9mIG90aGVyIHRhc2tzLlxuICAgKi9cbiAgU0VFRF9DT01QT1NJVEVfVEFTS1MgPSBqb2luKHByb2Nlc3MuY3dkKCksIHRoaXMuVE9PTFNfRElSLCAnY29uZmlnJywgJ3NlZWQudGFza3MuanNvbicpO1xuXG4gIC8qKlxuICAgKiBQcm9qZWN0IHRhc2tzIHdoaWNoIGFyZSBjb21wb3NpdGlvbiBvZiBvdGhlciB0YXNrc1xuICAgKiBhbmQgYWltIHRvIG92ZXJyaWRlIHRoZSB0YXNrcyBkZWZpbmVkIGluXG4gICAqIFNFRURfQ09NUE9TSVRFX1RBU0tTLlxuICAgKi9cbiAgUFJPSkVDVF9DT01QT1NJVEVfVEFTS1MgPSBqb2luKHByb2Nlc3MuY3dkKCksIHRoaXMuVE9PTFNfRElSLCAnY29uZmlnJywgJ3Byb2plY3QudGFza3MuanNvbicpO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVzdGluYXRpb24gZm9sZGVyIGZvciB0aGUgZ2VuZXJhdGVkIGRvY3VtZW50YXRpb24uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBET0NTX0RFU1QgPSAnZG9jcyc7XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGZvbGRlciBmb3IgYnVpbHQgZmlsZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBESVNUX0RJUiA9ICdkaXN0JztcblxuICAvKipcbiAgICogVGhlIGZvbGRlciBmb3IgYnVpbHQgZmlsZXMgaW4gdGhlIGBkZXZgIGVudmlyb25tZW50LlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgREVWX0RFU1QgPSBgJHt0aGlzLkRJU1RfRElSfS9kZXZgO1xuXG4gIC8qKlxuICAgKiBUaGUgZm9sZGVyIGZvciB0aGUgYnVpbHQgZmlsZXMgaW4gdGhlIGBwcm9kYCBlbnZpcm9ubWVudC5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIFBST0RfREVTVCA9IGAke3RoaXMuRElTVF9ESVJ9L3Byb2RgO1xuXG4gIC8qKlxuICAgKiBUaGUgZm9sZGVyIGZvciB0aGUgYnVpbHQgZmlsZXMgb2YgdGhlIGUyZS1zcGVjcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEUyRV9ERVNUID0gYCR7dGhpcy5ESVNUX0RJUn0vZTJlYDtcblxuICAvKipcbiAgICogVGhlIGZvbGRlciBmb3IgdGVtcG9yYXJ5IGZpbGVzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgVE1QX0RJUiA9IGAke3RoaXMuRElTVF9ESVJ9L3RtcGA7XG5cbiAgLyoqXG4gICAqIFRoZSBmb2xkZXIgZm9yIHRoZSBidWlsdCBmaWxlcywgY29ycmVzcG9uZGluZyB0byB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEFQUF9ERVNUID0gdGhpcy5CVUlMRF9UWVBFID09PSBCVUlMRF9UWVBFUy5ERVZFTE9QTUVOVCA/IHRoaXMuREVWX0RFU1QgOiB0aGlzLlBST0RfREVTVDtcblxuICAvKipcbiAgICogVGhlIGZvbGRlciBmb3IgdGhlIGJ1aWx0IENTUyBmaWxlcy5cbiAgICogQHR5cGUge3N0cmluZ3N9XG4gICAqL1xuICBDU1NfREVTVCA9IGAke3RoaXMuQVBQX0RFU1R9L2Nzc2A7XG5cbiAgLyoqXG4gICAqIFRoZSBmb2xkZXIgZm9yIHRoZSBidWlsdCBKYXZhU2NyaXB0IGZpbGVzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgSlNfREVTVCA9IGAke3RoaXMuQVBQX0RFU1R9L2pzYDtcblxuICAvKipcbiAgICogVGhlIHZlcnNpb24gb2YgdGhlIGFwcGxpY2F0aW9uIGFzIGRlZmluZWQgaW4gdGhlIGBwYWNrYWdlLmpzb25gLlxuICAgKi9cbiAgVkVSU0lPTiA9IGFwcFZlcnNpb24oKTtcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGJ1bmRsZSBmaWxlIHRvIGluY2x1ZGVzIGFsbCBDU1MgZmlsZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBDU1NfUFJPRF9CVU5ETEUgPSAnbWFpbi5jc3MnO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgYnVuZGxlIGZpbGUgdG8gaW5jbHVkZSBhbGwgSmF2YVNjcmlwdCBzaGltcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEpTX1BST0RfU0hJTVNfQlVORExFID0gJ3NoaW1zLmpzJztcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGJ1bmRsZSBmaWxlIHRvIGluY2x1ZGUgYWxsIEphdmFTY3JpcHQgYXBwbGljYXRpb24gZmlsZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBKU19QUk9EX0FQUF9CVU5ETEUgPSAnYXBwLmpzJztcblxuICAvKipcbiAgICogVGhlIHJlcXVpcmVkIE5QTSB2ZXJzaW9uIHRvIHJ1biB0aGUgYXBwbGljYXRpb24uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBWRVJTSU9OX05QTSA9ICczLjAuMCc7XG5cbiAgLyoqXG4gICAqIFRoZSByZXF1aXJlZCBOb2RlSlMgdmVyc2lvbiB0byBydW4gdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgVkVSU0lPTl9OT0RFID0gJzUuMC4wJztcblxuICAvKipcbiAgICogRW5hYmxlIFNDU1Mgc3R5bGVzaGVldCBjb21waWxhdGlvbi5cbiAgICogU2V0IEVOQUJMRV9TQ1NTIGVudmlyb25tZW50IHZhcmlhYmxlIHRvICd0cnVlJyBvciAnMSdcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBFTkFCTEVfU0NTUyA9IFsndHJ1ZScsICcxJ10uaW5kZXhPZihgJHtwcm9jZXNzLmVudi5FTkFCTEVfU0NTU31gLnRvTG93ZXJDYXNlKCkpICE9PSAtMSB8fCBhcmd2WydzY3NzJ10gfHwgZmFsc2U7XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0c2xpbnQgZW1pdCBlcnJvciBieSBzZXR0aW5nIGVudiB2YXJpYWJsZSBGT1JDRV9UU0xJTlRfRU1JVF9FUlJPUlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEZPUkNFX1RTTElOVF9FTUlUX0VSUk9SID0gISFwcm9jZXNzLmVudi5GT1JDRV9UU0xJTlRfRU1JVF9FUlJPUjtcblxuICAvKipcbiAgICogRXh0cmEgcGF0aHMgZm9yIHRoZSBndWxwIHByb2Nlc3MgdG8gd2F0Y2ggZm9yIHRvIHRyaWdnZXIgY29tcGlsYXRpb24uXG4gICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICovXG4gIEVYVFJBX1dBVENIX1BBVEhTOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBOUE0gZGVwZW5kY2llcyB0byBiZSBpbmplY3RlZCBpbiB0aGUgYGluZGV4Lmh0bWxgLlxuICAgKiBAdHlwZSB7SW5qZWN0YWJsZURlcGVuZGVuY3lbXX1cbiAgICovXG4gIE5QTV9ERVBFTkRFTkNJRVM6IEluamVjdGFibGVEZXBlbmRlbmN5W10gPSBbXG4gICAgeyBzcmM6ICdjb3JlLWpzL2NsaWVudC9zaGltLm1pbi5qcycsIGluamVjdDogJ3NoaW1zJyB9LFxuICAgIHsgc3JjOiAnem9uZS5qcy9kaXN0L3pvbmUuanMnLCBpbmplY3Q6ICdsaWJzJyB9LFxuICAgIHsgc3JjOiAnem9uZS5qcy9kaXN0L2xvbmctc3RhY2stdHJhY2Utem9uZS5qcycsIGluamVjdDogJ2xpYnMnLCBidWlsZFR5cGU6IEJVSUxEX1RZUEVTLkRFVkVMT1BNRU5UIH0sXG4gICAgeyBzcmM6ICdpbnRsL2Rpc3QvSW50bC5taW4uanMnLCBpbmplY3Q6ICdzaGltcycgfSxcbiAgICB7IHNyYzogJ3N5c3RlbWpzL2Rpc3Qvc3lzdGVtLnNyYy5qcycsIGluamVjdDogJ3NoaW1zJywgYnVpbGRUeXBlOiBCVUlMRF9UWVBFUy5ERVZFTE9QTUVOVCB9LFxuICAgIC8vIFRlbXBvcmFyeSBmaXguIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy85MzU5XG4gICAgeyBzcmM6ICcudG1wL1J4Lm1pbi5qcycsIGluamVjdDogJ2xpYnMnLCBidWlsZFR5cGU6IEJVSUxEX1RZUEVTLkRFVkVMT1BNRU5UIH0sXG4gIF07XG5cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIGxvY2FsIGZpbGVzIHRvIGJlIGluamVjdGVkIGluIHRoZSBgaW5kZXguaHRtbGAuXG4gICAqIEB0eXBlIHtJbmplY3RhYmxlRGVwZW5kZW5jeVtdfVxuICAgKi9cbiAgQVBQX0FTU0VUUzogSW5qZWN0YWJsZURlcGVuZGVuY3lbXSA9IFtcbiAgICB7IHNyYzogYCR7dGhpcy5DU1NfU1JDfS9tYWluLiR7dGhpcy5nZXRJbmplY3RhYmxlU3R5bGVFeHRlbnNpb24oKX1gLCBpbmplY3Q6IHRydWUsIHZlbmRvcjogZmFsc2UgfSxcbiAgXTtcblxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgZWRpdG9yIHRlbXBvcmFyeSBmaWxlcyB0byBpZ25vcmUgaW4gd2F0Y2hlciBhbmQgYXNzZXQgYnVpbGRlci5cbiAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgKi9cbiAgVEVNUF9GSUxFUzogc3RyaW5nW10gPSBbXG4gICAgJyoqLypfX19qYl90bXBfX18nLFxuICAgICcqKi8qficsXG5cbiAgICAvLyB0bnMtZmlsZXMgYXJlIGlnbm9yZWQgYXN3ZWxsXG4gICAgJyoqLyoudG5zLnNjc3MnLFxuICAgICcqKi8qLnRucy5jc3MnLFxuICAgICcqKi8qLnRucy5odG1sJyxcbiAgICAnc3JjLyoqLyouanMnLFxuICAgICdzcmMvKiovKi5qcy5tYXAnLFxuICBdO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhcnJheSBvZiBpbmplY3RhYmxlIGRlcGVuZGVuY2llcyAobnBtIGRlcGVuZGVuY2llcyBhbmQgYXNzZXRzKS5cbiAgICogQHJldHVybiB7SW5qZWN0YWJsZURlcGVuZGVuY3lbXX0gVGhlIGFycmF5IG9mIG5wbSBkZXBlbmRlbmNpZXMgYW5kIGFzc2V0cy5cbiAgICovXG4gIGdldCBERVBFTkRFTkNJRVMoKTogSW5qZWN0YWJsZURlcGVuZGVuY3lbXSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZURlcGVuZGVuY2llcyh0aGlzLk5QTV9ERVBFTkRFTkNJRVMuZmlsdGVyKGZpbHRlckRlcGVuZGVuY3kuYmluZChudWxsLCB0aGlzLkJVSUxEX1RZUEUpKSlcbiAgICAgIC5jb25jYXQodGhpcy5BUFBfQVNTRVRTLmZpbHRlcihmaWx0ZXJEZXBlbmRlbmN5LmJpbmQobnVsbCwgdGhpcy5CVUlMRF9UWVBFKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmF0aW9uIG9mIFN5c3RlbUpTIGZvciB0aGUgYGRldmAgZW52aXJvbm1lbnQuXG4gICAqIEB0eXBlIHthbnl9XG4gICAqL1xuICBTWVNURU1fQ09ORklHX0RFVjogYW55ID0ge1xuICAgIGRlZmF1bHRKU0V4dGVuc2lvbnM6IHRydWUsXG4gICAgcGF0aHM6IHtcbiAgICAgIFt0aGlzLkJPT1RTVFJBUF9NT0RVTEVdOiBgJHt0aGlzLkFQUF9CQVNFfSR7dGhpcy5CT09UU1RSQVBfTU9EVUxFfWAsXG4gICAgICAnQGFuZ3VsYXIvY29tbW9uJzogJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21tb24vYnVuZGxlcy9jb21tb24udW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9jb21waWxlcic6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tcGlsZXIvYnVuZGxlcy9jb21waWxlci51bWQuanMnLFxuICAgICAgJ0Bhbmd1bGFyL2NvcmUnOiAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcycsXG4gICAgICAnQGFuZ3VsYXIvZm9ybXMnOiAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zL2J1bmRsZXMvZm9ybXMudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9odHRwJzogJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMnLFxuICAgICAgJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInOiAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLnVtZC5qcycsXG4gICAgICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJzogJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9yb3V0ZXInOiAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMnLFxuXG4gICAgICAnQGFuZ3VsYXIvY29tbW9uL3Rlc3RpbmcnOiAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbW1vbi9idW5kbGVzL2NvbW1vbi10ZXN0aW5nLnVtZC5qcycsXG4gICAgICAnQGFuZ3VsYXIvY29tcGlsZXIvdGVzdGluZyc6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tcGlsZXIvYnVuZGxlcy9jb21waWxlci10ZXN0aW5nLnVtZC5qcycsXG4gICAgICAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJzogJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS10ZXN0aW5nLnVtZC5qcycsXG4gICAgICAnQGFuZ3VsYXIvaHR0cC90ZXN0aW5nJzogJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC10ZXN0aW5nLnVtZC5qcycsXG4gICAgICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci90ZXN0aW5nJzpcbiAgICAgICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXItdGVzdGluZy51bWQuanMnLFxuICAgICAgJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nJzpcbiAgICAgICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLXRlc3RpbmcudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9yb3V0ZXIvdGVzdGluZyc6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLXRlc3RpbmcudW1kLmpzJyxcblxuICAgICAgJ2FwcC8qJzogJy9hcHAvKicsXG4gICAgICAvLyBGb3IgdGVzdCBjb25maWdcbiAgICAgICdkaXN0L2Rldi8qJzogJy9iYXNlL2Rpc3QvZGV2LyonLFxuICAgICAgJyonOiAnbm9kZV9tb2R1bGVzLyonXG4gICAgfSxcbiAgICBwYWNrYWdlczoge1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyYXRpb24gb2YgU3lzdGVtSlMgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBQZXIgZGVmYXVsdCwgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGBkZXZgIGVudmlyb25tZW50IHdpbGwgYmUgdXNlZC5cbiAgICogQHR5cGUge2FueX1cbiAgICovXG4gIFNZU1RFTV9DT05GSUc6IGFueSA9IHRoaXMuU1lTVEVNX0NPTkZJR19ERVY7XG5cbiAgLyoqXG4gICAqIFRoZSBzeXN0ZW0gYnVpbGRlciBjb25maWd1cmF0aW9uIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogQHR5cGUge2FueX1cbiAgICovXG4gIFNZU1RFTV9CVUlMREVSX0NPTkZJRzogYW55ID0ge1xuICAgIGRlZmF1bHRKU0V4dGVuc2lvbnM6IHRydWUsXG4gICAgYmFzZTogdGhpcy5QUk9KRUNUX1JPT1QsXG4gICAgcGFja2FnZUNvbmZpZ1BhdGhzOiBbXG4gICAgICBqb2luKCdub2RlX21vZHVsZXMnLCAnKicsICdwYWNrYWdlLmpzb24nKSxcbiAgICAgIGpvaW4oJ25vZGVfbW9kdWxlcycsICdAYW5ndWxhcicsICcqJywgJ3BhY2thZ2UuanNvbicpXG4gICAgXSxcbiAgICBwYXRoczoge1xuICAgICAgLy8gTm90ZSB0aGF0IGZvciBtdWx0aXBsZSBhcHBzIHRoaXMgY29uZmlndXJhdGlvbiBuZWVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgIC8vIFlvdSB3aWxsIGhhdmUgdG8gaW5jbHVkZSBlbnRyaWVzIGZvciBlYWNoIGluZGl2aWR1YWwgYXBwbGljYXRpb24gaW5cbiAgICAgIC8vIGBzcmMvY2xpZW50YC5cbiAgICAgIFtqb2luKHRoaXMuVE1QX0RJUiwgJyonKV06IGAke3RoaXMuVE1QX0RJUn0vKmAsXG4gICAgICAnZGlzdC90bXAvbm9kZV9tb2R1bGVzLyonOiAnZGlzdC90bXAvbm9kZV9tb2R1bGVzLyonLFxuICAgICAgJ25vZGVfbW9kdWxlcy8qJzogJ25vZGVfbW9kdWxlcy8qJyxcbiAgICAgICcqJzogJ25vZGVfbW9kdWxlcy8qJ1xuICAgIH0sXG4gICAgcGFja2FnZXM6IHtcbiAgICAgICdAYW5ndWxhci9jb21tb24nOiB7XG4gICAgICAgIG1haW46ICdpbmRleC5qcycsXG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH0sXG4gICAgICAnQGFuZ3VsYXIvY29tcGlsZXInOiB7XG4gICAgICAgIG1haW46ICdpbmRleC5qcycsXG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH0sXG4gICAgICAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJzoge1xuICAgICAgICBtYWluOiAnaW5kZXguanMnLFxuICAgICAgICBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnXG4gICAgICB9LFxuICAgICAgJ0Bhbmd1bGFyL2NvcmUnOiB7XG4gICAgICAgIG1haW46ICdpbmRleC5qcycsXG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH0sXG4gICAgICAnQGFuZ3VsYXIvZm9ybXMnOiB7XG4gICAgICAgIG1haW46ICdpbmRleC5qcycsXG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH0sXG4gICAgICAnQGFuZ3VsYXIvaHR0cCc6IHtcbiAgICAgICAgbWFpbjogJ2luZGV4LmpzJyxcbiAgICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xuICAgICAgfSxcbiAgICAgICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJzoge1xuICAgICAgICBtYWluOiAnaW5kZXguanMnLFxuICAgICAgICBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnXG4gICAgICB9LFxuICAgICAgJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc6IHtcbiAgICAgICAgbWFpbjogJ2luZGV4LmpzJyxcbiAgICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xuICAgICAgfSxcbiAgICAgICdAYW5ndWxhci9yb3V0ZXInOiB7XG4gICAgICAgIG1haW46ICdpbmRleC5qcycsXG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH0sXG4gICAgICAncnhqcyc6IHtcbiAgICAgICAgbWFpbjogJ1J4LmpzJyxcbiAgICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVGhlIEF1dG9wcmVmaXhlciBjb25maWd1cmF0aW9uIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIEJST1dTRVJfTElTVCA9IFtcbiAgICAnaWUgPj0gMTAnLFxuICAgICdpZV9tb2IgPj0gMTAnLFxuICAgICdmZiA+PSAzMCcsXG4gICAgJ2Nocm9tZSA+PSAzNCcsXG4gICAgJ3NhZmFyaSA+PSA3JyxcbiAgICAnb3BlcmEgPj0gMjMnLFxuICAgICdpb3MgPj0gNycsXG4gICAgJ2FuZHJvaWQgPj0gNC40JyxcbiAgICAnYmIgPj0gMTAnXG4gIF07XG5cbiAgLyoqXG4gICAqIFdoaXRlIGxpc3QgZm9yIENTUyBjb2xvciBndWFyZFxuICAgKiBAdHlwZSB7W3N0cmluZywgc3RyaW5nXVtdfVxuICAgKi9cbiAgQ09MT1JfR1VBUkRfV0hJVEVfTElTVDogW3N0cmluZywgc3RyaW5nXVtdID0gW1xuICBdO1xuXG4gIHByb3RlY3RlZCBERVZfUkVXUklURV9SVUxFUyA9IFtcbiAgICB7XG4gICAgICBmcm9tOiAvXlxcL25vZGVfbW9kdWxlc1xcLy4qJC8sXG4gICAgICB0bzogKGNvbnRleHQ6IGFueSkgPT4gY29udGV4dC5wYXJzZWRVcmwucGF0aG5hbWVcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyb206IC9eXFwvYXBwXFwvLiokLyxcbiAgICAgIHRvOiAoY29udGV4dDogYW55KSA9PiBjb250ZXh0LnBhcnNlZFVybC5wYXRobmFtZVxuICAgIH0sXG4gICAge1xuICAgICAgZnJvbTogL15cXC9hc3NldHNcXC8uKiQvLFxuICAgICAgdG86IChjb250ZXh0OiBhbnkpID0+IGNvbnRleHQucGFyc2VkVXJsLnBhdGhuYW1lXG4gICAgfSxcbiAgICB7XG4gICAgICBmcm9tOiAvXlxcL2Nzc1xcLy4qJC8sXG4gICAgICB0bzogKGNvbnRleHQ6IGFueSkgPT4gY29udGV4dC5wYXJzZWRVcmwucGF0aG5hbWVcbiAgICB9XG4gIF07XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb25zIGZvciBOUE0gbW9kdWxlIGNvbmZpZ3VyYXRpb25zLiBBZGQgdG8gb3Igb3ZlcnJpZGUgaW4gcHJvamVjdC5jb25maWcudHMuXG4gICAqIElmIHlvdSBsaWtlLCB1c2UgdGhlIG1lcmdlT2JqZWN0KCkgbWV0aG9kIHRvIGFzc2lzdCB3aXRoIHRoaXMuXG4gICAqL1xuICBQTFVHSU5fQ09ORklHUzogYW55ID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBCcm93c2VyU3luYyBjb25maWd1cmF0aW9uIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKiBUaGUgZGVmYXVsdCBvcGVuIGJlaGF2aW9yIGlzIHRvIG9wZW4gdGhlIGJyb3dzZXIuIFRvIHByZXZlbnQgdGhlIGJyb3dzZXIgZnJvbSBvcGVuaW5nIHVzZSB0aGUgYC0tYmAgIGZsYWcgd2hlblxuICAgICAqIHJ1bm5pbmcgYG5wbSBzdGFydGAgKHRlc3RlZCB3aXRoIHNlcnZlLmRldikuXG4gICAgICogRXhhbXBsZTogYG5wbSBzdGFydCAtLSAtLWJgXG4gICAgICogQHR5cGUge2FueX1cbiAgICAgKi9cbiAgICAnYnJvd3Nlci1zeW5jJzoge1xuICAgICAgbWlkZGxld2FyZTogW3JlcXVpcmUoJ2Nvbm5lY3QtaGlzdG9yeS1hcGktZmFsbGJhY2snKSh7XG4gICAgICAgIGluZGV4OiBgJHt0aGlzLkFQUF9CQVNFfWluZGV4Lmh0bWxgXG4gICAgICB9KV0sXG4gICAgICBwb3J0OiB0aGlzLlBPUlQsXG4gICAgICBzdGFydFBhdGg6IHRoaXMuQVBQX0JBU0UsXG4gICAgICBvcGVuOiBhcmd2WydiJ10gPyBmYWxzZSA6IHRydWUsXG4gICAgICBpbmplY3RDaGFuZ2VzOiBmYWxzZSxcbiAgICAgIHNlcnZlcjoge1xuICAgICAgICBiYXNlRGlyOiBgJHt0aGlzLkRJU1RfRElSfS9lbXB0eS9gLFxuICAgICAgICByb3V0ZXM6IHtcbiAgICAgICAgICBbYCR7dGhpcy5BUFBfQkFTRX0ke3RoaXMuQVBQX1NSQ31gXTogdGhpcy5BUFBfU1JDLFxuICAgICAgICAgIFtgJHt0aGlzLkFQUF9CQVNFfSR7dGhpcy5BUFBfREVTVH1gXTogdGhpcy5BUFBfREVTVCxcbiAgICAgICAgICBbYCR7dGhpcy5BUFBfQkFTRX1ub2RlX21vZHVsZXNgXTogJ25vZGVfbW9kdWxlcycsXG4gICAgICAgICAgW2Ake3RoaXMuQVBQX0JBU0UucmVwbGFjZSgvXFwvJC8sICcnKX1gXTogdGhpcy5BUFBfREVTVFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIE5vdGU6IHlvdSBjYW4gY3VzdG9taXplIHRoZSBsb2NhdGlvbiBvZiB0aGUgZmlsZVxuICAgICdlbnZpcm9ubWVudC1jb25maWcnOiBqb2luKHRoaXMuUFJPSkVDVF9ST09ULCB0aGlzLlRPT0xTX0RJUiwgJ2VudicpLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbnMgdG8gcGFzcyB0byBndWxwLXNhc3MgKGFuZCB0aGVuIHRvIG5vZGUtc2FzcykuXG4gICAgICogUmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3Mjb3B0aW9uc1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgJ2d1bHAtc2Fzcyc6IHtcbiAgICAgIGluY2x1ZGVQYXRoczogWycuL25vZGVfbW9kdWxlcy8nXVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyB0byBwYXNzIHRvIGd1bHAtY29uY2F0LWNzc1xuICAgICAqIFJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL21hcmlvY2FzY2lhcm8vZ3VscC1jb25jYXQtY3NzXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICAnZ3VscC1jb25jYXQtY3NzJzoge1xuICAgICAgdGFyZ2V0RmlsZTogdGhpcy5DU1NfUFJPRF9CVU5ETEUsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHJlYmFzZVVybHM6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGZvciAobGV0IHByb3h5IG9mIHRoaXMuZ2V0UHJveHlNaWRkbGV3YXJlKCkpIHtcbiAgICAgIHRoaXMuUExVR0lOX0NPTkZJR1NbJ2Jyb3dzZXItc3luYyddLm1pZGRsZXdhcmUucHVzaChwcm94eSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwcm94eSBtaWRkbGV3YXJlIGNvbmZpZ3VyYXRpb24uIEFkZCBpbiB5b3VyIHByb2plY3QgY29uZmlnIGxpa2U6XG4gICAqIGdldFByb3h5TWlkZGxld2FyZSgpOiBBcnJheTxhbnk+IHtcbiAgICogICBjb25zdCBwcm94eU1pZGRsZXdhcmUgPSByZXF1aXJlKCdodHRwLXByb3h5LW1pZGRsZXdhcmUnKTtcbiAgICogICByZXR1cm4gW1xuICAgKiAgICAgcHJveHlNaWRkbGV3YXJlKCcvd3MnLCB7XG4gICAqICAgICAgIHdzOiBmYWxzZSxcbiAgICogICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAzJ1xuICAgKiAgICAgfSlcbiAgICogICBdO1xuICAgKiB9XG4gICAqL1xuICBnZXRQcm94eU1pZGRsZXdhcmUoKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEthcm1hIHJlcG9ydGVyIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIGdldEthcm1hUmVwb3J0ZXJzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZXByb2Nlc3NvcnM6IHtcbiAgICAgICAgJ2Rpc3QvKiovISgqc3BlY3xpbmRleHwqLm1vZHVsZXwqLnJvdXRlcykuanMnOiBbJ2NvdmVyYWdlJ11cbiAgICAgIH0sXG4gICAgICByZXBvcnRlcnM6IFsnbW9jaGEnLCAnY292ZXJhZ2UnLCAna2FybWEtcmVtYXAtaXN0YW5idWwnXSxcbiAgICAgIGNvdmVyYWdlUmVwb3J0ZXI6IHtcbiAgICAgICAgZGlyOiB0aGlzLkNPVkVSQUdFX0RJUiArICcvJyxcbiAgICAgICAgcmVwb3J0ZXJzOiBbXG4gICAgICAgICAgeyB0eXBlOiAnanNvbicsIHN1YmRpcjogJy4nLCBmaWxlOiAnY292ZXJhZ2UtZmluYWwuanNvbicgfSxcbiAgICAgICAgICB7IHR5cGU6ICdodG1sJywgc3ViZGlyOiAnLicgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgcmVtYXBJc3RhbmJ1bFJlcG9ydGVyOiB7XG4gICAgICAgIHJlcG9ydHM6IHtcbiAgICAgICAgICBodG1sOiB0aGlzLkNPVkVSQUdFX1RTX0RJUlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgbWVyZ2Ugc291cmNlIG9udG8gdGFyZ2V0LlxuICAgKiBAcGFyYW0ge2FueX0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0ICh0byByZWNlaXZlIHZhbHVlcyBmcm9tIHNvdXJjZSlcbiAgICogQHBhcmFtIHthbnl9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCAodG8gYmUgbWVyZ2VkIG9udG8gdGFyZ2V0KVxuICAgKi9cbiAgbWVyZ2VPYmplY3QodGFyZ2V0OiBhbnksIHNvdXJjZTogYW55KSB7XG4gICAgY29uc3QgZGVlcEV4dGVuZCA9IHJlcXVpcmUoJ2RlZXAtZXh0ZW5kJyk7XG4gICAgZGVlcEV4dGVuZCh0YXJnZXQsIHNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogTG9jYXRlIGEgcGx1Z2luIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGJ5IHBsdWdpbiBrZXkuXG4gICAqIEBwYXJhbSB7YW55fSBwbHVnaW5LZXkgVGhlIG9iamVjdCBrZXkgdG8gbG9vayB1cCBpbiBQTFVHSU5fQ09ORklHUy5cbiAgICovXG4gIGdldFBsdWdpbkNvbmZpZyhwbHVnaW5LZXk6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKHRoaXMuUExVR0lOX0NPTkZJR1NbcGx1Z2luS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuUExVR0lOX0NPTkZJR1NbcGx1Z2luS2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRJbmplY3RhYmxlU3R5bGVFeHRlbnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuQlVJTERfVFlQRSA9PT0gQlVJTERfVFlQRVMuUFJPRFVDVElPTiAmJiB0aGlzLkVOQUJMRV9TQ1NTID8gJ3Njc3MnIDogJ2Nzcyc7XG4gIH1cblxuICBhZGRQYWNrYWdlQnVuZGxlcyhwYWNrOiBFeHRlbmRQYWNrYWdlcykge1xuXG4gICAgaWYgKHBhY2sucGF0aCkge1xuICAgICAgdGhpcy5TWVNURU1fQ09ORklHX0RFVi5wYXRoc1twYWNrLm5hbWVdID0gcGFjay5wYXRoO1xuICAgICAgdGhpcy5TWVNURU1fQlVJTERFUl9DT05GSUcucGF0aHNbcGFjay5uYW1lXSA9IHBhY2sucGF0aDtcbiAgICB9XG5cbiAgICBpZiAocGFjay5wYWNrYWdlTWV0YSkge1xuICAgICAgdGhpcy5TWVNURU1fQ09ORklHX0RFVi5wYWNrYWdlc1twYWNrLm5hbWVdID0gcGFjay5wYWNrYWdlTWV0YTtcbiAgICAgIHRoaXMuU1lTVEVNX0JVSUxERVJfQ09ORklHLnBhY2thZ2VzW3BhY2submFtZV0gPSBwYWNrLnBhY2thZ2VNZXRhO1xuICAgIH1cbiAgfVxuXG4gIGFkZFBhY2thZ2VzQnVuZGxlcyhwYWNrczogRXh0ZW5kUGFja2FnZXNbXSkge1xuXG4gICAgcGFja3MuZm9yRWFjaCgocGFjazogRXh0ZW5kUGFja2FnZXMpID0+IHtcbiAgICAgIHRoaXMuYWRkUGFja2FnZUJ1bmRsZXMocGFjayk7XG4gICAgfSk7XG5cbiAgfVxuXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgZ2l2ZW4gYGRlcHNgIHRvIHNraXAgZ2xvYnMuXG4gKiBAcGFyYW0ge0luamVjdGFibGVEZXBlbmRlbmN5W119IGRlcHMgLSBUaGUgZGVwZW5kZW5jaWVzIHRvIGJlIG5vcm1hbGl6ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVEZXBlbmRlbmNpZXMoZGVwczogSW5qZWN0YWJsZURlcGVuZGVuY3lbXSkge1xuICBkZXBzXG4gICAgLmZpbHRlcigoZDogSW5qZWN0YWJsZURlcGVuZGVuY3kpID0+ICEvXFwqLy50ZXN0KGQuc3JjKSkgLy8gU2tpcCBnbG9ic1xuICAgIC5mb3JFYWNoKChkOiBJbmplY3RhYmxlRGVwZW5kZW5jeSkgPT4gZC5zcmMgPSByZXF1aXJlLnJlc29sdmUoZC5zcmMpKTtcbiAgcmV0dXJuIGRlcHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBpZiB0aGUgZ2l2ZW4gZGVwZW5kZW5jeSBpcyB1c2VkIGluIHRoZSBnaXZlbiBlbnZpcm9ubWVudC5cbiAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgICBlbnYgLSBUaGUgZW52aXJvbm1lbnQgdG8gYmUgZmlsdGVyZWQgZm9yLlxuICogQHBhcmFtICB7SW5qZWN0YWJsZURlcGVuZGVuY3l9IGQgICAtIFRoZSBkZXBlbmRlbmN5IHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgIGB0cnVlYCBpZiB0aGUgZGVwZW5kZW5jeSBpcyB1c2VkIGluIHRoaXMgZW52aXJvbm1lbnQsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBmaWx0ZXJEZXBlbmRlbmN5KHR5cGU6IHN0cmluZywgZDogSW5qZWN0YWJsZURlcGVuZGVuY3kpOiBib29sZWFuIHtcbiAgY29uc3QgdCA9IGQuYnVpbGRUeXBlIHx8IGQuZW52O1xuICBkLmJ1aWxkVHlwZSA9IHQ7XG4gIGlmICghdCkge1xuICAgIGQuYnVpbGRUeXBlID0gT2JqZWN0LmtleXMoQlVJTERfVFlQRVMpLm1hcChrID0+IEJVSUxEX1RZUEVTW2tdKTtcbiAgfVxuICBpZiAoIShkLmJ1aWxkVHlwZSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICg8YW55PmQpLmVudiA9IFtkLmJ1aWxkVHlwZV07XG4gIH1cbiAgcmV0dXJuIGQuYnVpbGRUeXBlLmluZGV4T2YodHlwZSkgPj0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhcHBsaWNhdGlvbnMgdmVyc2lvbiBhcyBkZWZpbmVkIGluIHRoZSBgcGFja2FnZS5qc29uYC5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFwcGxpY2F0aW9ucyB2ZXJzaW9uLlxuICovXG5mdW5jdGlvbiBhcHBWZXJzaW9uKCk6IG51bWJlciB8IHN0cmluZyB7XG4gIHZhciBwa2cgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcbiAgcmV0dXJuIHBrZy52ZXJzaW9uO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGFwcGxpY2F0aW9uIGJ1aWxkIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIGdldEJ1aWxkVHlwZSgpIHtcbiAgbGV0IHR5cGUgPSAoYXJndlsnYnVpbGQtdHlwZSddIHx8IGFyZ3ZbJ2VudiddIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICBsZXQgYmFzZTogc3RyaW5nW10gPSBhcmd2WydfJ107XG4gIGxldCBwcm9kS2V5d29yZCA9ICEhYmFzZS5maWx0ZXIobyA9PiBvLmluZGV4T2YoQlVJTERfVFlQRVMuUFJPRFVDVElPTikgPj0gMCkucG9wKCk7XG4gIGlmICgoYmFzZSAmJiBwcm9kS2V5d29yZCkgfHwgdHlwZSA9PT0gQlVJTERfVFlQRVMuUFJPRFVDVElPTikge1xuICAgIHJldHVybiBCVUlMRF9UWVBFUy5QUk9EVUNUSU9OO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCVUlMRF9UWVBFUy5ERVZFTE9QTUVOVDtcbiAgfVxufVxuIl19