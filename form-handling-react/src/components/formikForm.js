import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema with Yup
const validationSchema = Yup.object({
  FirstName: Yup.string().required("First name is required"),
  LastName: Yup.string().required("Last name is required"),
  Email: Yup.string().email("Invalid email address").required("Email is required"),
  Telephone: Yup.string()
    .matches(/^[0-9]+$/, "Phone must be digits only")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone is required"),
});

function FormikForm() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-500 text-white">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-96 my-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
        
        <Formik
          initialValues={{ FirstName: "", LastName: "", Email: "", Telephone: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form submitted:", values);
            resetForm();
          }}
        >
          {() => (
            <Form className="flex flex-col gap-4">
              {/* First Name */}
              <div className="flex flex-col text-lg">
                <label htmlFor="FirstName">First Name</label>
                <Field
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  className="border border-gray-300 rounded px-2 py-1 text-black"
                />
                <ErrorMessage
                  name="FirstName"
                  component="div"
                  className="text-red-400 text-sm"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col text-lg">
                <label htmlFor="LastName">Last Name</label>
                <Field
                  type="text"
                  id="LastName"
                  name="LastName"
                  className="border border-gray-300 rounded px-2 py-1 text-black"
                />
                <ErrorMessage
                  name="LastName"
                  component="div"
                  className="text-red-400 text-sm"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col text-lg">
                <label htmlFor="Email">Email</label>
                <Field
                  type="email"
                  id="Email"
                  name="Email"
                  className="border border-gray-300 rounded px-2 py-1 text-black"
                />
                <ErrorMessage
                  name="Email"
                  component="div"
                  className="text-red-400 text-sm"
                />
              </div>

              {/* Telephone */}
              <div className="flex flex-col text-lg">
                <label htmlFor="Telephone">Phone</label>
                <Field
                  type="tel"
                  id="Telephone"
                  name="Telephone"
                  className="border border-gray-300 rounded px-2 py-1 text-black"
                />
                <ErrorMessage
                  name="Telephone"
                  component="div"
                  className="text-red-400 text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 w-1/3 mx-auto"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormikForm;