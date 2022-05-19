import { Component} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{

  artists:any[]=[]; 
  loading:boolean; 

  constructor(private _spotifyService:SpotifyService) { }

  buscar(termino:string){
        console.log(termino); 

        this.loading=true; 
        this._spotifyService.getArtists(termino)
            .subscribe((data:any)=>{
              // console.log(data.artists.items); 
              // this.artists=data.artists.items; 
              console.log(data); 
              this.artists=data; 
              this.loading=false; 
        }); 

}

}
