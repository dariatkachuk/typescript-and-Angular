import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCase'
})

export class TitleCasePipe implements PipeTransform {
    transform(value: string): any {
        //newValue: string;
        if (!value)
            return null;
        
        let arr = value.toLowerCase().split(" ");

        for (let i = 0; i < arr.length; i++) {
            let word = arr[i];
            if (i === 0 || !this.isPreposition(word))
                arr[i] = this.toTitleCase(word);   
        }
                
        return arr.join(' ');
    }

    private isPreposition(word: string): boolean {
        let prepositions = [
            'the',
            'of'
        ];

        return prepositions.includes(word);
    }

    private toTitleCase(word: string): string {
        return word.substr(0, 1).toUpperCase() + word.substr(1);
    }

}