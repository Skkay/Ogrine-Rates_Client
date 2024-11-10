import React from "react";
import githubLogo from '../../assets/github-mark.svg'

const SocialNetworks = () => {
    return (
        <div className="flex items-center gap-1 fixed bottom-0 left-0 m-1">
            <a href="https://github.com/Skkay/Ogrine-Rates_Client" className="flex text-sm hover:bg-gray-300 p-1 cursor-pointer rounded" target="_blank">
                <img className="m-auto w-5" src={githubLogo} alt="GitHub Logo" />
                <span className="ml-1">App</span>
            </a>
            <div className="w-px h-4 bg-gray-400 mx-1"></div>
            <a href="https://github.com/Skkay/Ogrine-Rates_Server" className="flex text-sm hover:bg-gray-300 p-1 cursor-pointer rounded" target="_blank">
                <img className="m-auto w-5" src={githubLogo} alt="GitHub Logo" />
                <span className="ml-1">API</span>
            </a>
        </div>
    )
}

SocialNetworks.propTypes = {};

export default SocialNetworks;
