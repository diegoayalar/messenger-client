export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('authToken'); // Replace 'authToken' with your token's key
  };