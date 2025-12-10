<%*
const file = tp.file.find_tfile(tp.file.path(true));
if (!file) return;

// 1. Назва батьківської теки
const folderPath = tp.file.folder(true);
const category = folderPath.split('/').pop();

// 2. Читаємо вміст файлу
const content = await app.vault.read(file);

// 3. Розбираємо YAML + тіло
const fmMatch = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/m.exec(content);

let yaml = "";
let body = content;

if (fmMatch) {
  yaml = fmMatch[1];
  body = fmMatch[2];
} else {
  yaml = "";
  body = content;
}

// 4. Оновлюємо / додаємо рядок category у YAML (рядковий маніпулятивний спосіб)
let lines = yaml.split("\n").filter(l => l.trim() !== "");

// прибираємо існуючий рядок category
lines = lines.filter(l => !l.trim().startsWith("category:"));

// додаємо новий category
lines.push(`category: ${category}`);

// збираємо YAML назад
const newYaml = lines.join("\n");
const newContent = `---\n${newYaml}\n---\n\n${body}`;

// 5. Записуємо файл
await app.vault.modify(file, newContent);
%>
