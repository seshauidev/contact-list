import { Component, OnInit } from "@angular/core";
import { BodyService } from '../body.service';
import { Contact } from '../../../../models/contact-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'cl-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html'
})

export class TableComponent implements OnInit {
  public dataSource: Contact[];
  public selectedData;
  public displayedColumns: string[] = ['firstName', 'lastName', 'company', 'email'];

  constructor (
    private contactService: BodyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.contactService.getContactList()
    .subscribe((data) => this.dataSource = data);

    this.contactService.currentData.subscribe(data => console.log(data, 'table cop'));
  }

  addNewContact() {
    this.router.navigateByUrl('/form');
  };

  redirectTo(element: any) {
    this.selectedData = this.dataSource.filter(data => {
      if (data.id === element.id) return data;
    });

    this.contactService.changeData(JSON.stringify(this.selectedData));

    this.router.navigateByUrl('/contact');
  }
}
