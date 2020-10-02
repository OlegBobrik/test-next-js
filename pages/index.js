import Head from 'next/head';
import { Post } from '../components/post';
import styles from '../styles/index-page.module.scss';

export async function getStaticProps() {
    // fetch list of posts
    const response = await fetch(
        'https://5f7186fc64a3720016e60820.mockapi.io/api/newsfeed/latestnews'
    );
    const postList = await response.json();
    return {
        props: {
            postList,
        },
        revalidate: 1,
    };
}

export default function IndexPage({ postList }) {
    return (
        <main>
            <Head>
                <title>Home page</title>
            </Head>

            <h1 className={styles.title}>List of posts</h1>

            <section className={styles.indexPage}>
                {postList.map((post) => (
                    <Post {...post} key={post.id} />
                ))}
            </section>
        </main>
    );
}
