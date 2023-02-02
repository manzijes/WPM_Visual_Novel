namespace Template {
    export async function yourConclusion(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        // let protagonistText = {
        //     Protagonist: {
        //         T0001: "Die Uhr tickt... Ich muss eine Entscheidung treffen.",
        //         T0002: "Am besten, ich schaue mir alle Indizien noch einmal genau an. Besonders die Notiz des Täters ist ein interessantes Beweisstück..."
        //     }
        // };


        // let narratorText = {
        //     Narrator: {
        //         T0000: "Es ist früh morgens und du betrittst die Schule. Nach ein paar Schritten stoppt dich ein Mädchen auf dem Korridor."
        //     }
        // };

        await ƒS.Location.show(locations.corridorDay);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);


        
        // close
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(0.5);

    }
}