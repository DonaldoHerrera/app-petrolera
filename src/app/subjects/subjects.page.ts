import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  private category_id;
  public category:any = [];
  public subjects:any = [];
  constructor(private route: ActivatedRoute, private subjectservice : SubjectService) {
  
  }

  ngOnInit() {
    this.category_id =  this.route.snapshot.paramMap.get('category_id');
    this.getCategory(this.category_id);
  }

  private getCategory(category_id){
    this.subjectservice.getCategoryId(category_id).subscribe((res:any)=>{
      this.category = res.data;
      this.subjects = res.data_subjects;
    },(error)=> {
      console.log("error: "+error.message)
    });
  }

  

}