const PWA = require("next-pwa");

module.exports = PWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
