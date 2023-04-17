import { Component, OnInit } from '@angular/core';
   import { GamesService } from '../services/games.service';
   import { ActivatedRoute } from '@angular/router';
   import { CarouselModule } from 'ngx-owl-carousel-o';
   import { OwlOptions } from 'ngx-owl-carousel-o';
   import { GameDetails } from '../interfaces/game-details';

   @Component({
     selector: 'app-game-details',
     templateUrl: './game-details.component.html',
     styleUrls: ['./game-details.component.css']
   })
   export class GameDetailsComponent implements OnInit{
    gameId: string  = '';
    gameDetails!: GameDetails;
    
    loading : boolean = true ; // set loading to true initially

     constructor(private _GamesService :GamesService , private _ActivatedRoute : ActivatedRoute  ){}

     ngOnInit(): void {
       this._ActivatedRoute.paramMap.subscribe((params)=>{
        this.gameId = params.get('id')?? '';

          this.getGameDetails(this.gameId);
       })

     }

     getGameDetails(gameId : any ){
       this._GamesService.getGameDetails(parseInt(this.gameId)).subscribe({
         next: (response: GameDetails)=> {
           this.gameDetails = response ;
           this.loading = false; // set loading to false when data is received

         }
       })
     }

       customOptions: OwlOptions = {
         loop: true,
         mouseDrag: true,
         touchDrag: false,
         pullDrag: false,
         dots: false,
         navSpeed: 700,
         margin: 10,
         autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
         navText: ['', ''],
         responsive: {
           0: {
             items: 1
             },
         },
         nav: true
       }

   }
