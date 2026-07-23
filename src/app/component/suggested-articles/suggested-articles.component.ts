import { Component, OnInit } from '@angular/core';
import { testArticleThumbnail } from 'src/app/model/data';

@Component({
  selector: 'suggested-articles',
  templateUrl: './suggested-articles.component.html',
  styleUrls: ['./suggested-articles.component.css']
})
export class SuggestedArticlesComponent implements OnInit {

  articlesToDisplay:any;
  
    constructor() { }
  
    ngOnInit(): void {
      this.articlesToDisplay=[
        {
          type:'recent-articles',
          articles:[
            testArticleThumbnail,
            testArticleThumbnail
          ]
        },
        {
          type:'popular-articles',
          articles:[
            testArticleThumbnail
          ]
        },
        {
          type:'politics-articles',
          articles:[
            testArticleThumbnail
          ]
        },
        {
          type:'education-articles',
          articles:[
            testArticleThumbnail,        
            testArticleThumbnail
          ]
        },
      ]
    }

}
