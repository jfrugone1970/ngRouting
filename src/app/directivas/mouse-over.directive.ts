import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {

  @Input() defaultColor: string = "";
  @Input('appMouseOver') highlightcolor = "";

  @HostListener('mouseenter') OnMouseEnter(){
     this._changecolor(this.highlightcolor || this.defaultColor || 'green', 'white');
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this._changecolor(null, null);

  }

  constructor(private _elementref: ElementRef) { }

  private _changecolor(backgroundcolor: string | null, color: string | null){
     this._elementref.nativeElement.style.backgroundColor = backgroundcolor;
     this._elementref.nativeElement.style.color = color;


  }

}
