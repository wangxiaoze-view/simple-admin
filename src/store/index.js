import { createPinia } from 'pinia';

const store = createPinia();

export function setupStore(app) {
  app.use(store);
  return store;
}

export default store;
