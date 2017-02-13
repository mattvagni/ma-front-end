import { matchPath } from 'react-router';

const mergePaths = (a, b) => {
  return a[a.length-1] === '/' && b[0] === '/' ?
    `${a.slice(0, a.length-1)}${b}` :
    `${a}${b}`
}

// Matches a 'react-router' route from a route config to a URL and returns all routes that match.
export const matchRoutesToLocation = (
  routes,
  location,
  matchedRoutes=[],
  params={},
  parentPath=''
) => {
  routes.forEach((route) => {
    const { exact = false } = route;

    const nestedPath = mergePaths(parentPath, route.path || '');
    const match = !route.path ? true : matchPath(location, nestedPath, { exact });

    if (match) {
      matchedRoutes.push(route);

      if (match.params) {
        Object.keys(match.params).forEach(key => params[key] = match.params[key]);
      }

      if (route.routes) {
        matchRoutesToLocation(route.routes, location, matchedRoutes, params, nestedPath);
      }
    }
  });

  return { matchedRoutes, params };
};
