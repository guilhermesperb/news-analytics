import { Item } from "../../domain/entity/item";
import { ApiService } from "../../domain/services/api";
import { convert } from 'html-to-text';

export class RuralService implements ApiService {
    private baseUrl: string = 'https://www.radiorural.com.br/noticias/pagina/'

    async get(): Promise<Item[]> {
        const itemsArray = []
        for (let visitedPages = 1; visitedPages <= 5; visitedPages++) {
            const response = await fetch(`${this.baseUrl}${visitedPages}`);
            // const mainText = convert(await response.text(), { selectors: [{selector: '#noticias'}]})
            const mainText = convert(
                await response.text(), 
                {
                    formatters: {
                        // Create a formatter.
                        'text': function (elem, walk, builder, formatOptions) {
                        //   builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 1 });
                          builder.addInline('!-!-!');
                          walk(elem.children, builder);
                        //   builder.addInline('!');
                        //   builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 1 });
                        }
                      },
                    selectors: [
                        // {
                            // selector: '#noticias',
                            // format: 'text'
                        // },
                        {
                            selector: 'div.parte_titulo',
                            format: 'text'
                        },
                    ]})

            
            console.log(mainText)
            const lines = mainText.split('\n');

            let separatorFound = false;
            for (const item of lines){
                if (item.includes('!-!-!')){
                    separatorFound = true;
                    continue;
                }
                if (item != '') {
                    itemsArray.push(item);
                    separatorFound = false;
                }
            }
        }
        const output = [];
        for (const item of itemsArray) {
            output.push(new Item(item, 'rural'))
        }
        console.log(output)
        return output;
    }

    
}