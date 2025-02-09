class ExternalResolvePlugin {
  constructor() {
  }
  apply(resolver) {
    resolver.getHook('before-rawModule').tapAsync('runtime-external-resolve', (req, ctx, cb) => {
      console.log('----raw module: ', req.request);
      return cb();
    });
  }
}

module.exports = ExternalResolvePlugin;
