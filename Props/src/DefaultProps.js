import React from "react";

const DefaultProps = (props) => {
  return (
    <>
      <div>DefaultProps는 {props.defaultPropsName} 입니다.</div>
    </>
  );
};

DefaultProps.defaultProps = {
  defaultPropsName: "리액트",
};

export default DefaultProps;
