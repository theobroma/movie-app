export enum ROUTES {
  ROOT = '/',
  SINGLE_DETAILS = '/details/:mediaType/:id',
  SINGLE_DETAILS_CAST = '/details/:mediaType/:id/cast',
  // =====================================
  TRENDING = '/trending',
  TRENDING_MOVIES = '/trending/movies',
  TRENDING_TV = '/trending/tv',
  // =====================================
  FAVOURITES = '/favourites',
  FAVOURITES_MOVIES = '/favourites/movies',
  FAVOURITES_TV = '/favourites/tv',
  // =====================================
  VISITED = '/visited',
  VISITED_MOVIES = '/visited/movies',
  VISITED_TV = '/visited/tv',
}
