import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, ActivationStart, Router } from '@angular/router';
import { testArticleThumbnail } from 'src/app/model/data';
import { ArticleThumbnail } from 'src/app/model/model';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  articles: ArticleThumbnail[] = [];
  @Input() category: string = '';

  constructor(private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.params['category'];
    this.populateArticleThumbnails();
    this.router.events.subscribe((res:any)=>{
      // console.log(res);
      if(res instanceof ActivationEnd){
        this.category =res.snapshot.params['category'];
        this.populateArticleThumbnails();
      }
    });
  }

  populateArticleThumbnails(){
    this.articles=[
      testArticleThumbnail,
      testArticleThumbnail,
      testArticleThumbnail,
      testArticleThumbnail,
      testArticleThumbnail
    ];
  }
}
