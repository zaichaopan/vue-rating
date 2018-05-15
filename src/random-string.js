const randomString = (length = 9) => {
  let s = "";
  const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  while (s.length < 9) {
    s += pool.charAt(Math.floor(Math.random() * pool.length));
  }

  return s;
};

export default randomString;
