import styles from "./styles.module.scss";

import Link from "next/link";

export default function Posts() {
    return (
        <>
            <div className={styles.Posts}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-9">
                            <div className={styles.Post}>
                                <div className={styles.Header}>
                                    <h2>ESTAMOS DE CARA NOVA!</h2>
                                    <p>
                                        Confira as novidades de nosso novo site.
                                    </p>
                                    <div className={styles.Author}>
                                        <div className={styles.Content}>
                                            <img src="https://minotar.net/helm/MrDrawn/52.png" />
                                            <p>MrDrawn</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className={styles.Body}>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Labore voluptatibus
                                        repudiandae nihil aperiam repellat
                                        voluptas, architecto itaque, veritatis
                                        fugiat minus, magnam error vero ipsum
                                        incidunt. Saepe perspiciatis nisi quae
                                        optio. Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit.
                                        Consectetur, dicta excepturi nam quam
                                        dolores iure, quas rem quibusdam
                                        cupiditate ipsum eius facilis? Magnam
                                        provident modi dolorum suscipit, ducimus
                                        laudantium recusandae! Lorem ipsum dolor
                                        sit, amet consectetur adipisicing elit.
                                        Adipisci doloribus quibusdam illo
                                        laudantium veniam aspernatur explicabo
                                        perferendis eveniet aliquam possimus,
                                        rerum fuga, porro iure soluta
                                        consectetur praesentium vitae similique
                                        in. Lorem ipsum dolor sit amet
                                        consectetur, adipisicing elit. Incidunt
                                        nobis rem, accusamus laudantium
                                        inventore tempora alias in, dolorem
                                        deserunt molestiae dolorum soluta
                                        reiciendis? Nulla id, labore modi
                                        aliquam placeat sapiente.
                                        <br />
                                        <br />
                                        Atenciosamente,
                                        <br />
                                        MrDrawn.
                                    </p>
                                </div>
                                <div className={styles.Button}>
                                    <button>Abrir postagem</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className={styles.Last}>
                                <div className={styles.Title}>
                                    Últimas postagens
                                </div>
                                <div className={styles.Body}>
                                    <ul>
                                        <Link href="/post/1">
                                            <li>
                                                <div className={styles.Author}>
                                                    <img src="https://minotar.net/helm/MrDrawn/41.png" />
                                                </div>
                                                <div className={styles.Title}>
                                                    <h6>
                                                        Estamos de cara nova
                                                    </h6>
                                                    <p>
                                                        Publicado por:{" "}
                                                        <span
                                                            className={
                                                                styles.Name
                                                            }
                                                        >
                                                            MrDrawn
                                                        </span>
                                                    </p>
                                                </div>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
