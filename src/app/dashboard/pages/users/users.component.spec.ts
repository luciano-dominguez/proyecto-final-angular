import { TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersTableComponent } from './components/users-table/Users-Table.Component'
import { StoreModule } from '@ngrx/store';

describe('UserComponent', () => {
    let userComponent: UsersComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UsersComponent, UsersTableComponent],
            imports: [SharedModule, HttpClientTestingModule,StoreModule.forRoot({})],
        });
        const fixture = TestBed.createComponent(UsersComponent);
        userComponent = fixture.componentInstance;
    })
    it('tiene que crear un USER COMPONENT', () => {
        expect(userComponent).toBeTruthy();
    })
}); 