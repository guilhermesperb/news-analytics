import { Item } from "../entity/item";

export interface ItemRepository {
    create(item: Item): Promise<void>
    getAll(): Promise<Item[]>
}