import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service'
import {
  MatTableModule,
  MatStepperModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
} from "@angular/material";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public categories : any = []

  constructor(private categoriesservice: CategoriesService) {
    this.getCategories();
  }
  private getCategories(){
    this.categoriesservice.getCategories().subscribe((res:any)=>{
      this.categories = res.data;
      console.log(this.categories);
    },(error)=> {
      console.log("error: "+error.message)
    });
  }

}
