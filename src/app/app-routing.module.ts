import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from '../app/core/body/table/table.component';
import { FormComponent } from '../app/core/body/form/form.component';
import { ContactDetailsComponent } from '../app/core/body/contact-details/contact-details.component'

const routes: Routes = [
  {path: '' , component: TableComponent},
  {path: 'form' , component: FormComponent},
  {path: 'contact' , component:  ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
