import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { HttpClient } from '@angular/common/http';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {


  termino: string = "hola mundo";
  existeError: boolean = false;
  paises: Pais[] = [];
  placeHolder:string = "Buscar Capital...";

  constructor(private services: PaisService) { }

  ngOnInit(): void {
  }


  buscar(termino: string) {

    this.termino = termino;

    this.services.buscarCapital(termino).subscribe({

      next: (value) => {
        console.log(value);
        this.paises = value;
        this.existeError = false;
      },
      error: (error) => {
        console.log(error);
        this.existeError = true;
      }

    });
  }


}
