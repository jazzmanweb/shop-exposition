import { ColorInterface } from '../interfaces/color.interface';

export class ColorModel implements ColorInterface {
    public name: string;
    public color: string;
    public image: string;

    constructor(options?: ColorInterface) {
        options = options || {};
        this.name = options.name || null;
        this.color = options.color || null;
        this.image = options.image || null;
    }
}
