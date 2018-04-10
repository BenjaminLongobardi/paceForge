module.exports = {
  cache: {
    cacheId: "PFA_0.0.1",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "PFA_0.0.1",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
