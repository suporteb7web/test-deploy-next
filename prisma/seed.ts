import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const post1 = await prisma.post.upsert({
        where: { id: 1 },
        update: {},
        create: {
            title: 'Post 1',
            content: 'Este é o conteúdo do post 1'
        }
    });
    const post2 = await prisma.post.upsert({
        where: { id: 2 },
        update: {},
        create: {
            title: 'Post 2',
            content: 'Este é o conteúdo do post 2'
        }
    });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })