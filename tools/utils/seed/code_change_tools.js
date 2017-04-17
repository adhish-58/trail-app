"use strict";
var browserSync = require("browser-sync");
var config_1 = require("../../config");
var ChangeFileManager = (function () {
    function ChangeFileManager() {
        this._files = [];
        this._pristine = true;
    }
    Object.defineProperty(ChangeFileManager.prototype, "lastChangedFiles", {
        get: function () {
            return this._files.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeFileManager.prototype, "pristine", {
        get: function () {
            return this._pristine;
        },
        enumerable: true,
        configurable: true
    });
    ChangeFileManager.prototype.addFile = function (file) {
        this._pristine = false;
        this._files.push(file);
    };
    ChangeFileManager.prototype.addFiles = function (files) {
        var _this = this;
        files.forEach(function (f) { return _this.addFile(f); });
    };
    ChangeFileManager.prototype.clear = function () {
        this._files = [];
    };
    return ChangeFileManager;
}());
exports.changeFileManager = new ChangeFileManager();
var runServer = function () {
    browserSync.init(config_1.default.getPluginConfig('browser-sync'));
};
var listen = function () {
    runServer();
};
exports.listen = listen;
var changed = function (files) {
    if (!(files instanceof Array)) {
        files = [files];
    }
    browserSync.reload(files);
};
exports.changed = changed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZV9jaGFuZ2VfdG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2RlX2NoYW5nZV90b29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTRDO0FBRzVDLHVDQUFrQztBQUVsQztJQUFBO1FBQ1UsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO0lBc0IzQixDQUFDO0lBcEJDLHNCQUFJLCtDQUFnQjthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVE7YUFBWjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsbUNBQU8sR0FBUCxVQUFRLElBQVk7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxLQUFlO1FBQXhCLGlCQUVDO1FBREMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBRVUsUUFBQSxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFLdkQsSUFBSSxTQUFTLEdBQUc7SUFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFNLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUFDO0FBS0YsSUFBSSxNQUFNLEdBQUc7SUFDWCxTQUFTLEVBQUUsQ0FBQztBQUNkLENBQUMsQ0FBQztBQVlPLHdCQUFNO0FBUGYsSUFBSSxPQUFPLEdBQUcsVUFBQyxLQUFVO0lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFDRCxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQztBQUVlLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYnJvd3NlclN5bmMgZnJvbSAnYnJvd3Nlci1zeW5jJztcbi8vIGltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbmltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQ2hhbmdlRmlsZU1hbmFnZXIge1xuICBwcml2YXRlIF9maWxlczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBfcHJpc3RpbmUgPSB0cnVlO1xuXG4gIGdldCBsYXN0Q2hhbmdlZEZpbGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlcy5zbGljZSgpO1xuICB9XG5cbiAgZ2V0IHByaXN0aW5lKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlzdGluZTtcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJpc3RpbmUgPSBmYWxzZTtcbiAgICB0aGlzLl9maWxlcy5wdXNoKGZpbGUpO1xuICB9XG5cbiAgYWRkRmlsZXMoZmlsZXM6IHN0cmluZ1tdKSB7XG4gICAgZmlsZXMuZm9yRWFjaChmID0+IHRoaXMuYWRkRmlsZShmKSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLl9maWxlcyA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBsZXQgY2hhbmdlRmlsZU1hbmFnZXIgPSBuZXcgQ2hhbmdlRmlsZU1hbmFnZXIoKTtcblxuLyoqXG4gKiBJbml0aWFsaXNlcyBCcm93c2VyU3luYyB3aXRoIHRoZSBjb25maWd1cmF0aW9uIGRlZmluZWQgaW4gc2VlZC5jb25maWcudHMgKG9yIGlmIG92ZXJyaWRlbjogcHJvamVjdC5jb25maWcudHMpLlxuICovXG5sZXQgcnVuU2VydmVyID0gKCkgPT4ge1xuICBicm93c2VyU3luYy5pbml0KENvbmZpZy5nZXRQbHVnaW5Db25maWcoJ2Jyb3dzZXItc3luYycpKTtcbn07XG5cbi8qKlxuICogUnVucyBCcm93c2VyU3luYyBhcyB0aGUgbGlzdGVuaW5nIHByb2Nlc3MgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqL1xubGV0IGxpc3RlbiA9ICgpID0+IHtcbiAgcnVuU2VydmVyKCk7XG59O1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgZmxhZyB0byBtYXJrIHdoaWNoIGZpbGVzIGhhdmUgY2hhbmdlZCBhbmQgcmVsb2FkcyBCcm93c2VyU3luYyBhY2NvcmRpbmdseS5cbiAqL1xubGV0IGNoYW5nZWQgPSAoZmlsZXM6IGFueSkgPT4ge1xuICBpZiAoIShmaWxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIGZpbGVzID0gW2ZpbGVzXTtcbiAgfVxuICBicm93c2VyU3luYy5yZWxvYWQoZmlsZXMpO1xufTtcblxuZXhwb3J0IHsgbGlzdGVuLCBjaGFuZ2VkIH07XG4iXX0=