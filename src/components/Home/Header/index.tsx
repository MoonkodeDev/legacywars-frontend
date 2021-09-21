import styles from "./styles.module.scss";

import React from "react";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Header extends React.Component {
    state = {
        value: "",
        copied: false,
    };
    render() {
        return (
            <>
                <div className={styles.Header}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-9">
                                <div className={styles.Banner}>
                                    <h1>Bem-vindo!</h1>
                                    <p>
                                        Adquira um VIP para ajudar a manter o
                                        servidor online.
                                    </p>
                                    <Link href="/shop">
                                        <button>Acessar loja</button>
                                    </Link>
                                </div>
                                <div className={styles.Character}>
                                    <img src="https://cdn.moonkode.com/images/projects/LegacyWars/Header/character.png" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-3">
                                <div className={styles.IP}>
                                    <div className={styles.Title}>Nosso IP</div>
                                    <div className={styles.Body}>
                                        <p>DEMO.LEGACYWARS.NET</p>
                                        <div className={styles.Copy}>
                                            <CopyToClipboard
                                                text={"DEMO.LEGACYWARS.NET"}
                                                onCopy={() =>
                                                    this.setState({
                                                        copied: true,
                                                    })
                                                }
                                            >
                                                <button>
                                                    <i className="bx bx-copy-alt"></i>{" "}
                                                    {this.state.copied
                                                        ? "IP COPIADO!"
                                                        : "COPIAR IP"}
                                                </button>
                                            </CopyToClipboard>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
