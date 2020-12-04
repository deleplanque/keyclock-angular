import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getUnsecureData() {
    return this.http.get(this.apiUrl + '/', {responseType: 'text'});
  }
  getUserData() {
    return this.http.get(this.apiUrl + '/user', {responseType: 'text'});
  }
  getAdminData() {
    console.log("hello")
    return this.http.get(this.apiUrl + '/admin', {responseType: 'text'});
  }
}
