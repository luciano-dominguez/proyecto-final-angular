import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: CoursesComponent
            },
        ])
    ],
    exports: [RouterModule],
    providers: [],
})
export class CourseRoutingModule {}