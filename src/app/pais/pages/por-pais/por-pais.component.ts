import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = "";
  placeHolderInput: string = "Buscar Pais..";

  existeError: boolean = false;
  mostrarSugerencias:boolean = false;

  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];

  constructor(private services: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {

    this.existeError = false;
    this.termino = termino;

    this.services.buscarPais(this.termino).subscribe({
      next: (value) => {
        console.log(value);
        this.paises = value;
      },
      error: error => {
        console.log(error);
        this.existeError = true;
      }
    });
  }

  sugerencias(termino: string) {
    this.termino = termino;
    this.existeError = false;
    this.mostrarSugerencias = true;

    this.services.buscarPais(termino).subscribe(
      {
        next: (paises) => {
          //paises.splice(0,3)
          this.paisesSugeridos = paises.splice(0, 5);
          console.log(paises);
        },
        error: (error) => {
          this.paisesSugeridos = [];
          console.log(error)
        }
      }
    );
  
  }

  buscarSugerido(termino:string):void{
    this.buscar( termino );
  }
}
