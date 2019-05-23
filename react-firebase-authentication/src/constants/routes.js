/*
###########################################################################################################
The application should have multiple routes. For instance, a user should be able to visit 
a public landing page, and also use sign up and sign in pages to enter the application as 
an authenticated user. If a user is authenticated, it is possible to visit protected pages 
like account or admin pages whereas the latter is only accessible by authenticated users 
with an admin role. You can consolidate all the routes of your application in 
a well-defined src/constants/routes.js constants file:
(1) a sign up page (register page) and 
(2) a sign in page (login page). 
(3) a landing page and 
(4) a home page
###########################################################################################################
*/

export const LANDING = '/';
export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const HOME = '/home';
export const ACCOUNT = '/account';
export const ADMIN = '/admin';
export const PASSWORD_FORGET = '/pw-forget';