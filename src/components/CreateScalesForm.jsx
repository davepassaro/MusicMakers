import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { octaveSetup } from "./constants";
import API from "../apis/API";

export default function CreateScales(props) {
  const [name, setName] = useState(null);
  const [error, setError] = useState(null);
  //Create CheckBox Fields
  const generateCheckFields = (octave) => {
    return octaveSetup.map((key) => {
      return (
        <div class="form-check">
          <label className="form-check-label" for="materialUnchecked">
            <Field
              className="form-check-input"
              id="materialUnchecked"
              type="checkbox"
              name="checked"
              value={octave + key.note}
            />
            {key.note.length === 2 && key.note}
            {key.note.length === 1 && key.note}
            {key.note.length === 1 && "\u00A0"}
            {key.note.length === 1 && "\u00A0"}
          </label>
        </div>
      );
    });
  };

  return (
    <div>
      {error && <h3 class="display-4">{error}</h3>}
      {name && <h3 class="display-4">Successfully Created {name}</h3>}
      <Formik
        initialValues={{
          name: "",
          checked: [],
        }}
        onSubmit={(values) => {
          //Check and make sure at least one checkbox has been checked
          if (values.checked.length == 0) {
            setName(null);
            setError("Please select at least one note");
          } else {
            API.instance
              .post("/scales", values, {
                withCredentials: true,
              })
              .then((res) => {
                setName(res.data.name);
                setError(null);
              })
              .catch((error) => {
                if (error) {
                  setError(error.response.data);
                  setName(null);
                }
              });
          }
        }}
      >
        {({ values }) => (
          <Form>
            <Field type="text" name="name" placeholder="Scale Name" required />
            <div id="check-container">
              <div role="group" aria-labelledby="checkbox-group">
                <h4>First Octave</h4>
                {generateCheckFields(1)}
              </div>
              <div role="group" aria-labelledby="checkbox-group">
                <h4>Second Octave</h4>
                {generateCheckFields(2)}
              </div>
            </div>
            <button className="btn btn-success" type="submit">
              Create
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
