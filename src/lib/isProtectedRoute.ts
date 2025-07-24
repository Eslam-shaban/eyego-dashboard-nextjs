export function isProtectedRoute(pathname: string) {
  const publicRoutes = ["/login", "/signup"];
  return !publicRoutes.includes(pathname);
}
