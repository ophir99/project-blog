import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatTableModule, MatPaginator, MatPaginatorModule, MatSortModule, MatCardModule, MatSnackBar, MatSnackBarModule, MatToolbarModule, MatMenuModule, MatDialogModule } from "@angular/material";

@NgModule({
    declarations: [],
    imports: [MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatCardModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatSortModule,
        MatToolbarModule,
        MatMenuModule,
        MatDialogModule],
    exports: [MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatCardModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatSortModule,
        MatToolbarModule,
        MatMenuModule,
        MatDialogModule]
})
export class MatModule {

}