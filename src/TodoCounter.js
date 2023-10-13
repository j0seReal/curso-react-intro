function TodoCounter({ total, completed }) { {/* props: Object */}
    return (
      <h1>
        Haz completado {completed} de {total} TODOS
      </h1>
    );
  }

  export { TodoCounter };