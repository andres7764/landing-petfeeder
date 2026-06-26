
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17907, hash: '2ea267a1fbaaf2165d3bf9648d946adca198293b522153e67f4b929f1e42601c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1077, hash: '6b8986fb6070be32bad5e8b905eca684f6c31c7f349646ddc40a1b0ae1b00381', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63135, hash: '1aabdef3463fe16f5d3ce797434d67d7eb38ece2847f458a4589b1253c51dae7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3NKLK3ZO.css': {size: 33552, hash: 'u+BKfGaxU1s', text: () => import('./assets-chunks/styles-3NKLK3ZO_css.mjs').then(m => m.default)}
  },
};
