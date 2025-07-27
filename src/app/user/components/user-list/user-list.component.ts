import { Component, inject } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { catchError, EMPTY, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  private userService = inject(UserService);
  private router = inject(Router);
  UserList: User[] = [];
  hasError: boolean = false;
  errorMessage: string = '';
  lastVisitedId: number = 0;



  constructor(private route: ActivatedRoute) {
      // Component initialization logic can go here
      this.userService.get()
      .pipe(
        tap(data => {
          this.hasError = false;
          this.errorMessage = '';
          this.UserList = data;
        }),
        catchError(error => {
          this.hasError = true;
          this.errorMessage = 'Failed to load employee data: ' + error.message;
          return EMPTY;
        }),
        switchMap(() => this.route.paramMap),
        tap(params => {
          this.lastVisitedId = +(params.get('id') ?? 0);
        })
      ).subscribe();
    }

    navigateToDetails(userId: number) {
    this.router.navigate(['/user-details', userId]);
  }

}
