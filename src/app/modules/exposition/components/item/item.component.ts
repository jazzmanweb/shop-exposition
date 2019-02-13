import { Component, OnInit, OnDestroy } from '@angular/core';
import data from '../../../../../assets/data/database.json';
import { LineModel } from 'src/app/common/models/payloads/line.model.js';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
    public linesList: LineModel[] = (data || []).map(
        item => new LineModel(item)
    );
    public subscribe: boolean = false;
    public line$: Observable<LineModel>;

    constructor(private route: ActivatedRoute) {}

    public ngOnInit() {
        this.line$ = this.route.params.pipe(
            map(({ id }) => (this.linesList || []).find(line => line.id == id))
        );
        this.initSubscribers();
    }

    public ngOnDestroy() {
        this.subscribe = false;
    }

    public initSubscribers() {
        this.subscribe = true;
        this.line$
            .pipe(takeWhile(() => this.subscribe))
            .subscribe(item => console.log(item));
    }
}
