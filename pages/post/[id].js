import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostCard } from 'components/post-card/jsx/post-card';

export async function getStaticPaths() {
    const response = await fetch(
        'https://5f7186fc64a3720016e60820.mockapi.io/api/newsfeed/latestnews'
    );
    const postList = await response.json();

    return {
        paths: postList.map((post) => {
            return {
                params: {
                    id: `${post.id}`,
                },
            };
        }),

        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    // fetch single post detail
    const response = await fetch(
        `https://5f7186fc64a3720016e60820.mockapi.io/api/newsfeed/latestnews/${params.id}`
    );

    const post = await response.json();

    return {
        props: {
            ...post
        },
        revalidate: 1,
    };
}

export default function Post(props) {
    const router = useRouter();

    return (
        <main>
            <Head>
                <title>{props.name}</title>
            </Head>
            <PostCard {...props} />
        </main>
    );
}
