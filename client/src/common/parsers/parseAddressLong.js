export default function(address) {
  if (address && address.street && address.house_number && address.city)
    return `${address.street} ${address.house_number}, ${address.city} ${
      address.city_district
    } ${address.postcode} ${address.country}`;
  return "";
}
