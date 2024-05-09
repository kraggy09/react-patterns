const withDataProtection = (WrappedComponent) => {
  // The props here is the prop which will be sent in from the WrappedCompoentn
  const ProtectedComponent = (props) => {
    //This is the newProps or any other function we are willing to do on the component recieved
    const modifiedProps = {
      ...props,
      publicData: "This is public data",
      sensitiveData: "Sensitive data hidden",
    };
    //This is the way of returning the recieved componet from the HOC
    return <WrappedComponent {...modifiedProps} />;
  };
  //returning the new component

  return ProtectedComponent;
};

//returning the function so that we can wrapup the component in this and work on this hoc

export default withDataProtection;
