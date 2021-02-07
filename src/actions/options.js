import uuid from 'uuid';

// ADD_OPTION
export const addOption = (
  {
    description = '',
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_OPTION',
  option: {
    id: uuid(),
    description,
    createdAt
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
