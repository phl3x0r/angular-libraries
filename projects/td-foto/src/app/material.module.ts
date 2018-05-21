import { MatToolbarModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTabsModule, MatMenuModule } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTabsModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTabsModule,
        MatMenuModule
    ]
})
export class MaterialModule { }
