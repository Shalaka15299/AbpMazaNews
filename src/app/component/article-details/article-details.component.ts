import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { testArticle } from 'src/app/model/data';
import { Article } from 'src/app/model/model';

@Component({
  selector: 'article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  category : string = '';
  id : string = '';
  articleDetails:Article = testArticle

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.params['category'];
    this.id = this.activatedRoute.snapshot.params['id'];

    this.router.events.subscribe((res:any) => {
        if(res instanceof ActivationEnd){
          this.category = res.snapshot.params['category'];
          this.id = res.snapshot.params['id'];
        }
    })
  }

}
