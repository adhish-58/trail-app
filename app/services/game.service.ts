import { Injectable } from "@angular/core";
import { RestService } from "../services";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Rx";
import "rxjs/add/operator/map";

export class GameAttributes {
  location: string = '';
  message: string = '';
  rank: number = 0;

}

export class NewGame {
  max_rank: number = 0;
  GameName: string;
  username: string;
  GameAttrs: Array<GameAttributes> = [];
  Invitees: Array<string> = [];
}

@Injectable()
export class GameService {
    public NewGameObj:NewGame;

    public CurrentGame: string;

    constructor (private RestService:RestService) {}

    public get_all_locations(){
      return this.RestService.get("get_all_locations");
    }

    public new_game(NewGame) {
      return this.RestService
              .post(NewGame, "create_new_game");
    }

    public add_invitees_to_game(user_id, game_name, invitees_list){
      this.RestService
              .post({ user_id: user_id, game_name: game_name , invitees_list:invitees_list},
                          "add_invitees_to_game");
    }

    public get_all_created_games(user_id){
      return this.RestService
              .post({ user_id: user_id }, "get_all_created_games");
    }

    public get_game_invitees(user_id, game_name){
      this.RestService
              .post({ user_id: user_id, game_name: game_name }, "get_game_invitees");
    }

    public get_game_attributes(game_name, creator_id){
      return this.RestService
              .post({ game_name:game_name, creator_id:creator_id }, "get_game_attributes");
    }

    public get_completed_games(user_id){
      this.RestService
              .post({ user_id: user_id }, "get_completed_games");
    }

    public update_game_status(player_id, creator_id, game_name, time){
      this.RestService
              .post({ player_id:player_id, creator_id:creator_id, game_name:game_name, time:time }, "update_game_status");
    }

    public delete_game_admin(user_id, game_name){
      this.RestService
              .post({ user_id: user_id, game_name:game_name }, "delete_game_admin");
    }

    public delete_game_invitee(player_id, creator_id, game_name){
      this.RestService
              .post({ player_id: player_id, creator_id:creator_id, game_name:game_name }, "delete_game_invitee");
    }

}
