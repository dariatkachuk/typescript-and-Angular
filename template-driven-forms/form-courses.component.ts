import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-courses',
  templateUrl: './form-courses.component.html',
  styleUrls: ['./form-courses.component.css']
})
export class FormCoursesComponent {
  courseCategories = [
      { id: 1, name: 'Development' },
      { id: 2, name: 'Art' },
      { id: 3, name: 'Languages' }
    ];

    submit(cForm) {
      console.log(cForm);
    }


}
