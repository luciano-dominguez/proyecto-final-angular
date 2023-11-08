import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => {
  console.log('gg')
  const router = inject(Router);
  const authSerice = inject(AuthService);

  return authSerice.verifyToken()
  .pipe(
    map((isAuthenticated) => 
      isAuthenticated ? true : router.createUrlTree(['/auth/login'])
    ));
};
