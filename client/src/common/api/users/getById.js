import queryString from "query-string";
import api from "../../../api";

export default function getById(userId, query) {
  return api.get(
    `/users/${userId}${
      query
        ? `?${queryString.stringify(query, { arrayFormat: "bracket" })}`
        : ""
    }`
  );
}
