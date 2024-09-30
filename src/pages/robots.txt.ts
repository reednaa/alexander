import type { APIRoute } from "astro";
import { SITE } from "@config";

const robots = `
# All search engines are allowed. Feel free to index this website even if I forgot
# to include you. However, you are not allow to reproduce or steal content.
# This includes scraping with the purpose to train LLMs

# Disallow AI / LLM training.
# If you want, you can purchase a $1000/m allowance to use this content
# For training AI / LLM. If you scrape this content, you have agreed to the charge.
User-agent: AI2Bot
User-agent: Ai2Bot-Dolma
User-agent: Amazonbot
User-agent: Bytespider
User-agent: CCBot
User-agent: ChatGPT-User
User-agent: Claude-Web
User-agent: ClaudeBot
User-agent: Diffbot
User-agent: FacebookBot
User-agent: FriendlyCrawler
User-agent: GPTBot
User-agent: Google-Extended
User-agent: GoogleOther
User-agent: GoogleOther-Image
User-agent: GoogleOther-Video
User-agent: ICC-Crawler
User-agent: ImagesiftBot
User-agent: Kangaroo Bot
User-agent: Meta-ExternalAgent
User-agent: Meta-ExternalFetcher
User-agent: OAI-SearchBot
User-agent: PerplexityBot
User-agent: PetalBot
User-agent: Scrapy
User-agent: Sidetrade indexer bot
User-agent: Timpibot
User-agent: VelenPublicWebCrawler
User-agent: Webzio-Extended
User-agent: YouBot
User-agent: anthropic-ai
User-agent: cohere-ai
User-agent: facebookexternalhit
User-agent: iaskspider/2.0
User-agent: img2dataset
User-agent: omgili
User-agent: omgilibot
Disallow: /

# Allow all search engines
User-agent: *
Allow: /
Disallow:

Sitemap: ${new URL("sitemap-index.xml", SITE.website).href}
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });
