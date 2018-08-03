import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ArachneApiService } from './services/arachne-api.service';
import { FtpFile } from './models/ftp-file';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  faSearch = faSearch;
  ftpFiles: FtpFile[];

  constructor(private api: ArachneApiService) {}

  search(query: HTMLInputElement): boolean {
    console.log(query.value);
    this.api.search(query.value, 1, 25)
      .subscribe(
        apiItems => {
          this.ftpFiles = apiItems;
        }
      );
    return false;
  }
}
