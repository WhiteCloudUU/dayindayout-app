import uuid from 'uuid';

// ADD_OPTION
export const addOption = (
  {
    description = '',
    createdAt = 0,
    isCompleted = false
  } = {}
) => ({
  type: 'ADD_OPTION',
  option: {
    id: uuid(),
    description,
    createdAt,
    isCompleted
  }
});

// REMOVE_OPTION
export const removeOption = (id) => ({
  type: 'REMOVE_OPTION',
  id
});

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
