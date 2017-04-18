import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as utils from "utils/utils";

import { GameService, UserService } from "../../../services";
import dialogs = require("ui/dialogs");
import { ListViewLinearLayout, ListViewEventData, RadListView, ListViewLoadOnDemandMode }from "nativescript-telerik-ui/listview"

import { RadListViewComponent } from "nativescript-telerik-ui/listview/angular";
import * as applicationModule from "application";
import * as Timer  from "timer";

import viewModule = require('ui/core/view');
import utilsModule = require("utils/utils");


declare var UIColor: any;

@Component({
    selector: "tl-play",
    moduleId: module.id,
    templateUrl: "./yourGames.component.html",
    styleUrls: ["./yourGames-common.css", "./yourGames.component.css"]
})

export class YourGamesComponent implements OnInit {
    public YourGameList: Array<string>= [];
    public gameCreators: string;
    public listHeight: number;

    private _numberOfAddedItems;
    private leftThresholdPassed = false;
    private rightThresholdPassed = false;

    constructor(public RouterExtensions: RouterExtensions,
                private GameService:GameService,
                private UserService:UserService,
                private page: Page) {

      this.GameService.get_all_created_games(this.UserService.username).subscribe(
        gamesCreated => this.YourGameList = gamesCreated['games']
      )
    }

    ngOnInit() {
      this.page.actionBarHidden = true;
      this.listHeight = this.YourGameList.length*100;
    }

    public onYourGameSelected(args: ListViewEventData) {
        //    var listview = args.object as RadListView;
        //    var selectedItems = listview.getSelectedItems()
        //    this.GameService.CurrentGame = selectedItems[0];
        //    this.RouterExtensions.navigate(['/seeInvites'], {
        //        transition: {
        //            duration: 350,
        //            name: 'flipLeft',
        //            curve: "linear"
        //        },
        //        clearHistory: true
        //    });

       }

    goToHome() {
        this.RouterExtensions.navigate(['/main'], {
            transition: {
                duration: 350,
                name: 'flipLeft',
                curve: "linear"
            },
            clearHistory: true
        });
    }

    // The following trick makes the background color of each cell
    // in the UITableView transparent as it’s created.
    makeBackgroundTransparent(args) {
      let cell = args.ios;
      if (cell) {
        // support XCode 8
        // cell.SelectionStyle = UITableViewCellSelectionStyle.None;
        cell.backgroundColor = utils.ios.getter(UIColor, UIColor.clearColor);
      }
    }

        public refreshYourGameList(args: ListViewEventData) {
            var that = new WeakRef(this);
            this.GameService.get_all_created_games(this.UserService.username).subscribe(
              gamesCreated => this.YourGameList = gamesCreated['games']
            )
            Timer.setTimeout(function () {
            var listView = args.object;
            listView.notifyPullToRefreshFinished();
            }, 1000);
        }

            // >> angular-listview-swipe-action-multiple-limits
            public onSwipeCellStarted(args: ListViewEventData) {
                var swipeLimits = args.data.swipeLimits;
                var swipeView = args['object'];
                var leftItem = swipeView.getViewById('mark-view');
                var rightItem = swipeView.getViewById('delete-view');
                swipeLimits.left = leftItem.getMeasuredWidth();
                swipeLimits.right = rightItem.getMeasuredWidth();
                swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
            }
            // << angular-listview-swipe-action-multiple-limits

            public onSwipeCellFinished(args: ListViewEventData) {
                if (args.data.x > 200) {
                    console.log("Perform left action");
                } else if (args.data.x < -200) {
                    console.log("Perform right action");
                }
            }

            public onCellSwiping(args: ListViewEventData) {
                var swipeLimits = args.data.swipeLimits;
                var swipeView = args['swipeView'];
                var mainView = args['mainView'];
                var leftItem = swipeView.getViewById('mark-view');
                var rightItem = swipeView.getViewById('delete-view');

                if (args.data.x > swipeView.getMeasuredWidth() / 4 && !this.leftThresholdPassed) {
                    console.log("Notify perform left action");
                    var markLabel = leftItem.getViewById('mark-text');
                    this.leftThresholdPassed = true;
                } else if (args.data.x < -swipeView.getMeasuredWidth() / 4 && !this.rightThresholdPassed) {
                    var deleteLabel = rightItem.getViewById('delete-text');
                    console.log("Notify perform right action");
                    this.rightThresholdPassed = true;
                }
                if (args.data.x > 0) {
                    var leftDimensions = viewModule.View.measureChild(
                    leftItem.parent,
                    leftItem,
                    utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
                    utilsModule.layout.makeMeasureSpec(mainView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
                    viewModule.View.layoutChild(leftItem.parent, leftItem, 0, 0, leftDimensions.measuredWidth, leftDimensions.measuredHeight);
                } else {
                    var rightDimensions = viewModule.View.measureChild(
                    rightItem.parent,
                    rightItem,
                    utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
                    utilsModule.layout.makeMeasureSpec(mainView.getMeasuredHeight(), utilsModule.layout.EXACTLY));

                    viewModule.View.layoutChild(rightItem.parent, rightItem, mainView.getMeasuredWidth() - rightDimensions.measuredWidth, 0, mainView.getMeasuredWidth(), rightDimensions.measuredHeight);
                }
            }

        public onLeftSwipeClick(args: ListViewEventData) {
            var listView = args.object;
            console.log("Button clicked: " + args.object.id + " for item: " + args.object.bindingContext);
        }

        public onRightSwipeClick(args) {
            var listView = args.object;
            console.log("Button clicked: " + args.object.id + " for item: " + args.object.bindingContext);
            this.GameService.delete_game_admin(this.UserService.username, args.object.bindingContext).subscribe();
            this.GameService.get_all_created_games(this.UserService.username).subscribe(
              gamesCreated => this.YourGameList = gamesCreated['games']
            )
        }

}
