import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { BodyService } from '../body.service';


@Component({
  selector: 'cl-contact',
  styleUrls: ['./contact-details.component.scss'],
  templateUrl: './contact-details.component.html'
})

export class ContactDetailsComponent implements OnInit {
   name: string;
   company: string;
   email: string;
   address: string;

  constructor (
    private contactService: BodyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.contactService.currentMessage.subscribe(message => {
      let data: any = JSON.parse(message);
      this.name = `${data[0].firstName} ${data[0].lastName}` ;
      this.email = data[0].email;
      this.company = data[0].company;
      this.address = data[0].address;
    });
  }

  btnClick() {
    this.router.navigateByUrl('/');
  }
}