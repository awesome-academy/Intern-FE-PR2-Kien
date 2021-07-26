import React from "react"

import { useTranslation, Trans } from "react-i18next"

function MainPage(props) {
  const { t, i18n } = useTranslation()

  const changeLanguage = language => {
    i18n.changeLanguage(language)
  }
  return (
    <div className="user">
      <button onClick={() => changeLanguage("vi")}>VI</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <Trans i18nKey="description.part1">
        To get started, edit <code>src/App.js</code> and save to
      </Trans>
      <div>{t("description.part2")}</div>
    </div>
  )
}

export default MainPage
