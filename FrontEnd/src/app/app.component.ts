import {Component, OnInit} from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
import {DataService} from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';

  constructor() { }

  ngOnInit() {
  }

}
