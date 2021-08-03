import PropTypes from "prop-types";
import ExperienceFormView from "./ExperienceFormView";

import {
  FieldPropType,
  FormInstancePropType,
  KeyNameOptionsPropType,
} from "../../../../utils/customPropTypes";

/**
 *  ExperienceForm(props)
 *  Controller for the ExperienceFormView.
 *  This component is strongly linked ot Qualifications Form.
 *  It generated the form fields for each experience item the user creates in the qualifications form.
 */
const ExperienceForm = ({
  form,
  fieldElement,
  removeElement,
  checkIfFormValuesChanged,
  attachmentNames,
  errors,
  index,
}) => (
  <ExperienceFormView
    form={form}
    fieldElement={fieldElement}
    removeElement={removeElement}
    checkIfFormValuesChanged={checkIfFormValuesChanged}
    attachmentNames={attachmentNames}
    errors={errors}
    index={index}
  />
);

ExperienceForm.propTypes = {
  form: FormInstancePropType.isRequired,
  fieldElement: FieldPropType.isRequired,
  removeElement: PropTypes.func.isRequired,
  checkIfFormValuesChanged: PropTypes.func.isRequired,
  attachmentNames: KeyNameOptionsPropType.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number.isRequired,
};

ExperienceForm.defaultProps = {
  errors: null,
};

export default ExperienceForm;
