"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dialogs = require("ui/dialogs");
var DataItem = (function () {
    function DataItem(itemDesc) {
        this.itemDesc = itemDesc;
    }
    return DataItem;
}());
exports.DataItem = DataItem;
var HomeComponent = (function () {
    function HomeComponent(RouterExtensions) {
        this.RouterExtensions = RouterExtensions;
        // TODO: Change gameList from Array string to Array object, with tag completed, game name, who invites, game time, date finished ...
        this.gameList = ["Lam's game", "James' game", "Vitalii's game", "Niraj's game", "Sidd's game", "Adhish's game"];
        // TODO: Change locationList to array object with info, tag visited/checked, tag message.
        // TODO: Make connection of gameList and locationList (locationList is depended upon gameList)
        this.completedGameList = ["Lam's game", "James' game"];
        this.YourGameList = ["Find the treasure", "Find the drugs", "Find the weeds"];
        this.gameSelectMessage = "Game selected: " + this.gameList[0];
        this.gameCompletedSelectMessage = "Game selected: " + this.gameList[0];
        this.indexOfYourGame = 0;
        this.indexOfGame = 0;
        this.indexOfGameCompleted = 0;
        this.YourGameSelectMessage = "Game selected: Game1";
        this.gameDescription = "Description for game " + this.YourGameList[this.indexOfYourGame];
        this.locationInfo = "";
        this.gameInfo = "You completed this game on 4/1/2017. Takes 4 hours 24 minutes.";
        this.activeGame = this.gameList[0];
        this.items = new Array();
        for (var i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i));
        }
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.logout = function () {
        console.log("LOGOUT run");
        this.RouterExtensions.navigate(['/login'], {
            transition: {
                duration: 500,
                name: 'slideLeft',
            },
            clearHistory: true
        });
    };
    HomeComponent.prototype.onGameTap = function (args) {
        console.log("------------------------ GameTapped: " + args.index);
        this.indexOfGame = args.index;
        this.gameSelectMessage = "Game selected: " + this.gameList[this.indexOfGame];
    };
    HomeComponent.prototype.beginGameSelected = function () {
        var _this = this;
        console.log("Begin game " + this.gameList[this.indexOfGame]);
        dialogs.alert({
            title: "Begin " + this.gameList[this.indexOfGame],
            message: "The game will start in a second.",
            okButtonText: "Continue"
        }).then(function () {
            _this.RouterExtensions.navigate(['/gameView'], {
                transition: {
                    duration: 500,
                    name: 'fade',
                }
            });
        });
        // Load location List from game
    };
    HomeComponent.prototype.onCompletedGameTap = function (args) {
        console.log("------------------- GameCompletedTapped: " + args.index);
        this.indexOfGameCompleted = args.index;
        this.gameCompletedSelectMessage = "Game selected: " + this.completedGameList[this.indexOfGameCompleted];
        this.gameInfo = "You completed this game on 4/1/2017. Takes 4 hours 24 minutes.";
    };
    HomeComponent.prototype.onYourGameTap = function (args) {
        console.log("------------------- GameCompletedTapped: " + args.index);
        this.indexOfYourGame = args.index;
        this.YourGameSelectMessage = "Game selected: " + this.YourGameList[this.indexOfYourGame];
        this.gameDescription = "Description for game " + this.YourGameList[this.indexOfYourGame];
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "tl-home",
        moduleId: module.id,
        templateUrl: "./home.component.html",
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELHNEQUE2RDtBQUM3RCxvQ0FBdUM7QUFFdkM7SUFDSSxrQkFBbUIsUUFBZ0I7UUFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUFHLENBQUM7SUFDM0MsZUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksNEJBQVE7QUFVckIsSUFBYSxhQUFhO0lBeUJ0Qix1QkFBbUIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUF2QnJELG9JQUFvSTtRQUM3SCxhQUFRLEdBQWtCLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRWpJLHlGQUF5RjtRQUN6Riw4RkFBOEY7UUFFdkYsc0JBQWlCLEdBQWtCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRWpFLGlCQUFZLEdBQWtCLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtRQUV2RixzQkFBaUIsR0FBWSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLCtCQUEwQixHQUFZLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUUsb0JBQWUsR0FBRyxDQUFDLENBQUE7UUFDbkIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIseUJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLDBCQUFxQixHQUFHLHNCQUFzQixDQUFBO1FBQzlDLG9CQUFlLEdBQUcsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDbkYsaUJBQVksR0FBRyxFQUFF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Q0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzVGLENBQUM7SUFHWCxvQkFBQztBQUFELENBQUMsQUFwRkQsSUFvRkM7QUFwRlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7S0FDdkMsQ0FBQztxQ0EyQnVDLHlCQUFnQjtHQXpCNUMsYUFBYSxDQW9GekI7QUFwRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG5cbmV4cG9ydCBjbGFzcyBEYXRhSXRlbSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGl0ZW1EZXNjOiBzdHJpbmcpIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInRsLWhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgLy8gVE9ETzogQ2hhbmdlIGdhbWVMaXN0IGZyb20gQXJyYXkgc3RyaW5nIHRvIEFycmF5IG9iamVjdCwgd2l0aCB0YWcgY29tcGxldGVkLCBnYW1lIG5hbWUsIHdobyBpbnZpdGVzLCBnYW1lIHRpbWUsIGRhdGUgZmluaXNoZWQgLi4uXG4gICAgcHVibGljIGdhbWVMaXN0OiBBcnJheTxzdHJpbmc+ID0gW1wiTGFtJ3MgZ2FtZVwiLCBcIkphbWVzJyBnYW1lXCIsIFwiVml0YWxpaSdzIGdhbWVcIiwgXCJOaXJhaidzIGdhbWVcIiwgXCJTaWRkJ3MgZ2FtZVwiLCBcIkFkaGlzaCdzIGdhbWVcIl07XG5cbiAgICAvLyBUT0RPOiBDaGFuZ2UgbG9jYXRpb25MaXN0IHRvIGFycmF5IG9iamVjdCB3aXRoIGluZm8sIHRhZyB2aXNpdGVkL2NoZWNrZWQsIHRhZyBtZXNzYWdlLlxuICAgIC8vIFRPRE86IE1ha2UgY29ubmVjdGlvbiBvZiBnYW1lTGlzdCBhbmQgbG9jYXRpb25MaXN0IChsb2NhdGlvbkxpc3QgaXMgZGVwZW5kZWQgdXBvbiBnYW1lTGlzdClcblxuICAgIHB1YmxpYyBjb21wbGV0ZWRHYW1lTGlzdDogQXJyYXk8c3RyaW5nPiA9IFtcIkxhbSdzIGdhbWVcIiwgXCJKYW1lcycgZ2FtZVwiXTtcblxuICAgIHB1YmxpYyBZb3VyR2FtZUxpc3Q6IEFycmF5PHN0cmluZz4gPSBbXCJGaW5kIHRoZSB0cmVhc3VyZVwiLCBcIkZpbmQgdGhlIGRydWdzXCIsIFwiRmluZCB0aGUgd2VlZHNcIl1cblxuICAgIHB1YmxpYyBnYW1lU2VsZWN0TWVzc2FnZSA6IHN0cmluZyA9IFwiR2FtZSBzZWxlY3RlZDogXCIgKyB0aGlzLmdhbWVMaXN0WzBdXG4gICAgcHVibGljIGdhbWVDb21wbGV0ZWRTZWxlY3RNZXNzYWdlIDogc3RyaW5nID0gXCJHYW1lIHNlbGVjdGVkOiBcIiArIHRoaXMuZ2FtZUxpc3RbMF1cbiAgICBwdWJsaWMgaW5kZXhPZllvdXJHYW1lID0gMFxuICAgIHB1YmxpYyBpbmRleE9mR2FtZSA9IDA7XG4gICAgcHVibGljIGluZGV4T2ZHYW1lQ29tcGxldGVkID0gMDtcbiAgICBwdWJsaWMgWW91ckdhbWVTZWxlY3RNZXNzYWdlID0gXCJHYW1lIHNlbGVjdGVkOiBHYW1lMVwiXG4gICAgcHVibGljIGdhbWVEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb24gZm9yIGdhbWUgXCIgKyB0aGlzLllvdXJHYW1lTGlzdFt0aGlzLmluZGV4T2ZZb3VyR2FtZV1cbiAgICBwdWJsaWMgbG9jYXRpb25JbmZvID0gXCJcIlxuICAgIHB1YmxpYyBnYW1lSW5mbyA9IFwiWW91IGNvbXBsZXRlZCB0aGlzIGdhbWUgb24gNC8xLzIwMTcuIFRha2VzIDQgaG91cnMgMjQgbWludXRlcy5cIlxuICAgIHB1YmxpYyBhY3RpdmVHYW1lID0gdGhpcy5nYW1lTGlzdFswXVxuXG5cbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PERhdGFJdGVtPjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgUm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLml0ZW1zID0gbmV3IEFycmF5PERhdGFJdGVtPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShcIml0ZW0gXCIgKyBpKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge31cblxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTE9HT1VUIHJ1blwiKVxuICAgICAgICB0aGlzLlJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvbG9naW4nXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlTGVmdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkdhbWVUYXAoYXJncykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdhbWVUYXBwZWQ6IFwiICsgYXJncy5pbmRleCk7XG4gICAgICAgICAgdGhpcy5pbmRleE9mR2FtZSA9IGFyZ3MuaW5kZXg7XG4gICAgICAgICAgdGhpcy5nYW1lU2VsZWN0TWVzc2FnZSA9IFwiR2FtZSBzZWxlY3RlZDogXCIgKyB0aGlzLmdhbWVMaXN0W3RoaXMuaW5kZXhPZkdhbWVdXG4gICAgICB9XG5cbiAgICAgIHB1YmxpYyBiZWdpbkdhbWVTZWxlY3RlZCgpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmVnaW4gZ2FtZSBcIiArIHRoaXMuZ2FtZUxpc3RbdGhpcy5pbmRleE9mR2FtZV0pXG4gICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkJlZ2luIFwiICsgdGhpcy5nYW1lTGlzdFt0aGlzLmluZGV4T2ZHYW1lXSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgZ2FtZSB3aWxsIHN0YXJ0IGluIGEgc2Vjb25kLlwiLFxuICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ29udGludWVcIlxuICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLlJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvZ2FtZVZpZXcnXSwge1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZhZGUnLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgLy8gTG9hZCBsb2NhdGlvbiBMaXN0IGZyb20gZ2FtZVxuICAgICAgfVxuXG4gICAgICBwdWJsaWMgb25Db21wbGV0ZWRHYW1lVGFwKGFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLSBHYW1lQ29tcGxldGVkVGFwcGVkOiBcIiArIGFyZ3MuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5pbmRleE9mR2FtZUNvbXBsZXRlZCA9IGFyZ3MuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmdhbWVDb21wbGV0ZWRTZWxlY3RNZXNzYWdlID0gXCJHYW1lIHNlbGVjdGVkOiBcIiArIHRoaXMuY29tcGxldGVkR2FtZUxpc3RbdGhpcy5pbmRleE9mR2FtZUNvbXBsZXRlZF1cbiAgICAgICAgICAgIHRoaXMuZ2FtZUluZm8gPSBcIllvdSBjb21wbGV0ZWQgdGhpcyBnYW1lIG9uIDQvMS8yMDE3LiBUYWtlcyA0IGhvdXJzIDI0IG1pbnV0ZXMuXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBvbllvdXJHYW1lVGFwKGFyZ3MpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tIEdhbWVDb21wbGV0ZWRUYXBwZWQ6IFwiICsgYXJncy5pbmRleCk7XG4gICAgICAgICAgICAgIHRoaXMuaW5kZXhPZllvdXJHYW1lID0gYXJncy5pbmRleDtcbiAgICAgICAgICAgICAgdGhpcy5Zb3VyR2FtZVNlbGVjdE1lc3NhZ2UgPSBcIkdhbWUgc2VsZWN0ZWQ6IFwiICsgdGhpcy5Zb3VyR2FtZUxpc3RbdGhpcy5pbmRleE9mWW91ckdhbWVdXG4gICAgICAgICAgICAgIHRoaXMuZ2FtZURlc2NyaXB0aW9uID0gXCJEZXNjcmlwdGlvbiBmb3IgZ2FtZSBcIiArIHRoaXMuWW91ckdhbWVMaXN0W3RoaXMuaW5kZXhPZllvdXJHYW1lXVxuICAgICAgICAgIH1cblxuXG59XG4iXX0=