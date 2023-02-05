namespace BehindTheScenes {
    export async function confrontSolasAfterKira(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let protagonistText = {
            Protagonist: {
                T0001: "Hallo, Solas. Ich muss noch einmal mit dir sprechen.",
                T0002: "Ich sage es geradeheraus: Der Täter hat uns eine Warnung zukommen lassen. Die Handschrift darauf sieht aus wie deine.",
                T0003_good: "Hellseherisches Talent.",
                T0003_bad: "Ich nicht, aber Kira.",
                T0003_2_good: "Das stimmt wohl.",
                T0003_2_bad: "Das befürchte ich auch.",
                T0004: "Du wirkst sehr gefasst... Wenn du unschuldig wärst, würdest du nicht so ruhig reagieren.",
                T0005_bad: "Wie poetisch.",
                T0005_good: "Ich glaube, ich habe gerade einen Blick erhascht.",
                T0006: "Bis bald."
            }
        };

        let solasText = {
            Solas: {
                T0001: "Sicher doch, was gibt es?",
                T0002: "Ist das so? Woher kennst du meine Handschrift?",
                T0003_a: "Wenn du wirklich eine Hellseherin wärst, müsstest du nicht Detektiv spielen, oder?",
                T0003_b: "Kira also... Vielleicht kennt sie mich nicht so gut, wie sie glaubt.",
                T0004: "Ich verstehe, dass mich das mit der Handschrift belastet. So wie ich das sehe, gibt es nur zwei Möglichkeiten.",
                T0005: "Möglichkeit 1: Jemand der anderen beiden hat meine Handschrift imitiert, um mir die Sache anzuhängen. Doch wer käme dafür infrage?",
                T0006: "Möglichkeit 2: Ich versuche gerade, dich zu manipulieren. Ein letzter Verzweiflungsakt, nachdem du mich überführt hast.",
                T0007: 'Machiavelli hat einmal gesagt: "Jeder sieht wie du zu sein scheinst, wenige fühlen heraus wie du bist." Ich glaube, er meinte damit... Wir können einander nicht ins Herz schauen. Darin liegt die eigentliche Tragödie.',
                T0009: "Ich muss jetzt weiter. Bis bald."
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Du findest Solas in einem abgelegenen Korridor."
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

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
        showSolasMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0002);

        let optionsSolasHandwriting = {
            good: "Hellseherisches Talent.",
            bad: "Ich nicht, aber Kira."
        }

        let optionsSolasHandwritingElement = await ƒS.Menu.getInput(optionsSolasHandwriting, "dialogoptions");
        ƒS.Sound.play(sound.selectDialog, 1.5, false);

        switch (optionsSolasHandwritingElement) {
            case optionsSolasHandwriting.good:
                await ƒS.Character.hide(characters.solas);
                await ƒS.Character.show(characters.solas, characters.solas.pose.thoughtful, ƒS.positionPercent(75, 97));
                dataForSave.solasScore += 9;
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.solas, solasText.Solas.T0003_a);
                hideSolasMeter();
                await ƒS.Character.hide(characters.solas);
                await ƒS.update(0.5);

                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003_2_good);
                await ƒS.Character.hide(characters.protagonist);
                await ƒS.update(0.5);
                break;
            case optionsSolasHandwriting.bad:
                await ƒS.Character.hide(characters.solas);
                await ƒS.Character.show(characters.solas, characters.solas.pose.unhappy, ƒS.positionPercent(75, 97));
                dataForSave.solasScore -= 9;
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.solas, solasText.Solas.T0003_b);
                hideSolasMeter();
                await ƒS.Character.hide(characters.solas);
                await ƒS.update(0.5);

                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003_2_bad);
                await ƒS.Character.hide(characters.protagonist);
                await ƒS.update(0.5);
                break;
        }

        await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
        showSolasMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0004);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0005);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0006);

        hideSolasMeter();
        await ƒS.Character.hide(characters.solas);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0004);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
        showSolasMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0007);

        let optionsSolasHeart = {
            bad: "Wie poetisch.",
            good: "Ich glaube, ich habe gerade einen Blick erhascht."
        }

        let optionsSolasHeartElement = await ƒS.Menu.getInput(optionsSolasHeart, "dialogoptions");
        ƒS.Sound.play(sound.selectDialog, 1.5, false);

        switch (optionsSolasHeartElement) {
            case optionsSolasHeart.good:
                await ƒS.Character.hide(characters.solas);
                await ƒS.Character.show(characters.solas, characters.solas.pose.happy, ƒS.positionPercent(75, 97));
                dataForSave.solasScore += 5;
                await ƒS.update(0.5);

                break;
            case optionsSolasHeart.bad:
                await ƒS.Character.hide(characters.solas);
                await ƒS.Character.show(characters.solas, characters.solas.pose.sad, ƒS.positionPercent(75, 97));
                dataForSave.solasScore -= 5;
                await ƒS.update(0.5);
                break;
        }

        await ƒS.Speech.tell(characters.solas, solasText.Solas.T0009);
        hideSolasMeter();
        await ƒS.Character.hide(characters.solas);
        await ƒS.update(0.5);

        dataForSave.confrontedSolas = true;
        updateNotes();
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0006);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);
        
        // close
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(0.5);

        return "yourConclusion";

    }
}