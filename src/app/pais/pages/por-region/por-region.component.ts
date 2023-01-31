import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais-interface';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  paises:Pais[] = [];
  regionActiva: string = '';

  constructor(private service: PaisService) { }

  ngOnInit(): void {
  }
  // 
  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? "btn btn-primary" : "btn btn-outline-primary";
  }

  activarRegion(region: string) {

    if (region === this.regionActiva) return;

    this.regionActiva = region;
    console.log(this.regionActiva);
    //llamado al servicio

    this.service.buscarRegion(region).subscribe({
      next: (pais) => this.paises = pais,
      error: (error) => console.log(error)
    });
  }
}
