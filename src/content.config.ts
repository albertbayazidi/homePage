import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/Projects" }),
  
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), 
    svg: z.string(),
    coolFactor: z.number(),
  })
});

export const collections = { 
  Projects: projects 
};
