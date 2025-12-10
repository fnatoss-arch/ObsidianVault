module.exports = async (params) => {
  const app = params.app;
  const templater = app.plugins.getPlugin("templater-obsidian");
  if (!templater) return;

  // назва шаблону в папці Templates
  const templateName = "Update category from folder.md";

  // знайти шаблон за шляхом з налаштувань Templater
  const templateFolder = templater.settings.template_folder;
  const templatePath = `${templateFolder}/${templateName}`;
  const tfile = app.vault.getAbstractFileByPath(templatePath);
  if (!tfile) return;

  // вставити вміст шаблону в активну нотатку
  await templater.templater.overwrite_file_commands(tfile);
};
