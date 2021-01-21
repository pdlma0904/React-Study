# useRef

우리가 `JavaScript` 를 사용 할 때에는, 우리가 특정 DOM 을 선택해야 하는 상황에 `getElementById`, `querySelector` 같은 DOM Selector 함수를 사용해서 DOM 을 선택한다.

리액트를 사용하는 프로젝트에서도 가끔씩 DOM 을 직접 선택해야 하는 상황이 발생 할 때에는 `ref`라는 것을 사용한다.

함수형 컴포넌트에서 `ref` 를 사용 할 때에는 useRef 라는 Hook 함수를 사용한다.
_클래스형 컴포넌트에서는 콜백 함수를 사용하거나 React.createRef 라는 함수를 사용하는데 나는 클래스형을 배우지 않으므로 PASS_

>**초기화 버튼을 클릭했을 때 이름 input 에 포커스가 잡히도록 useRef 를 사용하여 기능을 구현했다.**
>
>```js
>import React, { useState, useRef } from 'react';
>
>function InputSample() {
>  const [inputs, setInputs] = useState({
>    name: '',
>    nickname: ''
>  });
>  const nameInput = useRef();
>
>  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
>
>  const onChange = e => {
>    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
>    setInputs({
>      ...inputs, // 기존의 input 객체를 복사한 뒤
>      [name]: value // name 키를 가진 값을 value 로 설정
>    });
>  };
>
>  const onReset = () => {
>    setInputs({
>      name: '',
>      nickname: ''
>    });
>    nameInput.current.focus();
>  };
>
>  return (
>    <div>
>      <input
>        name="name"
>        placeholder="이름"
>        onChange={onChange}
>        value={name}
>        ref={nameInput}
>      />
>      <input
>        name="nickname"
>        placeholder="닉네임"
>        onChange={onChange}
>        value={nickname}
>      />
>      <button onClick={onReset}>초기화</button>
>      <div>
>        <b>값: </b>
>        {name} ({nickname})
>      </div>
>    </div>
>  );
>}
>
>export default InputSample;
>```

`useRef()` 를 사용하여 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM 에 `ref` 값으로 설정해주어야 합니다. 그러면, Ref 객체의 `.current` 값은 우리가 원하는 DOM 을 가르키게 됩니다.

위 예제에서는 `onReset` 함수에서 `input` 에 포커스를 하는 `focus()` DOM API 를 호출해주었습니다.


### useRef 로 컴포넌트 안의 변수 만들기

`useRef` Hook 은 DOM 을 선택하는 용도 외에도, 다른 용도가 한가지 더 있는데, 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것이다.

`useRef` 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않는다. 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면, `useRef` 로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있다.

이 변수를 사용하여 다음과 같은 값을 관리 할 수 있다.

- `setTimeout`, `setInterval` 을 통해서 만들어진 `id`
- 외부 라이브러리를 사용하여 생성된 인스턴스
- scroll 위치

>`App.js`
>```javascript
>import React, { useRef } from 'react';
>import UserList from './UserList';
>
>function App() {
>  const users = [
>    {
>      id: 1,
>      username: 'velopert',
>      email: 'public.velopert@gmail.com'
>    },
>    {
>      id: 2,
>      username: 'tester',
>      email: 'tester@example.com'
>    },
>    {
>      id: 3,
>      username: 'liz',
>      email: 'liz@example.com'
>    }
>  ];
>
>  const nextId = useRef(4);
>  const onCreate = () => {
>    // 나중에 구현 할 배열에 항목 추가하는 로직
>    // ...
>
>    nextId.current += 1;
>  };
>  return <UserList users={users} />;
>}
>
>export default App;
>```
>
>`UserList.js`
>```javascript
>import React from 'react';
>
>function User({ user }) {
>  return (
>    <div>
>      <b>{user.username}</b> <span>({user.email})</span>
>    </div>
>  );
>}
>
>function UserList({ users }) {
>  return (
>    <div>
>      {users.map(user => (
>        <User user={user} key={user.id} />
>      ))}
>    </div>
>  );
>}
>
>export default UserList;
>```
`useRef()` 를 사용 할 때 파라미터를 넣어주면, 이 값이 `.current` 값의 기본값이 된다.

그리고 이 값을 수정 할때에는 `.current` 값을 수정하면 되고 조회 할 때에는 `.current` 를 조회하면 된다.
