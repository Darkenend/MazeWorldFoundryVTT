import { MzW } from "./module/config.js";
import MzWItemSheet from "./module/sheets/MzWItemSheet.js";

Hooks.once("init", function() {
    console.log(messageFormatter("Initializing MazeWorld System"));

    CONFIG.MzW = MzW;
    console.log(messageFormatter("Registering Sheets"));
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mazeworld", MzWItemSheet, { makeDefault: true });
    console.log(messageFormatter("Registering Partials"));
    loadHandleBarTemplates();
});

async function loadHandleBarTemplates() {
    // Register templates parts
    const templatePaths = [
        "systems/MazeWorldFoundryVTT/MzW/templates/sheets/partials/ammunition/pistol.hbs"
    ];
    return loadTemplates(templatePaths);
}

/**
 * This simple function just formats the messages given so it fits with the FoundryVTT logging format
 * @param {String} message Message to format for logging
 * @returns Formatted String
 */
function messageFormatter(message) {
    message =  "MazeWorld | " + message;
    return message;
}