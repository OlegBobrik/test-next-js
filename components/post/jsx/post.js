import Link from 'next/link';
import styles from '../scss/post.module.scss';

export const Post = ({
    id,
    avatar,
    createdAt,
    name
}) => {
    return (
        <article className={styles.post}>
            <img src={avatar} alt="" />
            <h2 className={styles.title}>{name}</h2>
            <p>{createdAt}</p>
            <Link href={'/post/[id]'} as={`/post/${id}`}>
                <a>Read more...</a>
            </Link>
        </article>
    );
};
