import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import classNames from "classnames"

function SwitchLang() {
  const [activeBtn, setActiveBtn] = useState("en")
  const { i18n } = useTranslation()

  const changeLanguage = language => {
    i18n.changeLanguage(language)
    setActiveBtn(language)
  }
  return (
    <div className="button-group">
      <button
        className={classNames("button", {
          "button-active": activeBtn === "vi"
        })}
        onClick={() => changeLanguage("vi")}
      >
        VI
      </button>
      <button
        className={classNames("button", {
          "button-active": activeBtn === "en"
        })}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  )
}

export default SwitchLang
