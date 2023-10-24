import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext, openModal, setOpenModal } from '../TodoContext';
import React from 'react';
import { Modal } from '../modal';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <>

            <TodoCounter />

            <TodoSearch />
            
            <TodoList>
                {loading && (
                    <>
                        <TodosLoading message={'Cargando...'}/>
                        <TodosLoading />
                        <TodosLoading />
                    </>)}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
                {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

            <CreateTodoButton setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                <TodoForm />
            </Modal>
            )}
        </>
    );
}

export { AppUI };