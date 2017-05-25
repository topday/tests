import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  model = new Register();

  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private http: Http, private router: Router) {

  }

  ngOnInit() {

  }

  onSubmit() { 
    var headers = new Headers();
    var url = "/ajax/register";

    headers.append('Content-Type', 'application/json');

    this.http.post(url, this.model, {
      headers : headers
    }).subscribe((data) => {
      this.router.navigateByUrl('/log-in');
    });
  }
}
