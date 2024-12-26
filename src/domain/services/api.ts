import { Item } from "../entity/item";

export interface ApiService {
    get(): Promise<Item[]>
}