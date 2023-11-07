import 'reflect-metadata';
import { LogClass, Log } from 'class-logger';
export { configure, trace, debug, info, warn, error, LogClass, Log, };
declare let traceEnabled: boolean, debugEnabled: boolean, filters: string[] | undefined;
declare const configure: (args?: {
    traceEnabled?: boolean;
    debugEnabled?: boolean;
    filters?: string[];
}) => void;
declare const trace: (...args: any[]) => void;
declare const debug: (...args: any[]) => void;
declare const info: (...args: any[]) => void;
declare const warn: (...args: any[]) => void;
declare const error: (...args: any[]) => void;
export declare const objectWithoutProperties: (obj: any, keys: Array<string>) => any;
//# sourceMappingURL=index.d.ts.map