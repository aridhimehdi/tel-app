import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sim',
  templateUrl: './add-sim.component.html',
  styleUrls: ['./add-sim.component.css']
})
export class AddSimComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  


  constructor( private http:HttpClient,public router:Router) { }

  ngOnInit(): void {
  }

  submitForm(value, value2, value3, value4, value5) {
    
    const body = {
      matricule: value,
      cin: value2,
      fullName: value3,
      tel: value4,
      address: value5,
    };
    console.log('btn ajouter pressed');
    console.log(body);

    this.http
      .post('http://127.0.0.1:3000/sims', body, this.httpOptions)
      .subscribe(
        (response) =>{ 
          console.log(response)
          alert('facture ajouter!');
          this.router.navigate(['/addsim']).then(() => window.location.reload());
        
        },
        (error)=>{
          console.log(error.error);
          alert("les information est unvalid");
         this.router.navigate(["/addsim"]).then(()=>window.location.reload())
        }
      );

    
  }
}



