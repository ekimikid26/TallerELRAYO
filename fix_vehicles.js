import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, 'src/app/data/vehicles.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Audit all imports
const importRegex = /import (\w+) from '(.*?)';/g;
let match;
const brokenVars = [];

while ((match = importRegex.exec(content)) !== null) {
  const varName = match[1];
  const importPath = match[2];
  
  if (importPath.startsWith('../../assets/')) {
    const fullPath = path.resolve(path.dirname(filePath), importPath);
    if (!fs.existsSync(fullPath)) {
      console.log(`MISSING: ${varName} -> ${importPath}`);
      brokenVars.push(varName);
    }
  }
}

// 2. Remove broken imports
brokenVars.forEach(v => {
  const lineRegex = new RegExp(`import ${v} from '.*?';\\n?`, 'g');
  content = content.replace(lineRegex, '');
});

// 3. Remove variables from arrays
brokenVars.forEach(v => {
  const arrayVarRegex = new RegExp(`\\b${v}\\b\\s*,?\\s*`, 'g');
  content = content.replace(arrayVarRegex, '');
});

// 4. Cleanup trailing commas and empty arrays
content = content.replace(/,\s*]/g, ']');
content = content.replace(/\[\s*,/g, '[');

fs.writeFileSync(filePath, content);
console.log(`Fixed ${brokenVars.length} broken imports.`);
