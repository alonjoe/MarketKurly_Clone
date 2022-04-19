const getSession = () => {
    return sessionStorage.getItem('token');
  }
  
  const setSession = (token) => {
    sessionStorage.setItem('token', token);
  }
  
  const removeSession = () => {
    sessionStorage.removeItem('token');
  }
  
  const isSession = () => {
    return sessionStorage.getItem('token') ? true : false;
  }

  export {getSession, setSession, isSession, removeSession};