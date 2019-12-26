import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BodyService } from '../body.service';
import { Contact } from '../../../../models/contact.interface';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';

@Component({
  selector: 'cl-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss'],
})
export class FormComponent implements OnInit {
  public newContactForm: FormGroup;
  public dataSource: Contact[];
  public message: string = 'Contact added succesfully.';
  public actionButtonLabel: string = 'Retry';
  public action: boolean = false;
  public setAutoHide: boolean = true;
  public autoHide: number = 2000;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  public verticalPosition: MatSnackBarVerticalPosition = 'top';
  public addExtraClass: boolean = false;

  constructor (
    private contactsService: BodyService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.newContactForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'company': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'phone': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
    });

    this.getContacts();
  }

  getContacts(){
    this.contactsService.getContactList()
    .subscribe(data => this.dataSource = data);
  }

  onSubmit(formValues: NgForm) {
    let maxIndex: Contact;
    let obj = {
      id: null,
      firstName: formValues.value.firstName,
      lastName: formValues.value.lastName,
      company: formValues.value.company,
      email: formValues.value.email,
      phone: formValues.value.phone,
      address: formValues.value.address
    };

    this.contactsService.updateContactList(obj).subscribe(data => {
       console.log(data, 'testing');
    });

    this.openSuccessPopup();

    this.router.navigateByUrl('');
  }

  openSuccessPopup() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this._snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
  }
}
