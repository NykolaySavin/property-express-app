import api from "../../../api";

export default function create(data) {
  return api.post(`/users`, data);
}
