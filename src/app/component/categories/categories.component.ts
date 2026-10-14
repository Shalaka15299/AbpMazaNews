import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories :string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.categories =[
       'environment',
      'indian-Politics',
      'international-Politics',
      'education',
      'elections',
      'religion',
      'bollywood',
      'tollywood',
      'technology',
      'Marathi Entertainment'
    ]
  }

}
