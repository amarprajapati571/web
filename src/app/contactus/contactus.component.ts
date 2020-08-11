import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".hide").hide();
      $(".close").click(function(){
          $(".hide").fadeOut();
      });
      $(".submit").click(function(){
        $(".hide").show();
      });

      $(".submit").click(function(){
        $('.text-success').val();
      });
    });
  }


}
