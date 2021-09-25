const TodoList = ({ todoList, handleTodo }) => {
  return (
    <div>
      {todoList.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleTodo(item);
            }}
          >
            Concluir Tarefa
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
