import type { MetadataRoute } from 'next'
import { execFileSync } from 'node:child_process'

export const dynamic = 'force-static'

const base = 'https://imposter.zrilich.com';

// URL path -> source files whose last commit date is the page's lastModified.
const pages: Record<string, string[]> = {
    '': ['app/page.tsx', 'app/src/components/project_page.tsx'],
    '/privacy-policy': ['app/privacy-policy/page.tsx'],
    '/terms-of-service': ['app/terms-of-service/page.tsx'],
};

// Last commit date touching the page's source files; needs full git history (fetch-depth: 0 in CI)
function lastCommit(files: string[]): Date {
	const date = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...files], { encoding: 'utf8' }).trim()
	return date ? new Date(date) : new Date()
}

export default function sitemap(): MetadataRoute.Sitemap {
	return Object.entries(pages).map(([path, files]) => ({
		url: `${base}${path}`,
		lastModified: lastCommit(files),
	}))
}

