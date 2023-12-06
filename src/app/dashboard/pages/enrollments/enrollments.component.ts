import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from './store/enrollment.actions';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentDialogComponent } from './components/enrollments-dialog/enrollments-dialog.component';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent {
  constructor(private store: Store, private dialog: MatDialog) {
    this.store.dispatch(EnrollmentActions.loadEnrollments());
  }

  addEnrolment(): void {
    this.dialog.open(EnrollmentDialogComponent)
  }

}
