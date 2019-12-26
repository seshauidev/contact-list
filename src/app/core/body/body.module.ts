import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { BodyComponent } from "./body.component";
import { TableComponent } from "./table/table.component";
import { FormComponent } from "./form/form.component";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BodyService } from './body.service';
import { ContactData } from './contact-data.service';

@NgModule({
  declarations: [
    BodyComponent,
    TableComponent,
    FormComponent,
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ContactData)
  ],
  exports: [
    BodyComponent,
    TableComponent,
    FormComponent,
    ContactDetailsComponent
  ],
  providers: [
    BodyService
  ]
})

export class BodyModule {}