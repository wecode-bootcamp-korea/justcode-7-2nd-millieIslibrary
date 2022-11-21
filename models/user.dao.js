const myDataSource = require('../models/index');

const signUp = async (email, hashedPw, nickname) => {
  await myDataSource.query(
    `
    INSERT INTO 
        users ( email, nickname, password)
    VALUES
        (?, ?, ?)
    `,
    [email, nickname, hashedPw]
  );
};

const login = async email => {
  const [userInfo] = await myDataSource.query(
    `
    SELECT * FROM
      users 
    WHERE
      email = ?
    `,
    [email]
  );

  return userInfo;
};

const updateInfo = async (hashedPw, nickname, user_id) => {
  await myDataSource.query(
    `
    UPDATE 
      users 
    SET
      password = ?,
      nickname = ?
    WHERE 
      id = ?
  `,
    [hashedPw, nickname, user_id]
  );
};

const withdrawUser = async user_id => {
  await myDataSource.query(
    `
    DELETE FROM users
    WHERE id = ?
  `,
    [user_id]
  );
};

const getMe = async user_id => {
  let userInfo = await myDataSource.query(
    `
    SELECT
      email, nickname
    FROM
      users
    WHERE
      id = ?;
  `,
    [user_id]
  );
  return userInfo;
};

module.exports = { signUp, login, updateInfo, withdrawUser, getMe };
