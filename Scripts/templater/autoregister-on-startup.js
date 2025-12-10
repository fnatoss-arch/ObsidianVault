module.exports = async (params) => {
  // Цей скрипт просто викликає реєстратор команд для поточної сесії.
  // Помістіть його у список User Scripts Templater або запустіть вручну при старті.
  try {
    const register = require("./register-run-category-command.js");
    if (typeof register === 'function') {
      await register(params);
    }
  } catch (e) {
    // Якщо не вдається імпортувати, пробуємо запустити локально
    try {
      // динамічний виклик: відпрацює, якщо файл доступний у тому ж каталозі
      const mod = await import("./register-run-category-command.js");
      if (mod && typeof mod.default === 'function') await mod.default(params);
    } catch (err) {
      // кінцево — мовчимо, щоб не заважати старту
    }
  }
};
