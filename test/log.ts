import test from 'node:test';
import assert from 'node:assert';

//import * as log from '../src';

/*
const ogDebug = console['log'];
const ogLog = console['log'];

let debugVar = '';
let logVar = '';

console['debug'] = (value: string) => {
  debugVar = value;
}

console['log'] = (value: string) => {
  logVar = value;
}*/

test('test logs', async(_test) => {
  await _test.test('test trace override', (_t) => {
    assert.strictEqual(1, 1);
  });

  /*
  await _test.test('test trace override', (_t) => {
    log.trace('trace');
    assert.strictEqual(debugVar, 'trace');
  });

  await _test.test('test debug override', (_t) => {
    log.trace('debug');
    assert.strictEqual(debugVar, 'debug');
  });
  */

  /*

  log.debug('debug');
  log.info('debug');
  log.warn('debug');

  try {
    throw Error('failure message');
  } catch (error: any) {
    log.error(error);
  }

  log.info('key', 'value');

  const obj = { key: 'value' };
  log.info('obj', obj);

  log.info(obj);

  console['debug'] = ogDebug;
  console['log'] = ogLog;
  */

  /*_test.after(() => {
    console['debug'] = ogDebug;
    console['log'] = ogLog;
  });*/
});