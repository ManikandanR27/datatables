
import { AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Person } from './person';
import { Router } from '@angular/router';
class DataTablesResponse {
  data!: any[];
  draw!: number;
  recordsFiltered!: number;
  recordsTotal!: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
//   dtOptions: DataTables.Settings = {};
//   persons!: Person[];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     const that = this;

//     this.dtOptions = {
//       pagingType: 'full_numbers',
//       pageLength: 10,
//       serverSide: true,
//       processing: true,
//       ajax: (dataTablesParameters: any, callback) => {
//         that.http
//           .post<DataTablesResponse>(
//             'https://angular-datatables-demo-server.herokuapp.com/',
//             dataTablesParameters, {}
//           ).subscribe((resp:any) => {
//             that.persons = resp.data;

//             callback({
//               recordsTotal: resp.recordsTotal,
//               recordsFiltered: resp.recordsFiltered,
//               data: []
//             });
//           });
//       },
//       columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
//     };
//   }
// }
dtOptions: DataTables.Settings = {};

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'assets/data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }, {
        title: 'Action',
        render: function (data: any, type: any, full: any) {
          return 'View';
        }
      }]
    };
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute("view-person-id")) {
        this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
      }
    });
  }
}