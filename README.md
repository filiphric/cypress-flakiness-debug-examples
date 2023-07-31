# Cypress flakes debugging with Replay.io

This is a project containing different examples of flaky tests. The aim of this project is to walk you through each case, provide an explanation and suggest a possible fix either on the test, or the app (possibly both).

This is very much a work in progress, but I’m aiming for a structure, where each example has its own folder which you can interact by using following commands:

```bash
cd <name-of-the-folder>
npm install
npm run dev
npx cypress open # in separate terminal
```

Each mini-project contains a short `README.md` with explanation, and most importantly, link to a Replay, through which you can examine the flaky test in great detail.

## Project list
| Project | Description | Replay.io | YouTube |
| --- | ----------- | --- | --- |
| [Add to Cart project](./add-to-cart/README.md) | Adding an item to cart where a page checks for availability | ▶️ [Replay.io link](https://app.replay.io/recording/cypresse2especcyts--ff8097ba-1d68-406f-8c41-2f8259d03a01) | ▶️ [YouTube link](https://youtu.be/4wL8Qi9vjho)