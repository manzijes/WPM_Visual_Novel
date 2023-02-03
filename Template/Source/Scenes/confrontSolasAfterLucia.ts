namespace Template {
    export async function confrontSolasAfterLucia(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let protagonistText = {
            Protagonist: {
                T0001: "Hallo, Solas. Ich muss noch einmal mit dir sprechen.",
                T0002: "Ich habe inzwischen einige Hinweise gesammelt. Du bleibst mir aber nach wie vor ein Rätsel.",
                T0003: "Und?",
                T0004: "Hmm... Wie meinst du das?",
                T0005_bad: "Ich werde nicht schlau aus dir.",
                T0005_good: "Ich glaube, ich verstehe.",
                T0006: "Bis bald."
            }
        };

        let solasText = {
            Solas: {
                T0001: "Sicher doch, was gibt es?",
                T0002: "Ist das so, ja? Ich habe selbst den ganzen Tag über die Sache nachgedacht...",
                T0003: "Naja. Mir tut unsere Kostümschneiderin leid. Sie näht sehr kunstvoll und steckt ihr Herz in jedes Projekt. Wie du weißt, wurde eines der Kostüme zerstört... Das ist wirklich unfair.",
                T0004: "Aber auch der Saboteur tut mir leid. Seine Handlungen zeugen von einem Gefühl der Ratlosigkeit, denkst du nicht?",
                T0005: "Du verdächtigst uns alle aus verschiedenen Gründen, aber hinter jedem Motiv, das du uns zugeschrieben hast, steht der Ehrgeiz.",
                T0006: "...und das eigentliche Wesen des Ehrgeizes ist nur der Schatten eines Traumes. Zumindest schrieb das Shakespeare.",
                T0007: "Ich muss jetzt weiter. Bis bald."
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Du findest Solas in einem abgelegenen Korridor.",
                T0001: "Solas verschwindet. "
            }
        };

        await ƒS.Location.show(locations.corridorDay2);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0000);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
        showSolasMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0001);
        hideSolasMeter();
        await ƒS.Character.hide(characters.solas);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.solas, characters.solas.pose.thoughtful, ƒS.positionPercent(75, 97));
        showSolasMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0002);
        hideSolasMeter();
        await ƒS.Character.hide(characters.solas);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
        showSolasMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0003);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0004);
        hideSolasMeter();
        await ƒS.Character.hide(characters.solas);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0004);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.solas, characters.solas.pose.thoughtful, ƒS.positionPercent(75, 97));
        showSolasMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0005);
        await ƒS.update(0.5);
        await ƒS.Character.hide(characters.solas);
        await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0006);

        let optionsSolasDream = {
            bad: "Ich werde nicht schlau aus dir.",
            good: "Der Schatten eines Traumes...",
            excellent: "Ich glaube, ich verstehe."
        }

        let optionsSolasDreamElement = await ƒS.Menu.getInput(optionsSolasDream, "dialogoptions");
        ƒS.Sound.play(sound.selectDialog, 1.5, false);

        switch (optionsSolasDreamElement) {
            case optionsSolasDream.good:
                await ƒS.Character.hide(characters.solas);
                await ƒS.Character.show(characters.solas, characters.solas.pose.thoughtful, ƒS.positionPercent(75, 97));
                dataForSave.solasScore += 3;
                await ƒS.update(0.5);

                break;
            case optionsSolasDream.excellent:
                await ƒS.Character.hide(characters.solas);
                await ƒS.Character.show(characters.solas, characters.solas.pose.happy, ƒS.positionPercent(75, 97));
                dataForSave.solasScore += 10;
                await ƒS.update(0.5);

                break;
            case optionsSolasDream.bad:
                await ƒS.Character.hide(characters.solas);
                await ƒS.Character.show(characters.solas, characters.solas.pose.unhappy, ƒS.positionPercent(75, 97));
                dataForSave.solasScore -= 3;
                await ƒS.update(0.5);

                break;
        }

        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0007);

        dataForSave.confrontedSolas = true;
        updateNotes();
        await ƒS.update(0.5);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await ƒS.update(0.5);

        hideSolasMeter();
        await ƒS.Character.hide(characters.solas);
        await ƒS.update(0.5);
    }
}