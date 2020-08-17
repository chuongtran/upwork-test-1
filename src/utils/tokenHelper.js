export const setToken = (token) => localStorage.setItem('access_token', token);
export const getToken = () => localStorage.getItem('access_token');
export const deleteToken = () => localStorage.removeItem('access_token');
