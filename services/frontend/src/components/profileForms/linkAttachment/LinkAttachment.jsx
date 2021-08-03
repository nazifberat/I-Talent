import PropTypes from "prop-types";
import LinkAttachmentView from "./LinkAttachmentView";
import {
  FieldPropType,
  KeyNameOptionsPropType,
} from "../../../utils/customPropTypes";

const LinkAttachment = ({
  fieldElement,
  removeElement,
  nameOptions,
  errors,
}) => (
  <LinkAttachmentView
    fieldElement={fieldElement}
    removeElement={removeElement}
    nameOptions={nameOptions}
    errors={errors}
  />
);

LinkAttachment.propTypes = {
  fieldElement: FieldPropType.isRequired,
  removeElement: PropTypes.func.isRequired,
  nameOptions: KeyNameOptionsPropType.isRequired,
  errors: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default LinkAttachment;
