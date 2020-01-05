import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  constructor( private http: HttpClient) {}
  getDetailPeople(peopleName) {
    return this.http.get(`https://api.github.com/users/${peopleName}`);
  }
}
