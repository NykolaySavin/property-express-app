import React, { useEffect, useState } from "react";
import userApi from "../../../common/api/users";

export default function useFetchUserById(userId, query) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getUserById = () =>
    userApi
      .getById(userId, query)
      .then(result => {
        setLoading(false);
        if (result.data) {
          setUser(result.data);
        } else {
          setUser({});
        }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  useEffect(() => {
    setLoading(true);
    setError(null);
    if (userId) getUserById();
  }, [userId]);
  return { user, loading, error, setLoading, setError, getUserById };
}
