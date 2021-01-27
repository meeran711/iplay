import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { SearchTracksService } from '../itunes.service';
import { TrackItem } from '../TrackItem';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private itunesService : SearchTracksService){}

  searchField: FormControl;
  results: Observable<TrackItem[]>;
  //results: Observable<any>;
  loading: boolean;
  inputEmpty: boolean = true;
  empty$: Observable<boolean>;

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.inputEmpty=false)),
      tap(_ => (this.loading = true)),
      switchMap(term => this.itunesService.search(term)),
      tap(_ => (this.loading = false))
    )
    }    
}
