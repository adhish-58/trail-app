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
var path_1 = require("path");
var seed_advanced_config_1 = require("./seed-advanced.config");
var ProjectConfig = (function (_super) {
    __extends(ProjectConfig, _super);
    function ProjectConfig() {
        var _this = _super.call(this) || this;
        _this.PROJECT_TASKS_DIR = path_1.join(process.cwd(), _this.TOOLS_DIR, 'tasks', 'project');
        _this.APP_TITLE = 'Trail';
        _this.NPM_DEPENDENCIES = _this.NPM_DEPENDENCIES.slice();
        _this.APP_ASSETS = _this.APP_ASSETS.slice();
        var additionalPackages = [{
                name: '@angular/material',
                path: 'node_modules/@angular/material/bundles/material.umd.js'
            }];
        _this.addPackagesBundles(additionalPackages);
        _this.APP_BASE = _this.TARGET_DESKTOP ? '' : '/';
        _this.SYSTEM_CONFIG.paths[_this.BOOTSTRAP_MODULE] = "" + _this.BOOTSTRAP_MODULE;
        return _this;
    }
    return ProjectConfig;
}(seed_advanced_config_1.SeedAdvancedConfig));
exports.ProjectConfig = ProjectConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9qZWN0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZCQUE0QjtBQUM1QiwrREFBNEQ7QUFPNUQ7SUFBbUMsaUNBQWtCO0lBSW5EO1FBQUEsWUFDRSxpQkFBTyxTQWlDUjtRQXBDRCx1QkFBaUIsR0FBRyxXQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBSTFFLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBTXpCLEtBQUksQ0FBQyxnQkFBZ0IsR0FDaEIsS0FBSSxDQUFDLGdCQUFnQixRQUV6QixDQUFDO1FBR0YsS0FBSSxDQUFDLFVBQVUsR0FDVixLQUFJLENBQUMsVUFBVSxRQUduQixDQUFDO1FBSUYsSUFBSSxrQkFBa0IsR0FBcUIsQ0FBQztnQkFDMUMsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsSUFBSSxFQUFFLHdEQUF3RDthQUMvRCxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUk1QyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUMvQyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxLQUFHLEtBQUksQ0FBQyxnQkFBa0IsQ0FBQzs7SUFFL0UsQ0FBQztJQUVILG9CQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUFtQyx5Q0FBa0IsR0F3Q3BEO0FBeENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgU2VlZEFkdmFuY2VkQ29uZmlnIH0gZnJvbSAnLi9zZWVkLWFkdmFuY2VkLmNvbmZpZyc7XG5pbXBvcnQgeyBFeHRlbmRQYWNrYWdlcyB9IGZyb20gJy4vc2VlZC5jb25maWcuaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBleHRlbmRzIHRoZSBiYXNpYyBzZWVkIGNvbmZpZ3VyYXRpb24sIGFsbG93aW5nIGZvciBwcm9qZWN0IHNwZWNpZmljIG92ZXJyaWRlcy4gQSBmZXcgZXhhbXBsZXMgY2FuIGJlIGZvdW5kXG4gKiBiZWxvdy5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb2plY3RDb25maWcgZXh0ZW5kcyBTZWVkQWR2YW5jZWRDb25maWcge1xuXG4gIFBST0pFQ1RfVEFTS1NfRElSID0gam9pbihwcm9jZXNzLmN3ZCgpLCB0aGlzLlRPT0xTX0RJUiwgJ3Rhc2tzJywgJ3Byb2plY3QnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuQVBQX1RJVExFID0gJ1RyYWlsJztcblxuICAgIC8qIEVuYWJsZSB0eXBlbGVzcyBjb21waWxlciBydW5zIChmYXN0ZXIpIGJldHdlZW4gdHlwZWQgY29tcGlsZXIgcnVucy4gKi9cbiAgICAvLyB0aGlzLlRZUEVEX0NPTVBJTEVfSU5URVJWQUwgPSA1O1xuXG4gICAgLy8gQWRkIGBOUE1gIHRoaXJkLXBhcnR5IGxpYnJhcmllcyB0byBiZSBpbmplY3RlZC9idW5kbGVkLlxuICAgIHRoaXMuTlBNX0RFUEVOREVOQ0lFUyA9IFtcbiAgICAgIC4uLnRoaXMuTlBNX0RFUEVOREVOQ0lFUyxcbiAgICAgIC8vIHtzcmM6ICdqcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzJywgaW5qZWN0OiAnbGlicyd9LFxuICAgIF07XG5cbiAgICAvLyBBZGQgYGxvY2FsYCB0aGlyZC1wYXJ0eSBsaWJyYXJpZXMgdG8gYmUgaW5qZWN0ZWQvYnVuZGxlZC5cbiAgICB0aGlzLkFQUF9BU1NFVFMgPSBbXG4gICAgICAuLi50aGlzLkFQUF9BU1NFVFMsXG4gICAgICAvLyB7c3JjOiBgJHt0aGlzLkFQUF9TUkN9L3lvdXItcGF0aC10by1saWIvbGlicy9qcXVlcnktdWkuanNgLCBpbmplY3Q6IHRydWUsIHZlbmRvcjogZmFsc2V9XG4gICAgICAvLyB7c3JjOiBgJHt0aGlzLkNTU19TUkN9L3BhdGgtdG8tbGliL3Rlc3QtbGliLmNzc2AsIGluamVjdDogdHJ1ZSwgdmVuZG9yOiBmYWxzZX0sXG4gICAgXTtcblxuICAgIC8vIEFkZCBwYWNrYWdlcyAoZS5nLiBuZzItdHJhbnNsYXRlKVxuICAgIC8vIG5nMi10cmFuc2xhdGUgaXMgYWxyZWFkeSBhZGRlZCB3aXRoIHRoZSBhZHZhbmNlZCBzZWVkIC0gaGVyZSBmb3IgZXhhbXBsZSBvbmx5XG4gICAgbGV0IGFkZGl0aW9uYWxQYWNrYWdlczogRXh0ZW5kUGFja2FnZXNbXSA9IFt7XG4gICAgICBuYW1lOiAnQGFuZ3VsYXIvbWF0ZXJpYWwnLFxuICAgICAgcGF0aDogJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9idW5kbGVzL21hdGVyaWFsLnVtZC5qcydcbiAgICB9XTtcblxuICAgIHRoaXMuYWRkUGFja2FnZXNCdW5kbGVzKGFkZGl0aW9uYWxQYWNrYWdlcyk7XG5cbiAgICAvKiBBZGQgdG8gb3Igb3ZlcnJpZGUgTlBNIG1vZHVsZSBjb25maWd1cmF0aW9uczogKi9cbiAgICAvLyB0aGlzLm1lcmdlT2JqZWN0KHRoaXMuUExVR0lOX0NPTkZJR1NbJ2Jyb3dzZXItc3luYyddLCB7IGdob3N0TW9kZTogZmFsc2UgfSk7XG4gICAgdGhpcy5BUFBfQkFTRSA9IHRoaXMuVEFSR0VUX0RFU0tUT1AgPyAnJyA6ICcvJztcbiAgICB0aGlzLlNZU1RFTV9DT05GSUcucGF0aHNbdGhpcy5CT09UU1RSQVBfTU9EVUxFXSA9IGAke3RoaXMuQk9PVFNUUkFQX01PRFVMRX1gO1xuXG4gIH1cblxufVxuIl19