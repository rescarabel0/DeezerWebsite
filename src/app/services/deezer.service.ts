import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  private deezerApiLink = "http://localhost:4200/api";

  constructor(private httpClient: HttpClient) {
  }

  findTrackById(id: string): Observable<any> {
    return this.httpClient.get(this.deezerApiLink + "track/" + id);
  }

  getCharts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.deezerApiLink + "editorial/0/charts");
  }

  search(text: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.deezerApiLink + "search/track?q=" + text);
  }
}
