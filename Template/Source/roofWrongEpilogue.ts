namespace Template {
    export async function roofWrongEpilogue(): ƒS.SceneReturn {

        let isFavorite = findFavorite();

        let protagonistText = {
            Protagonist: {
                T0001: "Ich komme mir immer noch ziemlich dumm vor, weil ich den Täter nicht schnappen konnte.",

                T0002: "Nanu? Ach, du bist es, " + isFavorite + ".",
            }
        };

        let narratorText = {
            Narrator: {
                T0000_a: "Zum Epilog...",
                T0000_b: "Am nächsten Tag verbringst du die Mittagspause wie immer draußen auf dem Hof.",
                T0001: "Hey, du."
            }
        };

        // let atlasText = {
        //     Kira: {
        //         T0001: "Ich wollte mich noch einmal bei dir bedanken. Heute Abend findet die Premiere statt. Alle sind schon ganz aufgeregt.",
        //         T0002: "",
        //         T0003: "",
        //         T0004: ""
        //     }
        // };

        // let solasText = {
        //     Kira: {
        //         T0001: "Ich wollte mich noch einmal bei dir bedanken. Heute Abend findet die Premiere statt. Alle sind schon ganz aufgeregt.",
        //         T0002: "",
        //         T0003: "",
        //         T0004: ""
        //     }
        // };

        // let luciaText = {
        //     Kira: {
        //         T0001: "Ich wollte mich noch einmal bei dir bedanken. Heute Abend findet die Premiere statt. Alle sind schon ganz aufgeregt.",
        //         T0002: "",
        //         T0003: "",
        //         T0004: ""
        //     }
        // };

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        await ƒS.Location.show(chapterCovers.epilogue);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0000_a);
        await ƒS.update(0.5);

        await ƒS.Location.show(locations.schoolOutsideDay);
        addFallingLeaves();
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0000_b);

        ƒS.Sound.play(sound.birds, 0.6, true);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.sad, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);
        await ƒS.update(0.5);

        await ƒS.Speech.tell("???", narratorText.Narrator.T0001);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);

        if (isFavorite == "Atlas") {
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
            await ƒS.update(0.5);
        } else if (isFavorite == "Solas") {
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
            await ƒS.update(0.5);
        } else {
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
            await ƒS.update(0.5);
        }


        removeFallingLeaves();
        return "yourTitle";
    }
}