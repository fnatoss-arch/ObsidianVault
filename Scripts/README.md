# Скрипти для Templater

Тут зберігаються користувацькі скрипти для плагіна **Templater** та інструкції з їх використання.

## Використання

- Розмістіть скрипти в `Scripts/templater/` (вже зроблено).
- У командній палітрі Obsidian скрипти Templater з'являться через `Templater: Run user script -> <назва скрипта>`.

## Запуск скрипта `run-category-template.js`

1. Відкрийте командну палітру (Cmd/Ctrl+P).
2. Наберіть `Templater: Run user script` і виберіть `run-category-template.js`.
3. Скрипт знайде шаблон `Templates/Update category from folder.md` (використовує налаштування `template_folder` у Templater) і вставить його в активну нотатку.

## Опціонально: реєстрація іменованої команди

Якщо хочете мати зручну постійну команду в командній палітрі (щоб призначити гарячу клавішу), зареєструйте її один раз:

1. Запустіть `Templater: Run user script` → `register-run-category-command.js`.
2. Це додасть тимчасову (для сесії) команду з назвою `Run category template (Templater script)`.
3. Потім відкрийте `Settings → Hotkeys`, знайдіть `Run category template (Templater script)` і призначте клавішу.

## Примітки

- Переконайтесь, що плагін Templater встановлений і ввімкнено `Trigger Templater on file creation`, якщо ви покладаєтесь на тригери при створенні файлів.
- Зареєстрована команда діє лише в поточній сесії Obsidian; після перезапуску її потрібно реєструвати знову або додати реєстрацію до вашого стартового процесу.
