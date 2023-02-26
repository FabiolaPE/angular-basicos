import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
    heroeBorrado: string = '';

    borrarHeroe(){
      console.log('Borrando...');
      const heroeBorrado = this.heroes.pop() || '';
      console.log(heroeBorrado);
      this.heroeBorrado = heroeBorrado;
    }
}
