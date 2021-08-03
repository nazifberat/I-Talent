import PropTypes from "prop-types";
import EducationFormView from "./EducationFormView";
import {
  FieldPropType,
  FormInstancePropType,
  KeyTitleOptionsPropType,
  KeyNameOptionsPropType,
} from "../../../../utils/customPropTypes";

const EducationForm = ({
  form,
  fieldElement,
  removeElement,
  diplomaOptions,
  schoolOptions,
  attachmentNames,
  errors,
  index,
}) => (
  <EducationFormView
    form={form}
    fieldElement={fieldElement}
    removeElement={removeElement}
    diplomaOptions={diplomaOptions}
    schoolOptions={schoolOptions}
    attachmentNames={attachmentNames}
    errors={errors}
    index={index}
  />
);

EducationForm.propTypes = {
  form: FormInstancePropType.isRequired,
  fieldElement: FieldPropType.isRequired,
  removeElement: PropTypes.func.isRequired,
  diplomaOptions: KeyTitleOptionsPropType.isRequired,
  schoolOptions: KeyTitleOptionsPropType.isRequired,
  attachmentNames: KeyNameOptionsPropType.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

export default EducationForm;
