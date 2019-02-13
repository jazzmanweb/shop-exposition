import {Component, Input} from '@angular/core';
import data from '../../../../../assets/data/database.json';
import { LineModel } from 'src/app/common/models/payloads/line.model.js';

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
    public linesList: LineModel[] = (data || []).map((item) => new LineModel(item));
}
