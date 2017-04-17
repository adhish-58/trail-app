import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as utils from "utils/utils";

import { GameService, UserService } from "../../../services";
import dialogs = require("ui/dialogs");

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

    public onGameTap(args) {
      console.log("\nGameTapped: " + args.index);
      alert("\nGameTapped: " + args.index);
      // this.indexOfGame = args.index;
      // this.beginGameSelected()
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

}
