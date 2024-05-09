import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';

export const loginGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  let authSer = inject(AuthService);
  return authSer.estConnecte();
};
