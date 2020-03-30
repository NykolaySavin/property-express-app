import api from "../../../api";

export default function updateById(userId, data) {
  return api.put(`/users/${userId}`, data);
}
