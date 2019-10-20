import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../../services/homework.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-homeworkdetail',
  templateUrl: './homeworkdetail.page.html',
  styleUrls: ['./homeworkdetail.page.scss'],
})
export class HomeworkdetailPage implements OnInit {
  private homework_id;
  public homework:any = [];
  public subject:any = [];
  public files:any = [];
  public user:any = [];
  public category:any = [];

  constructor(private route: ActivatedRoute,private homeworkdetailservice : HomeworkService) { }

  ngOnInit() {
    this.homework_id =  this.route.snapshot.paramMap.get('homework_id');
    this.getHomeworkDetail(this.homework_id);
  }

  private getHomeworkDetail(homework_id){
    this.homeworkdetailservice.getHomeworkId(homework_id).subscribe((res:any)=>{
      this.subject = res.subject;
      this.category = this.subject.category;
      console.log(this.subject.category);
      this.homework = res.homework;
      this.files = res.files;
      this.user = res.user;

    },(error)=> {
      console.log("error: "+error.message)
    });
  }
}
