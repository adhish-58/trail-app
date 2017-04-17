"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var yargs_1 = require("yargs");
var seed_config_1 = require("./seed.config");
var path = require("path");
var SeedAdvancedConfig = (function (_super) {
    __extends(SeedAdvancedConfig, _super);
    function SeedAdvancedConfig() {
        var _this = _super.call(this) || this;
        _this.TNS_BASE_DIR = 'nativescript';
        _this.srcSubdir = 'src';
        _this.destSubdir = 'app';
        _this.TNS_APP_SRC = _this.TNS_BASE_DIR + "/" + _this.srcSubdir;
        _this.TNS_APP_DEST = _this.TNS_BASE_DIR + "/" + _this.destSubdir;
        _this.TNS_CONFIG = {
            ANALYTICS_TRACKING_ID: '',
        };
        _this.DESKTOP_PACKAGES = [];
        _this.ENABLE_SCSS = true;
        var arg;
        if (yargs_1.argv && yargs_1.argv._) {
            arg = yargs_1.argv._[0];
            if (arg.indexOf('desktop') > -1) {
                _this.TARGET_DESKTOP = true;
                if (arg.indexOf('.mac') > -1 || arg.indexOf('.windows') > -1 || arg.indexOf('.linux') > -1) {
                    _this.TARGET_DESKTOP_BUILD = true;
                }
            }
            else if (arg.indexOf('hybrid') > -1) {
                _this.TARGET_MOBILE_HYBRID = true;
            }
        }
        var bootstrap = 'main.web';
        if (_this.TARGET_MOBILE_HYBRID) {
            bootstrap = 'main.mobile.hybrid';
        }
        if (yargs_1.argv['analytics']) {
            _this.TNS_CONFIG.ANALYTICS_TRACKING_ID = yargs_1.argv['analytics'];
        }
        _this.BOOTSTRAP_DIR = yargs_1.argv['app'] ? (yargs_1.argv['app'] + '/') : '';
        _this.BOOTSTRAP_MODULE = "" + _this.BOOTSTRAP_DIR + bootstrap;
        _this.NG_FACTORY_FILE = bootstrap + ".prod";
        _this.BOOTSTRAP_PROD_MODULE = "" + _this.BOOTSTRAP_DIR + bootstrap;
        _this.BOOTSTRAP_FACTORY_PROD_MODULE = "" + _this.BOOTSTRAP_DIR + bootstrap + ".prod";
        _this.APP_TITLE = 'Angular Seed Advanced';
        _this.APP_BASE = '';
        var additionalPackages = [
            {
                name: 'lodash',
                path: _this.APP_BASE + "node_modules/lodash/lodash.js",
                packageMeta: {
                    main: 'index.js',
                    defaultExtension: 'js'
                }
            },
            {
                name: '@ngrx/core',
                packageMeta: {
                    main: 'bundles/core.umd.js',
                    defaultExtension: 'js'
                }
            },
            {
                name: '@ngrx/store',
                packageMeta: {
                    main: 'bundles/store.umd.js',
                    defaultExtension: 'js'
                }
            },
            {
                name: '@ngrx/effects',
                packageMeta: {
                    main: 'bundles/effects.umd.js',
                    defaultExtension: 'js'
                }
            },
            {
                name: '@ngrx/effects/testing',
                path: _this.APP_BASE + "node_modules/@ngrx/effects/testing/index.js"
            },
            {
                name: '@ngrx/store-devtools',
                packageMeta: {
                    main: 'bundles/store-devtools.umd.js',
                    defaultExtension: 'js'
                }
            },
            {
                name: '@ngx-translate/core',
                packageMeta: {
                    main: 'bundles/core.umd.js',
                    defaultExtension: 'js'
                }
            },
            {
                name: '@ngx-translate/http-loader',
                packageMeta: {
                    main: 'bundles/http-loader.umd.js',
                    defaultExtension: 'js'
                }
            },
            {
                name: 'angulartics2',
                packageMeta: {
                    main: 'dist/index.js',
                    defaultExtension: 'js'
                }
            },
            {
                name: 'angulartics2/dist/providers',
                packageMeta: {
                    main: 'index.js',
                    defaultExtension: 'js'
                }
            },
            {
                name: 'ngrx-store-freeze',
                path: _this.APP_BASE + "node_modules/ngrx-store-freeze/dist/index.js"
            },
            {
                name: 'deep-freeze-strict',
                path: _this.APP_BASE + "node_modules/deep-freeze-strict/index.js"
            }
        ];
        _this.DESKTOP_PACKAGES = _this.DESKTOP_PACKAGES.concat(additionalPackages);
        _this.addPackagesBundles(additionalPackages);
        _this.PLUGIN_CONFIGS['gulp-sass'] = {
            includePaths: [
                './src/client/scss/',
                './node_modules/',
                './'
            ]
        };
        _this.PLUGIN_CONFIGS['gulp-sass-tns'] = {
            includePaths: [
                _this.srcSubdir,
                './node_modules/',
                './node_modules/nativescript-theme-core/scss/'
            ].map(function (dir) { return path.resolve(_this.TNS_BASE_DIR, dir); }),
        };
        _this.SYSTEM_CONFIG.paths[_this.BOOTSTRAP_MODULE] = "" + _this.APP_BASE + _this.BOOTSTRAP_MODULE;
        delete _this.SYSTEM_BUILDER_CONFIG['packageConfigPaths'];
        return _this;
    }
    return SeedAdvancedConfig;
}(seed_config_1.SeedConfig));
exports.SeedAdvancedConfig = SeedAdvancedConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZC1hZHZhbmNlZC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWVkLWFkdmFuY2VkLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE2QjtBQUM3Qiw2Q0FBMkM7QUFDM0MsMkJBQTZCO0FBRzdCO0lBQXdDLHNDQUFVO0lBdUJoRDtRQUFBLFlBQ0UsaUJBQU8sU0EwSlI7UUE3S0Qsa0JBQVksR0FBRyxjQUFjLENBQUM7UUFFOUIsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixpQkFBVyxHQUFNLEtBQUksQ0FBQyxZQUFZLFNBQUksS0FBSSxDQUFDLFNBQVcsQ0FBQztRQUV2RCxrQkFBWSxHQUFNLEtBQUksQ0FBQyxZQUFZLFNBQUksS0FBSSxDQUFDLFVBQVksQ0FBQztRQUV6RCxnQkFBVSxHQUFHO1lBQ1gscUJBQXFCLEVBQUUsRUFBRTtTQUMxQixDQUFDO1FBS0Ysc0JBQWdCLEdBQXFCLEVBQUUsQ0FBQztRQUt0QyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLEdBQVcsQ0FBQztRQUNoQixFQUFFLENBQUMsQ0FBQyxZQUFJLElBQUksWUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsR0FBRyxHQUFHLFlBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUks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QUFDO1FBSTdGLE9BQU8sS0FBSSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLENBQUM7O0lBQzFELENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFuTEQsQ0FBd0Msd0JBQVUsR0FtTGpEO0FBbkxZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFyZ3YgfSBmcm9tICd5YXJncyc7XG5pbXBvcnQgeyBTZWVkQ29uZmlnIH0gZnJvbSAnLi9zZWVkLmNvbmZpZyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgRXh0ZW5kUGFja2FnZXMgfSBmcm9tICcuL3NlZWQuY29uZmlnLmludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgU2VlZEFkdmFuY2VkQ29uZmlnIGV4dGVuZHMgU2VlZENvbmZpZyB7XG4gIC8qKlxuICAgKiBUaGUgYmFzZSBmb2xkZXIgb2YgdGhlIG5hdGl2ZXNjcmlwdCBhcHBsaWNhdGlvbnMgc291cmNlIGZpbGVzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgVE5TX0JBU0VfRElSID0gJ25hdGl2ZXNjcmlwdCc7XG5cbiAgc3JjU3ViZGlyID0gJ3NyYyc7XG4gIGRlc3RTdWJkaXIgPSAnYXBwJztcblxuICBUTlNfQVBQX1NSQyA9IGAke3RoaXMuVE5TX0JBU0VfRElSfS8ke3RoaXMuc3JjU3ViZGlyfWA7XG5cbiAgVE5TX0FQUF9ERVNUID0gYCR7dGhpcy5UTlNfQkFTRV9ESVJ9LyR7dGhpcy5kZXN0U3ViZGlyfWA7XG5cbiAgVE5TX0NPTkZJRyA9IHtcbiAgICBBTkFMWVRJQ1NfVFJBQ0tJTkdfSUQ6ICcnLFxuICB9O1xuXG4gICAvKipcbiAgICogSG9sZHMgYWRkZWQgcGFja2FnZXMgZm9yIGRlc2t0b3AgYnVpbGQuXG4gICAqL1xuICBERVNLVE9QX1BBQ0tBR0VTOiBFeHRlbmRQYWNrYWdlc1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuRU5BQkxFX1NDU1MgPSB0cnVlO1xuXG4gICAgbGV0IGFyZzogc3RyaW5nO1xuICAgIGlmIChhcmd2ICYmIGFyZ3YuXykge1xuICAgICAgYXJnID0gYXJndi5fWzBdO1xuICAgICAgaWYgKGFyZy5pbmRleE9mKCdkZXNrdG9wJykgPiAtMSkge1xuICAgICAgICB0aGlzLlRBUkdFVF9ERVNLVE9QID0gdHJ1ZTtcbiAgICAgICAgaWYgKGFyZy5pbmRleE9mKCcubWFjJykgPiAtMSB8fCBhcmcuaW5kZXhPZignLndpbmRvd3MnKSA+IC0xIHx8IGFyZy5pbmRleE9mKCcubGludXgnKSA+IC0xKSB7XG4gICAgICAgICAgdGhpcy5UQVJHRVRfREVTS1RPUF9CVUlMRCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJnLmluZGV4T2YoJ2h5YnJpZCcpID4gLTEpIHtcbiAgICAgICAgdGhpcy5UQVJHRVRfTU9CSUxFX0hZQlJJRCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBib290c3RyYXAgPSAnbWFpbi53ZWInO1xuICAgIGlmICh0aGlzLlRBUkdFVF9NT0JJTEVfSFlCUklEKSB7XG4gICAgICAvLyBQZXJoYXBzIElvbmljIG9yIENvcmRvdmFcbiAgICAgIC8vIFRoaXMgaXMgbm90IGltcGxlbWVudGVkIGluIHRoZSBzZWVkIGJ1dCBoZXJlIHRvIHNob3cgeW91IHdheSBmb3J3YXJkIGlmIHlvdSB3YW50ZWQgdG8gYWRkXG4gICAgICBib290c3RyYXAgICA9ICdtYWluLm1vYmlsZS5oeWJyaWQnO1xuICAgIH1cblxuICAgIGlmIChhcmd2WydhbmFseXRpY3MnXSkge1xuICAgICAgdGhpcy5UTlNfQ09ORklHLkFOQUxZVElDU19UUkFDS0lOR19JRCA9IGFyZ3ZbJ2FuYWx5dGljcyddO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlIHNlZWQgZGVmYXVsdHNcbiAgICB0aGlzLkJPT1RTVFJBUF9ESVIgPSBhcmd2WydhcHAnXSA/IChhcmd2WydhcHAnXSArICcvJykgOiAnJztcbiAgICB0aGlzLkJPT1RTVFJBUF9NT0RVTEUgPSBgJHt0aGlzLkJPT1RTVFJBUF9ESVJ9JHtib290c3RyYXB9YDtcbiAgICB0aGlzLk5HX0ZBQ1RPUllfRklMRSA9IGAke2Jvb3RzdHJhcH0ucHJvZGA7XG4gICAgdGhpcy5CT09UU1RSQVBfUFJPRF9NT0RVTEUgPSBgJHt0aGlzLkJPT1RTVFJBUF9ESVJ9JHtib290c3RyYXB9YDtcbiAgICB0aGlzLkJPT1RTVFJBUF9GQUNUT1JZX1BST0RfTU9EVUxFID0gYCR7dGhpcy5CT09UU1RSQVBfRElSfSR7Ym9vdHN0cmFwfS5wcm9kYDtcblxuICAgIHRoaXMuQVBQX1RJVExFID0gJ0FuZ3VsYXIgU2VlZCBBZHZhbmNlZCc7XG4gICAgdGhpcy5BUFBfQkFTRSA9ICcnOyAvLyBwYXRocyBtdXN0IHJlbWFpbiByZWxhdGl2ZVxuXG5cbiAgICAvLyBBZHZhbmNlZCBzZWVkIHBhY2thZ2VzXG4gICAgbGV0IGFkZGl0aW9uYWxQYWNrYWdlczogRXh0ZW5kUGFja2FnZXNbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2xvZGFzaCcsXG4gICAgICAgIHBhdGg6IGAke3RoaXMuQVBQX0JBU0V9bm9kZV9tb2R1bGVzL2xvZGFzaC9sb2Rhc2guanNgLFxuICAgICAgICBwYWNrYWdlTWV0YToge1xuICAgICAgICAgIG1haW46ICdpbmRleC5qcycsXG4gICAgICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQG5ncngvY29yZScsXG4gICAgICAgIHBhY2thZ2VNZXRhOiB7XG4gICAgICAgICAgbWFpbjogJ2J1bmRsZXMvY29yZS51bWQuanMnLFxuICAgICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0BuZ3J4L3N0b3JlJyxcbiAgICAgICAgcGFja2FnZU1ldGE6IHtcbiAgICAgICAgICBtYWluOiAnYnVuZGxlcy9zdG9yZS51bWQuanMnLFxuICAgICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0BuZ3J4L2VmZmVjdHMnLFxuICAgICAgICBwYWNrYWdlTWV0YToge1xuICAgICAgICAgIG1haW46ICdidW5kbGVzL2VmZmVjdHMudW1kLmpzJyxcbiAgICAgICAgICBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdAbmdyeC9lZmZlY3RzL3Rlc3RpbmcnLFxuICAgICAgICBwYXRoOiBgJHt0aGlzLkFQUF9CQVNFfW5vZGVfbW9kdWxlcy9AbmdyeC9lZmZlY3RzL3Rlc3RpbmcvaW5kZXguanNgXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQG5ncngvc3RvcmUtZGV2dG9vbHMnLFxuICAgICAgICBwYWNrYWdlTWV0YToge1xuICAgICAgICAgIG1haW46ICdidW5kbGVzL3N0b3JlLWRldnRvb2xzLnVtZC5qcycsXG4gICAgICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQG5neC10cmFuc2xhdGUvY29yZScsXG4gICAgICAgIHBhY2thZ2VNZXRhOiB7XG4gICAgICAgICAgbWFpbjogJ2J1bmRsZXMvY29yZS51bWQuanMnLFxuICAgICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyJyxcbiAgICAgICAgcGFja2FnZU1ldGE6IHtcbiAgICAgICAgICBtYWluOiAnYnVuZGxlcy9odHRwLWxvYWRlci51bWQuanMnLFxuICAgICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2FuZ3VsYXJ0aWNzMicsXG4gICAgICAgIHBhY2thZ2VNZXRhOiB7XG4gICAgICAgICAgbWFpbjogJ2Rpc3QvaW5kZXguanMnLFxuICAgICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2FuZ3VsYXJ0aWNzMi9kaXN0L3Byb3ZpZGVycycsXG4gICAgICAgIHBhY2thZ2VNZXRhOiB7XG4gICAgICAgICAgbWFpbjogJ2luZGV4LmpzJyxcbiAgICAgICAgICBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICduZ3J4LXN0b3JlLWZyZWV6ZScsXG4gICAgICAgIHBhdGg6IGAke3RoaXMuQVBQX0JBU0V9bm9kZV9tb2R1bGVzL25ncngtc3RvcmUtZnJlZXplL2Rpc3QvaW5kZXguanNgXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZGVlcC1mcmVlemUtc3RyaWN0JyxcbiAgICAgICAgcGF0aDogYCR7dGhpcy5BUFBfQkFTRX1ub2RlX21vZHVsZXMvZGVlcC1mcmVlemUtc3RyaWN0L2luZGV4LmpzYFxuICAgICAgfVxuICAgIF07XG5cbiAgICAvKipcbiAgICAgKiBOZWVkIHRvIGR1cGxpY2F0ZSB0aGlzIGluIHRoZSBwcm9qZWN0LmNvbmZpZy50cyB0b1xuICAgICAqIHBpY2sgdXAgcGFja2FnZXMgdGhlcmUgdG9vLlxuICAgICAqL1xuICAgICB0aGlzLkRFU0tUT1BfUEFDS0FHRVMgPSBbXG4gICAgICAuLi50aGlzLkRFU0tUT1BfUEFDS0FHRVMsXG4gICAgICAuLi5hZGRpdGlvbmFsUGFja2FnZXMsXG4gICAgICBdO1xuXG4gICAgdGhpcy5hZGRQYWNrYWdlc0J1bmRsZXMoYWRkaXRpb25hbFBhY2thZ2VzKTtcblxuICAgIC8vIFNldHRpbmdzIGZvciBidWlsZGluZyBzYXNzIChpbmNsdWRlIC4vc3JzL2NsaWVudC9zY3NzIGluIGluY2x1ZGVzKVxuICAgIC8vIE5lZWRlZCBiZWNhdXNlIGZvciBjb21wb25lbnRzIHlvdSBjYW5ub3QgdXNlIC4uLy4uLy4uLyBzeW50YXhcbiAgICB0aGlzLlBMVUdJTl9DT05GSUdTWydndWxwLXNhc3MnXSA9IHtcbiAgICAgIGluY2x1ZGVQYXRoczogW1xuICAgICAgICAnLi9zcmMvY2xpZW50L3Njc3MvJyxcbiAgICAgICAgJy4vbm9kZV9tb2R1bGVzLycsXG4gICAgICAgICcuLydcbiAgICAgIF1cbiAgICB9O1xuXG4gICAgLy8gU2V0dGluZ3MgZm9yIGJ1aWxkaW5nIHNhc3MgZm9yIHRucyBtb2R1bGVzXG4gICAgdGhpcy5QTFVHSU5fQ09ORklHU1snZ3VscC1zYXNzLXRucyddID0ge1xuICAgICAgaW5jbHVkZVBhdGhzOiBbXG4gICAgICAgIHRoaXMuc3JjU3ViZGlyLFxuICAgICAgICAnLi9ub2RlX21vZHVsZXMvJyxcbiAgICAgICAgJy4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL3Njc3MvJ1xuICAgICAgXS5tYXAoKGRpcikgPT4gcGF0aC5yZXNvbHZlKHRoaXMuVE5TX0JBU0VfRElSLCBkaXIpKSxcbiAgICB9O1xuXG4gICAgLy8gRml4IHVwIHBhdGggdG8gYm9vdHN0cmFwIG1vZHVsZVxuICAgIHRoaXMuU1lTVEVNX0NPTkZJRy5wYXRoc1t0aGlzLkJPT1RTVFJBUF9NT0RVTEVdID0gYCR7dGhpcy5BUFBfQkFTRX0ke3RoaXMuQk9PVFNUUkFQX01PRFVMRX1gO1xuXG4gICAgLyoqIFByb2R1Y3Rpb24gKiovXG5cbiAgICBkZWxldGUgdGhpcy5TWVNURU1fQlVJTERFUl9DT05GSUdbJ3BhY2thZ2VDb25maWdQYXRocyddOyAvLyBub3QgYWxsIGxpYnMgYXJlIGRpc3RyaWJ1dGVkIHRoZSBzYW1lXG4gIH1cbn1cbiJdfQ==