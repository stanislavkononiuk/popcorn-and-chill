import 'regenerator-runtime/runtime';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-17-updated';

import { popularMovies, movieDetails } from '../API/API';

configure({
  adapter: new EnzymeAdapter(),
});

describe('popularMovies()', () => {
  it('Returns  an array wich first element is an object with popularity propery', () => {
    popularMovies().then((movies) => {
      expect(movies[0]).toHaveProperty('popularity');
    });
  });

  it('Returns  an array wich first element is an object with title propery', () => {
    popularMovies().then((movies) => {
      expect(movies[0]).toHaveProperty('title');
    });
  });

  it('Returns  an array wich first element is an object with vote_average propery', () => {
    popularMovies().then((movies) => {
      expect(movies[0]).toHaveProperty('vote_average');
    });
  });
});
describe('movieDetails()', () => {
  it('Return an object with a property budget', () => {
    movieDetails(568620).then((movie) => {
      expect(movie).toHaveProperty('budget');
    });
  });

  it('Return an object with a property genres', () => {
    movieDetails(568620).then((movie) => {
      expect(movie).toHaveProperty('genres');
    });
  });

  it('Return an object with a property homepage', () => {
    movieDetails(568620).then((movie) => {
      expect(movie).toHaveProperty('homepage');
    });
  });

  it('Return an object with a property original_language', () => {
    movieDetails(568620).then((movie) => {
      expect(movie).toHaveProperty('original_language');
    });
  });
});
