namespace Template {
    export async function confrontSolasAfterLucia(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let protagonistText = {
            Protagonist: {
                T0001: "Hallo, Solas. Ich muss noch einmal mit dir sprechen.",
                T0002: "Ich habe inzwischen einige Hinweise gesammelt. Du bleibst mir aber nach wie vor ein Rätsel.",
                T0003_bad: "Und dein Ergebnis?",
                T0003_good: "Sag mir, was du denkst.",
                T0004: "Wie meinst du das?",
                T0005_bad: "Ich werde nicht schlau aus dir.",
                T0005_good: "Ich glaube, ich verstehe."
            }
        };

        let solasText = {
            Solas: {
                T0001: "Sicher doch, was gibt es?",
                T0002: "Ist das so, ja? Ich habe selbst den ganzen Tag über die Sache nachgedacht.",
                T0003: "Mir tut unsere Kostümschneiderin leid. Sie näht sehr kunstvoll und steckt ihr Herz in jedes Projekt. Wie du weißt, wurde eines der Kostüme zerstört...",
                T0004: "Aber auch der Saboteur hat meine Anteilnahme. Seine Handlungen zeugen von einem Gefühl der Ratlosigkeit, denkst du nicht?",
                T0005: "Du verdächtigst uns alle aus verschiedenen Gründen, aber hinter jedem potenziellen Motiv, das du uns zugeschrieben hast, steht der Ehrgeiz.",
                T0006: "...und das eigentliche Wesen des Ehrgeizes ist nur der Schatten eines Traumes."
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Du begibst dich auf die Suche nach Solas. Du findest ihn schließlich draußen auf dem Schulhof."
            }
        };

        await ƒS.Location.show(locations.corridorDay);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);


        
        // close
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(0.5);

    }
}