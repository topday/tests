import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

const LogIn = class LogIn {
  constructor (
    public email: string = '',
    public password: string = '',
  ) {
  
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new LogIn();

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    var self = this;
    var headers = new Headers();
    var url = "/ajax/login";

    headers.append('Content-Type', 'application/json');

    this.http.post(url, JSON.stringify(this.model), {
      headers : headers
    }).subscribe(function(data) {

      self.router.navigateByUrl('/guess-number');
    });
  }
}
