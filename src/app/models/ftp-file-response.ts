import { FtpFile } from './ftp-file';

export class FtpFileResponse {

    constructor(public ftpFilesCount: number, public ftpFiles: FtpFile[]) {
    }
}
