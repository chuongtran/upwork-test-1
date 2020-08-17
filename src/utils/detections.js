export const isMobile = () => window.orientation !== undefined;

export const isEmployeeURL = () => {
  const pathName = window.location.pathname;

  return pathName.split('/').includes('employee');
};
