import type { Post } from "@prisma/client";
import { db } from "@/db";

export type PostWithData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};
// The fetchPostById function fetches a single post by its ID.
export function fetchPostsBySearchTerm(term: string): Promise<PostWithData[]> {
  return db.post.findMany({
    include: {
      topic: {
        select: {
          slug: true,
        },
      },
      user: {
        select: {
          name: true,
          image: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
    where: {
      OR: [{ title: { contains: term } }, { content: { contains: term } }],
    },
  });
}
// The fetchPostsByTopicSlug function fetches all posts for a given topic slug.
export function fetchPostsByTopicSlug(slug: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: {
      topic: { slug },
    },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: {
        select: { comments: true },
      },
    },
  });
}

// The fetchPostById function fetches a single post by its ID.
export function fetchTopPosts(): Promise<PostWithData[]> {
  return db.post.findMany({
    orderBy: [
      {
        comments: {
          _count: "desc",
        },
      },
    ],
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: {
        select: { comments: true },
      },
    },
    take: 5,
  });
}
