import './TodoCounter.css';

function TodoCounter({ total, completed }) { {/* props: Object */}
    return (
      <h1 /*style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: 0,
        padding: '48px'
      }}*/> {/* style es un objeto de objetos */}
        Haz completado {completed} de {total} TODOS
      </h1>
    );
  }

  export { TodoCounter };