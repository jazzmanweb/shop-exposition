import { ColorInterface } from './color.interface';
import { DetailsInterface } from './details.interface';

export interface CollectionInterface {
    title?: string;
    symbol?: string;
    availability?: string;
    colors?: ColorInterface[];
    details?: DetailsInterface;
}
