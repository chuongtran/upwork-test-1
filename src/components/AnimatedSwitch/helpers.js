/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line import/no-extraneous-dependencies
import spring from 'react-motion/lib/spring';

export function ensureSpring(styles) {
  const obj = {};

  // eslint-disable-next-line guard-for-in
  for (const key in styles) {
    const value = styles[key];
    if (typeof value === 'number') {
      obj[key] = spring(value);
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

export function identity(v) {
  return v;
}
