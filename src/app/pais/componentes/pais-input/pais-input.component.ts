import { getLocaleFirstDayOfWeek } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ɵnoSideEffects } from '@angular/core';
import { Subject, debounceTime, firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDeBounce: EventEmitter<string> = new EventEmitter<string>();
  @Input()  placeHolderInput:string ="";

  debouncer:Subject<string> = new Subject();

  termino: string = "";

  constructor() { }

  ngOnInit(): void {

    this.debouncer.
    pipe(debounceTime(399)).subscribe( valor => {
      this.onDeBounce.emit(valor);
    });
  
  }

  buscar(): void {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }
}
