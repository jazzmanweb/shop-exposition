import { DetailsInterface } from '../interfaces/details.interface';

export class DetailsModel implements DetailsInterface {
    public moc: string;
    public pojemnosc: string;
    public kolor: string;
    public waga: string;
    public wymiary: string;
    public other: string[];

    constructor(options?: DetailsInterface) {
        options = options || {};
        this.moc = options.moc || null;
        this.pojemnosc = options.pojemnosc || null;
        this.kolor = options.kolor || null;
        this.waga = options.waga || null;
        this.wymiary = options.wymiary || null;
        this.other = options.other || [];
    }
}
