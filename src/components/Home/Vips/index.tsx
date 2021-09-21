import styles from "./styles.module.scss";

export default function Vips() {
    return (
        <>
            <div className={styles.Vips}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-9">
                            <div className="row">
                                <div className="col-sm-12 col-md-3">
                                    <div className={styles.Vip}>
                                        <div className={styles.Name}>
                                            Andromeda
                                        </div>
                                        <div className={styles.Body}>
                                            <img src="https://cdn.moonkode.com/images/projects/LegacyWars/Packages/Andromeda.png" />
                                            <p>R$10,00</p>
                                        </div>
                                        <div className={styles.Buy}>
                                            <button>Comprar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <div className={styles.Vip}>
                                        <div className={styles.Name}>
                                            Kraken
                                        </div>
                                        <div className={styles.Body}>
                                            <img src="https://cdn.moonkode.com/images/projects/LegacyWars/Packages/Kraken.png" />
                                            <p>R$20,00</p>
                                        </div>
                                        <div className={styles.Buy}>
                                            <button>Comprar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <div className={styles.Vip}>
                                        <div className={styles.Name}>
                                            Phantom
                                        </div>
                                        <div className={styles.Body}>
                                            <img src="https://cdn.moonkode.com/images/projects/LegacyWars/Packages/Phantom.png" />
                                            <p>R$30,00</p>
                                        </div>
                                        <div className={styles.Buy}>
                                            <button>Comprar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <div className={styles.Vip}>
                                        <div className={styles.Name}>
                                            Phoenix
                                        </div>
                                        <div className={styles.Body}>
                                            <img src="https://cdn.moonkode.com/images/projects/LegacyWars/Packages/Phoenix.png" />
                                            <p>R$50,00</p>
                                        </div>
                                        <div className={styles.Buy}>
                                            <button>Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
