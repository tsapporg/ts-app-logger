// This file is responsible for providing application logging utils.
// TODO doesn't log method names of classes called from constuctor
import 'reflect-metadata'; 
import { ClassLoggerFormatterService, IClassLoggerFormatterStartData, setConfig } from 'class-logger';
import fast_safe_stringify_1 from 'fast-safe-stringify';
import { LogClass, Log } from 'class-logger';

// TODO log to file option
//import * as pino from 'pino';
//import * as path from 'path';

// TODO pino not logging orrecclty
/*
// TODO handle browser https://github.com/pinojs/pino/blob/713c3c4bb4fd014b17ba1e06db739d9b76931e40/docs/browser.md
const transport = pino.transport({
  targets: [{
    level: 'debug',
    target: 'pino/file',
    options: { destination: path.resolve(process.cwd(), 'logs/generate-synthetic-data-autointeriorblog.log') }
  }]
})

//const log = pino.default(transport);
*/

export {
  configure,

  trace,
  debug,
  info,
  warn,
  error,

  LogClass,
  Log,
}

let traceEnabled = true, debugEnabled = true, filters: string[] | undefined = undefined;

const configure = (args?: { traceEnabled?: boolean, debugEnabled?: boolean, filters?: string[] }) => {
  setConfig({
    formatter: new ClassLoggerTimestampFormatterService(),
    include: {
      args: false,
      result: false
    }
  });

  if (args?.traceEnabled !== undefined) { traceEnabled = args?.traceEnabled; }
  if (args?.debugEnabled !== undefined) { debugEnabled = args?.debugEnabled; }
  if (args?.filters !== undefined) { filters = args?.filters; }
}

class ClassLoggerTimestampFormatterService extends ClassLoggerFormatterService {
  protected override base(data: IClassLoggerFormatterStartData) {
    const baseSuper = super.base(data);
    const timestamp = Date.now();
    const baseWithTimestamp = `${timestamp}:${baseSuper}`;
    
    return baseWithTimestamp;
  }

  protected override complexObjectToString(obj: any): string {
    if (typeof obj !== 'object') { return this.placeholderNotAvailable; }
    if (obj === null) { return fast_safe_stringify_1(obj); }

    const classInstanceFiltered: Record<string, string> = {};
    
    let keys = Object.keys(obj);
    if (obj instanceof Map || obj instanceof Set) { keys = [...obj.keys()]; }
    
    keys.forEach(key => {
      const value = obj[key];
      if (typeof value === 'function') { return; }
      
      classInstanceFiltered[key] = typeof value === 'object' && !this.isPlainObjectOrArray(value) ? this.complexObjectToString(value) : value;
    });

    return `${obj.constructor.name} ${fast_safe_stringify_1(classInstanceFiltered)}`;
  }
}

const trace = (...args: any[]) => {
  if (!traceEnabled) { return; }

  try {
    const message = mapArgsToString(args);

    if (!filters || (filters && filters.find(filter => message.includes(filter)))) {
      console.debug(`TRACE ${message}`);
    }
  } catch (error: any) {
    console.debug.apply(args);
  }
}

const mapArgsToString = (args: any[]): string => {
  return args.map(_ => {
    if (_ instanceof Error) { return `${_.message} ${_.stack}`; }
    if (_ instanceof Object) { return JSON.stringify(_); }

    return _.toString();
  }).join(' ');
}

const debug = (...args: any[]) => {
  if (!debugEnabled) { return; }

  try {
    const message = mapArgsToString(args);

    if (!filters || (filters && filters.find(filter => message.includes(filter)))) {
      console.debug(`DEBUG ${message}`);
    }
  } catch (error: any) {
    console.debug.apply(args);
  }
}

const info = (...args: any[]) => {
  try {
    const message = mapArgsToString(args);
    
    if (!filters || (filters && filters.find(filter => message.includes(filter)))) {
      console.log(`INFO ${message}`);
    }
  } catch (error: any) {
    console.log.apply(args);
  }
}

const warn = (...args: any[]) => {
  try {
    const message = mapArgsToString(args);
    
    if (!filters || (filters && filters.find(filter => message.includes(filter)))) {
      console.warn(`WARN ${message}`);
    }
  } catch (error: any) {
    console.warn.apply(args);
  }
}

const error = (...args: any[]) => {
  try {
    const message = mapArgsToString(args);
    
    if (!filters || (filters && filters.find(filter => message.includes(filter)))) {
      console.error(`ERROR ${message}`);
    }
  } catch (error: any) {
    console.error.apply(args);
  }
}

export const objectWithoutProperties = (obj: any, keys: Array<string>) => {
  const target: any = {};

  const clonedObj = JSON.parse(JSON.stringify(obj)) as any;

  for (var i in clonedObj) {
    if (keys.indexOf(i) >= 0) {
      continue;
    }
    
    if (!Object.prototype.hasOwnProperty.call(clonedObj, i)) {
      continue;
    }

    target[i] = clonedObj[i];
  }

  return target;
};