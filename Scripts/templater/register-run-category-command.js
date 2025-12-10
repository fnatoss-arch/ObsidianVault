module.exports = async (params) => {
  const app = params.app;
  const templater = app.plugins.getPlugin("templater-obsidian");
  if (!templater) return;

  const commandId = 'templater-run-category-template';
  const commandName = 'Run category template (Templater script)';

  // зареєструвати команду для поточної сесії Obsidian
  try {
    app.commands.addCommand({
      id: commandId,
      name: commandName,
      callback: async () => {
        const templateName = "Update category from folder.md";
        const templateFolder = templater.settings.template_folder;
        const templatePath = `${templateFolder}/${templateName}`;
        const tfile = app.vault.getAbstractFileByPath(templatePath);
        if (!tfile) return;
        await templater.templater.overwrite_file_commands(tfile);
      }
    });
  } catch (e) {
    // якщо команда вже існує або API недоступний — ігнорувати помилку
  }
};
