import { FileService } from "../../domain/services/file";
import fs from 'fs';

export class JsonFileService implements FileService {
    constructor(readonly file: string) {};
    save(text: string): void {
        fs.writeFileSync(this.file, text)
        
    }
    open(): string {
        const buffer =  fs.readFileSync(this.file);
        return buffer.toString()
    }

}