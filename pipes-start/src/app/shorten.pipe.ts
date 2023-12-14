import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{

    transform(value: any, limit: number) { //secons argument, 'limit' needs tobe passed from html
        if(value.length > 10)
            return value.substr(0, limit) + ' ...';

        return value;
        //throw new Error("Method not implemented.");
    }

}