import { Component, OnInit, Input } from '@angular/core';
import { FtpFile } from '../models/ftp-file';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-result-element',
  templateUrl: './search-result-element.component.html',
  styleUrls: ['./search-result-element.component.scss']
})
export class SearchResultElementComponent implements OnInit {
  @Input() ftpResult: FtpFile;
  faFileDownload = faFileDownload;
  constructor() { }

  ngOnInit() {
  }

  getFullAddress() {
    return `ftp://${this.ftpResult.address}`;
  }

}
