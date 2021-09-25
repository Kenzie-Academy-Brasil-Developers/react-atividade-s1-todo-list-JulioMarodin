import { useState } from 'react';

const Form = ({ addTodo }) => {
  const [userInput, setUserInput] = useState('');
  return (
    <div>
      <form value={userInput} onChange={(e) => setUserInput(e.target.value)}>
        <input placeholder="Tarefa" />
        <button
          onClick={(e) => {
            e.preventDefault();
            addTodo(userInput);
          }}
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default Form;
