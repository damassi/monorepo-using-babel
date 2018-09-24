import assert from 'assert';

import startConversation from '../src';

describe('startConversation', () => {
  it('should say hello', () => {
    startConversation();
    assert(true);
  });
});
