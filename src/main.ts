import { GetNewsUseCase } from "./application/usecases/get-news";
import { ItemRepositoryMemory } from "./infra/repository/memory/item-repository-memory";
import { AliancaService } from "./infra/services/alianca-service";
import { AtualService } from "./infra/services/atual-service";
import { RuralService } from "./infra/services/rural-service";

const itemRepository = new ItemRepositoryMemory();

const atualService = new AtualService();
const ruralService = new RuralService();
const aliancaService = new AliancaService();



(new GetNewsUseCase(atualService, itemRepository)).execute();
(new GetNewsUseCase(ruralService, itemRepository)).execute();
// (new GetNewsUseCase(aliancaService, itemRepository)).execute();
