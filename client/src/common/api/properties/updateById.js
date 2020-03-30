import api from "../../../api";

export default function updateById(propertyId, data) {
  return api.put(`/properties/${propertyId}`, data);
}
