import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor(
    private activedRoute: ActivatedRoute,
    private router:Router,
    private paisService: PaisService) { }

  ngOnInit(): void {

    this.activedRoute.params.pipe(

      switchMap(({ idPais }) => this.paisService.getPaisByCode(idPais))

    ).subscribe({

      next: value => {
        console.log(this.pais);
        this.pais = value[0];
      },
      error: error =>{
        console.log(error);
        this.router.navigateByUrl('');
      }
    });
  }



}
