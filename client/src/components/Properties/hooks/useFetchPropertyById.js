import React, { useEffect, useState } from "react";
import propertyApi from "../../../common/api/properties";

export default function useFetchPropertyById(propertyId, query) {
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getPropertyById = () =>
    propertyApi
      .getById(propertyId, query)
      .then(result => {
        setLoading(false);
        if (result.data) {
          setProperty(result.data);
        } else {
          setProperty({});
        }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  useEffect(() => {
    setLoading(true);
    setError(null);
    if (propertyId) getPropertyById();
  }, [propertyId]);
  return { property, loading, error, setLoading, setError, getPropertyById };
}
