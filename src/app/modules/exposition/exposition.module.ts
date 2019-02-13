import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/common/modules/angular-material.module';
import { ExpositionRoutingModule } from './exposition-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DetailsComponent } from './components/details/details.component';
import { ItemComponent } from './components/item/item.component';
import { TilesComponent } from './components/tiles/tiles.component';

@NgModule({
    declarations: [
        CarouselComponent,
        DetailsComponent,
        ItemComponent,
        TilesComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        ExpositionRoutingModule,
    ]
})
export class ExpositionModule {
}
