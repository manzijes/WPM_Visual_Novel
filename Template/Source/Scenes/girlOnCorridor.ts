namespace Template {
    export async function girlOnCorridor(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let protagonistText = {
            Protagonist: {
                T0001: "Huh?",
                T0002: "Warte, ich kenne dich. Du heißt doch... ",
                T0003: "Wenn du es so ausdrücken willst, sicher.",
                T0004_a: "Oh? Er hat dich gar nicht erwähnt.",
                T0004_b: "Nachhilfe? Ich hätte nicht gedacht, dass Atlas so ein guter Samariter ist.",
                T0005: "Was für ein höfliches Mädchen."
            }
        };

        let girlText = {
            Girl: {
                T0001: "Hey, du!",
                T0002: "Ganz recht. Ich weiß auch, wer du bist. Du schnüffelst rum wegen dem Chaos im Theaterclub, oder nicht?",
                T0003: "Ich habe gehört, dass du Atlas verdächtigst. Das kannst du schön sein lassen. In der Zeitspanne, als das Kostüm zerstört wurde, war er bei mir. Er gibt mir Nachhilfe in Physik.",
                T0004: "N-Nicht? Tja, nun weißt du es.",
                T0005: "Jetzt entschuldige mich, ich muss in den Unterricht."
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Es ist früh morgens und du betrittst die Schule. Nach ein paar Schritten stoppt dich ein Mädchen auf dem Korridor.",
                T0001: "Sie dreht sich ohne ein weiteres Wort um und macht sich aus dem Staub.",
                T0002: "Du machst eine Notiz, dann gehst auch du in deine Klasse."
                // T0002: "Es ist Pause! Während des Unterrichts sind deine Gedanken immer wieder abgedriftet."
            }
        };

        let optionsAtlasTutoring = {
            good: "Oh? Er hat dich gar nicht erwähnt.",
            bad: "Nachhilfe? Ich habe nicht erwartet, dass Atlas so ein guter Samariter ist."
        }


        await ƒS.Location.show(locations.corridorDay);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0000);

        await ƒS.Character.show(characters.girl, characters.girl.pose.neutral, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell("???", girlText.Girl.T0001);
        await ƒS.Character.hide(characters.girl);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);

        // name the girl
        dataForSave.nameGirl = await ƒS.Speech.getInput();
        dataForSave.nameGirl = dataForSave.nameGirl.charAt(0).toUpperCase() + dataForSave.nameGirl.slice(1);
        characters.girl.name = dataForSave.nameGirl;
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.girl, characters.girl.pose.annoyed, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.girl, girlText.Girl.T0002);
        await ƒS.Character.hide(characters.girl);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.girl, characters.girl.pose.upset, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.girl, girlText.Girl.T0003);
        await ƒS.update(0.5);

        let optionsAtlasTutoringElement = await ƒS.Menu.getInput(optionsAtlasTutoring, "dialogoptions");
        ƒS.Sound.play(sound.selectDialog, 1.5, false);

        switch (optionsAtlasTutoringElement) {
            case optionsAtlasTutoring.good:
                showAtlasMeter();
                await ƒS.update(0.5);
                dataForSave.atlasScore += 6;
                await ƒS.update(0.5);
                hideAtlasMeter();
                break;
            case optionsAtlasTutoring.bad:
                showAtlasMeter();
                await ƒS.update(0.5);
                dataForSave.atlasScore -= 6;
                await ƒS.update(0.5);
                hideAtlasMeter();
                break;
        }

        await ƒS.Character.show(characters.girl, characters.girl.pose.annoyed, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.girl, girlText.Girl.T0004);
        await ƒS.update(0.5);
        await ƒS.Character.hide(characters.girl);
        await ƒS.Character.show(characters.girl, characters.girl.pose.unsure, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.girl, girlText.Girl.T0005);
        await ƒS.Character.hide(characters.girl);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await ƒS.Character.hide(characters.girl);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0005);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        dataForSave.atlasOpportunity = true;
        updateNotes();

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        // close
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(0.5);

    }
}