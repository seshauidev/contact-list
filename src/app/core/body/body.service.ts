import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Contact } from '../../../models/contact-data.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BodyService {
    apiurl = 'api/contacts';
    headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    httpOptions = {
        headers: this.headers
    };
    private dataSource = new BehaviorSubject('default data');
    currentData = this.dataSource.asObservable();

    constructor(
        private http: HttpClient
    ) { }

    private handleError(error: any) {
        console.error(error);
        return throwError(error);
    }

    getContactList(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.apiurl).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    updateContactList (data: Contact): Observable<Contact> { 
        data.id=null;
        return this.http.post<Contact>(this.apiurl, data, this.httpOptions).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
    }

    changeData(data: string) {
        this.dataSource.next(data)
    }
}

