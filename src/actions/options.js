import uuid from 'uuid';
import database from '../firebase/firebase'

// ADD_OPTION

// export const addOption = (
//   {
//     description = '',
//     createdAt = 0,
//     isCompleted = false
//   } = {}
// ) => ({
//   type: 'ADD_OPTION',
//   option: {
//     id: uuid(),
//     description,
//     createdAt,
//     isCompleted
//   }
// });

export const addOption = (option) => (
  {
      type: "ADD_OPTION",
      option
  }
)

export const startAddOption = (optionData = {}) => {
  return (dispatch, getState) => {
      // const uid = getState().auth.uid;
      const {
        description = '',
        createdAt = 0,
        isCompleted = false
      } = optionData;
  
      const option = { description, createdAt, isCompleted };

      return database.ref(`options`).push(option).then((ref) => {
          dispatch(addOption(
            {
              id: ref.key,
              ...option
            }
          ));
      });
  };
};


// REMOVE_OPTION
export const removeOption = (id) => ({
  type: 'REMOVE_OPTION',
  id
});

export const startRemoveOption = (id) => {
  return (dispatch, getState) => {
      return database.ref(`options/${id}`).remove()
          .then(() => {
              dispatch(removeOption(id));
          })
  }
} 

// EDIT_OPTION
export const editOption = (id, updates) => ({
  type: 'EDIT_OPTION',
  id,
  updates
});

// TOGGLE_OPTION
export const toggleOption = (id) => ({
  type: 'TOGGLE_OPTION',
  id
});

export const startToggleOption = (id) => {
  return (dispatch) => {
    database.ref(`options/${id}`).once('value')
      .then((snapshot) => {
        return database.ref(`options/${id}`).update({ isCompleted: !snapshot.val().isCompleted });
      })
      .then(() => {
        dispatch(toggleOption(id));
      })
    
  }
}

// SET_EXPENSE
export const setOptions = (options) => (
  {
      type: "SET_OPTIONS",
      options
  }
)

export const startSetOptions = () => {
  return (dispatch) => {
      const options = [];
      return database.ref(`options`).once('value')
        .then((snapshot) => {
            snapshot.forEach((childSnapShot) => {
              options.push(
                  {
                      id: childSnapShot.key,
                      ...childSnapShot.val()
                  }
              )
            });
            dispatch(setOptions(options));           
        });
  };
};