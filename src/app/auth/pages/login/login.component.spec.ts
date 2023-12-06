import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore} from '@ngrx/store/testing';
import { SharedModule } from 'src/app/shared/shared.module';

describe('LoginComponent', () => {
    let loginComponent: LoginComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [HttpClientTestingModule, SharedModule],
            providers: [provideMockStore({})]
        });
        const fixture = TestBed.createComponent(LoginComponent);
        loginComponent = fixture.componentInstance;
    });

    it('should create login component', () => {
        expect(loginComponent).toBeTruthy();
    });

    it('Se deben marcar todos los campos del fomulario,si este fuese invalido', () => {
        loginComponent.loginForm.patchValue({
            email: 'robert.com',
            password: '',
        });
        loginComponent.login();
        expect(loginComponent.emailControl.touched).toBeTrue();
        expect(loginComponent.passwordControl.touched).toBeTrue();
    });

    it('en el caso de que el fomulario sea valido se debe llamar el metodo login del AuthService ', () => {
        loginComponent.loginForm.patchValue({
            email: 'roberto@mail.com',
            password: '1303018',
        });

        const spyOnAuthServiceLogin = spyOn(
            (loginComponent as any).authService,
            'login'
        );

        loginComponent.login();

        expect(spyOnAuthServiceLogin).toHaveBeenCalled();
    });
});