export const setCurrentSession = () => {
  const current = Math.floor(new Date().getTime() / 1000); // ISO
  localStorage.setItem('sessionTime', current);
};

export const checkSession = () => {
  return true;
  const sessionTime = localStorage.getItem('sessionTime');
  const whenWillBeExpired = Number(sessionTime) * 30 * 60; // 30분
  const current = Math.floor(new Date().getTime() / 1000); // ISO
  if (!sessionTime || whenWillBeExpired <= current) {
    localStorage.removeItem('sessionTime');
    return false;
  }

  return true;
};

export const deleteSession = () => {
  localStorage.removeItem('sessionTime');
};

export const isOk = (statusCode) => {
  if (statusCode >= 200 && statusCode < 300) {
    return true;
  } else {
    return false;
  }
};
