import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
    "check": <CheckSVG className='Icon-svg' />,
    "delete": <DeleteSVG className='Icon-svg' />,
};

function TodoIcon({ type }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
        >
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon };