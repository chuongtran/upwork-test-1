import { createLoadingSelector } from 'redux/ApiStatus/ApiStatus.selectors';
import { useSelector } from 'react-redux';

export const loadingGenerator = (types) => () => {
  const loadingSelector = createLoadingSelector(types);
  return useSelector(loadingSelector);
};
