import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";

export class ItemRepositoryMemory implements ItemRepository {
    private items: Item[];

    constructor(){
        this.items = [];
    }
    
    async create(item: Item): Promise<void> {
        this.items.push(item);
    }
    
    async getAll(): Promise<Item[]> {
        return this.items;
    }

}