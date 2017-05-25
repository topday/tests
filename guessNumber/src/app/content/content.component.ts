import { Component, OnInit, SecurityContext, Directive, ViewContainerRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

declare var OpenLayers: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  title: string;
  private content: any = "";

  constructor(private http: Http, sanitizer: DomSanitizer) { 

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    var fitAngle = function() {
      var w = $('.desk').width();
      var h = $('.desk').height();

      $('.left-angle').css('border-top-width', h + 'px');
      $('.left-angle').css('border-right-width', (w * 0.05) + 'px');
    };

    $(window).resize(fitAngle);
    fitAngle();
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

}
