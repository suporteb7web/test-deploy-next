import { prisma } from '@/lib/prisma';
import { PostsEmpty } from '@/components/posts-empty';
import { PostsList } from '@/components/posts-list';

const Page = async () => {
    const allPosts = await prisma.post.findMany();

    return (
        <div className="mx-auto max-w-lg">
            <h1 className="text-xl mb-4">Lista de posts v1.1</h1>

            {allPosts.length === 0 && <PostsEmpty />}
            {allPosts.length > 0 && <PostsList posts={allPosts} />}
        </div>
    );
}

export default Page;