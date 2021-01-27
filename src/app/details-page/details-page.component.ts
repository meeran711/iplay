import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { SearchTracksService } from '../itunes.service';
import { SearchPageComponent } from '../search-page/search-page.component';
import { TrackItem } from '../TrackItem';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  constructor(private itunesService : SearchTracksService,
    private activatedRoute: ActivatedRoute){}
  results: Observable<any>;
  loading: boolean;

  ngOnInit() {
   this.results = this.itunesService.lookUpTrack(this.activatedRoute.snapshot.url[0].path);
    }
}
