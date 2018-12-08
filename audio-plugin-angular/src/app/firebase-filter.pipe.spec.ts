import { FirebaseFilterPipe } from './firebase-filter.pipe';

describe('FirebaseFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FirebaseFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
