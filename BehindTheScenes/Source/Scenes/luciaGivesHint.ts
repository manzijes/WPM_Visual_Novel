namespace BehindTheScenes {
    export async function luciaGivesHint(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let protagonistText = {
            Protagonist: {
                T0001: "Hallo, Lucia. Ich habe deinen Schlüssel gefunden und möchte ihn dir zurückgeben.",
                T0002: "Die Sache hat auch sein Gutes. Dass ich deine Geschichte bestätigen konnte, entlastet dich.",
                T0003_good: "Nur zu, jede Information ist hilfreich.",
                T0003_bad: "Meinetwegen, aber ganz aus dem Schneider bist du nicht...",
                T0004: "Wieso das? Sie ist nicht besonders höflich, aber das heißt nicht, dass sie lügt. Nicht wahr?",
                T0005: "Ist das so? Das macht ihre Glaubwürdigkeit natürlich zweifelhaft.",
                T0006: "Der Hinweis von Lucia war hilfreich. Ich sollte allerdings nicht vergessen, ein näheres Auge auf Solas zu werfen. Im Moment ist er derjenige, über den ich am wenigsten weiß."
            }
        };

        let luciaText = {
            Lucia: {
                T0001: "Oh, vielen Dank! Ich habe mich schlecht gefühlt, weil ich ihn verloren hatte.",
                T0002: "Nun, w-was das angeht... Ich war mir nicht sicher, ob ich mich einmischen sollte, aber ich muss dir etwas sagen.",
                T0003: "Ich habe vorhin dein Gespräch mit " + dataForSave.nameGirl + " mitbekommen. Ich möchte dich warnen, ihr nicht blind zu vertrauen.",
                T0004: "Darum ging es mir nicht. Es ist nur so... Jeder weiß, dass sie in Atlas verknallt ist. Wer weiß, ob sie ihn nur decken wollte?",
                T0005: "Das war schon alles, was ich dir sagen wollte. Ich muss jetzt los... Bis bald!"
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Du läufst auf der Suche nach Lucia durch den Flur und triffst sie schließlich an der Treppe.",
                T0001: "Lucia läuft die Treppe hinauf.",
                T0002: "Du begibst dich auf die Suche nach Solas, um mehr von ihm zu erfahren."
            }
        };

        await ƒS.Location.show(locations.stairs);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0000);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
        showLuciaMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0001);
        hideLuciaMeter();
        await ƒS.Character.hide(characters.lucia);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
        showLuciaMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0002);

        let optionsLuciaInfo = {
            good: "Nur zu, jede Information ist hilfreich.",
            bad: "Meinetwegen, aber ganz aus dem Schneider bist du nicht..."
        }

        let optionsLuciaInfoElement = await ƒS.Menu.getInput(optionsLuciaInfo, "dialogoptions");
        ƒS.Sound.play(sound.selectDialog, 1.5, false);

        switch (optionsLuciaInfoElement) {
            case optionsLuciaInfo.good:

                dataForSave.luciaScore += 4;

                break;
            case optionsLuciaInfo.bad:

                dataForSave.luciaScore -= 4;

                break;
        }

        await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0003);
        hideLuciaMeter();
        await ƒS.Character.hide(characters.lucia);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0004);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
        showLuciaMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0004);

        dataForSave.aboutAlibi = true;
        updateNotes();

        hideLuciaMeter();
        await ƒS.Character.hide(characters.lucia);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0005);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
        showLuciaMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0005);

        hideLuciaMeter();
        await ƒS.Character.hide(characters.lucia);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0006);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        await ƒS.update(0.5);

        return "confrontSolasAfterLucia";


    }
}