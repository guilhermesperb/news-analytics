import { CompareNewsUseCase } from "./application/usecases/compare-news";
import { GetNewsUseCase } from "./application/usecases/get-news";
import { SaveNewsUseCase } from "./application/usecases/save-news";
import { ItemRepositoryMemory } from "./infra/repository/memory/item-repository-memory";
import { AliancaService } from "./infra/services/alianca-service";
import { AtualService } from "./infra/services/atual-service";
import { JsonFileService } from "./infra/services/json-file-service";
import { RuralService } from "./infra/services/rural-service";

const itemRepository = new ItemRepositoryMemory();

const atualService = new AtualService();
const ruralService = new RuralService();
const aliancaService = new AliancaService();

const jsonFileService = new JsonFileService('./resultado.json');

const mainProc = async () => {
    // await (new GetNewsUseCase(atualService, itemRepository)).execute();
    // await (new GetNewsUseCase(ruralService, itemRepository)).execute();
    // await (new GetNewsUseCase(aliancaService, itemRepository)).execute();
    
    // await (new SaveNewsUseCase(jsonFileService, itemRepository)).execute();
    await (new CompareNewsUseCase(jsonFileService)).execute();
}

mainProc();

