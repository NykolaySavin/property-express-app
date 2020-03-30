import queryString from "query-string";
import api from "../../../api";

export default function getAll(query) {
  return api.get(
    `/properties${
      query
        ? `?${queryString.stringify(query, { arrayFormat: "bracket" })}`
        : ""
    }`
  );
}
