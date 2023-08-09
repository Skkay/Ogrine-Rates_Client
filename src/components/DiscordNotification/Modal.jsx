import React from "react";
import { PropTypes } from 'prop-types';
import { BsFillCheckCircleFill, BsFillExclamationCircleFill, BsXLg, BsQuestionCircleFill } from 'react-icons/bs';
import logo_discord from '../../assets/logo_discord_mark-only_white.svg';
import { postDiscordWebhook } from '../../fetch/postDiscordWebhook';

const DiscordModal = ({ onBackdropClick, onCloseButtonClick }) => {
    // Just an easter egg
    let discordSoundNotification = null;
    const handleDiscordLogoHover = () => {
        if (discordSoundNotification === null) {
            discordSoundNotification = new Audio('/discord_notification.mp3');
        }

        discordSoundNotification.play();
    }

    const [webhookUrl, setWebhookUrl] = React.useState('');
    const [isWebhookUrlInvalid, setIsWebhookUrlInvalid] = React.useState(null);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitResponse, setSubmitResponse] = React.useState(null);

    const validateWebhookUrl = (url) => {
        const regex = new RegExp('^https://discord.com/api/webhooks/[0-9]+/[a-zA-Z0-9_-]+$');
        const isValid = regex.test(url);

        setIsWebhookUrlInvalid(!isValid);

        return isValid;
    }

    const handleSubmit = () => {
        setIsSubmitting(true);
        postDiscordWebhook(webhookUrl)
            .then((data) => {
                setSubmitResponse(data);
                if (data.status > 299) {
                    console.error(data);
                }
            })
            .finally(() => setIsSubmitting(false))
        ;
    }

    const SubmitResponseDiv = () => {
        let icon;
        let text;
        let iconAdditionnalClasses;
        let divAdditionnalClasses;
        switch (submitResponse.status) {
            case 200:
                icon = <BsFillCheckCircleFill />;
                iconAdditionnalClasses = 'text-green-800';
                text = 'Webhook supprimé avec succès.';
                divAdditionnalClasses = 'bg-green-50 border-green-200';
                break;
            case 201:
                icon = <BsFillCheckCircleFill />;
                iconAdditionnalClasses = 'text-green-800';
                text = 'Webhook ajouté avec succès.';
                divAdditionnalClasses = 'bg-green-50 border-green-200';
                break;
            case 422:
                icon = <BsFillExclamationCircleFill />;
                iconAdditionnalClasses = 'text-red-800';
                text = 'Les données transmises sont invalides.';
                divAdditionnalClasses = 'bg-red-50 border-red-200';
                break;
            default:
                icon = <BsFillExclamationCircleFill />;
                iconAdditionnalClasses = 'text-red-800';
                text = 'Une erreur est survenue. Plus de détails peuvent être trouvés dans la console.';
                divAdditionnalClasses = 'bg-red-50 border-red-200';
                break;
        }

        return (
            <div className={`relative p-2 border rounded-md mt-5 ${divAdditionnalClasses}`}>
                <span className={`absolute -top-2 -left-2 ${iconAdditionnalClasses}`}>{icon}</span>
                {text}
            </div>
        );
    }

    return (
        <>
        <div onClick={onBackdropClick} className="fixed inset-0 bg-black/20"></div>

        <div className="fixed inset-0 w-[500px] h-[550px] m-auto bg-white shadow-lg rounded-lg border">
            <header className="flex px-3 py-4 border-b">
                <h1 className="flex text-2xl">
                    <img onMouseEnter={handleDiscordLogoHover} className="w-11 mr-3 bg-blurple-400 p-2 rounded-lg" src={logo_discord} alt="Logo Discord" />
                    Notification Discord
                </h1>
                <button onClick={onCloseButtonClick} className="ml-auto p-2 hover:bg-gray-200 text-gray-500 rounded-lg">
                    <BsXLg />
                </button>
            </header>
            <main className="p-3">
                <div className="relative p-2 border rounded-md">
                    <span className="absolute -top-2 -right-2 text-2xl text-blurple-400 rotate-[10deg]"><BsQuestionCircleFill /></span>
                    <p>
                        Permet de recevoir le taux de l'Ogrine
                        sur un salon Discord via un webhook. Le
                        message sera envoyé toutes les nuits
                        vers 2h30.
                    </p>
                </div>
                <div className="relative p-2 mt-3 border rounded-md">
                    <p>
                        Pour commencer, renseignez l'URL du webhook
                        ci-dessous et validez.
                    </p>
                    <p className="mt-1">
                        À l'avenir, pour arrêter de recevoir la notification,
                        reseignez à nouveau l'URL du webhook et validez.
                    </p>
                </div>

                <div className="relative mt-8 p-3 border">
                    <span className="absolute -top-3.5 inset-x-0 w-fit mx-auto bg-white px-2 font-semibold">Ajouter ou supprimer</span>
                    <input
                        className={`p-2 rounded-md w-full border border-gray-300 bg-gray-50 text-gray-900
                            focus:outline-none focus:ring-1
                            ${!isWebhookUrlInvalid
                                ? 'focus:border-blurple-400 focus:ring-blurple-400'
                                : 'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500'
                            }
                        `}
                        placeholder="URL du webhook"
                        value={webhookUrl}
                        onChange={(e) => { setWebhookUrl(e.target.value); validateWebhookUrl(e.target.value); }}
                    />
                    <span className={`text-red-600 text-sm ${!isWebhookUrlInvalid && 'hidden'}`}>L'URL semble être invalide.</span>
                    <button
                        className="block px-2 py-1 mt-3 mx-auto bg-blurple-400 text-white rounded
                            hover:bg-blurple-600 hover:cursor-pointer
                            disabled:bg-blurple-300 disabled:cursor-default"
                        disabled={(isWebhookUrlInvalid ?? true) || isSubmitting}
                        onClick={handleSubmit}
                    >
                        Valider
                    </button>
                </div>

                {submitResponse !== null && <SubmitResponseDiv />}
            </main>
        </div>
        </>
    )
}

DiscordModal.propTypes = {
    onBackdropClick: PropTypes.func.isRequired,
    onCloseButtonClick: PropTypes.func.isRequired,
};

export default DiscordModal;
