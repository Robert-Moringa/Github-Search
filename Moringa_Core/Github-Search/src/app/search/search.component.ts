import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  names: any[] = [];

  constructor(private searchService: SearchServiceService) { }

  ngOnInit(): void {
    this.searchService.getName().subscribe((response: any) => {
      this.names=response.data;
    });
  }

}
