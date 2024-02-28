import jsonServerProvider from "ra-data-json-server";
import { DataProvider, fetchUtils } from "react-admin";

export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL
);
