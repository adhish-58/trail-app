"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var ListComponent = (function () {
    function ListComponent(page, RouterExtensions) {
        this.page = page;
        this.RouterExtensions = RouterExtensions;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    ListComponent.prototype.logout = function () {
        this.RouterExtensions.navigate(['/login'], {
            transition: {
                duration: 350,
                name: 'flipLeft',
                curve: "linear"
            },
            clearHistory: true
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "tl-list",
        moduleId: module.id,
        templateUrl: "./list.component.html",
        styleUrls: ["./login-common.css", "./list.component.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQixzREFBK0Q7QUFPL0QsSUFBYSxhQUFhO0lBRXRCLHVCQUFvQixJQUFVLEVBQVMsZ0JBQWtDO1FBQXJELFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUssQ0FBQztJQUUvRSxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZDLFVBQVUsRUFBRTtnQkFDUixRQUFRLEVBQUUsR0FBRztnQkFDYixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFFBQVE7YUFDbEI7WUFDRCxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLHNCQUFzQixDQUFDO0tBQzVELENBQUM7cUNBRzRCLFdBQUksRUFBMkIseUJBQWdCO0dBRmhFLGFBQWEsQ0FrQnpCO0FBbEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGwtbGlzdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCIuL2xpc3QuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHVibGljIFJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLlJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvbG9naW4nXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzNTAsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZsaXBMZWZ0JyxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=