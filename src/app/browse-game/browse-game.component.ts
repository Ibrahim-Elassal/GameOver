import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../interfaces/game';


@Component({
  selector: 'app-browse-game',
  templateUrl: './browse-game.component.html',
  styleUrls: ['./browse-game.component.css']
})

export class BrowseGameComponent implements OnInit {

  allGames: Game[] = [];
  loading : boolean = true ; // set loading to true initially

  constructor(private _GamesService : GamesService){}

  ngOnInit(): void {
    this._GamesService.getAllGames().subscribe({
      next:(res)=> {
        this.allGames = res  ;
        this.loading = false; // set loading to false when data is received
      },
      error: (err)=> console.log(err)
    })
  }
}
