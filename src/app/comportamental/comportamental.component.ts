import { Component, OnInit } from '@angular/core';
import { Country } from '../interfaces/observer.interface';
import { ObserverService } from '../services/observer.service';

@Component({
  selector: 'app-comportamental',
  templateUrl: './comportamental.component.html',
  styleUrls: ['./comportamental.component.scss']
})
export class ComportamentalComponent implements OnInit {

  paises  : Country[] = [];
  termino : string = '';
  hayError: boolean = false;
  mostrarSugerencias: boolean = false;
  paisesSugeridos   : Country[] = [];


  constructor( private os: ObserverService ) {}

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;  
    this.mostrarSugerencias = false;

    this.os.buscarPais( this.termino )
    .subscribe( (paises) => {
      console.log( paises );
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    } );
  }

  ngOnInit(): void {
  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
  }
}
