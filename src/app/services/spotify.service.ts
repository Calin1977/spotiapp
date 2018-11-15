import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service Listo.');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
       'Authorization': 'Bearer BQBax3zKKh2eYW_Uwq2yrRQtfjefqerogCTTVoniVKEmmW79Oi6QmFQXmq8CGSgpZgb3k5LyhMnWkDcA1qg'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
