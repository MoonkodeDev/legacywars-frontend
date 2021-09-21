import styles from "./styles.module.scss";

import Link from "next/link";

export default function User() {
    return (
        <>
            <div className="container">
                <div className={styles.User}>
                    <div className={styles.Avatar}>
                        <img src="https://minotar.net/helm/MrDrawn/41.png" />
                    </div>
                    <div className={styles.Name}>
                        <button>Entrar</button>
                    </div>
                    <div className={styles.Cart}>
                        <Link href="/cart">
                            <i className="bx bx-cart-alt"></i>
                        </Link>
                    </div>
                    <div className={styles.Count}>0</div>
                </div>
            </div>
        </>
    );
}
