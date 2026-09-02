import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
	const blog = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	)
	return rss({
		// `<title>` field in output xml
		title: 'A.I. Sloth Slayer',
		// `<description>` field in output xml
		description:
			'Deep dives into the latest trends in Automation, AI and Machine Learning.',
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#site
		site: context.site,
		customData: `<language>en-us</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			// Compute RSS link from post `id`
			// This example assumes all posts are rendered as `/[id]` routes
			link: `/${post.id}/`,
		})),
	})
}
