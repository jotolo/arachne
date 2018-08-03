import { Injectable } from '@angular/core';
import { FtpFile } from '../models/ftp-file';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, count } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { FtpFileResponse } from '../models/ftp-file-response';

@Injectable({
  providedIn: 'root'
})
export class ArachneApiService {

  apiUrl = 'http://localhost:3000/ftp_files/search';
  onSearch: BehaviorSubject<FtpFileResponse>;

  constructor(private http: HttpClient) {
    this.onSearch = new BehaviorSubject<FtpFileResponse>(null);
   }

  search(query: string, page: number, limit: number): Observable<FtpFileResponse> {
    return this.http.get<any>(this.apiUrl,
      {
        params:
          { 'query': query, 'page': page.toString(), 'limit': limit.toString() }
      }).pipe(switchMap(data => {
        const files = data.data.map(ftpResult => new FtpFile(ftpResult.id, ftpResult.name, ftpResult.address, ftpResult.created_at));
        const filesCount = data.count;
        const ftpResponse = new FtpFileResponse(filesCount, files);
        this.onSearch.next(ftpResponse);
        return of(ftpResponse);
      }));
  }
}
