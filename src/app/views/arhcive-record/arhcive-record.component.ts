import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arhcive-record',
  templateUrl: './arhcive-record.component.html',
  styleUrls: ['./arhcive-record.component.css']
})
export class ArhciveRecordComponent implements OnInit {
    @Input() sim;

    status: Boolean = true;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient, public router: Router) {}

  changeStatus() {
    this.status = !this.status;
  }

  deleteRecored() {
    this.http
      .delete('http://127.0.0.1:3000/sims/' + this.sim._id)
      .subscribe(() => {
        alert("'sim deleted'");
        this.router.navigate(['/archive']).then(() => window.location.reload());
      });
  }

  updateRecord(matricule:any,cin:any,fullName: any, tel: any, address: any) {
    let body = {
      matricule:matricule,
      cin:cin,
      fullName: fullName,
      tel: tel,
      address: address,
    };

    console.log(body);
    this.http
      .put(
        'http://127.0.0.1:3000/sims/' + this.sim._id,
        body,
        this.httpOptions
      )
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/archive']).then(() => window.location.reload());
      },
      (error)=>console.log(error));
  }

  ngOnInit(): void {
  }

}
