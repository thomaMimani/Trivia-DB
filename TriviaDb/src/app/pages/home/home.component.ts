import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Category } from 'src/app/interface/question';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[]
})
export class HomeComponent implements OnInit {

  constructor() { }

  category: string=''

  selectCategory:Category[]=[
    {
      id: 10,
      categoryName: 'General Knowledge'
    },
    {
      id:11,
      categoryName: "Entertainment : Books"
    },
    {
      id:12,
      categoryName: "Entertainment: Film"
    },
    {
      id:13,
      categoryName: "Entertainment: Music"
    },
    {
      id:14,
      categoryName: "Entertainment: Musicals & Theatres"
    },
    {
      id:15,
      categoryName:`hello`
    }
  ]

  ngOnInit(): void {
  }

getCategory(){
  for(let i of this.selectCategory){
    this.category=i.categoryName
  }
}  

}
