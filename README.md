# Luminara.ai

**Luminara.ai** is an AI-powered chat assistant built for Adobe Express. It helps users brainstorm ideas, generate content, and stay creative — all from within the Express editor.

---

## ✨ Overview

Luminara.ai is an AI-powered chat assistant integrated directly into Adobe Express. Whether you're designing a social post, flyer, or presentation, Luminara helps you brainstorm ideas, write content, and overcome creative blocks through natural conversation.

---

## 🚀 Features

* 💬 Chat-based AI assistant inside Adobe Express
* ⚡ Powered by Google Gemini 1.5 Flash for fast, high-quality responses
* ✍️ Suggests taglines, content, captions, and layout ideas
* 🧠 Assists with brainstorming and ideation
* 🖼️ Lightweight UI that doesn't interfere with your canvas
* ✅ Built using Adobe Express Add-ons API

---

## 🌟 Inspiration

Designers often hit creative walls. We asked:

> "What if you could talk to an AI while designing — without switching tabs or tools?"

That led to **Luminara.ai** — your creative co-pilot that keeps your flow going.

---
## How to run it:
1. Clone the repository
```bash
git clone https://github.com/Chaitanya-Kk/Luminara.ai-addon
```
2. Edit these fields from mentioned positions - get api key from https://aistudio.google.com/apikey and change it in index.js at line 1 
3. Run these commands in VSCode Terminal
```bash
npm install
npm run build
npm run start
```
---

## 🛠️ How It Works

1. Open Adobe Express and load the add-on.
2. Access **Luminara.ai** in the sidebar panel.
3. Start chatting! Ask for layout tips, content help, or ideas.
4. Copy-paste responses into your project if helpful.

---

## 🏗️ How It's Built

### 1. Project Setup

Scaffolded the project using Adobe's official add-on template:

```bash
npx @adobe/create-ccweb-add-on design-chat-addon --entrypoint panel --template javascript
```

This command created a basic Adobe Express add-on structure with a `panel` entry point and JavaScript template. It included:

* `index.html`
* `index.js`
* `styles.css`
* `manifest.json` in the `/dist` folder

### 2. Customizations & Development

* **UI Development**: Modified `index.html` and `styles.css` to design a lightweight, sidebar-based chat interface.
* **Logic Implementation**: Rewrote default logic in `index.js` using TypeScript (`index.ts`) for better type safety and structure. Transpiled with:

```bash
npx tsc
```

* **AI Integration**: Connected Google Gemini 1.5 Flash for real-time chat by calling:

```ts
const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
```

* **Custom Features**: Handled user prompts for layout tips, copywriting, and design ideation tailored for Adobe Express projects.

### 3. Manifest & Configuration

Updated `/dist/manifest.json` to:

* Include permissions for network access (Gemini API)
* Set up Adobe Express-specific panel configuration

---

Feel free to fork, contribute, or customize Luminara.ai to fit your own creative tools!
