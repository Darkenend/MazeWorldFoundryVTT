import { MzW } from "./module/config.js";
import MzWItemSheet from "./module/sheets/MzWItemSheet.js";

Hooks.once("init", function() {
    console.log("MazeWorld | Initializing MazeWorld System");

    CONFIG.MzW = MzW;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mazeworld", MzWItemSheet, { makeDefault: true });
});