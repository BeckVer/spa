import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css',
})
export class HeroeComponent {
  heroe: any = {};
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService,
    private _route: Router
  ) {
    this._activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }
  regresarHeroe(){
   this._route.navigate(['/heroes']) 
  }
}
