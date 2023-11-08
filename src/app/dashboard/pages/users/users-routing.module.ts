import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const Routes: Routes = [
    {
        path: '',
        component: UsersComponent
    }]

@NgModule({
    imports: [ RouterModule.forChild(Routes)],
    exports: [],
    providers: [],
})
export class UsersRoutingModule {}