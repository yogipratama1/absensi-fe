import { Admin, Resource, ShowGuesser } from "react-admin";

import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./users";
import { PostEdit, PostList, PostCreate } from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import restProvider from "ra-data-simple-rest";
import { Dashboard } from "./Dashboard";

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      show={ShowGuesser}
      recordRepresentation="name"
      icon={UserIcon}
    />
  </Admin>
);
