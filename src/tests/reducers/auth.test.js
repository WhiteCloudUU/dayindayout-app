import authReducer from '../../reducers/auth'

test('Should setup default auth reducer.', () => {
    const result = authReducer(undefined, { type: "@@INIT" });
    expect(result).toEqual(
        {
            
        }
    );
});

test('Should setup user id.', () => {
    const result = authReducer({}, { type: "LOGIN", uid: "9527xxx" });
    expect(result).toEqual(
        {
            uid: "9527xxx"
        }
    );
});

test('Should logout.', () => {
    const result = authReducer({uid: "anything"}, { type: "LOGOUT" });
    expect(result).toEqual(
        {
            // Empty
        }
    );
});