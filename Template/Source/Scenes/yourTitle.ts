namespace BehindTheScenes {
    export async function yourTitle(): ƒS.SceneReturn {

        ƒS.Sound.play(sound.pageflip, 0.5, false);

        let narratorText = {
            Narrator: {
                T0000: "Basierend auf deinem Spielverlauf erhältst du diesen Titel..."
            }
        };

        let isFavorite = findFavorite();

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.ending, 0.7, 0.1, true);
        updateNotes();

        await ƒS.Location.show(chapterCovers.chapter);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0000);


        // set title
        let pages: string = "";

        if (dataForSave.letCulpritGo && isFavorite == "Atlas") {
            pages = "<h1>Bonnie (und Clyde)</h1><h2>Du dachtest dir so: Partners in crime, let's go. Aber bist schon ein Verräter...</h2>";
        } else if (dataForSave.letCulpritGo == false && isFavorite == "Atlas") {
            pages = "<h1>Loyal bis zum Ende</h1><h2>Du hast Kira nicht im Stich gelassen. In ihren Augen wirst du immer eine Heldin sein.</h2>";
        } else if (isFavorite == "Solas") {
            pages = "<h1>Die Muse</h1><h2>Du scheinst etwas für Künstler übrig zu haben... Oder hast du nur verwirrt zu allem genickt, was Solas gesagt hat?</h2>";
        } else {
            pages = "<h1>Gutes Herz</h1><h2>Du magst das Girl next door! It's not everyone's favorite, but it's yours. And you're totally chill about it.</h2>";
        }

        // print title
        let close = { done: "x" };
        let choice: string;
        ƒS.Text.setClass("playerTitle");
        do {
            ƒS.Text.print(pages);
            choice = await ƒS.Menu.getInput(close, "pageclose");
        } while (choice != close.done);

        ƒS.Speech.hide();
        ƒS.Sound.play(sound.selectDialog, 1.5, false);
        ƒS.Text.close();


        // Spiel neustarten oder fenster schließen

        let backToStart = {
            Restart: "Nochmal spielen."
        }

        let loopCount: number = 0;
        while (loopCount < 1) {
            let backToStartElement = await ƒS.Menu.getInput(backToStart, "dialogoptions");
            ƒS.Sound.play(sound.selectDialog, 1.5, false);

            switch (backToStartElement) {
                case backToStart.Restart:
                    if (confirm("Spiel neustarten?")) {
                        loopCount++;
                        window.location.href="../Template/Template.html"
                    }
                    break;
            }
        }
    }
}