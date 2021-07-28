import React from "react"
import { useTranslation } from "react-i18next"

function Footer(props) {
  const { t } = useTranslation()
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="title"> {t("aboutBHD")}</div>
            <hr style={{ width: "60px" }} />
            <div className="d-flex flex-column">
              <a
                target="_blank"
                href="http://localhost:3000/user"
                rel="noreferrer"
              >
                {t("theaters")}
              </a>
            </div>
            <div className="d-flex flex-column">
              <a
                target="_blank"
                href="http://localhost:3000/user"
                rel="noreferrer"
              >
                {t("recruitment")}
              </a>
            </div>
            <div className="d-flex flex-column">
              <a
                target="_blank"
                href="http://localhost:3000/user"
                rel="noreferrer"
              >
                {t("recruitment")}
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="title">{t("regulationAndRule")}</div>
            <hr style={{ width: "60px" }} />
            <div className="d-flex flex-column">
              <a
                target="_blank"
                href="http://localhost:3000/user"
                rel="noreferrer"
              >
                {t("regulation")}
              </a>
              <a
                target="_blank"
                href="http://localhost:3000/user"
                rel="noreferrer"
              >
                {t("rules")}
              </a>
              <a
                target="_blank"
                href="http://localhost:3000/user"
                rel="noreferrer"
              >
                {t("tutorial")}
              </a>
              <a
                target="_blank"
                href="http://localhost:3000/user"
                rel="noreferrer"
              >
                {t("policy")}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copy mt-5 d-flex align-items-center flex-column">
          <hr style={{ width: "70%" }} />
          <span>Copy right BHD Cinema</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
