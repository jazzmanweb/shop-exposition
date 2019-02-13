import {Component} from '@angular/core';
import data from '../../../../../assets/data/database.json';
import { LineModel } from 'src/app/common/models/payloads/line.model.js';

@Component({
    selector: 'tiles',
    templateUrl: './tiles.component.html',
    styleUrls: ['./tiles.component.css']
})
export class TilesComponent {
    public linesList: LineModel[] = (data || []).map((item) => new LineModel(item));
}
