import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BrowseGameComponent } from './browse-game/browse-game.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { PlatformComponent } from './platform/platform.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , canActivate:[AuthGuard], component: HomeComponent},
  {path:'login' , component: LoginComponent},
  {path:'signUp'  ,component: SignupComponent},
  { path: 'games/:all', canActivate:[AuthGuard], component: BrowseGameComponent },
  { path: 'games/platform/:platform', canActivate:[AuthGuard], component: PlatformComponent},
  { path: 'games/sort-by/:sort', canActivate:[AuthGuard], component: SortByComponent},
  { path: 'games/Categories/:category', canActivate:[AuthGuard], component: CategoriesComponent},
  {path:'gameDetails/:id'  , canActivate:[AuthGuard],component: GameDetailsComponent},
  // {path:'**' , component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
