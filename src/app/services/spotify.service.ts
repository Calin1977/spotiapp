import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    // console.log('Spotify Service Listo.');
  }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBHTxEUSP_OPGhIvfibHlXbwn01Rom19Izl9BqENfba3ki_AMnwa59lW6o0Iogyt458OJgSTDTehiBf7t4'
   });

   return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
        .pipe( map( data => data['albums'].items ));
  }

  getArtista( termino: string ) {
    return this.getQuery(`search?query=${ termino }&type=artist&limit=10`)
        .pipe( map( data => data['artists'].items ));
  }
}
