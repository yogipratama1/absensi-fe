import { AuthProvider, HttpError } from "react-admin";
import data from "./users.json";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
// export const authProvider: AuthProvider = {
//   login: ({ username, password }) => {
//     const user = data.users.find(
//       (u) => u.username === username && u.password === password
//     );

//     if (user) {
//       // eslint-disable-next-line no-unused-vars
//       let { password, ...userToPersist } = user;
//       localStorage.setItem("user", JSON.stringify(userToPersist));
//       return Promise.resolve();
//     }

//     return Promise.reject(
//       new HttpError("Unauthorized", 401, {
//         message: "Invalid username or password",
//       })
//     );
//   },
//   logout: () => {
//     localStorage.removeItem("user");
//     return Promise.resolve();
//   },
//   checkError: () => Promise.resolve(),
//   checkAuth: () =>
//     localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
//   getPermissions: () => {
//     return Promise.resolve(undefined);
//   },
//   getIdentity: () => {
//     const persistedUser = localStorage.getItem("user");
//     const user = persistedUser ? JSON.parse(persistedUser) : null;

//     return Promise.resolve(user);
//   },
// };
export const authProvider: AuthProvider = {
  login: ({ username }) => {
    localStorage.setItem("username", username);

    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
