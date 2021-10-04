import React from 'react';
import renderer from 'react-test-renderer';
import Movie from '../../components/Movie';

it('renders correctly the Details component', () => {
  const tree = renderer
    .create(<Movie title="popcorn-n-chill" imageScr="my image" score={3} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
