import Link from 'next/link';
import styles from '../scss/post-card.module.scss';

export const PostCard = ({ name, createdAt }) => {
    return (
        <>
            <h1 className={styles.title}>{name}</h1>

            <p>{name}</p>
            <button type="button" onClick={() => console.log(createdAt)}>button</button>
            <br />

            <Link href="/">
                <a>Go back to home</a>
            </Link>
        </>
    );
};
