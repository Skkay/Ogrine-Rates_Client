import { PropTypes } from "prop-types";

const HeaderCard = ({ title, content }) => {
    return (
        <div className="bg-white w-full md:w-96 rounded-lg shadow-md p-3">
            <p className="text-gray-500 mb-1">{title}</p>
            {content}
        </div>
    );
};

HeaderCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.any.isRequired,
};

export default HeaderCard;
