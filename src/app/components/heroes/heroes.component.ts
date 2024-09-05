import { Component } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: any[] = [];
  constructor(private _heroesService: HeroesService, private _route: Router) {}
  ngOnInit() {
    console.log('Hola mundo ');

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }
  verHeroe(idx: number) {
    this._route.navigate(['/heroe',idx]);
  }
}
