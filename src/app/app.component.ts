import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angulartest';
  data: any;
  constructor(private http: HttpClient) {
    console.log(environment.url);

  }

  async ngOnInit() {

   this.data = await this.http.get(environment.url).toPromise();

  }
  


}
