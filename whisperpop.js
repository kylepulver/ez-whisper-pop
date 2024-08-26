console.log("EZ Whisper Pop | Loaded");

Hooks.on("createChatMessage", (document, options, userId) => {
    if (game.user.isGM) return;
    
    if (document.whisper?.includes(game.user.id) && document.author.id !== game.user.id) {
        ui.notifications.notify("You've recieved a private message.")
        const app = new ChatPopout(document);
        app.options.classes.push("ez-whisper-pop")
        app.position.width = 500;
        // app.title = `Whisper from ${document.author.name}`
        app.render(true);
    }
})