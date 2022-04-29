import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import models from './loader';

const { globalModels, pageModels } = models;

const loadingPlugin = createLoadingPlugin({ asNumber: true });

const configureStore = () => {
  const store = init({
    plugins: [loadingPlugin],
    models: { ...globalModels, ...pageModels },
  });
  return store;
};

export default configureStore;
