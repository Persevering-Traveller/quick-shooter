import { Application } from "./lib/pixi.mjs";

(async() => {
    const app = new Application();
    await app.init({
        width: 320,
        height: 180
    });
    document.body.appendChild(app.canvas);
})();