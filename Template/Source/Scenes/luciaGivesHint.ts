namespace Template {
    export async function luciaGivesHint(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let protagonistText = {
            Protagonist: {
                T0001: "Hallo, Lucia. Ich habe deinen Schlüssel gefunden und möchte ihn dir zurückgeben.",
                T0002: "Die Sache hat auch sein Gutes. Dass ich deine Geschichte bestätigen konnte, entlastet dich.",
                T0003_good: "Nur zu, jede Information ist hilfreich.",
                T0003_bad: "Meinetwegen, aber ganz aus dem Schneider bist du nicht...",
                T0004: "Wieso das? Sie ist nicht besonders höflich, aber das heißt nicht, dass sie lügt. Nicht wahr?",
                T0005: "Ist das so? Das macht ihre Glaubwürdigkeit natürlich zweifelhaft.",
                T0006: "Der Hinweis von Lucia war hilfreich. Ich sollte allerdings nicht vergessen, ein näheres Auge auf Solas zu werfen. Im Moment ist er derjenige, über den ich am wenigsten weiß."
            }
        };

        let luciaText = {
            Lucia: {
                T0001: "Oh, vielen Dank! Ich habe mich schlecht gefühlt, weil ich ihn verloren hatte.",
                T0002: "Nun, w-was das angeht... Ich war mir nicht sicher, ob ich mich einmischen sollte, aber ich muss dir etwas sagen.",
                T0003: "Ich habe dein Gespräch mit " + dataForSave.nameGirl + "mitbekommen. Ich möchte dich warnen, ihr nicht blind zu vertrauen.",
                T0004: "Darum ging es mir nicht. Es ist nur so... Jeder weiß, dass sie in Atlas verknallt ist. Wer weiß, ob sie ihn nur decken wollte?",
                T0005: "Ich muss jetzt los. Ich hoffe, du findest den Täter... Bis bald!"
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Du läufst durch den Flur auf der Suche nach Lucia und triffst sie schließlich vor der Treppe.",
                T0001: "Lucia läuft die Treppe hinauf."
            }
        };

        await ƒS.Location.show(locations.stairs);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        dataForSave.aboutAlibi = true;
        updateNotes();

        return "confrontSolasAfterKira";
        
        // close
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(0.5);

    }
}