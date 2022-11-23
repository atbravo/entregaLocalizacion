import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


import JobsList from "./components/jobsList";

let i18nConfig = {
    locale: 'en',
    messages: localeEsMessages
};

function onChangeLanguage(lang){
    switch (lang) {
        case 'es': i18nConfig.messages = localeEsMessages; break;
        case 'en': i18nConfig.messages = localeEnMessages; break;
        default: i18nConfig.messages = localeEsMessages; break;
    }
    i18nConfig.locale = lang;
}

onChangeLanguage(navigator.language)
ReactDOM.render(
    <IntlProvider locale={i18nConfig.locale} messages= {i18nConfig.messages}>
    <JobsList/>
</IntlProvider>, document.getElementById("root")
);