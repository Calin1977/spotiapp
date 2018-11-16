import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  artista: any = {};
  loading: boolean;
  topTracks: any = {};
  loadingTracks: boolean;

  constructor( private route: ActivatedRoute,
               private spotifyService: SpotifyService ) {

    this.route.params.subscribe( parametros => {
      this.getArtista(parametros['id']);
      this.getTopTracks(parametros['id']);
    });
  }

  getArtista( id: string ) {
    this.loading = true;
    return this.spotifyService.getArtista(id).subscribe( artista => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks( id: string ) {
    this.loadingTracks = true;
    return this.spotifyService.getTopTracks(id).subscribe( tracks => {
      this.topTracks = tracks;
      this.loadingTracks = false;
    });
  }
}
