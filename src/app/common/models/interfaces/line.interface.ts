import { CollectionInterface } from './collection.interface';

export interface LineInterface {
    id?: string | number;
    producer?: string;
    name?: string;
    image?: string;
    collection?: CollectionInterface[];
}
