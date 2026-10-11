import fs from 'fs';
import path from 'path';

function checkSEO() {
  const htmlPath = path.resolve('index.html');
  const distHtmlPath = path.resolve('dist/index.html');
  const targetPath = fs.existsSync(distHtmlPath) ? distHtmlPath : htmlPath;

  console.log(`🔍 Checking SEO tags in: ${targetPath}`);

  if (!fs.existsSync(targetPath)) {
    console.error(`❌ Error: HTML file not found at ${targetPath}`);
    process.exit(1);
  }

  const html = fs.readFileSync(targetPath, 'utf8');
  const issues = [];
  const passes = [];

  // Check <html lang="...">
  const langMatch = html.match(/<html[^>]*lang=["']([^"']+)["']/i);
  if (langMatch) {
    passes.push(`HTML lang attribute present: "${langMatch[1]}"`);
  } else {
    issues.push('Missing <html lang="..."> attribute');
  }

  // Check <title>
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  if (titleMatch && titleMatch[1].trim()) {
    const title = titleMatch[1].trim();
    passes.push(`Title tag present: "${title}" (${title.length} chars)`);
  } else {
    issues.push('Missing or empty <title> tag');
  }

  // Check Meta Description
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  if (metaDescMatch && metaDescMatch[1].trim()) {
    const desc = metaDescMatch[1].trim();
    passes.push(`Meta description present: "${desc}" (${desc.length} chars)`);
  } else {
    issues.push('Missing <meta name="description" content="...">');
  }

  // Check Meta Viewport
  if (/<meta[^>]*name=["']viewport["']/i.test(html)) {
    passes.push('Viewport meta tag present');
  } else {
    issues.push('Missing <meta name="viewport"> tag');
  }

  // Check Canonical URL
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  if (canonicalMatch && canonicalMatch[1].trim()) {
    passes.push(`Canonical URL link present: "${canonicalMatch[1]}"`);
  } else {
    issues.push('Missing <link rel="canonical" href="..."> tag');
  }

  // Check OpenGraph Tags
  const ogTags = ['og:title', 'og:description', 'og:type', 'og:url', 'og:image', 'og:locale', 'og:site_name'];
  ogTags.forEach(tag => {
    const regex = new RegExp(`<meta[^>]*property=["']${tag}["'][^>]*content=["']([^"']+)["']`, 'i');
    if (regex.test(html)) {
      passes.push(`OpenGraph tag present: ${tag}`);
    } else {
      issues.push(`Missing OpenGraph tag: ${tag}`);
    }
  });

  // Check Twitter Cards
  const twitterTags = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];
  twitterTags.forEach(tag => {
    const regex = new RegExp(`<meta[^>]*name=["']${tag}["'][^>]*content=["']([^"']+)["']`, 'i');
    if (regex.test(html)) {
      passes.push(`Twitter Card tag present: ${tag}`);
    } else {
      issues.push(`Missing Twitter Card tag: ${tag}`);
    }
  });

  // Check JSON-LD
  const jsonLdMatch = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
  if (jsonLdMatch && jsonLdMatch[1].trim()) {
    try {
      JSON.parse(jsonLdMatch[1].trim());
      passes.push('Valid JSON-LD structured data script found');
    } catch (e) {
      issues.push(`Invalid JSON-LD syntax: ${e.message}`);
    }
  } else {
    issues.push('Missing <script type="application/ld+json"> structured data script');
  }

  // Check robots.txt and sitemap.xml
  const robotsPath = path.resolve('public/robots.txt');
  if (fs.existsSync(robotsPath)) {
    passes.push('public/robots.txt file exists');
  } else {
    issues.push('Missing public/robots.txt file');
  }

  const sitemapPath = path.resolve('public/sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    passes.push('public/sitemap.xml file exists');
  } else {
    issues.push('Missing public/sitemap.xml file');
  }

  console.log('\n--- SEO CHECK RESULTS ---');
  console.log(`✅ Passed checks (${passes.length}):`);
  passes.forEach(p => console.log(`  ✓ ${p}`));

  if (issues.length > 0) {
    console.log(`\n❌ Issues found (${issues.length}):`);
    issues.forEach(i => console.log(`  ✗ ${i}`));
    console.log('\nResult: FAILED');
    process.exit(1);
  } else {
    console.log('\n🎉 Result: ALL SEO CHECKS PASSED!');
  }
}

checkSEO();
