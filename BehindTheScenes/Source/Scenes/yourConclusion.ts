namespace BehindTheScenes {
    export async function yourConclusion(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let protagonistText = {
            Protagonist: {
                T0001: "Die Zeit ist um... Ich muss eine Entscheidung treffen.",
                T0002: "Am besten, ich schaue mir alle Indizien noch einmal genau an und lasse meine Ermittlungen Revue passieren... Besonders die Notiz des Täters ist ein interessantes Beweisstück...",
                T0003: "Also dann...",
                T0004: "Der Täter ist Atlas!",
                T0005: "Der Täter ist Solas!",
                T0006: "Der Täter ist Lucia!",
                T0007: "Der Täter ist Kira! Warte, nein. So ein Quatsch...",
            }
        };


        let narratorText = {
            Narrator: {
                T0000: "Der Tag neigt sich dem Ende zu. Du gehst auf den Schulhof und schnappst frische Luft.",
                T0001: "Wer ist der Täter?",
                T0002: "Du bestellst Atlas auf das Schuldach, um ihn mit deiner Schlussfolgerung zu konfrontieren...",
                T0003: "Du bestellst Solas auf das Schuldach, um ihn mit deiner Schlussfolgerung zu konfrontieren...",
                T0004: "Du bestellst Lucia auf das Schuldach, um sie mit deiner Schlussfolgerung zu konfrontieren...",
            }
        };

        await ƒS.Location.show(locations.schoolOutsideDay);
        addFallingLeaves();
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0000);

        ƒS.Sound.play(sound.birds, 0.6, true);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.confident, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
        await ƒS.update(0.5);

        let optionsCulprit = {
            atlas: "Atlas!",
            solas: "Solas!",
            lucia: "Lucia!",
            kira: "Kira!"
        }

        let loopCount: number = 0;

        while (loopCount < 1) {

            await ƒS.Speech.tell(null, narratorText.Narrator.T0001);

            let optionsCulpritElement = await ƒS.Menu.getInput(optionsCulprit, "dialogoptions");
            ƒS.Sound.play(sound.selectDialog, 1.5, false);

            switch (optionsCulpritElement) {
                case optionsCulprit.atlas:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0004);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(null, narratorText.Narrator.T0002);
                    dataForSave.choseAtlas = true;
                    loopCount++;
                    break;
                case optionsCulprit.solas:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0005);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(null, narratorText.Narrator.T0003);
                    dataForSave.choseSolas = true;
                    loopCount++;
                    break;
                case optionsCulprit.lucia:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0006);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(null, narratorText.Narrator.T0004);
                    dataForSave.choseLucia = true;
                    loopCount++;
                    break;
                case optionsCulprit.kira:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0007);
                    await ƒS.update(0.5);
                    delete optionsCulprit.kira;
                    break;
            }
        }

        
        await ƒS.Character.hide(characters.protagonist);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(0.5);

        removeFallingLeaves();
        ƒS.Sound.fade(sound.birds, 0, 3, true);
        await ƒS.update(0.5);

        if(dataForSave.choseAtlas == true){
            return "roofRight";
        } else {
            return "roofWrong";
        }

    }
}