import api from "../../../api";

export default function deleteById(userId) {
    return api.delete(`/users/${userId}`);
}
