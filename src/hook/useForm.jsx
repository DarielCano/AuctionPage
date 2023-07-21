import { useState } from "react";

const useForm = ({ initialValues }) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return { form, setForm, handleChange };
};

export default useForm;
