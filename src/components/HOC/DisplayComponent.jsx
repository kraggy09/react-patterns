import withDataProtection from "./WithDataProtection";

const DisplayComponent = (props) => {
  return (
    <div>
      <p>Public data: {props.publicData}</p>
      <p>Sensitive data: {props.sensitiveData}</p>
      <p>{props.newOne}</p>
    </div>
  );
};

//This line is used to get the component from the HOC being modified
const ProtectedDisplayComponent = withDataProtection(DisplayComponent);

export default ProtectedDisplayComponent;
