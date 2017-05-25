import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {

  constructor(private http: Http, private router: Router) {
    var self = this;
    var headers = new Headers();
    var url = "/ajax/logout";
    var respond;

    headers.append('Content-Type', 'application/x-www-urlencoded');

    respond = this.http.post(url, {
      headers : headers
    }).subscribe(function(data) {

      self.router.navigateByUrl('/log-in');
    });
  }
  ngOnInit() {

  }
}
