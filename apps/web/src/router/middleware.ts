import { redirect } from 'react-router';
import { isAuthenticated } from '@/modules/auth/session';

export function protectedLoader() {
  if (!isAuthenticated()) {
    return redirect('/login');
  }

  return null;
}

export function loginLoader() {
  if (isAuthenticated()) {
    return redirect('/dashboard');
  }

  return null;
}
