namespace BehindTheScenes {
    export async function roofWrongEpilogue(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.ending, 0.7, 0.1, true);
        updateNotes();

        // let isFavorite = findFavorite();
        let isFavorite = "Lucia";

        let protagonistText = {
            Protagonist: {
                T0001: "Ich komme mir immer noch ziemlich dumm vor, weil ich den Täter nicht schnappen konnte.",
                T0002: "Nanu? Ach, du bist es, " + isFavorite + "."
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Am nächsten Tag verbringst du die Mittagspause wie immer draußen auf dem Hof.",
                T0001: "Hey, du.",
                T0002: isFavorite + " überreicht dir ein Melonenbrötchen.",
                T000end: "Ende."
            }
        };

        let protagonistToAtlas = {
            Protagonist: {
                T0001: "Kommt darauf an, was du willst.",
                T0002: "Ich dachte, du kommst in Frieden?",
                T0003: "Du gibst mir ein Melonenbrötchen...?",
                T0004: "Ich verstehe...",
                T0004b: "Danke, Atlas.",

                T0005: "Hm...",
                T0006: "Ja, das denke ich auch."
            }
        }

        let protagonistToSolas = {
            Protagonist: {
                T0001: "Ach ja? Obwohl ich dich verdächtigt habe?",
                T0001b: "Ich finde es auch schön, dich zu sehen, aber... Mir ist das alles ein bisschen peinlich.",
                T0002: "Ich bezweifle, dass es einen nächsten Fall geben wird. Aber...",
                T0003: "Danke, Solas.",
            }
        }

        let protagonistToLucia = {
            Protagonist: {
                T0001: "Ach ja? Obwohl ich dich verdächtigt habe?",
                T0001b: "Ich finde es auch schön, dich zu sehen, aber... Mir ist das alles ein bisschen peinlich.",
                T0002: "Du... hast Recht.",
                T0003: "Ich bin dankbar dafür, dich getroffen zu haben."
            }
        }

        let atlasText = {
            Atlas: {
                T0001: "Ja, ich bin es. Freust du dich etwa nicht, mich zu sehen?",
                T0002: "Keine Sorge, ich komme in Frieden.",
                T0002b: "Weißt du, ich habe gehört, dass die Premiere abgesagt wurde. Wenn ich du wäre, würde ich mir ziemlich blöd vorkommen.",
                T0003: "Das tue ich auch, wirklich. Tatsächlich bin ich hier, um dich aufzuheitern. Hier, nimm das.",
                T0004: "Du hast so ein bitteres Gesicht gemacht.",
                T0005: "...",
                T0006: "Weißt du, ich glaube... Wer auch immer der wahre Täter war, es tut ihm sicher leid.",
                T0007: "Er hat wohl bekommen, was er wollte, oder? Aber vielleicht hätte er etwas anderes gebraucht. Wie auch immer... Ich weiß nicht, was ich rede."
            }
        };

        let solasText = {
            Solas: {
                T0001: "Ja, ich bin es. Schön, dich zu sehen.",
                T0002: "Naja... Dumm gelaufen, wie die Sache ausgegangen ist. Aber am Ende des Tages geht es jedem von uns gut. Darauf kommt es an.",
                T0003: "Ich finde, du hast deine Sache trotzdem gut gemacht. Du bist durch die Flure spaziert wie eine echte Detektivin. Den nächsten Fall knackst du sicher!",
                T0004: "Das ist alles, was ich sehen wollte. Du lächelst."
            }
        };

        let luciaText = {
            Lucia: {
                T0001: "J-Ja. Hallo nochmal. Schön, dich zu sehen.",
                T0002: "Mach dich nicht verrückt wegen der Sache mit dem Theaterclub. Du kannst nicht ändern, wie es gelaufen ist... Deswegen musst du einfach nach vorne blicken.",
                T0003: "Sieh es positiv... Wäre das alles nicht passiert, dann hätten wir uns nie kennengelernt.",
                T0004: "W-Wirklich?",
                T0005: "Ich... Ich bin auch dankbar."
            }
        };

        await ƒS.Location.show(chapterCovers.chapter);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        let pages = "<h1>Epilog</h1>"
         let close = { done: "Weiter" };
         let choice: string;
         ƒS.Text.setClass("coverTitle");
         do {
             ƒS.Text.print(pages);
             choice = await ƒS.Menu.getInput(close, "pageclose");
         } while (choice != close.done);
         ƒS.Text.close();

         ƒS.Sound.play(sound.pageflip, 0.5, false);

        //  SCENE
        await ƒS.Location.show(locations.schoolOutsideDay);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);
        addFallingLeaves();

        await ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await ƒS.update(0.5);

        ƒS.Sound.play(sound.birds, 0.6, true);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.scared, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);
        await ƒS.update(0.5);

        await ƒS.Speech.tell("???", narratorText.Narrator.T0001);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
        await ƒS.update(0.5);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        // Atlas version
        if (isFavorite == "Atlas") {
            await ƒS.Character.show(characters.atlas, characters.atlas.pose.unhappy, ƒS.positionPercent(75, 97));
            // showAtlasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0001);
            await ƒS.update(0.5);

            // hideAtlasMeter();
            await ƒS.Character.hide(characters.atlas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0001);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.atlas, characters.atlas.pose.playful, ƒS.positionPercent(75, 97));
            // showAtlasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0002);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.atlas);
            await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
            await ƒS.update(0.5);

            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0002b);
            await ƒS.update(0.5);

            // hideAtlasMeter();
            await ƒS.Character.hide(characters.atlas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.angry, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0002);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.atlas, characters.atlas.pose.smiling, ƒS.positionPercent(75, 97));
            // showAtlasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0003);
            await ƒS.update(0.5);

            await ƒS.Speech.tell(null, narratorText.Narrator.T0002);
            await ƒS.update(0.5);

            // hideAtlasMeter();
            await ƒS.Character.hide(characters.atlas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0003);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.atlas, characters.atlas.pose.smiling, ƒS.positionPercent(75, 97));
            // showAtlasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004);
            await ƒS.update(0.5);

            // hideAtlasMeter();
            await ƒS.Character.hide(characters.atlas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0004);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0004b);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.atlas, characters.atlas.pose.unhappy, ƒS.positionPercent(75, 97));
            // showAtlasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0005);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0006);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0007);
            await ƒS.update(0.5);

            // hideAtlasMeter();
            await ƒS.Character.hide(characters.atlas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0005);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.benevolent, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0006);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

        // Solas Version
        } else if (isFavorite == "Solas") {

            await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0001);
            await ƒS.update(0.5);

            // hideSolasMeter();
            await ƒS.Character.hide(characters.solas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.scared, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            
            if(dataForSave.choseSolas){
                await ƒS.Speech.tell(characters.protagonist, protagonistToSolas.Protagonist.T0001);
                await ƒS.update(0.5);
            } else{
                await ƒS.Speech.tell(characters.protagonist, protagonistToSolas.Protagonist.T0001b);
                await ƒS.update(0.5);
            }

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0002);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.solas);
            await ƒS.Character.show(characters.solas, characters.solas.pose.happy, ƒS.positionPercent(75, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0003);
            await ƒS.update(0.5);

            // hideSolasMeter();
            await ƒS.Character.hide(characters.solas);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToSolas.Protagonist.T0002);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToSolas.Protagonist.T0003);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.solas, characters.solas.pose.happy, ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0004);
            await ƒS.update(0.5);

            // hideSolasMeter();
            await ƒS.Character.hide(characters.solas);
            await ƒS.update(0.5);

        // Lucia Version
        } else {
            await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0001);
            await ƒS.update(0.5);

            // hideSolasMeter();
            await ƒS.Character.hide(characters.lucia);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.scared, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            
            if(dataForSave.choseLucia){
                await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0001);
                await ƒS.update(0.5);
            } else{
                await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0001b);
                await ƒS.update(0.5);
            }

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0002);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.lucia);
            await ƒS.Character.show(characters.lucia, characters.lucia.pose.smiling, ƒS.positionPercent(75, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0003);
            await ƒS.update(0.5);

            // hideSolasMeter();
            await ƒS.Character.hide(characters.lucia);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0002);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0003);
            await ƒS.update(0.5);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0004);
            await ƒS.update(0.5);

            await ƒS.Character.hide(characters.lucia);
            await ƒS.Character.show(characters.lucia, characters.lucia.pose.smiling, ƒS.positionPercent(75, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0005);
            await ƒS.update(0.5);

            // hideSolasMeter();
            await ƒS.Character.hide(characters.lucia);
            await ƒS.update(0.5);
        }

        await ƒS.Speech.tell(null, narratorText.Narrator.T000end);
        await ƒS.update(0.5);

        await ƒS.Speech.clear();
        // await ƒS.Speech.hide();
        await ƒS.update(0.5);

        removeFallingLeaves();
        return "yourTitle";
    }
}