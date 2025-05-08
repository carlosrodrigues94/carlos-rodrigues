import { FC } from "react";
import { Trans } from "react-i18next";
import { useINTL } from "../hooks/useINTL";

export const SectionChallenges: FC = () => {
  const { currentLanguage, translate } = useINTL();
  return (
    <section className="w-7xl max-w-full m-20 ml-auto mr-auto border-0 p-2 rounded-sm text">
      <h2 className="ml-auto mr-auto text-2xl mb-8">
        {translate("CHALLENGES")}
      </h2>

      <p>
        <Trans
          i18nKey={"CHALLENGE_WISER"}
          lang={currentLanguage}
          components={{ b: <b /> }}
        />
        <a href="https://wisereducacao.com/"> Wiser</a>.
      </p>

      <p className="mt-10">
        <Trans
          i18nKey={"CHALLENGE_DEBEX"}
          lang={currentLanguage}
          components={{ b: <b /> }}
        />
        <a href={"https://www.bumstores.com/"}> Bum Store</a>.
      </p>

      <p className="mt-10">
        <Trans
          i18nKey={"CHALLENGE_ROCKET_CHAT"}
          lang={currentLanguage}
          components={{ b: <b /> }}
        />
        <a href="https://www.rocket.chat/"> Rocket.Chat</a>.
      </p>

      <p className="mt-10">
        <Trans
          i18nKey={"CHALLENGE_SYSMAP"}
          lang={currentLanguage}
          components={{ b: <b /> }}
        />
        <a href="https://www.natura.com.br/"> Natura &CO</a>.
      </p>
    </section>
  );
};
