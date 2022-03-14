import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {
  
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = "";
  paises: Country[] = [];
  hayError:boolean = false;

  constructor(private paisService:PaisService) { }

  getCSSClass = (region: string): string => region === this.regionActiva ? 'btn btn-primary me-2':'btn btn-outline-primary me-2';
  
  activarRegion = (region: string) => {
    if (region===this.regionActiva) {return}
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarPorRegion(region)
        .subscribe({
          next: paises => this.paises = paises,
          error: err => {
            this.hayError=true;
            this.paises=[];
          }
        })
  }

}
