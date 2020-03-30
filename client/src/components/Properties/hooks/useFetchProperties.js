import React, { useEffect, useState } from "react";
import propertiesApi from "../../../common/api/properties";

export default function useFetchProperties(query) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getProperties = () =>
    propertiesApi
      .getAll(query)
      .then(result => {
        setLoading(false);
        if (result.data) {
          setProperties(result.data);
        } else {
          setProperties([]);
        }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  useEffect(() => {
    setLoading(true);
    setError(null);
    getProperties();
  }, []);
  return { properties, loading, error, setLoading, setError, getProperties };
}
