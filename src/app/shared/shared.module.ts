import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { FullnamePipe } from './pipes/fullname.pipe';
import {MatTableModule} from '@angular/material/table';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
import { HeadlineDirective } from './directives/headline.directive';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    FullnamePipe,
    FormErrorsPipe,
    HeadlineDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FullnamePipe,
    FormErrorsPipe,
    MatTableModule,
    HeadlineDirective,
    MatSelectModule,
    MatDatepickerModule,
  ]
})
export class SharedModule { }
