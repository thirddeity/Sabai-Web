const DEMO_AUTH_KEY = 'sabai_demo_auth';

export function isAuthenticated() {
  return localStorage.getItem(DEMO_AUTH_KEY) === '1';
}

export function signInDemo() {
  localStorage.setItem(DEMO_AUTH_KEY, '1');
}

export function signOutDemo() {
  localStorage.removeItem(DEMO_AUTH_KEY);
}
