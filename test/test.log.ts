import { describe, it } from 'node:test';

import * as log from '../src/';

describe('test.log', async () => {
  it('tests log usage', async (_t) => {  
    log.configure({ traceEnabled: true, debugEnabled: true, filters: [] });
    log.trace('trace message');
    log.debug('debug message');
    log.info('info message');
    log.warn('warn message');
    log.error('error message');

    log.configure({ traceEnabled: true, debugEnabled: true, filters: ['key on'] });
    log.trace('ingnored message');
    log.trace('key on message');
  });
});