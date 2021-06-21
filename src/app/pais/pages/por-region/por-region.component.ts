import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    ` button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  //inicializo region activa en vacío
  regionActiva: string = '';
  paises: Country[] = [];


  constructor(private paisService: PaisService) { }
  //creamos un metodo para evalur el tipo de booton
  getClaseCSS(region: string): string {
    return (region === this.regionActiva)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  //Creamos un metodo llamado activar region

  activarRegion(region: string) {
    if (region === this.regionActiva) { return }

    this.regionActiva = region;
    this.paises = [];
    //TODO: hacer el llamdo al servicio para traer los paises por esa region 
    this.paisService.buscarRegion(region)
      .subscribe(paises => this.paises = paises)
  }




}
