import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Cat } from "./Cat";

@Injectable({
    providedIn: 'root'
})
export class CatService {  
  constructor(private http: HttpClient) {}

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(environment.endpoint + '/cats');
  } 
}