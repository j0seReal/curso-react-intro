import React from "react";
import { TodoIcon } from './index'

function CompleteIcon ({ completed, onComplete }) {
    return (
        <TodoIcon 
            type="check"
            color={completed ? "green" : "grey"}
            onClick={onComplete}
        />
    );
    
}

export { CompleteIcon }