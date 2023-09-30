const npmPackage: any = {
  name: 'ts-app-logger',
  version: '0.0.0',
  private: false,
  license: 'MIT',
  type: 'module',
  exports: {
    '.': './src/index.ts'
  },
  types: './src/index.ts',
  dependencies: { 
    'class-logger': '1.3.0',
    'fast-safe-stringify': '2.1.1',
    'reflect-metadata': '0.1.13',

    //'pino': '8.15.1', // TODO add file log support.
  },
  devDependencies: {}
}

export default { npmPackage }