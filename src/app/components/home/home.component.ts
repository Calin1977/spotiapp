import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService ) {
    this.loading = true;

    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        this.newReleases = data;
        this.loading = false;
      });
  }

  ngOnInit() {
  }

}
