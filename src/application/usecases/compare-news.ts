import { ItemRepository } from "../../domain/repository/item-repository";
import { FileService } from "../../domain/services/file";

export class CompareNewsUseCase {
    constructor(
        readonly fileService: FileService,
    ) {}

    async execute(): Promise<void> {
        const items = JSON.parse(this.fileService.open());
        console.log(items);
        console.log(items.length);
        for (let i = 0; i < items.length; i++) {
            // console.log(`i - ${i}`);
            for (let j = 0; j < items.length; j++) {
                // console.log(`j - ${j}`);
                if (i != j) {
                    if (items[i].title == items[j].title && items[i].origin != items[j].origin) {
                        console.log('\n')
                        console.log(items[i].title);
                        console.log(items[i].origin);
                        console.log(items[j].origin);
                    }
                }
            }

        }
      
    }
}