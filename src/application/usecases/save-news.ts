import { ItemRepository } from "../../domain/repository/item-repository";
import { FileService } from "../../domain/services/file";

export class SaveNewsUseCase {
    constructor(
        readonly fileService: FileService,
        readonly itemRepository: ItemRepository
    ) {}

    async execute(): Promise<void> {
        const items = await this.itemRepository.getAll();
        
        this.fileService.save(JSON.stringify(items))
      
    }
}