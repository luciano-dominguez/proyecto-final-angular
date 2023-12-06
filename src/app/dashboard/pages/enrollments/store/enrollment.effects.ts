


import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of, forkJoin } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { Enrollment,CreateEnrollmentPayload, } from '../models';
import { Course } from '../../courses/models';
import { User } from '../../users/models';
import { Action } from 'rxjs/internal/scheduler/Action';


@Injectable()
export class EnrollmentEffects {

  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EnrollmentActions.loadEnrollments),
      concatMap(() =>this.getEnrollments().pipe(map(data => EnrollmentActions.loadEnrollmentsSuccess({ data })),
          catchError(error => of(EnrollmentActions.loadEnrollmentsFailure({ error }))))
      ));
  });

  createEnrollment$ = createEffect(() =>this.actions$.pipe(
    ofType(EnrollmentActions.createEnrollment),
    concatMap((action) => {
      return this.createEnrollment(action.payload).pipe(map((data) => EnrollmentActions.loadEnrollments()),catchError((error) =>
          of(EnrollmentActions.loadEnrollmentsFailure({ error }))
        ));
      })));

  loadEnrollmentDialogOptions$ = createEffect(() =>
    this.actions$.pipe(ofType(EnrollmentActions.loadEnrollmentDialogOptions),
      concatMap(() =>
        this.getEnrollmentDialogOptions().pipe(
          map((resp) =>EnrollmentActions.loadEnrollmentDialogOptionsSuccess(resp)),
          catchError((err) =>
            of(
              EnrollmentActions.loadEnrollmentDialogOptionsFailure({
                error: err,}))
                )))
    ));

    

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
  
  createEnrollment(payload: CreateEnrollmentPayload): Observable<Enrollment> {
    return this.httpClient.post<Enrollment>(
      `${environment.baseUrl}/enrollments`,payload);
  }


  getEnrollmentDialogOptions(): Observable<{courses: Course[];students: User[];}> 
    {return forkJoin([
      this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`),
      this.httpClient.get<User[]>(`${environment.baseUrl}/users?role=STUDENT`),
    ]).pipe(map(([courses, students]) => {
        return {courses,students,};})
    );}

  getEnrollments(): Observable<Enrollment[]>{
    return this.httpClient.get<Enrollment[]>(`${environment.baseUrl}/enrollments?_expand=course&_expand=user`)
  }

  // deleteEnrollments(id:number): Observable<Enrollment[]>{
  //   return this.httpClient.delete<Enrollment[]> (`${environment.baseUrl}/enrollments/${id}`)
  // }
}


