import { IMovieFull } from './i.movie';
import { ITVFull } from './i.tv';

// TODO:
export type MediaTypeFull = IMovieFull | ITVFull;

// similar movies. diff in "genre_ids"
// {
//   '0': {
//     video: false,
//     vote_average: 5.6,
//     overview: 'An FBI free-lancer stashes a stolen Las Vegas-crime tape in a high-tech car stolen by someone else.',
//     release_date: '1986-01-10',
//     adult: false,
//     backdrop_path: '/geIq9pfcRbFyCxVFjp0MOtYrrNl.jpg',
//     vote_count: 90,
//     genre_ids: [
//       28
//     ],
//     id: 36349,
//     original_language: 'en',
//     original_title: 'Black Moon Rising',
//     poster_path: '/2KNhZ3D0YkBDaO82aqWN6WxVvJS.jpg',
//     title: 'Black Moon Rising',
//     popularity: 5.372
//   }
// }
