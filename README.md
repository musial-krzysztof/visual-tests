<h1 align="center">Todo React App  📝</h1>  
<p align="center">
  🖊️ A simple Todo App built using <a href="https://reactjs.org/">React</a> and <a href="https://mantine.dev/">Mantine UI</a>
</p>

## This is a super simple Todo App built using React.js and styled using Mantine UI.

You can view a live demo of the project here: https://javascriptbear.github.io/todo_react_app/
Or, you can watch this video demo

### **(Most likely outdated, its reccomeneded you check out the live demo!)**

https://user-images.githubusercontent.com/109053279/178185429-8de77574-cc2f-429f-8c4e-b1ed9f290894.mp4

## 😃 Features:

- ➕ Add todos
- 🗑️ Delete todos
- ⏸ Save todos to Local Storage when the state changes
- ▶️ Load the todos from Local Storage when the site is loaded again
- 🌙 Light \ dark mode toggle

<p align="center">
  ❤️ Feel free to create issues and contributions for features or bugs to this project.
</p>

## 😃 Pierwszy krok po sklonowaniu repozytorium na lokalny dysk

- otwórz konsolę w głównej lokalizacji lokalnego repozytorium (folder VISUAL-TESTS-PRECY") i wpisz poniższą komendę, aby zainstalować wszystkie paczki z folderu package.json :

```bash
npm install
```
## 😃 Drugi krok po sklonowaniu repozytorium na lokalny dysk

- Wejdź na https://www.browserstack.com/users/sign_up?ref=percy, stwórz konto i swój pierwszy projekt w usłudze Percy

- na dole strony znajdziesz swój unikalny token, skopiuj go i użyj poniższej komendy w konsoli, aby zdefniować token jako zmienną środowiskową w Twoim lokalnym repozytorium (przykład dla konsoli PowerShell)

```bash
$env:PERCY_TOKEN = "wklej twój skopiowany token tutaj"
```
- wpisz komendę poniższą komendę i upewnij się, że na liście zmiennych środowiskowych znajduje się zmienna PERCY_TOKEN:

```bash
dir env:
```

## Uruchomienie aplikacji na lokalnym serwerze

- wpisz w konsoli poniższą komendę:

```bash
npm run start
```
- po jej wykonaniu, otworzy się karta przeglądarki pod adreses http://localhost:3001/todo_react_app z Twoją aplikacją

## Uruchomienie testów

- wpisz w konsoli poniższą komendę:
```bash
npm run percy-test
```