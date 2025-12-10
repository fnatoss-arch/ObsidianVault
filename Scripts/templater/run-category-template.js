module.exports = async (params) => {
  const app = params.app;
  const templater = app.plugins.getPlugin("templater-obsidian");
  if (!templater) return;

  // назва твого шаблону у Template folder
  const templateName = "Update category from folder.md";

  // знайти шаблон
  const templateFolder = templater.settings.template_folder;
  const templatePath = `${templateFolder}/${templateName}`;
  const tfile = app.vault.getAbstractFileByPath(templatePath);
  if (!tfile) return;

  // вставити шаблон у активний файл
  await templater.templater.overwrite_file_commands(tfile);
};
