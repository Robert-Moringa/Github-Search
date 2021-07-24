import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  names: any[] = [];

  constructor(private http:HttpClient) { }

  getName() {
    return this.http.get('https://api.github.com/users/Robert-Moringa?access_token=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').subscribe((response: any) => {
      this.names=response.data;
    })
  }
}
