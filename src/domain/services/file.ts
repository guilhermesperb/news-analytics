export interface FileService {
    save(text: string): void;
    open(): string;
}