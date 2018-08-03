export class FtpFile {

    constructor(public id: number, public name: string, public address: string, public createdAt: Date) {
    }

    static getFullAddress(address) {
        return `ftp://${address}`;
    }

    getFullAddress() {
        return `ftp://${this.address}`;
    }
}
