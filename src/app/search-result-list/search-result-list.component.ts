import { Component, OnInit, Input, TemplateRef, OnDestroy } from '@angular/core';
import { FtpFile } from '../models/ftp-file';
import { DatePipe } from '@angular/common';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Page } from '../models/page';
import { ArachneApiService } from '../services/arachne-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit, OnDestroy {
  ftpFilesResult: FtpFile[];
  @Input() query: string;
  columns: any[];
  faFileDownload = faFileDownload;
  page = new Page();
  onSearch: Subscription;

  constructor(private api: ArachneApiService) {
    this.page.pageNumber = 0;
    this.page.size = 25;
    this.page.totalElements = 0;
   }

  ngOnInit() {
    this.onSearch = this.api.onSearch.subscribe(pagedData => {
      if (!pagedData) {
        return;
      }
      console.log('IM HERE');
      this.page.totalElements = pagedData.ftpFilesCount;
      this.ftpFilesResult = pagedData.ftpFiles;
    });
  }

  ngOnDestroy() {
    this.onSearch.unsubscribe();
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.api.search(this.query, this.page.pageNumber, 25).subscribe(pagedData => {
      this.page.totalElements = pagedData.ftpFilesCount;
      this.ftpFilesResult = pagedData.ftpFiles;
    });
  }
}
