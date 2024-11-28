export default async function sitemap() {
  return [
    {
      url: 'https://www.grimkeeper.co.kr',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.grimkeeper.co.kr/legal',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.grimkeeper.co.kr/legalsupport',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}