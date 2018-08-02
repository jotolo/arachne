import { Injectable } from '@angular/core';
import { FtpFile } from '../models/ftp-file';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArachneApiService {

  apiUrl = 'http://localhost:3000/ftp_files/search';

  constructor(private http: HttpClient) { }

  search(query: string, page: number, limit: number): Observable<FtpFile[]> {
    return this.http.get<FtpFile[]>(this.apiUrl,
      {
        params:
          { 'query': query, 'page': page.toString(), 'limit': limit.toString() }
      })
      .pipe<FtpFile[]>(map(data => {
        console.log(data);
        return data;
      }));
  }
}
