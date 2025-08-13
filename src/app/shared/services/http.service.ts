import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private url = "http://localhost:8000/";

  get(url: string) {
    return this.http.get(this.url + url, {});
  }
}
