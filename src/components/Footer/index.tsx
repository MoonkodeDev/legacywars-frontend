import styles from "./styles.module.scss";

export default function Footer() {
    return (
        <>
            <div className="container">
                <div className={styles.Footer}>
                    <p>
                        Developed by{" "}
                        <a href="https://moonkode.com">Moonkode.</a>
                    </p>
                </div>
            </div>
        </>
    );
}
