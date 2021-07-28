import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  


  constructor(private http:HttpClient ) {}

  

  getName(name:string) {
    console.log(name)
    return this.http.get('https://api.github.com/users/' + name + '?client_id=03dd913322b3db7d987&client_secret=020c0b3665296b33d758edeeced30473ef44f7da')
  }
  getRepo(name:string) {
    return this.http.get<any[]>('https://api.github.com/users/' + name + '/repos')
  }

  
}


