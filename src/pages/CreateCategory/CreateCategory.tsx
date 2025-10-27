import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const CategorySchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string()
    .min(2, "Too Short!")
    // .max(50, 'Too Long!')
    .url("Must be valid URL")
    .required("Required"),
  // email: Yup.string().email('Invalid email').required('Required'),
});

export const CreateCategory = () => {
  const navigate = useNavigate();

  const fetchCreateCategories = async (values: {
    name: string;
    image: string;
  }) => {
    const res = await fetch(" https://api.escuelajs.co/api/v1/categories/", {
      //в Fake Store post pequest(categories)
      method: "Post",
      body: JSON.stringify(values),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>CreateCategory</h1>
      <Formik
        initialValues={{
          name: "",
          image: "",
          // lastName: '',
          // email: '',
        }}
        validationSchema={CategorySchema}
        //validateOnChange={false}
        onSubmit={(values) => {
         fetchCreateCategories(values);
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field name="image" />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
