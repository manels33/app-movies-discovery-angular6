import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-movies',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss'],
  animations: [
    trigger('listStragger', [
      transition('* <=> *', [
        query(':enter',
        [
          style({ opacity: 0, transform: 'translateY(-15px)'}),
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
export class MediasComponent implements OnInit {

  medias: Object = {
    results: ''
  };
  mediaType = 'movie';
  constructor( private data: DataService) { }

  ngOnInit() {
    this.data.getMedia('movie', 1).subscribe(
      data => {
        this.medias = data;
      }
    );
  }

  requestMedia(mediaType) {
    this.mediaType = mediaType;
    this.medias = [];
    this.data.getMedia(mediaType, 1).subscribe(
      data => {
        this.medias = data;
      }
    );
  }
}
