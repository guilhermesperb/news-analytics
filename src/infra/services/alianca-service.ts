import { Item } from "../../domain/entity/item";
import { ApiService } from "../../domain/services/api";

export class AliancaService implements ApiService {
    async get(): Promise<Item[]> {
        return []
    }

    
}