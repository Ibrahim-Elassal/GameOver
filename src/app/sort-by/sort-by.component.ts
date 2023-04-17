
import { Component, OnInit, getPlatform } from '@angular/core';
import { GamesService } from '../services/games.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../interfaces/game';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css'  ,  '../browse-game/browse-game.component.css' ]
})

export class SortByComponent implements OnInit {
  sortGames: Game[] = [];
  sort : string ='' ;
  loading : boolean = true ; // set loading to true initially

  constructor(private _GamesService : GamesService , private _ActivatedRoute :ActivatedRoute){}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.sort = params.get('sort')as string ;
      this.getSortGames();
    });
  }

  getSortGames() {
    this._GamesService.getSortGames(this.sort).subscribe({
      next: (res)=>{
        this.sortGames = res ;
        this.loading = false; // set loading to false when data is received
      },
      error: (err)=>console.log(err)
    })
  }
}
