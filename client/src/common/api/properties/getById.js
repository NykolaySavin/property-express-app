import queryString from "query-string";
import api from "../../../api";

export default function getById(propertyId, query) {
  return api.get(
    `/properties/${propertyId}${
      query
        ? `?${queryString.stringify(query, { arrayFormat: "bracket" })}`
        : ""
    }`
  );
}
