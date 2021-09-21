import styles from "./styles.module.scss";

import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
    const router = useRouter();

    return (
        <>
            <div className={styles.Navbar}>
                <ul>
                    <li
                        className={
                            router.pathname === "/" ? styles.Active : null
                        }
                    >
                        <Link href="/">
                            <i className="bx bx-home-heart"></i>
                        </Link>
                    </li>
                    <li
                        className={
                            router.pathname === "/shop" ? styles.Active : null
                        }
                    >
                        <Link href="/shop">
                            <i className="bx bx-store-alt"></i>
                        </Link>
                    </li>
                    <li
                        className={
                            router.pathname === "/update" ? styles.Active : null
                        }
                    >
                        <Link href="/update">
                            <i className="bx bx-refresh"></i>
                        </Link>
                    </li>
                    <li
                        className={
                            router.pathname === "/staff" ? styles.Active : null
                        }
                    >
                        <Link href="/staff">
                            <i className="bx bx-user-voice"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
