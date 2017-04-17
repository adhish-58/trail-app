"use strict";
var util = require("gulp-util");
var yargs_1 = require("yargs");
var path_1 = require("path");
var config_1 = require("../../config");
var TemplateLocalsBuilder = (function () {
    function TemplateLocalsBuilder() {
        this.stringifySystemConfigDev = false;
        this.stringifyEnvConfig = true;
    }
    TemplateLocalsBuilder.prototype.withStringifiedSystemConfigDev = function () {
        this.stringifySystemConfigDev = true;
        return this;
    };
    TemplateLocalsBuilder.prototype.wihtoutStringifiedEnvConfig = function () {
        this.stringifyEnvConfig = false;
        return this;
    };
    TemplateLocalsBuilder.prototype.build = function () {
        var configEnvName = yargs_1.argv['env-config'] || yargs_1.argv['config-env'] || 'dev';
        var configPath = config_1.default.getPluginConfig('environment-config');
        var envOnlyConfig = this.getConfig(configPath, configEnvName);
        var baseConfig = this.getConfig(configPath, 'base');
        if (!envOnlyConfig) {
            throw new Error(configEnvName + ' is an invalid configuration name');
        }
        var envConfig = Object.assign({}, baseConfig, envOnlyConfig);
        var locals = Object.assign({}, config_1.default, { ENV_CONFIG: this.stringifyEnvConfig ? JSON.stringify(envConfig) : envConfig });
        if (this.stringifySystemConfigDev) {
            Object.assign(locals, { SYSTEM_CONFIG_DEV: JSON.stringify(config_1.default.SYSTEM_CONFIG_DEV) });
        }
        return locals;
    };
    TemplateLocalsBuilder.prototype.getConfig = function (path, env) {
        var configPath = path_1.join(path, env);
        var config;
        try {
            config = JSON.parse(JSON.stringify(require(configPath)));
        }
        catch (e) {
            config = null;
            util.log(util.colors.red(e.message));
        }
        return config;
    };
    ;
    return TemplateLocalsBuilder;
}());
exports.TemplateLocalsBuilder = TemplateLocalsBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVfbG9jYWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVtcGxhdGVfbG9jYWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBa0M7QUFDbEMsK0JBQTZCO0FBQzdCLDZCQUE0QjtBQUU1Qix1Q0FBa0M7QUFPbEM7SUFBQTtRQUNVLDZCQUF3QixHQUFHLEtBQUssQ0FBQztRQUNqQyx1QkFBa0IsR0FBRyxJQUFJLENBQUM7SUE2Q3BDLENBQUM7SUEzQ0MsOERBQThCLEdBQTlCO1FBQ0UsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQztRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELDJEQUEyQixHQUEzQjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFHRCxxQ0FBSyxHQUFMO1FBQ0UsSUFBTSxhQUFhLEdBQUcsWUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLFlBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUM7UUFDeEUsSUFBTSxVQUFVLEdBQUcsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNoRSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNoRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLEdBQUcsbUNBQW1DLENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBRUQsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUMzQixnQkFBTSxFQUNOLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUNoRixDQUFDO1FBQ0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUN2RixDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8seUNBQVMsR0FBakIsVUFBa0IsSUFBWSxFQUFFLEdBQVc7UUFDekMsSUFBTSxVQUFVLEdBQUcsV0FBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLE1BQVcsQ0FBQztRQUNoQixJQUFJLENBQUM7WUFDSCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQUEsQ0FBQztJQUNKLDRCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJ2d1bHAtdXRpbCc7XG5pbXBvcnQgeyBhcmd2IH0gZnJvbSAneWFyZ3MnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbi8qKlxuICogQnVpbGRzIGFuIG9iamVjdCBjb25zaXN0aW5nIG9mIHRoZSBiYXNlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgYnkgY29uZmcvc2VlZC5jb25maWcudHMsIHRoZSBhZGRpdGlvbmFsXG4gKiBwcm9qZWN0IHNwZWNpZmljIG92ZXJyaWRlcyBhcyBkZWZpbmVkIGluIGNvbmZpZy9wcm9qZWN0LmNvbmZpZy50cyBhbmQgaW5jbHVkaW5nIHRoZSBiYXNlIGVudmlyb25tZW50IGNvbmZpZyBhcyBkZWZpbmVkIGluIGVudi9iYXNlLnRzXG4gKiBhbmQgdGhlIGVudmlyb25tZW50IHNwZWNpZmljIG92ZXJyaWRlcyAoZm9yIGluc3RhbmNlIGlmIGVudj1kZXYgdGhlbiBhcyBkZWZpbmVkIGluIGVudi9kZXYudHMpLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVMb2NhbHNCdWlsZGVyIHtcbiAgcHJpdmF0ZSBzdHJpbmdpZnlTeXN0ZW1Db25maWdEZXYgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdHJpbmdpZnlFbnZDb25maWcgPSB0cnVlO1xuXG4gIHdpdGhTdHJpbmdpZmllZFN5c3RlbUNvbmZpZ0RldigpIHtcbiAgICB0aGlzLnN0cmluZ2lmeVN5c3RlbUNvbmZpZ0RldiA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgd2lodG91dFN0cmluZ2lmaWVkRW52Q29uZmlnKCkge1xuICAgIHRoaXMuc3RyaW5naWZ5RW52Q29uZmlnID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuXG4gIGJ1aWxkKCkge1xuICAgIGNvbnN0IGNvbmZpZ0Vudk5hbWUgPSBhcmd2WydlbnYtY29uZmlnJ10gfHwgYXJndlsnY29uZmlnLWVudiddIHx8ICdkZXYnO1xuICAgIGNvbnN0IGNvbmZpZ1BhdGggPSBDb25maWcuZ2V0UGx1Z2luQ29uZmlnKCdlbnZpcm9ubWVudC1jb25maWcnKTtcbiAgICBjb25zdCBlbnZPbmx5Q29uZmlnID0gdGhpcy5nZXRDb25maWcoY29uZmlnUGF0aCwgY29uZmlnRW52TmFtZSk7XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKGNvbmZpZ1BhdGgsICdiYXNlJyk7XG5cbiAgICBpZiAoIWVudk9ubHlDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihjb25maWdFbnZOYW1lICsgJyBpcyBhbiBpbnZhbGlkIGNvbmZpZ3VyYXRpb24gbmFtZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGVudkNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGJhc2VDb25maWcsIGVudk9ubHlDb25maWcpO1xuICAgIGxldCBsb2NhbHMgPSBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgQ29uZmlnLFxuICAgICAgeyBFTlZfQ09ORklHOiB0aGlzLnN0cmluZ2lmeUVudkNvbmZpZyA/IEpTT04uc3RyaW5naWZ5KGVudkNvbmZpZykgOiBlbnZDb25maWcgfVxuICAgICk7XG4gICAgaWYgKHRoaXMuc3RyaW5naWZ5U3lzdGVtQ29uZmlnRGV2KSB7XG4gICAgICBPYmplY3QuYXNzaWduKGxvY2Fscywge1NZU1RFTV9DT05GSUdfREVWOiBKU09OLnN0cmluZ2lmeShDb25maWcuU1lTVEVNX0NPTkZJR19ERVYpfSk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhbHM7XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZyhwYXRoOiBzdHJpbmcsIGVudjogc3RyaW5nKSB7XG4gICAgY29uc3QgY29uZmlnUGF0aCA9IGpvaW4ocGF0aCwgZW52KTtcbiAgICBsZXQgY29uZmlnOiBhbnk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbmZpZyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVxdWlyZShjb25maWdQYXRoKSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbmZpZyA9IG51bGw7XG4gICAgICB1dGlsLmxvZyh1dGlsLmNvbG9ycy5yZWQoZS5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfTtcbn1cbiJdfQ==