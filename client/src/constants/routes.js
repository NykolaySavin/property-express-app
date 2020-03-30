export const PROPERTIES = {
  href: "/properties",
  as: () => `/properties`
};
export const PROPERTIES_LIST = {
  href: "/properties/list",
  as: () => `/properties/list`
};
export const PROPERTIES_CREATE = {
  href: "/properties/create",
  as: () => `/properties/create`
};
export const PROPERTIES_EDIT = {
  href: "/properties/:propertyId/edit",
  as: params => `/properties/${params.propertyId}/edit`
};
export const PROPERTIES_SHOW = {
  href: "/properties/:propertyId/show",
  as: params => `/properties/${params.propertyId}/show`
};
export const USERS = {
    href: "/users",
    as: () => `/users`
};
export const USERS_LIST = {
    href: "/users/list",
    as: () => `/users/list`
};
export const USERS_CREATE = {
    href: "/users/create",
    as: () => `/users/create`
};
export const USERS_EDIT = {
    href: "/users/:userId/edit",
    as: params => `/users/${params.userId}/edit`
};
export const USERS_SHOW = {
    href: "/users/:userId/show",
    as: params => `/users/${params.userId}/show`
};