import {Form, Formik} from "formik";

import type {FormikHelpers} from "formik/dist/types";

import {CardWrapper} from "./styles";

interface IBaseForm {
  initialValues: any
  validationSchema: any
  children: any
  onSubmit: (value: any, formik: FormikHelpers<any>) => void
}

const BaseForm = ({initialValues, validationSchema, onSubmit, children}: IBaseForm) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={onSubmit}
    >
      <CardWrapper>
        <Form>
          {children}
        </Form>
      </CardWrapper>
    </Formik>
  );
};

export default BaseForm;
