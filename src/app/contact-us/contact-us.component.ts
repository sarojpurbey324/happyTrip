import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  sendMessage(form){
    console.log(form.value);
    let obs = this.http.post("http://localhost:8080/UserQuery/add",form.value);
    obs.subscribe(()=>{

    })
  }
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

}
