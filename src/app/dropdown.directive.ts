import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('style') style: string;
  
  @HostListener('click') onclicked(eventdata: Event) {
   // alert('hey');
   // alert(this.elemnt.nativeElement.parent);
    this.elemnt.nativeElement.classList.toggle('open');
   
  }
  constructor(private rendr : Renderer2,private elemnt : ElementRef) { }




}
