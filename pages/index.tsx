import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules';
import * as userActions from '../store/modules/user';

function index() {
  // 정의된 리듀서를 사용할 수 있도록 해주는 애 : dispatch
  const dispatch = useDispatch();
  // useSelector를 통해서 store에 있는 state를 데려올 수 있음
  const user = useSelector(({ user }: RootState) => user);
  const [newUser, setNewUser] = useState({
    id: user?.id,
    name: user?.name,
  });

  const onChangeHandler = (e) => {
    switch (e.target.id) {
      case 'id':
        setNewUser({
          ...newUser,
          id: Number(e.target.value),
        });
        break;
      case 'name':
        setNewUser({
          ...newUser,
          name: e.target.value,
        });
        break;
    }
  };
  const onClickHandler = () => {
    // 아까 정의한 리듀서 함수를 사용
    dispatch(userActions.addUser(newUser));
    console.log('>>newUser', newUser);
  };

  return (
    <>
      <section>
        <h1>유저 아이디: {user.id}</h1>
        <h1>유저 이름: {user.name}</h1>
      </section>
      <section>
        <h1>새로운 유저 아이디, 이름 입력 후 버튼을 눌러주세요</h1>
        <input id="id" placeholder="유저 아이디" onChange={onChangeHandler} />
        <input id="name" placeholder="유저 이름" onChange={onChangeHandler} />
        <button onClick={onClickHandler}>반영하기</button>
      </section>
    </>
  );
}

export default index;
