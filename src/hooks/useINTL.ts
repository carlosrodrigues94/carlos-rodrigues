import { useTranslation } from "react-i18next";

export enum Languages {
  PT_BR = "pt_BR",
  EN_US = "en",
}

export const useINTL = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language: Languages) => {
    i18n.changeLanguage(language);
  };

  return { handleChangeLanguage, translate: t, currentLanguage: i18n.language };
};
