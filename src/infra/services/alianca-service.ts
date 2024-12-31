import { Item } from "../../domain/entity/item";
import { ApiService } from "../../domain/services/api";
import * as cheerio from 'cheerio';

export class AliancaService implements ApiService {
    private baseUrl: string = 'https://radioalianca.com.br/noticia/todas?page='

    async get(): Promise<Item[]> {
        const output: Item[] = [];
        for (let visitedPages = 1; visitedPages <= 5; visitedPages++) {
            const response = await fetch(`${this.baseUrl}${visitedPages}`);
            const mainHtml = await response.text();
            const $ = cheerio.load(mainHtml);
            const news = $('.title');
            news.each(function (idx, el) {
                output.push(new Item($(el).text().trim(), 'alianca'))
              });
        }
        
        return output;
    }

    
}