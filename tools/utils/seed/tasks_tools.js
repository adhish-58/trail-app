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
var fs_1 = require("fs");
var runSequence = require("run-sequence");
var gulp = require("gulp");
var util = require("gulp-util");
var isstream = require("isstream");
var path_1 = require("path");
var tildify = require("tildify");
var code_change_tools_1 = require("./code_change_tools");
var task_1 = require("../../tasks/task");
function loadTasks(path) {
    util.log('Loading tasks folder', util.colors.yellow(path));
    readDir(path, function (taskname) { return registerTask(taskname, path); });
}
exports.loadTasks = loadTasks;
function validateTasks(tasks) {
    return Object.keys(tasks)
        .map(function (taskName) {
        if (!tasks[taskName] ||
            !Array.isArray(tasks[taskName]) ||
            tasks[taskName].some(function (t) { return typeof t !== 'string'; })) {
            return taskName;
        }
        return null;
    }).filter(function (taskName) { return !!taskName; });
}
function registerTasks(tasks) {
    Object.keys(tasks)
        .forEach(function (t) {
        gulp.task(t, function (done) { return runSequence.apply(null, tasks[t].concat([done])); });
    });
}
function getInvalidTaskErrorMessage(invalid, file) {
    var error = "Invalid configuration in \"" + file + ". ";
    if (invalid.length === 1) {
        error += 'Task';
    }
    else {
        error += 'Tasks';
    }
    error += " " + invalid.map(function (t) { return "\"" + t + "\""; }).join(', ') + " do not have proper format.";
    return error;
}
function loadCompositeTasks(seedTasksFile, projectTasksFile) {
    var seedTasks;
    var projectTasks;
    try {
        seedTasks = JSON.parse(fs_1.readFileSync(seedTasksFile).toString());
        projectTasks = JSON.parse(fs_1.readFileSync(projectTasksFile).toString());
    }
    catch (e) {
        util.log('Cannot load the task configuration files: ' + e.toString());
        return;
    }
    [[seedTasks, seedTasksFile], [projectTasks, projectTasksFile]]
        .forEach(function (_a) {
        var tasks = _a[0], file = _a[1];
        var invalid = validateTasks(tasks);
        if (invalid.length) {
            var errorMessage = getInvalidTaskErrorMessage(invalid, file);
            util.log(util.colors.red(errorMessage));
            process.exit(1);
        }
    });
    var mergedTasks = Object.assign({}, seedTasks, projectTasks);
    registerTasks(mergedTasks);
}
exports.loadCompositeTasks = loadCompositeTasks;
function normalizeTask(task, taskName) {
    if (task instanceof task_1.Task) {
        return task;
    }
    if (task.prototype && task.prototype instanceof task_1.Task) {
        return new task();
    }
    if (typeof task === 'function') {
        return new (function (_super) {
            __extends(AnonTask, _super);
            function AnonTask() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AnonTask.prototype.run = function (done) {
                if (task.length > 0) {
                    return task(done);
                }
                var taskReturnedValue = task();
                if (isstream(taskReturnedValue)) {
                    return taskReturnedValue;
                }
                done();
            };
            return AnonTask;
        }(task_1.Task));
    }
    throw new Error(taskName + ' should be instance of the class ' +
        'Task, a function or a class which extends Task.');
}
function registerTask(taskname, path) {
    var TASK = path_1.join(path, taskname);
    util.log('Registering task', util.colors.yellow(tildify(TASK)));
    gulp.task(taskname, function (done) {
        var task = normalizeTask(require(TASK), TASK);
        if (code_change_tools_1.changeFileManager.pristine || task.shallRun(code_change_tools_1.changeFileManager.lastChangedFiles)) {
            var result = task.run(done, code_change_tools_1.changeFileManager.lastChangedFiles);
            if (result && typeof result.catch === 'function') {
                result.catch(function (e) {
                    util.log("Error while running \"" + TASK + "\"", e);
                });
            }
            return result;
        }
        else {
            done();
        }
    });
}
function readDir(root, cb) {
    if (!fs_1.existsSync(root)) {
        return;
    }
    walk(root);
    function walk(path) {
        var files = fs_1.readdirSync(path);
        for (var i = 0; i < files.length; i += 1) {
            var file = files[i];
            var curPath = path_1.join(path, file);
            if (fs_1.lstatSync(curPath).isFile() && /\.ts$/.test(file)) {
                var taskname = file.replace(/\.ts$/, '');
                cb(taskname);
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3NfdG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXNrc190b29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUFzRTtBQUN0RSwwQ0FBNEM7QUFDNUMsMkJBQTZCO0FBQzdCLGdDQUFrQztBQUNsQyxtQ0FBcUM7QUFDckMsNkJBQTRCO0FBQzVCLGlDQUFtQztBQUVuQyx5REFBd0Q7QUFDeEQseUNBQXdDO0FBTXhDLG1CQUEwQixJQUFZO0lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUEsUUFBUSxJQUFJLE9BQUEsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFIRCw4QkFHQztBQUVELHVCQUF1QixLQUFVO0lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN0QixHQUFHLENBQUMsVUFBQyxRQUFnQjtRQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDbkIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFyQixDQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDbEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFnQixJQUFLLE9BQUEsQ0FBQyxDQUFDLFFBQVEsRUFBVixDQUFV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RUFBRSxJQUFJLENBQUMsQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxjQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDZixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhpc3RzU3luYywgbHN0YXRTeW5jLCByZWFkRmlsZVN5bmMsIHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcnVuU2VxdWVuY2UgZnJvbSAncnVuLXNlcXVlbmNlJztcbmltcG9ydCAqIGFzIGd1bHAgZnJvbSAnZ3VscCc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ2d1bHAtdXRpbCc7XG5pbXBvcnQgKiBhcyBpc3N0cmVhbSBmcm9tICdpc3N0cmVhbSc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyB0aWxkaWZ5IGZyb20gJ3RpbGRpZnknO1xuXG5pbXBvcnQgeyBjaGFuZ2VGaWxlTWFuYWdlciB9IGZyb20gJy4vY29kZV9jaGFuZ2VfdG9vbHMnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uLy4uL3Rhc2tzL3Rhc2snO1xuXG4vKipcbiAqIExvYWRzIHRoZSB0YXNrcyB3aXRoaW4gdGhlIGdpdmVuIHBhdGguXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBwYXRoIHRvIGxvYWQgdGhlIHRhc2tzIGZyb20uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGFza3MocGF0aDogc3RyaW5nKTogdm9pZCB7XG4gIHV0aWwubG9nKCdMb2FkaW5nIHRhc2tzIGZvbGRlcicsIHV0aWwuY29sb3JzLnllbGxvdyhwYXRoKSk7XG4gIHJlYWREaXIocGF0aCwgdGFza25hbWUgPT4gcmVnaXN0ZXJUYXNrKHRhc2tuYW1lLCBwYXRoKSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGFza3ModGFza3M6IGFueSkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGFza3MpXG4gICAgLm1hcCgodGFza05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgIGlmICghdGFza3NbdGFza05hbWVdIHx8XG4gICAgICAgICFBcnJheS5pc0FycmF5KHRhc2tzW3Rhc2tOYW1lXSkgfHxcbiAgICAgICAgdGFza3NbdGFza05hbWVdLnNvbWUoKHQ6IGFueSkgPT4gdHlwZW9mIHQgIT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgcmV0dXJuIHRhc2tOYW1lO1xuICAgICAgIH1cbiAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9KS5maWx0ZXIoKHRhc2tOYW1lOiBzdHJpbmcpID0+ICEhdGFza05hbWUpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlclRhc2tzKHRhc2tzOiBhbnkpIHtcbiAgT2JqZWN0LmtleXModGFza3MpXG4gICAgLmZvckVhY2goKHQ6IHN0cmluZykgPT4ge1xuICAgICAgZ3VscC50YXNrKHQsIChkb25lOiBhbnkpID0+IHJ1blNlcXVlbmNlLmFwcGx5KG51bGwsIFsuLi50YXNrc1t0XSwgZG9uZV0pKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SW52YWxpZFRhc2tFcnJvck1lc3NhZ2UoaW52YWxpZDogc3RyaW5nW10sIGZpbGU6IHN0cmluZykge1xuICBsZXQgZXJyb3IgPSBgSW52YWxpZCBjb25maWd1cmF0aW9uIGluIFwiJHtmaWxlfS4gYDtcbiAgaWYgKGludmFsaWQubGVuZ3RoID09PSAxKSB7XG4gICAgZXJyb3IgKz0gJ1Rhc2snO1xuICB9IGVsc2Uge1xuICAgIGVycm9yICs9ICdUYXNrcyc7XG4gIH1cbiAgZXJyb3IgKz0gYCAke2ludmFsaWQubWFwKCh0OiBhbnkpID0+IGBcIiR7dH1cImApLmpvaW4oJywgJyl9IGRvIG5vdCBoYXZlIHByb3BlciBmb3JtYXQuYDtcbiAgcmV0dXJuIGVycm9yO1xufVxuXG4vKipcbiAqIERlZmluZXMgY29tcGxleCwgY29tcG9zaXRlIHRhc2tzLiBUaGUgY29tcG9zaXRlIHRhc2tzXG4gKiBhcmUgc2ltcGx5IGEgY29tcG9zaXRpb24gb2YgYW5vdGhlciB0YXNrcy5cbiAqIEVhY2ggY29tcG9zaXRlIHRhc2tzIGhhcyB0aGUgZm9sbG93aW5nIGZvcm1hdDpcbiAqXG4gKiBcImNvbXBvc2l0ZV90YXNrXCI6IFtcInRhc2sxXCIsIFwidGFzazJcIl1cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgdGhlIGZvcm1hdCBzaG91bGQgYmUgZmxhdCwgd2l0aCBubyBuZXN0aW5nLlxuICpcbiAqIFRoZSBleGlzdGluZyBjb21wb3NpdGUgdGFza3MgYXJlIGRlZmluZWQgaW5cbiAqIFwidG9vbHMvY29uZmlnL3NlZWQudGFza3MuanNvblwiIGFuZCBjYW4gYmUgb3ZlcnJpZGVuIGJ5XG4gKiBlZGl0aW5nIHRoZSBjb21wb3NpdGUgdGFza3MgcHJvamVjdCBjb25maWd1cmF0aW9uLlxuICpcbiAqIEJ5IGRlZmF1bHQgaXQgaXMgbG9jYXRlZCBpbjogXCJ0b29scy9jb25maWcvcHJvamVjdC50YXNrcy5qc29uXCIuXG4gKlxuICogT3ZlcnJpZGUgZXhpc3RpbmcgdGFza3MgYnkgc2ltcGx5IHByb3ZpZGluZyBhIHRhc2tcbiAqIG5hbWUgYW5kIGEgbGlzdCBvZiB0YXNrcyB0aGF0IHRoaXMgdGFzayBob3VsZCBleGVjdXRlLlxuICpcbiAqIEZvciBpbnN0YW5jZTpcbiAqIGBgYFxuICoge1xuICogIFwidGVzdFwiOiBbXG4gKiAgICBcImJ1aWxkLnRlc3RcIixcbiAqICAgIFwibW9jaGEucnVuXCJcbiAqICBdXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBOb3RlIHRoYXQgdGhlIHRhc2tzIGRvIG5vdCBzdXBwb3J0IG5lc3RlZCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbXBvc2l0ZVRhc2tzKHNlZWRUYXNrc0ZpbGU6IHN0cmluZywgcHJvamVjdFRhc2tzRmlsZTogc3RyaW5nKTogdm9pZCB7XG4gIGxldCBzZWVkVGFza3M6IGFueTtcbiAgbGV0IHByb2plY3RUYXNrczogYW55O1xuICB0cnkge1xuICAgIHNlZWRUYXNrcyA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKHNlZWRUYXNrc0ZpbGUpLnRvU3RyaW5nKCkpO1xuICAgIHByb2plY3RUYXNrcyA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKHByb2plY3RUYXNrc0ZpbGUpLnRvU3RyaW5nKCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdXRpbC5sb2coJ0Nhbm5vdCBsb2FkIHRoZSB0YXNrIGNvbmZpZ3VyYXRpb24gZmlsZXM6ICcgKyBlLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybjtcbiAgfVxuICBbW3NlZWRUYXNrcywgc2VlZFRhc2tzRmlsZV0sIFtwcm9qZWN0VGFza3MsIHByb2plY3RUYXNrc0ZpbGVdXVxuICAgIC5mb3JFYWNoKChbdGFza3MsIGZpbGVdOiBbc3RyaW5nLCBzdHJpbmddKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gdmFsaWRhdGVUYXNrcyh0YXNrcyk7XG4gICAgICBpZiAoaW52YWxpZC5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZ2V0SW52YWxpZFRhc2tFcnJvck1lc3NhZ2UoaW52YWxpZCwgZmlsZSk7XG4gICAgICAgIHV0aWwubG9nKHV0aWwuY29sb3JzLnJlZChlcnJvck1lc3NhZ2UpKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgfVxuICAgIH0pO1xuICBjb25zdCBtZXJnZWRUYXNrcyA9IE9iamVjdC5hc3NpZ24oe30sIHNlZWRUYXNrcywgcHJvamVjdFRhc2tzKTtcbiAgcmVnaXN0ZXJUYXNrcyhtZXJnZWRUYXNrcyk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRhc2sodGFzazogYW55LCB0YXNrTmFtZTogc3RyaW5nKSB7XG4gIGlmICh0YXNrIGluc3RhbmNlb2YgVGFzaykge1xuICAgIHJldHVybiB0YXNrO1xuICB9XG4gIGlmICh0YXNrLnByb3RvdHlwZSAmJiB0YXNrLnByb3RvdHlwZSBpbnN0YW5jZW9mIFRhc2spIHtcbiAgICByZXR1cm4gbmV3IHRhc2soKTtcbiAgfVxuICBpZiAodHlwZW9mIHRhc2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbmV3IGNsYXNzIEFub25UYXNrIGV4dGVuZHMgVGFzayB7XG4gICAgICBydW4oZG9uZTogYW55KSB7XG4gICAgICAgIGlmICh0YXNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdGFzayhkb25lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhc2tSZXR1cm5lZFZhbHVlID0gdGFzaygpO1xuICAgICAgICBpZiAoaXNzdHJlYW0odGFza1JldHVybmVkVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhc2tSZXR1cm5lZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKHRhc2tOYW1lICsgJyBzaG91bGQgYmUgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzICcgK1xuICAgICdUYXNrLCBhIGZ1bmN0aW9uIG9yIGEgY2xhc3Mgd2hpY2ggZXh0ZW5kcyBUYXNrLicpO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyB0aGUgdGFzayBieSB0aGUgZ2l2ZW4gdGFza25hbWUgYW5kIHBhdGguXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFza25hbWUgLSBUaGUgbmFtZSBvZiB0aGUgdGFzay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICAgICAtIFRoZSBwYXRoIG9mIHRoZSB0YXNrLlxuICovXG5mdW5jdGlvbiByZWdpc3RlclRhc2sodGFza25hbWU6IHN0cmluZywgcGF0aDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IFRBU0sgPSBqb2luKHBhdGgsIHRhc2tuYW1lKTtcbiAgdXRpbC5sb2coJ1JlZ2lzdGVyaW5nIHRhc2snLCB1dGlsLmNvbG9ycy55ZWxsb3codGlsZGlmeShUQVNLKSkpO1xuXG4gIGd1bHAudGFzayh0YXNrbmFtZSwgKGRvbmU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBub3JtYWxpemVUYXNrKHJlcXVpcmUoVEFTSyksIFRBU0spO1xuXG4gICAgaWYgKGNoYW5nZUZpbGVNYW5hZ2VyLnByaXN0aW5lIHx8IHRhc2suc2hhbGxSdW4oY2hhbmdlRmlsZU1hbmFnZXIubGFzdENoYW5nZWRGaWxlcykpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRhc2sucnVuKGRvbmUsIGNoYW5nZUZpbGVNYW5hZ2VyLmxhc3RDaGFuZ2VkRmlsZXMpO1xuICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LmNhdGNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc3VsdC5jYXRjaCgoZTogYW55KSA9PiB7XG4gICAgICAgICAgdXRpbC5sb2coYEVycm9yIHdoaWxlIHJ1bm5pbmcgXCIke1RBU0t9XCJgLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZWFkcyB0aGUgZmlsZXMgaW4gdGhlIGdpdmVuIHJvb3QgZGlyZWN0b3J5IGFuZCBleGVjdXRlcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgcGVyIGZvdW5kIGZpbGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gICByb290IC0gVGhlIHJvb3QgZGlyZWN0b3J5IHRvIHJlYWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiAgIC0gVGhlIGNhbGxiYWNrIHRvIGV4ZWN1dGUgcGVyIGZvdW5kIGZpbGUuXG4gKi9cbmZ1bmN0aW9uIHJlYWREaXIocm9vdDogc3RyaW5nLCBjYjogKHRhc2tuYW1lOiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgaWYgKCFleGlzdHNTeW5jKHJvb3QpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2Fsayhyb290KTtcblxuICBmdW5jdGlvbiB3YWxrKHBhdGg6IHN0cmluZykge1xuICAgIGxldCBmaWxlcyA9IHJlYWRkaXJTeW5jKHBhdGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCBmaWxlID0gZmlsZXNbaV07XG4gICAgICBsZXQgY3VyUGF0aCA9IGpvaW4ocGF0aCwgZmlsZSk7XG4gICAgICBpZiAobHN0YXRTeW5jKGN1clBhdGgpLmlzRmlsZSgpICYmIC9cXC50cyQvLnRlc3QoZmlsZSkpIHtcbiAgICAgICAgbGV0IHRhc2tuYW1lID0gZmlsZS5yZXBsYWNlKC9cXC50cyQvLCAnJyk7XG4gICAgICAgIGNiKHRhc2tuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==