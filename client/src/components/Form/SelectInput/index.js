import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Loading from "../../Loading/index";
import * as _ from "lodash";

const SelectInput = ({
  optionName,
  onChange,
  name,
  title,
  initialValue = "",
  fetch,
  formError,
  initialData = []
}) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getData = () =>
    fetch()
      .then(result => {
        setLoading(false);
        if (result.data) {
          setData(result.data);
          if (result.data.length > 0 && onChange && initialValue.length === 0)
            onChange(name, result.data[0].id);
        } else {
          setData([]);
        }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  useEffect(() => {
    if (fetch) {
      setLoading(true);
      setError(null);
      getData();
    }
  }, []);

  if (error) return <div>{error.message}</div>;
  if (loading) return <Loading />;

  const handle = event => {
    const { target } = event;
    const { name, value } = target;
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <Form.Group controlId={name}>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        name={name}
        as="select"
        value={initialValue}
        onChange={handle}
        isInvalid={!!formError}
      >
        <option>Choose...</option>
        {data.map(item => (
          <option key={item.id} value={item.id}>
            {item[optionName]}
          </option>
        ))}
      </Form.Control>
      <Form.Control.Feedback type="invalid">{formError}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default SelectInput;
