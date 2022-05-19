import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent{

  artist:any={}
  loading:boolean; 
  topTracks:any[]=[]; 

  constructor(private _activatedRoute:ActivatedRoute, 
              private _spotify:SpotifyService) { 

    this.loading=true; 
 
    this._activatedRoute.params.subscribe(params=>{
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
      //console.log(params['id']); 
    }); 
  }

  getArtist(id:string){
    this._spotify.getArtist(id).subscribe( artist =>{
      // console.log(artist);
      this.artist=artist; 
      this.loading=false; 
    }); 
  }

  getTopTracks(id:string){
    this._spotify.getTopTracks(id).subscribe( topTracks =>{
      console.log(topTracks);
      this.topTracks= topTracks;  
    }); 
  }

}
