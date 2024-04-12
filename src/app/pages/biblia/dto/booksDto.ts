

export class BooksDTO {
    abbrev!: Abbreviation;
    author!: string;
    chapters!: number;
    group!: string;
    name!: string;
    testament!: string;
}

export class Abbreviation {
    pt!: string;
    en!: string;
}