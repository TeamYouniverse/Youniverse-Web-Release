import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules';
import * as userActions from '../store/modules/user';

function index() {
  const dispatch = useDispatch();
  const user = useSelector(({ user }: RootState) => user);
  const [newUser, setNewUser] = useState({
    id: 2,
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
