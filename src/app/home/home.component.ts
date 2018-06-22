import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeService } from './home.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data1: any;
  constructor(public homeService: HomeService) {

  }

  ngOnInit() {
    this.data1 = this.getServiceData();
  }

  getServiceData() {
    this.homeService.getData().subscribe(data => {
      this.data1 = data;
    });
  }

}
