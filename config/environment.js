const CONFIG = {};

if (process.env.NODE_ENV === 'development') {
  CONFIG.EXPRESS = {
    PORT: 8080,
  };
}

export default CONFIG;
