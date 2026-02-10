import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        // Allow date to be string or date object, transform to date
        date: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
        layout: z.string().optional(),
        comments: z.boolean().optional(),
        categories: z.string().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
};
