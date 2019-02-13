import {Component, Input} from '@angular/core';
import { LineModel } from 'src/app/common/models/payloads/line.model';

@Component({
    selector: 'details-view',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    @Input() public line: LineModel = new LineModel();
}
