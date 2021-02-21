// Options Reducer
const optionsReducerDefaultState = [];

export default (state = optionsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_OPTION':
      return [
        ...state,
        action.option
      ];
      
    case 'REMOVE_OPTION':
      return state.filter(({ id }) => id !== action.id);

    case 'EDIT_OPTION':
      return state.map((option) => {
        if (option.id === action.id) {
          return {
            ...option,
            ...action.updates
          };
        } else {
          return option;
        };
      });
    
    case 'TOGGLE_OPTION':
      return state.map((option) => {
        if (option.id === action.id) {
          return {
            ...option,
            isCompleted: !option.isCompleted
          };
        } else {
          return option;
        };
      })

    default:
      return state;
  }
};
