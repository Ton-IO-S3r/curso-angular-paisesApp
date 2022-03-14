import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  
  pais!:Country;

  constructor(private activadedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    this.activadedRoute.params
      .pipe(
        switchMap((param) => this.paisService.getPaisPorCodigo(param['id'])),
        tap(console.log)
      )
      .subscribe(pais => {
        this.pais = pais[0];
      })
    // this.activadedRoute.params
    //   .subscribe( ({ id }) => {
    //     this.paisService.getPaisPorCodigo(id)
    //         .subscribe(pais => {
    //           console.log(pais[0])
    //         })
    //   } )
  }

}
