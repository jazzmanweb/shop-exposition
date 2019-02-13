import { CollectionInterface } from '../interfaces/collection.interface';
import { ColorModel } from './color.model';
import { DetailsModel } from './details.model';

export class CollectionModel implements CollectionInterface {
    public title: string;
    public symbol: string;
    public availability: string;
    public colors: ColorModel[];
    public details: DetailsModel;

    constructor(options?: CollectionInterface) {
        options = options || {};
        this.title = options.title || null;
        this.symbol = options.symbol || null;
        this.availability = options.availability || null;
        this.colors = (options.colors || []).map(item => new ColorModel(item));
        this.details = new DetailsModel(options.details);
    }
}
