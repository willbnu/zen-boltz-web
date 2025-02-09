export const detectLanguage = () => {
      if (typeof window === 'undefined') {
        return 'en'; // Default to English on server-side
      }

      const userLanguage = navigator.language || navigator.userLanguage;
      const shortLang = userLanguage.slice(0, 2);

      return ['en', 'es', 'jp'].includes(shortLang) ? shortLang : 'en';
    };

    export const translate = (lang, key) => {
        const translations = {
            en: {
                heroTitle: "Switch between numbers and words like a pro.",
                appStore: "Download on the App Store",
                googlePlay: "Get it on Google Play"
            },
            es: {
                heroTitle: "Cambia entre números y palabras como un profesional.",
                appStore: "Descargar en la App Store",
                googlePlay: "Consíguelo en Google Play"
            },
            jp: {
                heroTitle: "数字と言葉をプロのように切り替えます。",
                appStore: "App Storeでダウンロード",
                googlePlay: "Google Playで入手"
            }
        }

        return translations[lang][key] || translations['en'][key]; // Fallback to English
    }
