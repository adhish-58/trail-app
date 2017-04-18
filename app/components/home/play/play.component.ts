import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as utils from "utils/utils";

import { GameService, UserService } from "../../../services";
import dialogs = require("ui/dialogs");

declare var UIColor: any;
import { ListViewLinearLayout, ListViewEventData, RadListView, ListViewLoadOnDemandMode }from "nativescript-telerik-ui/listview"

import { RadListViewComponent } from "nativescript-telerik-ui/listview/angular";
import * as applicationModule from "application";
import * as Timer  from "timer";

import viewModule = require('ui/core/view');
import utilsModule = require("utils/utils");


@Component({
    selector: "tl-play",
    moduleId: module.id,
    templateUrl: "./play.component.html",
    styleUrls: ["./play-common.css", "./play.component.css"]
})

export class PlayComponent implements OnInit {
    public gameList: Array<string>= [];
    public gameCreators: string;
    public listHeight: number;

    private _numberOfAddedItems;
    private leftThresholdPassed = false;
    private rightThresholdPassed = false;

    constructor(public RouterExtensions: RouterExtensions,
                private GameService:GameService,
                private UserService:UserService,
                private page: Page) {

      this.GameService.get_invited_games(this.UserService.username).subscribe(
          gamesInvited => this.gamesInvitedParser(gamesInvited)
      );
    }

    ngOnInit() {
      this.page.actionBarHidden = true;
      this.listHeight = this.gameList.length*100;
    }

    public gamesInvitedParser(gamesInvited){
      this.gameList = gamesInvited['games'][0];
      this.gameCreators = gamesInvited['games'][1];
    }

    public onGameTap(args: ListViewEventData) {

           var listview = args.object as RadListView;
           var selectedItems = listview.getSelectedItems();
           var i:number =0;
           console.log("------------------------ ItemTapped: " + selectedItems);
           this.GameService.CurrentGame = selectedItems[0];
           for (i=0; i<this.gameList.length;i++){
             if (this.GameService.CurrentGame == this.gameList[i])
                this.GameService.GameCreator = this.gameCreators[i];
           }
           this.RouterExtensions.navigate(['/gameView'], {
               transition: {
                   duration: 350,
                   name: 'flipLeft',
                   curve: "linear"
               },
               clearHistory: true
           });

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

    public refreshGameList(args: ListViewEventData) {
        var that = new WeakRef(this);
        this.GameService.get_invited_games(this.UserService.username).subscribe(
            gamesInvited => this.gamesInvitedParser(gamesInvited)
        );
        Timer.setTimeout(function () {
        var listView = args.object;
        listView.notifyPullToRefreshFinished();
    }, 1000);
    }

}
