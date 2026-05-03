export function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} menit baca`;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  }).format(date);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .trim();
}

export function getAllTags(posts: { data: { tags: string[] } }[]): Map<string, number> {
  const tagMap = new Map<string, number>();
  posts.forEach(post => {
    post.data.tags.forEach(tag => {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
    });
  });
  return new Map([...tagMap].sort((a, b) => b[1] - a[1]));
}
