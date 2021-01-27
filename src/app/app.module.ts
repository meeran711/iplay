import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";

import { AppComponent } from './app.component';
import { SearchTracksService } from './itunes.service';
import { DetailsPageComponent } from './details-page/details-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';

// const routes: Routes = [
//   {  
//     path:'',
//     component: SearchPageComponent,
//     children:[
//       {
//         path:':trackId',
//         component:DetailsPageComponent
//       }
//     ]
//   }
// ]

const routes: Routes = [
  {  
    path:'',
    component: SearchPageComponent
  },
  {
    path:':trackId',
    component:DetailsPageComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [SearchTracksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
