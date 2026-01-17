/**
 * DOM Structure Comparison Script
 * Compares HTML structure between two pages, ignoring text/values
 * Focuses on: tags, class names, attributes (not values)
 */

// This script can be run with: node scripts/compare-structures.js

const puppeteer = require('puppeteer');

const URL1 = 'https://amit034.github.io/digital-card/cards/yael-amor/';
const URL2 = 'http://localhost:5173/digital-card/cards/yael-amor';

// Extract DOM structure from a page
async function extractStructure(page) {
  return await page.evaluate(() => {
    function serializeNode(node, depth = 0) {
      if (node.nodeType !== 1) return null; // Only element nodes
      
      const tagName = node.tagName.toLowerCase();
      
      // Skip script and style tags
      if (['script', 'style', 'link', 'meta', 'noscript'].includes(tagName)) {
        return null;
      }
      
      // Get class names (sorted for consistent comparison)
      const classes = Array.from(node.classList).sort();
      
      // Get relevant attributes (excluding values that change)
      const attrs = {};
      for (const attr of node.attributes) {
        // Skip certain attributes
        if (['style', 'src', 'href', 'content', 'data-reactroot'].includes(attr.name)) continue;
        if (attr.name.startsWith('data-') && attr.name !== 'data-testid') continue;
        
        // For class, we handle separately
        if (attr.name === 'class') continue;
        
        // Store attribute name (not value, unless it's important)
        if (['type', 'role', 'aria-label', 'aria-expanded', 'aria-hidden', 'id', 'name'].includes(attr.name)) {
          attrs[attr.name] = attr.value;
        } else {
          attrs[attr.name] = true; // Just mark presence
        }
      }
      
      // Serialize children
      const children = [];
      for (const child of node.children) {
        const serialized = serializeNode(child, depth + 1);
        if (serialized) children.push(serialized);
      }
      
      return {
        tag: tagName,
        classes,
        attrs,
        children,
        depth
      };
    }
    
    return serializeNode(document.body);
  });
}

// Compare two structure trees and calculate match score
function compareStructures(struct1, struct2) {
  let totalNodes = 0;
  let matchedNodes = 0;
  let partialMatches = 0;
  
  const differences = [];
  
  function compare(node1, node2, path = 'body') {
    totalNodes++;
    
    if (!node1 && !node2) {
      matchedNodes++;
      return;
    }
    
    if (!node1 || !node2) {
      differences.push({
        path,
        type: 'missing',
        detail: node1 ? 'Missing in URL2' : 'Missing in URL1'
      });
      // Count missing subtree
      if (node1) countNodes(node1);
      if (node2) countNodes(node2);
      return;
    }
    
    let nodeMatch = 0;
    let nodeTotal = 3; // tag, classes, attrs
    
    // Compare tag
    if (node1.tag === node2.tag) {
      nodeMatch++;
    } else {
      differences.push({
        path,
        type: 'tag',
        url1: node1.tag,
        url2: node2.tag
      });
    }
    
    // Compare classes
    const classes1 = new Set(node1.classes);
    const classes2 = new Set(node2.classes);
    const classMatch = setIntersectionRatio(classes1, classes2);
    nodeMatch += classMatch;
    
    if (classMatch < 1 && (classes1.size > 0 || classes2.size > 0)) {
      differences.push({
        path,
        type: 'classes',
        url1: node1.classes,
        url2: node2.classes
      });
    }
    
    // Compare attributes
    const attrs1 = Object.keys(node1.attrs);
    const attrs2 = Object.keys(node2.attrs);
    const attrMatch = setIntersectionRatio(new Set(attrs1), new Set(attrs2));
    nodeMatch += attrMatch;
    
    if (attrMatch < 1 && (attrs1.length > 0 || attrs2.length > 0)) {
      differences.push({
        path,
        type: 'attrs',
        url1: node1.attrs,
        url2: node2.attrs
      });
    }
    
    // Calculate match for this node
    const nodeScore = nodeMatch / nodeTotal;
    if (nodeScore === 1) {
      matchedNodes++;
    } else if (nodeScore >= 0.5) {
      partialMatches++;
      matchedNodes += nodeScore;
    }
    
    // Compare children
    const maxChildren = Math.max(node1.children.length, node2.children.length);
    for (let i = 0; i < maxChildren; i++) {
      const child1 = node1.children[i];
      const child2 = node2.children[i];
      const childPath = `${path} > ${child1?.tag || child2?.tag}[${i}]`;
      compare(child1, child2, childPath);
    }
  }
  
  function countNodes(node) {
    if (!node) return 0;
    let count = 1;
    for (const child of node.children || []) {
      count += countNodes(child);
    }
    totalNodes += count - 1;
    return count;
  }
  
  function setIntersectionRatio(set1, set2) {
    if (set1.size === 0 && set2.size === 0) return 1;
    const union = new Set([...set1, ...set2]);
    const intersection = [...set1].filter(x => set2.has(x));
    return intersection.length / union.size;
  }
  
  compare(struct1, struct2);
  
  return {
    totalNodes,
    matchedNodes: Math.round(matchedNodes),
    partialMatches,
    score: (matchedNodes / totalNodes * 100).toFixed(2),
    differences: differences.slice(0, 50) // Limit to first 50 differences
  };
}

// Flatten structure for detailed analysis
function flattenStructure(node, path = '', result = []) {
  if (!node) return result;
  
  const currentPath = path ? `${path} > ${node.tag}` : node.tag;
  result.push({
    path: currentPath,
    tag: node.tag,
    classes: node.classes,
    attrs: Object.keys(node.attrs)
  });
  
  for (let i = 0; i < (node.children || []).length; i++) {
    flattenStructure(node.children[i], `${currentPath}[${i}]`, result);
  }
  
  return result;
}

async function main() {
  console.log('🔍 DOM Structure Comparison Tool\n');
  console.log('URL 1 (Production):', URL1);
  console.log('URL 2 (Local Dev):', URL2);
  console.log('\n' + '='.repeat(60) + '\n');
  
  const browser = await puppeteer.launch({ headless: true });
  
  try {
    // Load both pages
    const page1 = await browser.newPage();
    const page2 = await browser.newPage();
    
    console.log('Loading pages...');
    await Promise.all([
      page1.goto(URL1, { waitUntil: 'networkidle0' }),
      page2.goto(URL2, { waitUntil: 'networkidle0' })
    ]);
    
    console.log('Extracting DOM structures...');
    const [struct1, struct2] = await Promise.all([
      extractStructure(page1),
      extractStructure(page2)
    ]);
    
    console.log('Comparing structures...\n');
    const result = compareStructures(struct1, struct2);
    
    // Output results
    console.log('📊 STRUCTURE COMPARISON RESULTS');
    console.log('='.repeat(60));
    console.log(`Total nodes analyzed: ${result.totalNodes}`);
    console.log(`Matching nodes: ${result.matchedNodes}`);
    console.log(`Partial matches: ${result.partialMatches}`);
    console.log('\n' + '⭐'.repeat(20));
    console.log(`\n   MATCH SCORE: ${result.score}%\n`);
    console.log('⭐'.repeat(20) + '\n');
    
    if (result.differences.length > 0) {
      console.log(`\n📋 Differences found (showing first ${Math.min(result.differences.length, 50)}):\n`);
      for (const diff of result.differences) {
        console.log(`  Path: ${diff.path}`);
        console.log(`  Type: ${diff.type}`);
        if (diff.url1 !== undefined) {
          console.log(`  URL1: ${JSON.stringify(diff.url1)}`);
          console.log(`  URL2: ${JSON.stringify(diff.url2)}`);
        }
        if (diff.detail) console.log(`  Detail: ${diff.detail}`);
        console.log('');
      }
    } else {
      console.log('✅ No differences found! Structures are identical.');
    }
    
    // Node count breakdown
    const flat1 = flattenStructure(struct1);
    const flat2 = flattenStructure(struct2);
    
    console.log('\n📈 Structure Summary:');
    console.log(`  URL1 total elements: ${flat1.length}`);
    console.log(`  URL2 total elements: ${flat2.length}`);
    
    // Tag breakdown
    const tags1 = {};
    const tags2 = {};
    flat1.forEach(n => tags1[n.tag] = (tags1[n.tag] || 0) + 1);
    flat2.forEach(n => tags2[n.tag] = (tags2[n.tag] || 0) + 1);
    
    console.log('\n  Tag breakdown (URL1 / URL2):');
    const allTags = new Set([...Object.keys(tags1), ...Object.keys(tags2)]);
    for (const tag of [...allTags].sort()) {
      const count1 = tags1[tag] || 0;
      const count2 = tags2[tag] || 0;
      const match = count1 === count2 ? '✅' : '⚠️';
      console.log(`    ${match} <${tag}>: ${count1} / ${count2}`);
    }
    
  } finally {
    await browser.close();
  }
}

main().catch(console.error);
