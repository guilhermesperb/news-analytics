import { Item } from "../../domain/entity/item";
import { ApiService } from "../../domain/services/api";
import * as cheerio from 'cheerio';

export class RuralService implements ApiService {
    private baseUrl: string = 'https://www.radiorural.com.br/noticias/pagina/'

    async get(): Promise<Item[]> {
        const output: Item[] = [];
        for (let visitedPages = 1; visitedPages <= 5; visitedPages++) {
            const response = await fetch(`${this.baseUrl}${visitedPages}`);
            const buffer = await response.arrayBuffer();
            const decoder = new TextDecoder('iso-8859-1');
            const text = decoder.decode(buffer);
            // console.log(text);
            // const mainHtml = await response.text();
            const mainHtml = text;
            const $ = cheerio.load(mainHtml);
            const news = $('.parte_titulo');
            news.each(function (idx, el) {
                output.push(new Item($(el).text().trim(), 'rural'))
              });
        }
        
        return output;
    }

    
}