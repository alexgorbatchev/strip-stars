import { expect } from 'chai';
import stripStars from '../strip-stars';

describe('strip-stars', () => {
  it('strips stars from every line', () =>
    expect(stripStars(`
      *
      * This is a C style comment
      *
    `)).to.equal(`This is a C style comment\n`)
  );

  it('does not do anything if not all lines have stars', () =>
    expect(stripStars(`
      *
      * This is a C style comment
        Second line
      *
    `)).to.equal(`
      *
      * This is a C style comment
        Second line
      *
    `)
  );
});
