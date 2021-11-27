import { currentEnv } from '../consts/env';

export const logInfo = (...rest) => {
  if (currentEnv !== 'prod') {
    console.log(...rest);
  }
};
