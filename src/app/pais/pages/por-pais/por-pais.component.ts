import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor:pointer;
      }
    `
  ]
})
export class PorPaisComponent  {
  termino:string = '';
  hayError:boolean = false;
  paises:Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugeridos:boolean = false;

  constructor (private paisService: PaisService){}

  buscar = (termino: string) =>{
    this.hayError=false
    this.termino = termino
    this.mostrarSugeridos=false;

    this.paisService.buscarPais(this.termino)
        .subscribe( {
            next: paises =>{
              this.paises = paises
              console.log(this.paises.length)
            }, 
            error: err => {
              this.hayError = true;
              this.paises = [];
            }
        });
  }
  mostrarSugerencias = ( termino: string) => {
    this.mostrarSugeridos = true;
    this.hayError=false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
        .subscribe({
          next: paises => this.paisesSugeridos = paises.splice(0,5),
          error: err => this.paisesSugeridos = []
        });
  }
}
