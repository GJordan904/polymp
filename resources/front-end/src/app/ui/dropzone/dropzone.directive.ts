import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {DropzoneService} from './dropzone.service';

@Directive({
  selector: '[dropzone]'
})
export class DropzoneDirective implements OnInit {

  constructor(private service: DropzoneService,
              private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.service.init(this.el.nativeElement.getAttribute('id'));
    this.renderer.listen(this.el.nativeElement, 'click', this.dzClick)
  }

  private dzClick = (evt: Event) => {
    this.service.dz.hiddenFileInput.click();
  }
}
