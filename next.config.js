module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['de', 'en', 'fr'],
    defaultLocale: 'en'
  },
  webpack: (config) => {
    // config.experiments = { topLevelAwait: true };
    // config.resolve.fallback = {
    //   assert: false,
    //   process: false,
    //   events: false,
    //   fs: false,
    //   util: false,
    //   path: false,
    //   stream: false,
    //   constants: false,
    //   os: false,
    // };
    return config
  }
}
