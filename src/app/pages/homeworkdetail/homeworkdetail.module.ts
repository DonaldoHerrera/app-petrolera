import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeworkdetailPage } from './homeworkdetail.page';

const routes: Routes = [
  {
    path: '',
    component: HomeworkdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeworkdetailPage]
})
export class HomeworkdetailPageModule {}
