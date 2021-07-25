import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  

  constructor(private http:HttpClient) { }

  getName() {
    return this.http.get('https://api.github.com/users/Robert-Moringa?access_token=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')
  }

}
