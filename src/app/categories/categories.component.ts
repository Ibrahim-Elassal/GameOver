import { Component, OnInit, getPlatform } from '@angular/core';
import { GamesService } from '../services/games.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../interfaces/game';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css' ,  '../browse-game/browse-game.component.css'  ]
})

export class CategoriesComponent implements OnInit {
  categoryGames: Game[] = [];
  category : string ='' ;
  loading : boolean = true ; // set loading to true initially

  constructor(private _GamesService : GamesService , private _ActivatedRoute :ActivatedRoute){}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.category = params.get('category')as string ;
      this.getCategoriesGames();
    });
  }

  getCategoriesGames() {
    this._GamesService.getCategoriesGames(this.category).subscribe({
      next: (res)=>{
        this.categoryGames = res ;
        this.loading = false; // set loading to false when data is received
      },
      error: (err)=>console.log(err)
    })
  }
}
