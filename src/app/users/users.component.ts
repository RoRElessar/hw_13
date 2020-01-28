import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../core/models/user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  subscription: Subscription;

  constructor(private usersService: UsersService) { }

  userInformation(): void {
    alert('Unavailable yet');
  }

  ngOnInit() {
    this.subscription = this.usersService.get()
      .subscribe(users => {
        this.users = users;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
