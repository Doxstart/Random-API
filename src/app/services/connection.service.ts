import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMemeInfo } from '../models/memes';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private readonly API_URL = 'https://api.imgflip.com/get_memes'

  constructor(private readonly http: HttpClient) { }
  getData():Observable<IMemeInfo> {
    return this.http.get<IMemeInfo>(this.API_URL)
    .pipe(map((data: IMemeInfo) => data));
  }
}
