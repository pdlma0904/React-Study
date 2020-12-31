import React from "react";

const DestructuringAssignment = (props) => {
  const { dogName, dogAge } = props;
  return (
    <>
      <div>
          강아지 이름은 {dogName} 이고 {dogAge}살 입니다.
      </div>
    </>
  );
};

export default DestructuringAssignment;
