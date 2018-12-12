import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movie: any;
  movieId: String;
  mediaType: String;
  constructor(private data: DataService, private route: ActivatedRoute) {
    // select id of product in route
    this.route.params.subscribe( params => {
      this.movieId = params.id;
      this.mediaType = params.type;
    });
  }

  ngOnInit() {
    this.data.getDetailsMedia(this.mediaType, this.movieId).subscribe(
      data => {
        this.movie = data;
      }
    );
  }

}
