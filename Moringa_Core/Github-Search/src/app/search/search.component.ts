import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  names:string='';

  constructor(private searchService: SearchServiceService) { }
  currentName= '';
  getValue(val: any) {
    this.currentName = val;
  }
  

  ngOnInit(): void {
    this.searchService.getName().subscribe((response: any) => {
      this.names=response.name;
    });

    this.searchService.getRepo().subscribe((response: any) => {
      var i: any;
      for (i = 0; i < response.length; i++) {
        console.log(response[i].name)
      }
    })
  }

}
