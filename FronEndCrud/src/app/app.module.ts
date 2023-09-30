import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ParatrabajarconReactiveForms
import { ReactiveFormsModule } from '@angular/forms';

//Paratrabajarconpeticioneshttp
import { HttpClientModule } from '@angular/common/http';

//ParatrabajarconTablasdematerial
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

//Paratrabajarconcontrolesdeformulariosdematerial
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';

//Para trabajar con mensajes de alertas
import { MatSnackBarModule } from '@angular/material/snack-bar';

//Para trabajar con iconos de material
import { MatIconModule } from '@angular/material/icon';

//Para trabajar con modales de material
import { MatDialogModule } from '@angular/material/dialog';

//Para trabajar con grillas de material
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogAddEditComponent } from './Dialogos/dialog-add-edit/dialog-add-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogAddEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule{ }  