import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getData() {
    let url="http://localhost:3000/employees";
    return this.http.get(url);
  }
}
