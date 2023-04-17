import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../interfaces/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  games : Game[] = [];
  loading : boolean = true ; // set loading to true initially

  constructor(private _GamesService : GamesService){

  }

  ngOnInit(): void {
    this._GamesService.getAllGames().subscribe({
      next: (res)=>{
        this.games.push(res[173], res[8], res[9]);
        this.loading = false; // set loading to false when data is received

      },
      error: (err)=> console.log(err)
    })
  }

}


