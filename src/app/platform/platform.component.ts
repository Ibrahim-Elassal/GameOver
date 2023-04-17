
import { Component, OnInit, getPlatform } from '@angular/core';
import { GamesService } from '../services/games.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../interfaces/game';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css' ,  '../browse-game/browse-game.component.css']
})

export class PlatformComponent implements OnInit {
  pcGames: Game[] = [];
  platform :string ='' ;
  loading : boolean = true ; // set loading to true initially

  constructor(private _GamesService : GamesService , private _ActivatedRoute :ActivatedRoute){}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.platform = params.get('platform') as string ;
      this.getPlatform();
    });
  }

  getPlatform() {
    this._GamesService.getPlatform(this.platform).subscribe({
      next: (res)=>{
        this.pcGames = res ;
        this.loading = false; // set loading to false when data is received

      },
      error: (err)=>console.log(err)
    })
  }
}
