namespace BehindTheScenes {
    export async function roofWrong(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let chosenCulprit = "";

        // player chose lucia or solas?
        if (dataForSave.choseLucia) {
            chosenCulprit = "Lucia"
        } else {
            chosenCulprit = "Lucia"
        }

        let protagonistText = {
            Protagonist: {
                T0001: "Ich habe dich hergerufen, um dich zu stellen. Ich weiß, dass du der Saboteur bist. Du bist überführt, " + chosenCulprit + ".",
                T0002: "Du... bist es nicht?",
                T0003: "Ich dachte... Die Hinweise...",
                T0004: "Vielleicht habe ich wirklich etwas übersehen. Ich hatte so ein komisches Gefühl, als entginge mir da ein Detail.",
                T0005: "Oh nein... Die Sonne geht bereits unter. Der Schultag ist so gut wie zu Ende.",
                T0006: "Der wahre Täter ist noch da draußen. Das bedeutet wohl, dass Kira die Premiere absagen wird. Ich habe versagt...",
                T0007: "Aber ich habe Kira enttäuscht. Ich habe ihr versprochen, den Saboteur zu finden. Jetzt ist es zu spät, der Tag ist um.",
                T0008: "Danke, " + chosenCulprit + "...",
                T0009: "Trotzdem... Ich komme mir vor wie ein riesen Idiot."
            }
        };

        let solasText = {
            Solas: {
                T0001: "Überführt sagst du?",
                T0002: "...",
                T0003: "Tut mir leid, aber ich bin nicht der Täter. Ich liebe den Theaterclub. Das ist die Wahrheit.",
                T0004: "Ich werfe dir nicht vor, dass du mich verdächtigst. Aber du irrst dich.",
                T0005: "Sei nicht so hart zu dir selbst. Die Welt ist nicht untergegangen, niemand wurde verletzt.",
                T0006: "Ich kenne Kira. Sie hat ein gutes Herz. Deswegen wird sie die Premiere absagen, um weiteren Schaden zu verhindern. Und sie wird dir nicht böse sein."
            }
        };

        let luciaText = {
            Lucia: {
                T0001: "Ü-Überführt sagst du?",
                T0002: "...",
                T0003: "Tut mir leid, aber ich bin nicht die Täterin. Ich liebe den Theaterclub. Das ist die Wahrheit.",
                T0004: "Ich verstehe ja, dass du mich verdächtigst. Aber du irrst dich.",
                T0005: "Sei bitte nicht so hart zu dir... I-Ich bin sicher, du hast dein Bestes gegeben.",
                T0006: "Kira wird das verstehen. Sie wird dir sicher nicht böse sein."
            }
        };

        let narratorText = {
            Narrator: {
                T0000_solas: "Du wartest auf dem Schuldach auf Solas. Nach ein paar Minuten erscheint er.",
                T0000_lucia: "Du wartest auf dem Schuldach auf Lucia. Nach ein paar Minuten erscheint sie.",
                T0001: "Du teilst Kira mit, was passiert ist. Auch sie ist nicht überzeugt von deinem Ergebnis...",
                T0002: "Sie sagt die Premiere ab. Die Mitglieder des Theaterclubs sind enttäuscht, aber sie verstehen Kiras Entscheidung."
            }
        };

        await ƒS.Location.show(locations.roof);
        addFallingLeaves();
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        if (chosenCulprit == "Solas") {
            await ƒS.Speech.tell(null, narratorText.Narrator.T0000_solas);
            await ƒS.update(0.5);
        } else {
            await ƒS.Speech.tell(null, narratorText.Narrator.T0000_lucia);
            await ƒS.update(0.5);
        }

        ƒS.Sound.play(sound.birds, 0.6, true);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        // Solas Version
        if (chosenCulprit == "Solas") {
            await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
            showSolasMeter();
            await ƒS.update(0.5);

            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0001);
            await ƒS.update(0.5);
            dataForSave.solasScore -= 5;
            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0002);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0003);
            await ƒS.update(0.5);

            hideSolasMeter();
            await ƒS.Character.hide(characters.solas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
            showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0004);
            await ƒS.update(0.5);

            hideSolasMeter();
            await ƒS.Character.hide(characters.solas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.scared, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0004);
            await ƒS.update(0.5);

            // TWILIGHT SET
            await ƒS.Location.show(locations.roofTwilight);
            await ƒS.update(2.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.sad, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0005);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0006);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
            showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0005);
            await ƒS.update(0.5);

            hideSolasMeter();
            await ƒS.Character.hide(characters.solas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.scared, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0007);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
            showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0006);
            await ƒS.update(0.5);

            hideSolasMeter();
            await ƒS.Character.hide(characters.solas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.scared, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0008);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0009);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            // Lucia Version
        } else {
            await ƒS.Character.show(characters.lucia, characters.lucia.pose.unhappy, ƒS.positionPercent(75, 97));
            showLuciaMeter();
            await ƒS.update(0.5);

            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0001);
            await ƒS.update(0.5);
            dataForSave.luciaScore -= 5;
            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0002);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0003);
            await ƒS.update(0.5);

            hideLuciaMeter();
            await ƒS.Character.hide(characters.lucia);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
            showLuciaMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0004);
            await ƒS.update(0.5);

            hideLuciaMeter();
            await ƒS.Character.hide(characters.lucia);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.scared, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0004);
            await ƒS.update(0.5);

            // TWILIGHT SET
            await ƒS.Location.show(locations.roofTwilight);
            await ƒS.update(2.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.sad, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0005);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0006);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.lucia, characters.lucia.pose.unhappy, ƒS.positionPercent(75, 97));
            showLuciaMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0005);
            await ƒS.update(0.5);

            hideLuciaMeter();
            await ƒS.Character.hide(characters.lucia);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.scared, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0007);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
            showLuciaMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0006);
            await ƒS.update(0.5);

            hideLuciaMeter();
            await ƒS.Character.hide(characters.lucia);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.scared, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0008);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0009);
            await ƒS.update(0.5);


            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

        }

        await ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        await ƒS.update(0.5);

        await ƒS.Speech.clear();
        await ƒS.Speech.hide();
        await ƒS.update(0.5);

        removeFallingLeaves();

        return "roofWrongEpilogue";

    }
}