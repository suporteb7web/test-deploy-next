import { Post } from "@prisma/client";

type Props = {
    posts: Post[];
}
export const PostsList = ({ posts }: Props) => {
    return (
        <ul>
            {posts.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}