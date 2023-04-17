import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameDetails } from '../interfaces/game-details';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  constructor(private _HttpClient : HttpClient) { }

  getGames() :  Observable <Game[]> {
    const endpoint = `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc`;
    return this._HttpClient.get<Game[]>(endpoint ) ;
  }

  getAllGames():  Observable <Game[]>  {
    const endpoint = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
    return this._HttpClient.get<Game[]>(endpoint)
  }

  getPlatform(term :string ):  Observable <Game[]>  {
    const endpoint = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${term}`;
    return this._HttpClient.get<Game[]>(endpoint)
  }

  getSortGames(term :string ):  Observable <Game[]>  {
    const endpoint = `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${term}`;
    return this._HttpClient.get<Game[]>(endpoint)
  }

  getCategoriesGames(term :string ):  Observable <Game[]>  {
    const endpoint = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${term}`;
    return this._HttpClient.get<Game[]>(endpoint)
  }

  getGameDetails(gameId :number ):  Observable <GameDetails>  {
    const endpoint = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
    return this._HttpClient.get<GameDetails>(endpoint)
  }

}
