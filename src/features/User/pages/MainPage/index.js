import React from "react"

import { useTranslation, Trans } from "react-i18next"

function MainPage(props) {
  const { t } = useTranslation()

  return (
    <div className="user">
      <Trans i18nKey="description.part1">
        To get started, edit <code>src/App.js</code> and save to
      </Trans>
      <div>{t("description.part2")}</div>
    </div>
  )
}

export default MainPage
