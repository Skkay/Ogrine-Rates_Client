import { PropTypes } from "prop-types";

const Card = ({ title, content }) => {
    return (
        <div className="bg-white w-full sm:w-96 rounded-lg shadow-md p-3">
            <p className="text-gray-500 mb-1">{title}</p>
            {content}
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.any.isRequired,
};

export default Card;
