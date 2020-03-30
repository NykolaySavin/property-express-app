import api from "../../../api";

export default function deleteById(propertyId) {
    return api.delete(`/properties/${propertyId}`);
}
