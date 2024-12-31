import { ItemRepository } from "../../domain/repository/item-repository";
import { ApiService } from "../../domain/services/api";

export class GetNewsUseCase {
    constructor(
        readonly apiService: ApiService,
        readonly itemRepository: ItemRepository
    ) {}

    async execute(): Promise<void> {
        const items = await this.apiService.get();
        for (const item of items) {
            this.itemRepository.create(item);
        }

        const teste = await this.itemRepository.getAll()
        console.log(teste);
        
    }
}