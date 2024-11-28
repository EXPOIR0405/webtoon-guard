export default function sitemap() {
    const baseUrl = 'https://www.grimkeeper.co.kr'
    
    const routes = [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/legal`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/legalsupport`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ]
  
    return routes
  }