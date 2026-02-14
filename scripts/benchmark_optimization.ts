// scripts/benchmark_optimization.ts

interface ProfileFull {
  id: string;
  username: string;
  full_name: string;
  bio: string; // Simulated extra column
  avatar_url: string; // Simulated extra column
  settings: Record<string, unknown>; // Simulated extra column
  last_login: string; // Simulated extra column
  created_at: string; // Simulated extra column
}

interface ProfileOptimized {
  id: string;
  username: string;
  full_name: string;
}

const COUNT = 10000;

function generateFullProfiles(count: number): ProfileFull[] {
  const profiles: ProfileFull[] = [];
  for (let i = 0; i < count; i++) {
    profiles.push({
      id: crypto.randomUUID(),
      username: `user_${i}`,
      full_name: `User Name ${i}`,
      bio: `This is a simulated bio for user ${i} that contains a reasonable amount of text to represent a typical user profile description. `.repeat(5),
      avatar_url: `https://example.com/avatars/user_${i}.png`,
      settings: { theme: 'dark', notifications: true, preferences: { newsletter: false, marketing: true } },
      last_login: new Date().toISOString(),
      created_at: new Date().toISOString(),
    });
  }
  return profiles;
}

function generateOptimizedProfiles(profiles: ProfileFull[]): ProfileOptimized[] {
  return profiles.map(p => ({
    id: p.id,
    username: p.username,
    full_name: p.full_name,
  }));
}

console.log(`Generating ${COUNT} profiles...`);
const fullProfiles = generateFullProfiles(COUNT);
const optimizedProfiles = generateOptimizedProfiles(fullProfiles);

// Measure Full Selection (SELECT *)
const startFullStringify = performance.now();
const jsonFull = JSON.stringify(fullProfiles);
const endFullStringify = performance.now();
const sizeFull = new TextEncoder().encode(jsonFull).length;

const startFullParse = performance.now();
JSON.parse(jsonFull);
const endFullParse = performance.now();

// Measure Optimized Selection (SELECT id, username, full_name)
const startOptStringify = performance.now();
const jsonOpt = JSON.stringify(optimizedProfiles);
const endOptStringify = performance.now();
const sizeOpt = new TextEncoder().encode(jsonOpt).length;

const startOptParse = performance.now();
JSON.parse(jsonOpt);
const endOptParse = performance.now();

console.log('\n--- Benchmark Results (Simulated 10k Records) ---');
console.log('Scenario: Comparing "SELECT *" (with extra simulated columns) vs "SELECT id, username, full_name"');

console.log('\n[SELECT *]');
console.log(`Payload Size: ${(sizeFull / 1024 / 1024).toFixed(2)} MB`);
console.log(`Serialization Time: ${(endFullStringify - startFullStringify).toFixed(2)} ms`);
console.log(`Deserialization Time: ${(endFullParse - startFullParse).toFixed(2)} ms`);

console.log('\n[SELECT id, username, full_name]');
console.log(`Payload Size: ${(sizeOpt / 1024 / 1024).toFixed(2)} MB`);
console.log(`Serialization Time: ${(endOptStringify - startOptStringify).toFixed(2)} ms`);
console.log(`Deserialization Time: ${(endOptParse - startOptParse).toFixed(2)} ms`);

const sizeReduction = ((sizeFull - sizeOpt) / sizeFull) * 100;
console.log(`\nImpact: Payload size reduced by ${sizeReduction.toFixed(2)}%`);
