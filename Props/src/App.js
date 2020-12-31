import React from "react";
import ChildrenProps from "./ChildrenProps";
import DefaultProps from "./DefaultProps";
import DestructuringAssignment from "./DestructuringAssignment";
import MyComponet from "./MyComponet";

function App() {
  return (
    <>
      <h3>Props</h3>
      <MyComponet name="유영재" />
      <hr />
      <h3>DefaultProps</h3>
      <DefaultProps />
      <hr />
      <h3>ChildrenProps</h3>
      <ChildrenProps>자바스크립트</ChildrenProps>
      <hr />
      <h3>비구조화 할당으로 props 추출</h3>
      <DestructuringAssignment dogName="뭉이" dogAge={5} />
    </>
  );
}

export default App;
