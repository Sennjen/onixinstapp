import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'ba-student-side',
  templateUrl: './student-side.component.html'
})
export class StudentSideComponent implements OnInit{
  isEdit = false;
  master = {
    location:[
      {
        id: 'EB',
        short_name: 'EB'
      },
      {
        id: 'NB',
        short_name: 'NB'
      },
      {
        id: 'SPL',
        short_name: 'SPL'
      }
    ]
  };
  student: Object;

  constructor(private studentsService: StudentsService, private activatedRoute: ActivatedRoute) { }

  getStudent(id): void {
    this.student = this.studentsService.getStudent(id)
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.getStudent(parseInt(params['id']));
    })
  }
}
