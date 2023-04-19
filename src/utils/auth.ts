const TOKEN_KEY = 'token';
const XTOKEN_KEY='xtoken';

const isLogin = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
const getXToken = () => {
  return localStorage.getItem(XTOKEN_KEY);
};


const setToken = (token: string,xtoken:string) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(XTOKEN_KEY, xtoken);
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(XTOKEN_KEY);
};

export { isLogin, getToken,getXToken, setToken, clearToken };
