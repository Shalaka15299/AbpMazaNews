import { Directive, HostListener, Input } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';

@Directive({
  selector: '[openArticle]'
})
export class OpenArticleDirective {
  @Input() category:string = '';
  @Input() id :string = '';

  @HostListener('click') openArticle(){
    this.router.navigate(['/article/' + this.category + '/' +this.id]);
  }

  constructor(private router:Router) { }

}
