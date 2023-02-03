namespace Template {
    export async function roofRightEpilogue(): ƒS.SceneReturn {

        let isFavorite = "Atlas";

        let protagonistText = {
            Protagonist: {
                T0001: "Wir haben wirklich schönes Wetter heute. Ein toller Tag zum Faulenzen.",
                
                T0002: "Nanu? Ach, du bist es, Kira.",
                T0003: "Nanu? Ach, du bist es, Solas.",
                T0004: "Nanu? Ach, du bist es, Lucia.",

                T0005: "Ich habe gerne geholfen."
            }
        };

        let protagonistToKiraText = {
            Protagonist: {
                T0001: "Mich einladen?",
                T0002: "Vielen Dank, Kira. Ich werde kommen."
            }
        };

        let protagonistToFavText = {
            Protagonist: {
                T0001: "Nicht? Was wolltest du dann?",
                T0002: "Vielen Dank, " + isFavorite + ". Ich werde kommen.",

            }
        };

        let narratorText = {
            Narrator: {
                T0000_a: "Zum Epilog...",
                T0000: "Am nächsten Tag verbringst du die Mittagspause wie immer draußen auf dem Hof.",
                T0001: "Hey, du.",

                T0002: "Kira winkt dir zum Abschied und du spürst, wie sich ein glückliches Lächeln auf deinem Gesicht ausbreitet.",
                T0002_b: isFavorite + " winkt dir zum Abschied und du spürst, wie sich ein glückliches Lächeln auf deinem Gesicht ausbreitet."
            }
        };

        let kiraText = {
            Kira: {
                T0001: "Ich wollte mich noch einmal bei dir bedanken. Heute Abend findet die Premiere statt. Alle sind schon ganz aufgeregt.",
                T0001_b: "Verzeih' mir, wenn ich mich irre, aber ich hatte den Eindruck, du hättest Atlas gemocht. Und er hat dich auch gemocht, das weiß ich. Du bist vermutlich genauso enttäuscht von ihm wie ich. Wie dem auch sei...",
                T0002: "Wenn du noch nichts vorhast... Naja... Ich würde dich gerne einladen!",
                T0003: "Ja, komm bitte zur Premiere. Hier ist eine Eintrittskarte für die erste Reihe. Der Platz ist direkt neben meinem. Es würde mich sehr freuen, wenn du da wärst.",
                T0004: "Toll! Dann sehe ich dich dort. Bis heute Abend!"
            }
        };
        let favText = {
            isFavorite: {
                T0001: "Heute Abend findet die Premiere statt und alle sind schon ganz aufgeregt. Das haben wir nur dir zu verdanken.",
                T0002: "Das ist aber nicht der Grund, warum ich mit dir reden wollte...",
                T0003: "Ich würde dich gerne zur Premiere einladen. Hier ist eine Eintrittskarte für die erste Reihe... Es würde mich sehr freuen, wenn du da wärst.",
                T0004: "Wirklich? Toll! Dann sehe ich dich dort. Bis heute Abend!"
            }
        }

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        await ƒS.Location.show(chapterCovers.epilogue);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0000_a);
        await ƒS.update(0.5);
        await ƒS.Speech.clear();

        await ƒS.Location.show(locations.schoolOutsideDay);
        addFallingLeaves();
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await ƒS.update(0.5);

        ƒS.Sound.play(sound.birds, 0.6, true);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happy, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);
        await ƒS.update(0.5);

        await ƒS.Speech.tell("???", narratorText.Narrator.T0001);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);

        if(isFavorite == "Atlas"){
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.kira, characters.kira.pose.happy, ƒS.positionPercent(75, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0001);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.kira);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0005);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.kira, characters.kira.pose.neutral, ƒS.positionPercent(75, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0001_b);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0002);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.kira);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToKiraText.Protagonist.T0001);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.kira, characters.kira.pose.neutral, ƒS.positionPercent(75, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0003);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.kira);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToKiraText.Protagonist.T0002);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.kira, characters.kira.pose.happy, ƒS.positionPercent(75, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0004);
            await ƒS.update(0.5);

            await ƒS.Speech.tell(null, narratorText.Narrator.T0002);

            await ƒS.Character.hide(characters.kira);
            await ƒS.update(0.5);

        } else if(isFavorite == "Solas"){
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.solas, characters.solas.pose.happy, ƒS.positionPercent(75, 97));
            showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(isFavorite, favText.isFavorite.T0001);
            await ƒS.update(0.5);

            hideSolasMeter();
            await ƒS.Character.hide(characters.solas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0005);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
            showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(isFavorite, favText.isFavorite.T0002);
            await ƒS.update(0.5);

            hideSolasMeter();
            await ƒS.Character.hide(characters.solas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToFavText.Protagonist.T0001);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
            showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(isFavorite, favText.isFavorite.T0003);
            await ƒS.update(0.5);

            hideSolasMeter();
            await ƒS.Character.hide(characters.solas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToFavText.Protagonist.T0002);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
            showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(isFavorite, favText.isFavorite.T0004);
            await ƒS.update(0.5);

            await ƒS.Speech.tell(null, narratorText.Narrator.T0002_b);

            hideSolasMeter();
            await ƒS.Character.hide(characters.solas);
            await ƒS.update(0.5);
        
        } else{
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.lucia, characters.lucia.pose.smiling, ƒS.positionPercent(75, 97));
            showLuciaMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(isFavorite, favText.isFavorite.T0001);
            await ƒS.update(0.5);

            hideLuciaMeter();
            await ƒS.Character.hide(characters.lucia);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0005);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
            showLuciaMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(isFavorite, favText.isFavorite.T0002);
            await ƒS.update(0.5);

            hideLuciaMeter();
            await ƒS.Character.hide(characters.lucia);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToFavText.Protagonist.T0001);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
            showLuciaMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(isFavorite, favText.isFavorite.T0003);
            await ƒS.update(0.5);

            hideLuciaMeter();
            await ƒS.Character.hide(characters.lucia);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToFavText.Protagonist.T0002);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
            showLuciaMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(isFavorite, favText.isFavorite.T0004);
            await ƒS.update(0.5);

            await ƒS.Speech.tell(null, narratorText.Narrator.T0002_b);

            hideLuciaMeter();
            await ƒS.Character.hide(characters.lucia);
            await ƒS.update(0.5);
        }

        await ƒS.Speech.clear();
        await ƒS.Speech.hide();
        await ƒS.update(0.5);

        removeFallingLeaves();
        return "yourTitle";
    }
}