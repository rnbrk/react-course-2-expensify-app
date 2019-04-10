import authReducer from '../../reducers/auth';

test('Should set state to user-id when logged in', () => {
  const action = {
    type: 'LOGIN',
    uid: '12345'
  };
  const state = {};

  const newState = authReducer(state, action);
  expect(newState).toEqual({ uid: '12345' });
});

test('Should set state to {} when logged out', () => {
  const action = { type: 'LOGOUT' };
  const state = { uid: '12345' };

  const newState = authReducer(state, action);
  expect(newState).toEqual({});
});
