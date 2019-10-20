import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subjectdetail',
  templateUrl: './subjectdetail.page.html',
  styleUrls: ['./subjectdetail.page.scss'],
})
export class SubjectdetailPage implements OnInit {
  private subject_id;
  public subject:any = [];
  public category:any = [];
  public homeworks:any = [];
  public user:any = [];

  constructor(private subjectservice : SubjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subject_id =  this.route.snapshot.paramMap.get('subject_id');
    this.getSubject(this.subject_id);
  }


  private getSubject(subject_id){
    this.subjectservice.getSubject(subject_id).subscribe((res:any)=>{
      this.subject = res.data_subject;
      this.category = res.data_category;
      this.homeworks = res.data_homeworks;
      this.user = res.data_homeworks.user;
  
    },(error)=> {
      console.log("error: "+error.message)
    });
  }
}
