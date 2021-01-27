import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { TrackItem } from './TrackItem';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class SearchTracksService {
  
  searchApi: string = 'https://itunes.apple.com/search';
  lookupApi: string = 'https://itunes.apple.com/lookup';
  constructor(private http: HttpClient) {

   }

   search(term: string) {
    let url = `${this.searchApi}?term=${term}&media=music&limit=20`;

    return this.http.jsonp(url, "callback").pipe(
      map(res => {
       // return res;
       // @ts-ignore
          return res.results.map(item => {
            return new TrackItem(
              item.trackName,
              item.trackId,
              item.artistName,
              item.previewUrl,
              item.artworkUrl100,
              item.artistId
            );
          })
      })
      );        
  }

  lookUpTrack(trackId: string) {
    let url = `${this.lookupApi}?id=${trackId}`;

    return this.http.jsonp(url, "callback").pipe(
      map(res => {
       // return res;
       // @ts-ignore
          return res.results.map(item => {
            console.log(item);
            return new TrackItem(
              item.trackName,
              item.trackId,
              item.artistName,
              item.previewUrl,
              item.artworkUrl100,
              item.artistId
            );
          })
      })
      );        
  }
}