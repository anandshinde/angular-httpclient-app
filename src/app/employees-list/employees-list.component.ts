import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  Employee: any = [];
  id: any;
  // userArr: any=[];
  // param: any;

  constructor(
    public restApi: RestApiService
  ) {}

  ngOnInit() {
    this.loadEmployees()
  }

  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    })
  }

  // Delete employee
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees()
      })
    }
  }

  // // sorting functions
  // sortString(param) {
  //   this.userArr.sort(function(a, b) {
  //     const x = a[param].toLowerCase();
  //     const y = b[param].toLowerCase();
  //     if (x > y) {
  //       return 1;
  //     }
  //     if (x < y) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  // }
  // sorting(filter) {
  //   if (filter === 'name') {
  //     this.sortString('name');
  //   }
  //   if (filter === 'email') {
  //     this.sortString('email');
  //   }
  //   if (filter === 'phone') {
  //     this.userArr.sort(function(a, b) {
  //       return a.phone - b.phone;
  //     });
  //   }
  // }

}