import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, 'src/components');

function addStylesImport(filePath) {
  const fileName = path.basename(filePath);
  const fileNameWithoutExt = fileName.replace('.jsx', '');
  const moduleFileName = `${fileNameWithoutExt}.module.css`;
  const componentDir = path.dirname(filePath);
  const modulePath = path.join(componentDir, moduleFileName);

  // Verifica se o arquivo CSS module existe
  if (!fs.existsSync(modulePath)) {
    console.log(`❌ CSS module não encontrado: ${modulePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Verifica se o import já existe
  if (content.includes(`import styles from './`)) {
    console.log(`✅ Já tem import: ${fileName}`);
    return true;
  }

  // Adiciona o import no início do arquivo
  const importStatement = `import styles from './${moduleFileName}'\n\n`;
  content = importStatement + content;

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ Import adicionado: ${fileName}`);
  return true;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.jsx')) {
      addStylesImport(filePath);
    }
  });
}

console.log('🔄 Adicionando imports de CSS modules...\n');
walkDir(componentsDir);
console.log('\n✨ Concluído!');
