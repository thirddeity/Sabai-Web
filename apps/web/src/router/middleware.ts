import { redirect } from 'react-router';

const isAuthConfigured = false;

export function protectedLoader() {
  if (!isAuthConfigured) {
    return null;
  }

  return null;
}

export function loginLoader() {
  if (isAuthConfigured) {
    return redirect('/dashboard');
  }

  return null;
}
