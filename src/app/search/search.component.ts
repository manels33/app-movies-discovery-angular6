import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../data.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('listStragger', [
      transition('* <=> *', [
        query(':enter',
          [
            style({opacity: 0, transform: 'translateY(-15px)'}),
            stagger('50ms',
              animate('550ms ease-out',
                style({opacity: 1, transform: 'translateY(0)'})))
          ], {optional: true}),
        query(':leave', animate('50ms ease-out', style({opacity: 0}))
          , {optional: true})
      ])
    ])
  ]
})
export class SearchComponent implements OnInit {

  searchResults: any;
  mediaType = true;
  type = 'movie';
  searchForm = new FormGroup({
    searchField: new FormControl(),
  });

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }

  submitHandler() {
    this.type = this.mediaType ? 'movie' : 'serie';
    setTimeout(() => {
      if (this.searchForm.controls['searchField'].value === '') {
        this.searchResults = null;
      } else {
        this.data.searchMedia(this.type, this.searchForm.controls['searchField'].value).subscribe(
          data => {
            this.searchResults = data;
          }
        );
      }
    }, 1000);
  }

}
