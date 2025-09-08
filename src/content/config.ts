import { defineCollection, z } from 'astro:content';

const musicCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  music: musicCollection,
};
