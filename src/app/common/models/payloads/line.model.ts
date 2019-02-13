import { CollectionModel } from './collection.model';
import { LineInterface } from '../interfaces/line.interface';

export class LineModel implements LineInterface {
    public id: string | number;
    public producer: string;
    public name: string;
    public image: string;
    public collection: CollectionModel[];

    constructor(options?: LineInterface) {
        options = options || {};
        this.id = options.id || null;
        this.producer = options.producer || null;
        this.name = options.name || null;
        this.image = options.image || null;
        this.collection = (options.collection || []).map((item) => new CollectionModel(item));
    }
}
