import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  userId: number = 0;
  userDetails: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.route.paramMap
      .pipe(
        tap(params => {
          this.userId = +(params.get('id') ?? 0);
        }),
        switchMap(() => this.userService.getUserById(this.userId)),
        tap(user => {
          this.userDetails = user;
        })


      )
      .subscribe({
        error: () => {
         
          this.router.navigate(['/user-list']);
        }
      });
  }

  navigateToNext() {
    let nextId = this.userId + 1;
    this.router.navigate(['/user-details', nextId]);
  }

  navigateToList() {
    this.router.navigate(['/user-list', { id: this.userId }]);
  }
}
