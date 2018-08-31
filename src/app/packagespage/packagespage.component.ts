import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-packagespage',
  templateUrl: './packagespage.component.html',
  styleUrls: ['./packagespage.component.css']
})
export class PackagespageComponent implements OnInit {
  list:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let obs = this.http.get("http://localhost:8080/Package/all");
    obs.subscribe((response)=>{
      this.list = response;
      console.log(this.list);
    })
  }

}
