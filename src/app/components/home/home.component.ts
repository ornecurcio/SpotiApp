
import { Component} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newSongs:any[]=[]; 
  loading:boolean; 
  error:boolean; 
  message:string; 

  constructor( private _spotify:SpotifyService) { 

    this.loading = true; 
    this.error = false; 

    this._spotify.getNewReleases()
        .subscribe((data:any)=>{
                   
          console.log(data); 
          this.newSongs=data;
          this.loading=false;  

          // console.log(data.albums.items); 
          // this.newSongs=data.albums.items; 

        }, (errorService)=>{
          this.error=true; 
          this.loading=false;
          console.log(errorService); 
          this.message= errorService.error.error.message; 
        }); 
  }

}
