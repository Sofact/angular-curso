import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Dr Strange', 'Thor'];
  public heroeBorrado: string|undefined = '' ;

  borrarHeroe(): void{
  
    console.log("borrando");
     this.heroeBorrado = this.heroes.shift();
  }}
