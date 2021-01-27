import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { debounceTime, 
  distinctUntilChanged, 
  map, 
  switchMap, 
  tap } from 'rxjs/operators';
import { SearchTracksService } from './itunes.service';
import { TrackItem } from './TrackItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iplay-app';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate([''])
  }
}
