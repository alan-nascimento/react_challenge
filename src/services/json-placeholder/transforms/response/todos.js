const transformTodos = (todos = []) => {
  if (!todos?.length) return [];

  return todos?.map((todo) => ({
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
  }));
};

export default transformTodos;
