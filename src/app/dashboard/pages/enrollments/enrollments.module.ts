import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { enrollmentFeature } from './store/enrollment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentEffects } from './store/enrollment.effects';
import { EnrollmentsTableComponent } from './components/enrollments-table/enrollments-table.component';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentDialogComponent } from './components/enrollments-dialog/enrollments-dialog.component';


@NgModule({
  declarations: [
    EnrollmentsTableComponent,EnrollmentsComponent, EnrollmentDialogComponent
  ],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    SharedModule,
    StoreModule.forFeature(enrollmentFeature),
    EffectsModule.forFeature([EnrollmentEffects]),
  ]
})
export class EnrollmentsModule { }
