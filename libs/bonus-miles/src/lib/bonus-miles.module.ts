import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusMilesComponent } from './bonus-miles/bonus-miles.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: BonusMilesComponent }
        ])
    ],
    declarations: [
        BonusMilesComponent
    ]
})
export class BonusMilesModule {}