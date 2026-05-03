import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts', p => !p.data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title:       'Wildan — Blog',
    description: 'Tulisan tentang teknologi, produktivitas, dan kehidupan.',
    site:        context.site,
    items:       posts.map(post => ({
      title:       post.data.title,
      pubDate:     post.data.date,
      description: post.data.description,
      link:        `/posts/${post.slug}/`,
      categories:  post.data.tags,
    })),
    customData: '<language>id</language>',
  });
}
