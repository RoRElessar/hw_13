import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../core/models/user.model';

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  usersListEndpoint = 'https://create-users-api.herokuapp.com/users';

  constructor(private http: HttpClient) {}

  public get(): Observable<User[]> {
    return this.http.get<User[]>(this.usersListEndpoint);
  }

}
