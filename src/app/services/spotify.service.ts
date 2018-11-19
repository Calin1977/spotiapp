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
      'Authorization': 'Bearer BQDUSkiNEWmu5MHXMle9v8JvnxKrwboYALwB-g4Hx9heaLut_K9mcRS1lFHtzOyw7HL8zrtkZHJmYqIhYUI'
   });

   return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
        .pipe( map( data => data['albums'].items ));
  }

  getArtistas( termino: string ) {
    return this.getQuery(`search?query=${ termino }&type=artist&limit=10`)
        .pipe( map( data => data['artists'].items ));
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=mx`)
        .pipe( map( data => data['tracks'] ));
  }
}
