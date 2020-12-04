import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private data: DataService) {}

  ngOnInit(): void {
    console.log("hello")
    this.data.getAdminData().subscribe(data => {
        console.log(data)
      },
      error => {
        console.log(error.error);
      }
    );
  }

}
