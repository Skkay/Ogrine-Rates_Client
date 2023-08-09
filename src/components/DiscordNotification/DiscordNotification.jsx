import React from "react";
import { PropTypes } from 'prop-types';
import Modal from "./Modal";

const DiscordNotification = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleClickOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleClickCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <div className="flex gap-1 fixed bottom-0 right-0 m-1">
            <button onClick={handleClickOpenModal} className="hover:bg-gray-300 px-1 cursor-pointer rounded">
                Recevoir une notification Discord
            </button>
        </div>

        {isModalOpen && <Modal onBackdropClick={handleClickCloseModal} onCloseButtonClick={handleClickCloseModal} />}
        </>
    )
}

DiscordNotification.propTypes = {};

export default DiscordNotification;
