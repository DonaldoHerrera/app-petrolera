import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subjectsall',
  templateUrl: './subjectsall.page.html',
  styleUrls: ['./subjectsall.page.scss'],
})
export class SubjectsallPage implements OnInit {
  public subjects:any = [];

  constructor(private subjectservice: SubjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSubjects();
  }

  private getSubjects(){
    this.subjectservice.getSubjects().subscribe((res:any)=>{
      console.log(res);
      this.subjects = res.data;

  
    },(error)=> {
      console.log("error: "+error.message)
    });
  }

}
