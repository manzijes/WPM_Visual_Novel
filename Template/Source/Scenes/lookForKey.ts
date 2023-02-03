namespace Template {
    export async function lookForKey(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let protagonistText = {
            Protagonist: {
                T0001: "Es wird Zeit, meine Ermittlungen fortzusetzen...",
                T0002: "Lucia meinte, sie habe ihren Schlüssel zum Theaterraum verloren. Falls das stimmt, dann hatte sie keine Gelegenheit, zwischen den Proben die Sabotage zu begehen.",
                T0003: "Ich suche einfach mal nach dem Schlüssel. Wenn ich ihn finde, würde das Lucias Geschichte bestätigen... Am besten, ich schaue in der Bibliothek. Sie wohnt ja förmlich dort.",
                T0004: "Also dann, wo könnte Lucia den Schlüssel verloren haben?",
                T0004_b: "Die Suche geht weiter...",

                T0005: "Also hier schonmal nicht!",
                T0006: "Die Möglichkeiten sinken.",
                T0007: "Nope!",
                T0008: "Der Schlüssel bleibt verschollen.",
                T0010: "Kein Schlüssel... Oh man! Da sollte jemand dringend seine Browser History löschen...",
                T0011: "Da ist er nicht, aber ich habe ein neues Parfum entdeckt: Poubelle No.5. Dior, hit me up!",
                T0012: "Nein. Hier hätte man ihn sicher bemerkt...",
                T0013: "Kein Glück.",
                T0014: "Hier nicht, aber die frische Luft ist schön.",
                T0015: "Oh, da ist er! Ich 1 - Schlüssel 0.",

                T0016: "Ich gebe auf! Ich kann den Schlüssel nicht finden. Das war von Anfang an eine Schnapsidee... Ob Lucia die Wahrheit gesagt oder gelogen hat, bleibt wohl oder übel eine Vertrauensfrage...",
                T0017: "Lucia hat also die Wahrheit gesagt. Natürlich könnte immer noch ein großer Masterplan dahinter stecken, aber ich bin geneigt, ihr zu vertrauen. Ich werde sie suchen und den Schlüssel zurückgeben."
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Es ist Pause! Während des Unterrichts sind deine Gedanken immer wieder abgedriftet.",
                T0001: "Du betrittst die Bibliothek.",
                T0002: "Du verlässt die Bibliothek."
            }
        };

        await ƒS.Location.show(locations.stairs);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        ƒS.Sound.play(sound.schoolBell, 0.5, false);
        await ƒS.Speech.tell(null, narratorText.Narrator.T0000);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);
        await ƒS.update(0.5);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
        await ƒS.update(0.5);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(0.5);

        await ƒS.Location.show(locations.library);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0004);
        await ƒS.update(0.5);

        let optionsPlacesToSearch = {
            onShelf: "Im Bücherregal",
            inTrash: "Im Mülleimer",
            sittingArea: "Beim Sitzbereich",
            inPlantPot: "Im Blumentopf",
            underTable: "Unter dem Tisch",
            onWindowsill: "Fensterbank",
            nextToPc: "Neben dem Computer",
            behindDeskRIGHT: "Hinter der Theke",
            inCorner: "In der Ecke",
            onChair: "Auf dem Stuhl"
        }

        let loopCount: number = 0;

        // 5 tries then give up
        while (loopCount < 5) {
            if (loopCount > 0) {
                await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0004_b);
                await ƒS.update(0.5);
            }

            let optionsPlacesToSearchElement = await ƒS.Menu.getInput(optionsPlacesToSearch, "dialogoptions");
            ƒS.Sound.play(sound.selectDialog, 1.5, false);

            switch (optionsPlacesToSearchElement) {
                case optionsPlacesToSearch.behindDeskRIGHT:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0015);
                    await ƒS.update(0.5);
                    dataForSave.foundKey = true;
                    loopCount = 5;
                    delete optionsPlacesToSearch.behindDeskRIGHT;
                    break;
                case optionsPlacesToSearch.inCorner:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0012);
                    await ƒS.update(0.5);
                    delete optionsPlacesToSearch.inCorner
                    break;
                case optionsPlacesToSearch.inPlantPot:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0005);
                    await ƒS.update(0.5);
                    delete optionsPlacesToSearch.inPlantPot
                    break;
                case optionsPlacesToSearch.inTrash:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0011);
                    await ƒS.update(0.5);
                    delete optionsPlacesToSearch.inTrash
                    break;
                case optionsPlacesToSearch.nextToPc:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0010);
                    await ƒS.update(0.5);
                    delete optionsPlacesToSearch.nextToPc
                    break;
                case optionsPlacesToSearch.onChair:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0006);
                    await ƒS.update(0.5);
                    delete optionsPlacesToSearch.onChair
                    break;
                case optionsPlacesToSearch.onShelf:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0007);
                    await ƒS.update(0.5);
                    delete optionsPlacesToSearch.onShelf
                    break;
                case optionsPlacesToSearch.onWindowsill:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0014);
                    await ƒS.update(0.5);
                    delete optionsPlacesToSearch.onWindowsill
                    break;
                case optionsPlacesToSearch.sittingArea:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0008);
                    await ƒS.update(0.5);
                    delete optionsPlacesToSearch.sittingArea
                    break;
                case optionsPlacesToSearch.underTable:
                    await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0013);
                    await ƒS.update(0.5);
                    delete optionsPlacesToSearch.underTable
                    break;
            }
            loopCount++;
        }

        dataForSave.lookedForKey = true;

        switch (dataForSave.foundKey){
            case true:
                updateNotes();
                await ƒS.Character.hide(characters.protagonist);
                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0017);
                await ƒS.update(0.5);

                await ƒS.Speech.tell(null, narratorText.Narrator.T0002);
                await ƒS.update(0.5);

                await ƒS.Character.hide(characters.protagonist);
                await ƒS.update(0.5);

                ƒS.Speech.clear();
                ƒS.Speech.hide();
                await ƒS.update(0.5);

                return "luciaGivesHint";
                break;
            case false:
                updateNotes();
                await ƒS.Character.hide(characters.protagonist);
                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.angry, ƒS.positionPercent(25, 97));
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0016);
                await ƒS.update(0.5);

                await ƒS.Speech.tell(null, narratorText.Narrator.T0002);
                await ƒS.update(0.5);

                await ƒS.Character.hide(characters.protagonist);
                await ƒS.update(0.5);

                ƒS.Speech.clear();
                ƒS.Speech.hide();
                await ƒS.update(0.5);

                return "kiraGivesHint";
                break;
        }

    }
}