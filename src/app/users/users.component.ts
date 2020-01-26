import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../core/models/user.model';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  subscription: Subscription;

  constructor(private usersService: UsersService) { }

  userInformation(e): any {
    alert('Unavailable yet');
    e.preventDefault();
  }

  ngOnInit() {
    this.subscription = this.usersService.get('https://create-users-api.herokuapp.com/users')
      .subscribe(users => {
        this.users = users;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
