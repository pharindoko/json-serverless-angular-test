import { Component, OnInit } from "@angular/core";
import { environment } from "./../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class Category {
  id: string;
  question: string;
  answer: string;
  sno: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "angulartest";
  data: any;
  item: Category;
  header: HttpHeaders;
  constructor(private http: HttpClient) {
    console.log(environment.url);
    this.header = new HttpHeaders();
    if (environment.apitoken) {
      this.header = this.header.append("x-api-key", environment.apitoken);
    }
    this.header = this.header.append("Content-Type", "application/json");
  }

  async ngOnInit() {
    this.data = await this.http
      .get(environment.url, { headers: this.header })
      .toPromise();
    this.item = {
      question: "test-question",
      id: "test-id",
      answer: "test-answer",
      sno: "test-sno"
    };
  }

  async addCategory(item: Category) {
    console.log(JSON.stringify(item));
    this.data = await this.http
      .post(environment.url, item, { headers: this.header })
      .toPromise();
  }

  async updateCategory(item: Category) {
    this.data = await this.http
      .put(environment.url, item, { headers: this.header })
      .toPromise();
  }
}
