import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  currentPage: 'Landing',
});

export { setGlobalState, useGlobalState };
