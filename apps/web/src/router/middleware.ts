import { redirect } from 'react-router';
import { isAuthenticated } from '@/modules/auth/session';
import { AppPath } from '@/router/paths';

export function protectedLoader() {
  if (!isAuthenticated()) {
    return redirect(AppPath.login);
  }

  return null;
}

export function loginLoader() {
  if (isAuthenticated()) {
    return redirect(AppPath.home);
  }

  return null;
}
