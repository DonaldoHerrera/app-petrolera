import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../../services/homework.service';
@Component({
  selector: 'app-homework',
  templateUrl: './homework.page.html',
  styleUrls: ['./homework.page.scss'],
})
export class HomeworkPage implements OnInit {
  private homeworks : any[];

  constructor(private homeworkService: HomeworkService) {
    this.getHomeworks();
   }

  ngOnInit() {
    
  }

  getHomeworks(){
    this.homeworkService.getHomeworks().subscribe((res:any)=>{
      this.homeworks = res.data;
      console.log(res.data);
    },(error)=>{
      console.log(error);
    });
  }

}
