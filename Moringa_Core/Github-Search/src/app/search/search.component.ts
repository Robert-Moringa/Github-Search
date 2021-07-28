import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username: any;
  names: any;

  constructor(private searchService: SearchServiceService) { }
  currentName= '';
  repos: any[] = [];

  getValue(val: any) {
    // this.searchService.updateUsername(this.username);
    this.currentName=val.search;
    this.searchService.getName(val.search).subscribe((response: any) => {
      this.names=response.name;
      console.log(response)
    })

    this.searchService.getRepo(val.search).subscribe((response: any) => {

      
      for( var i=0; i<=response.length; i++){ 
        this.repos.push(response[i]);
      }
      

    })
  }
  

  ngOnInit(): void {
    
  }

}
