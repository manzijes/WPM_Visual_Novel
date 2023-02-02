namespace Template {
    export async function confrontSolasAfterLucia(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let protagonistText = {
            Protagonist: {
                T0001: "Hallo, Solas. Ich muss noch einmal mit dir sprechen.",
                T0002: "Der Täter hat uns eine Warnung zukommen lassen. Die Handschrift darauf sieht aus wie deine.",
                T0003_good: "Hellseherisches Talent",
                T0003_bad: "Ich nicht, aber Kira.",
                T0003_2_good: "Das stimmt wohl.",
                T0003_2_bad: "Das befürchte ich auch.",
                T0004: "Du wirkst sehr gefasst... Wenn du unschuldig wärst, würdest du nicht so ruhig reagieren.",
                T0005_bad: "Wie poetisch.",
                T0005_good: "Ich glaube, ich habe gerade einen Blick erhascht.",
                T0006: "Die Uhr tickt... Ich muss mit Kira sprechen."
            }
        };

        let solasText = {
            Solas: {
                T0001: "Sicher doch, was gibt es?",
                T0002: "Ist das so? Woher kennst du meine Handschrift?",
                T0003_a: "Wenn du wirklich eine Hellseherin wärst, müsstest du nicht Detektiv spielen, oder?",
                T0003_b: "Kira also... Vielleicht kennt sie mich nicht so gut, wie sie glaubt.",
                T0004: "Es gibt nur zwei Möglichkeiten.",
                T0005: "1. Jemand der anderen beiden hat meine Handschrift imitiert, um mir die Sache anzuhängen. Doch wer käme dafür infrage? Oder...",
                T0006: "2. Ich versuche gerade, dich zu manipulieren. Ein letzter Verzweiflungsakt, nachdem du mich überführt hast.",
                T0007: "Niccoló Machiavelli hat einmal gesagt: 'Jeder sieht wie du zu sein scheinst, wenige fühlen heraus wie du bist.'",
                T0008: "Wir können einander nicht ins Herz schauen. Darin liegt die eigentliche Tragödie.",
                T0009: "Ich muss jetzt weiter. Bis bald."
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Du begibst dich auf die Suche nach Solas. Du findest ihn schließlich draußen auf dem Schulhof."
            }
        };

        await ƒS.Location.show(locations.schoolOutsideTwilight);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);


        
        // close
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(0.5);

        return "yourConclusion";

    }
}