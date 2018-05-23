import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgurService {
  constructor(private _http: HttpClient) {}

  // public setClientId(_id: string) {}

  // public getAlbum(albumId: string): Album {
  //   return { someprop: 123 };
  // }
}

// export interface Album {
//   someprop: number;
// }
