import React from "react"
import { Link } from "gatsby"
import Styles from "./management.module.scss"
import KaziRahat from "../images/kazisahab.png"
import ZiaKhan from "../images/ZiaKhan.jpg"
import YousufLakhani from "../images/YousufLakhani.jpeg"
import SulaimanMehdi from "../images/SulaimanMehdi.jpeg"
import FBLogo from "../images/fb-logo.png"
import LinkDin from "../images/linkedin-icon.png"
import SaylaniLogo from "../images/saylaniLogo..png"
import Psx from "../images/psx.png"
import Panacloud from "../images/panacloudLogo.svg"
import AppBar from '../components/navbar'
import Footer from '../components/footer'

const Management = () => (
  <div>
      <AppBar />
    <h1 style={{ textAlign: "center", marginTop: "60px" }}>
      Management Committee
    </h1>
    <div className={Styles.main}>
      <div className={Styles.cards}>
        <div className={Styles.card}>
          <img
            src={KaziRahat}
            style={{
              width: 100,
              marginTop: 20,
              border: "2px solid #017969",
              borderRadius: 50,
              padding: 2,
            }}
          />
          <h2 style={{ fontSize: 17, fontWeight: 600 }}>Kazi Rahat Ali</h2>
          <p style={{ fontSize: 10, lineHeight: 0, fontFamily: "sans-serif" }}>
            General Secretary PIAIC
          </p>
        </div>
        <div className={Styles.card}>
          <img
            src={ZiaKhan}
            style={{
              width: 100,
              marginTop: 20,
              border: "2px solid #017969",
              borderRadius: 100,
              padding: 2,
            }}
          />
          <h2 style={{ fontSize: 17, fontWeight: 600 }}>Zia Ullah Khan</h2>
          <p style={{ fontSize: 10, lineHeight: 0 }}>
            CEO - Panacloud Pvt. Ltd.
          </p>
          <img src={FBLogo} width="20px" />
          <img src={LinkDin} width="20px" />
          <img src={FBLogo} width="20px" />
        </div>
        <div className={Styles.card}>
          <img
            src={YousufLakhani}
            style={{
              width: 100,
              marginTop: 20,
              border: "2px solid #017969",
              borderRadius: 50,
              padding: 2,
            }}
          />
          <h2 style={{ fontSize: 17, fontWeight: 600 }}>Yousuf Lakhani</h2>
          <p style={{ fontSize: 10 }}>President - Saylani Welfare Trust</p>
          <img src={FBLogo} width="20px" />
        </div>
        <div className={Styles.card}>
          <img
            src={SulaimanMehdi}
            style={{
              width: 100,
              marginTop: 20,
              border: "2px solid #017969",
              borderRadius: 50,
              padding: 2,
            }}
          />
          <h2 style={{ fontSize: 17, fontWeight: 600 }}>Sulaiman Mehdi</h2>
          <p style={{ fontSize: 10 }}>
            Chairman of The Board - Pakistan Stock Exchange
          </p>
          <img src={LinkDin} width="20px" />
        </div>
      </div>
    </div>
    <h1 style={{ textAlign: "center", marginTop: "60px" }}>
      STRATEGIC PARTNERS
    </h1>
    <div className={Styles.main}>
      <div style={{ marginTop: 20 }}>
        <img src={Panacloud} width="120px" />
        <img src={Psx} width="50px" />
        <img src={SaylaniLogo} width="150px" />
      </div>
    </div>
    <br /><br />
    <Footer />
  </div>
)
export default Management
