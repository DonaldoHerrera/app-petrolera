import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../services/homework.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homeworkadd',
  templateUrl: './homeworkadd.page.html',
  styleUrls: ['./homeworkadd.page.scss'],
})
export class HomeworkaddPage implements OnInit {
  private subject_id;
  public homeworkForm: FormGroup;

  error_messages = {
    'title': [
        { type: 'required', message: 'Titulo es requerido' },
    ],
    'description': [
        { type: 'required', message: 'Descripción es requerida' },
    ]
}

  constructor(private formBuilder: FormBuilder,private homeworkservice: HomeworkService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subject_id = this.route.snapshot.paramMap.get('subject_id');
    this.homeworkForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      });
  }

  onCreate(){

    
    if (this.homeworkForm.invalid) return;
    let data = JSON.parse(JSON.stringify(this.homeworkForm.value));
    this.homeworkservice.store(data,this.subject_id).subscribe((res) => {
        console.log(res);

    }, ((error) => {
        console.log(error.message);
    }));
  }
}
