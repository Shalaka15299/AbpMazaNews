import { Component, Input, OnInit } from '@angular/core';
import { ArticleThumbnail } from 'src/app/model/model';

@Component({
  selector: 'article-thumbnail',
  templateUrl: './article-thumbnail.component.html',
  styleUrls: ['./article-thumbnail.component.css']
})
export class ArticleThumbnailComponent implements OnInit {
  @Input() article: ArticleThumbnail | null = null;
  @Input() view: 'main' | 'other' | 'suggested' = 'main';

  constructor() { }

  ngOnInit(): void {
  }

  getId(name:string){
    return name.split(" ").join("-");
  }

}
