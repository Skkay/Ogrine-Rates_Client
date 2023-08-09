import { OGRINE_API_URL, fetchOptions } from './options';

const postDiscordWebhook = (url) => {
    const init = {
        ...fetchOptions,
        method: 'POST',
        body: JSON.stringify({
            url: url,
            messageLocale: 'fr',
        }),
    };

    return fetch(`${OGRINE_API_URL}/discord-notification`, init)
        .then((res) => res.json())
        .catch((err) => console.error(err))
    ;
}

export { postDiscordWebhook };
