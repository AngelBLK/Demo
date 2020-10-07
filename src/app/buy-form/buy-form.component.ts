import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  onGoBack(){
    this.location.back();
  }

}
