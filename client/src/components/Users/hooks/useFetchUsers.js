import React, { useEffect, useState } from "react";
import userApi from "../../../common/api/users";

export default function useFetchUsers(query) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getUsers = () =>
    userApi
      .getAll(query)
      .then(result => {
        setLoading(false);
        if (result.data) {
          setUsers(result.data);
        } else {
          setUsers([]);
        }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  useEffect(() => {
    setLoading(true);
    setError(null);
    getUsers();
  }, []);
  return { users, loading, error, setLoading, setError, getUsers };
}
