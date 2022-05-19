import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http:HttpClient) { 

    console.log('Spotify service run'); 
  }

  getQuery( query:string ){

    const url =`https://api.spotify.com/v1/${query}`;

    const hedaer= new HttpHeaders({
      'Authorization': 'Bearer BQDAajwOT-8dMVutbD2cP2VKqw-_CG3omE_qergG8RBELxsfEjBJVAlJwCBlHHqM6ttTT_8WinI3CvZz1nA'
    }); 

    return this._http.get(url,{headers:hedaer}); 

  }

  getNewReleases(){
  
    return this.getQuery('browse/new-releases').pipe( map( (data:any) => data.albums.items)); 

    //DE ESTA FORMA DE ACA ABAJO REPETIMOS CODIGO Y HAY QUE TENER HEADER Y UN GET POR CADA PETICION 

    // const hedaer= new HttpHeaders({
    //   'Authorization': 'Bearer BQCqragvvavcCjKGv2r75VIqFnQmqTobh65PdUT2nlkrs2-zHWilafFNBa-f3k5oszqoxdJM905hgWkG_UE'
    // }); 
    // this._http.get('https://api.spotify.com/v1/browse/new-releases', { headers:hedaer })
    //                  .pipe( map( (data:any) => data.albums.items)); 

            //ES LO MISMO QUE ARRIBA PERO ACA ESTA DESGLOSADO
            //          .pipe( map( (data:any) => {
            //           return data.albums.items; 
            //  })); 
    // SI USO LO DE ACA ABAJO TENGO QUE HACER EL FILTRADO EN EL HOME COMPONENT
    // return this._http.get('https://api.spotify.com/v1/browse/new-releases', { responseType:'json',headers:hedaer }); 
  }

  getArtists(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map( data => data['artists'].items));

    // const hedaer= new HttpHeaders({
    //   'Authorization': 'Bearer BQCqragvvavcCjKGv2r75VIqFnQmqTobh65PdUT2nlkrs2-zHWilafFNBa-f3k5oszqoxdJM905hgWkG_UE'
    // }); 

    // return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers:hedaer })
    //                   .pipe(map( data => data['artists'].items));

    // return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { responseType:'json', headers:hedaer });  
  }

  getArtist(id:string){

    return this.getQuery(`artists/${id}`); 
    // .pipe(map( data => data['artists'].items));
  }
  getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?market=es`)
               .pipe(map( data => data['tracks']));  
  }

}
