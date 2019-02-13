import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DetailsComponent } from './components/details/details.component';
import { ItemComponent } from './components/item/item.component';
import { TilesComponent } from './components/tiles/tiles.component';

const routes: Routes = [
    {
        path: 'exposition',
        children: [
            {
                path: '',
                redirectTo: 'carousel',
                pathMatch: 'full'
            },
            {
                path: 'carousel',
                component: CarouselComponent
            },
            {
                path: 'tiles',
                component: TilesComponent
            },
            {
                path: 'item/:id',
                component: ItemComponent,
                children: [
                    {
                        path: '',
                        component: ItemComponent,
                    },
                    {
                        path: 'details',
                        component: DetailsComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ExpositionRoutingModule {}
