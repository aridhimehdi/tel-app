import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  listSims: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, public router: Router) {}

  ngOnInit(): void {
    this.getfactures();
  }

  getfactures() {
    this.http
      .get('http://127.0.0.1:3000/sims', this.httpOptions)
      .subscribe((response) => {
        this.listSims = response;
        console.log(this.listSims);
      });
  }
}
