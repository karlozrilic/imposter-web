import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://imposter.zrilich.com';

export default function sitemap(): MetadataRoute.Sitemap {
    return ['', '/privacy-policy', '/terms-of-service'].map((path) => ({ url: `${BASE_URL}${path}` }));
}
