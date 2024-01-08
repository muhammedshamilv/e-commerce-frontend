class LocalStorageService {
  static setToken = (access_token, refresh_token) => {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  };

  static getAccessToken = () => {
    return localStorage.getItem('access_token');
  };

  static getRefreshToken = () => {
    const rToken = localStorage.getItem('refresh_token');
    if (rToken) {
      return rToken;
    } else return;
  };

  static clearToken = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  };

  static setUser = (user) => {
    localStorage.setItem('user', user);
  };
  static setUserId = (userid) => {
    localStorage.setItem('userid', userid);
  };
  static setUserRole = (user) => {
    localStorage.setItem('role', user);
  };
  static getUserid = () => {
    const loggedUser = localStorage.getItem('userid');
    return loggedUser;
  };
  static getUser = () => {
    const loggedUser = localStorage.getItem('user');
    return loggedUser;
  };
  static getUserRole = () => {
    const loggedUserRole = localStorage.getItem('role');
    return loggedUserRole;
  };
}
export default LocalStorageService;
