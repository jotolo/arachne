import { Component, OnInit } from '@angular/core';
import { FtpFile } from '../models/ftp-file';
import { ArachneApiService } from '../services/arachne-api.service';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {

  ftpFiles: any;

  constructor(private api: ArachneApiService) {
  }

  ngOnInit() {
    this.api.search('mic', 1, 25)
      .subscribe(
        apiItems => {
          this.ftpFiles = apiItems;
        }
      );
  }

}
