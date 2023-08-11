import { Directive, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLifeCycle]'
})
export class LifeCycleDirective implements OnInit, OnDestroy, OnChanges {

  constructor() { }

  ngOnInit(): void {
    this.lifeCycle('OnInit');

  }

  ngOnDestroy(): void {
    this.lifeCycle('OnDestroy');

  }

  ngOnChanges(changes: SimpleChanges): void {
      this.lifeCycle('OnChanges');

      if(changes){
        console.log('Cambios :', changes);

      }
  }

  lifeCycle(hook: string, changes?: SimpleChanges) {
    console.log(`Ciclo de vida: ${hook}`);

  }

}
