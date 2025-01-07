import type { StrapiApp } from '@strapi/strapi/admin';
import React from 'react';
import logo from './extensions/logo.png';

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],

    auth: {
      logo
    },
    head: {
      favicon: logo,
    },
    menu: {
      logo
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Store Dashboard",
  
        "app.components.LeftMenu.navbrand.workplace": "Testing",
  
        "Auth.form.welcome.title": "Welcome to Mind Sparks",
  
        "Auth.form.welcome.subtitle": "Login to your account ✧˖°✧˖°",

        "app.components.HomePage.welcome.title": "Welcome to Mind Sparks Admin Dashboard 🚀",

        "app.components.HomePage.welcome.subtitle": "Hasta la vista baby ✧˖°✧˖°",

        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "Preference changes will apply only to you.",
      },
    },
    tutorials: false,
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },

};
