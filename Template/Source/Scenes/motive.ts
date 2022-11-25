namespace Template {
    export async function motive(): ƒS.SceneReturn {

        updateNotes();

        let narratorText = {
            Narrator: {
                T0001: "Du triffst pünkltich bei der Probe des Theaterclubs ein. Neben den anderen Mitgliedern sind auch deine Verdächtigen anwesend.",
                T0002: "Mit wem möchtest du sprechen?",
                T0003: "Schnell ein Foto für die Notes..."
            }
        };

        let atlasText = {
            Atlas: {
                T0001: "... ?",
                T0002: "Nur, dass solche amateurhaften Sabotageversuche das Theaterstück nicht stoppen werden.",
                T0003: "Nein, ich bin sehr beschäftigt. Ich bin Jahrgangsbester und Schulsprecher, wie du vielleicht weißt. Obendrein bin ich Mitglied in mehreren AGs. Der Theaterclub, der Schach-Club, der Kalligraphie-Club... Meinst du wirklich, ich habe Zeit für solche Kindereien?",
                T0004_a: "Na dann kannst du dir jetzt ein Bild machen.",
                T0004_b: "Kusch doch nicht gleich. Gute Ermittler sollten etwas mehr Rückrat zeigen.",
                T0004_2: "Soll ich dir sagen, was ich denke? Verschwundene Skripte, ein zerstörtes Kostüm... Ich glaube, bei dieser vermeintlichen Sabotage handelt es sich um einen bescheuerten Streich.",
                T0004_3: "Es sei denn...",
                T0005_a: "Ist das deine Strategie? Du suchst nach Lösungen bei deinen Verdächtigen? Vielleicht solltest du selbst anfangen nachzudenken.",
                T0005_b: "Es sei denn, du selbst hast die Sabotage inszeniert, um dich wichtig zu machen. Naja, wir werden bald sehen, wie viel heiße Luft in deinem Kopf ist...",
                T0006: "Hm... Da wir schon reden, möchte ich dir doch noch einen Hinweis geben.",
                T0006_2: "Bitte erzähle nicht herum, dass du das von mir hast. Mir ist mein guter Ruf sehr wichtig. Du verstehst das sicher, so von Schulsprecher zu Stellvertreterin.",
                T0007_1: "Solas macht sich wohl in letzter Zeit viel Druck. Es ist das erste Mal, dass die Schule ein Theaterstück genehmigt hat, das von einem Schüler geschrieben wurde. Normalerweise führt der Theaterclub nur Klassiker auf.",
                T0007_2: "Solas möchte unbedingt, dass alles perfekt läuft. Das Stück ist sein Meisterwerk, so etwas verstehen nur Künstler. Aber er hatte keine Zeit mehr, das Skript zu überarbeiten. Wenn nun jedoch die Premiere verschoben werden müsste...",
                T0007_3: "Du verstehst, worauf ich hinaus will, ja?",
                T0008_a: "Und du bist überraschend scharfzüngig. Na dann, viel Erfolg.",
                T0008_b: "Das kann ja nur schiefgehen..."
            }
        };

        let protagonistToAtlas = {
            Protagonist: {
                T0001: "Hallo, ich höre mich nur ein wenig um. Jemand hat es wohl auf den Theaterclub abgesehen und möchte eure Aufführung verhindern. Weißt du etwas darüber?",
                T0003: "Dann hast du nichts damit zu tun?",
                T0004_a: "Ich kenne deinen Terminkalender nicht.",
                T0004_b: "Sorry, ich wollte dich nicht anklagen.",
                T0005_a: "Es sei denn... was? Hast du einen Verdacht?",
                T0005_b: "Spucks aus, du Angeber.",
                T0006: "Wars das?",
                T0007: "Ich höre?",
                T0008_a: "Das war überraschend hilfreich. Ich danke dir.",
                T0008_b: "Pff... Alles klar. Und tschüss."
            }
        };

        let startTalk = {
            withAtlas: "Atlas",
            withSolas: "Solas",
            withLucia: "Lucia"
        };

        let dialogoptions = {
            iSayA: "Ich kenne deinen Terminkalender nicht.",
            iSayB: "Sorry, ich wollte dich nicht anklagen."
        }
        let dialogoptions2 = {
            iSayA: "Es sei denn... was? Hast du einen Verdacht?",
            iSayB: "Spucks aus, du Angeber."
        }
        let dialogoptions3 = {
            iSayA: "Das war überraschend hilfreich. Ich danke dir.",
            iSayB: "Pff... Alles klar. Und tschüss."
        }


        await ƒS.Location.show(locations.classroomDay);
        await ƒS.update(2);

        await ƒS.Speech.tell(characters.narrator, narratorText.Narrator.T0001);
        await ƒS.Speech.tell(characters.narrator, narratorText.Narrator.T0002);

        let loopCount: number = 0;
        let loopLength: number = Object.keys(startTalk).length;

        while (loopCount < loopLength) {
            if(loopCount > 0){
                await ƒS.Speech.tell(characters.narrator, narratorText.Narrator.T0002);
            }

            let startTalkElement = await ƒS.Menu.getInput(startTalk, "dialogoptions");
            ƒS.Sound.play(sound.selectDialog, 1.5, false); 

            switch (startTalkElement) {
                case startTalk.withAtlas:
                    await ƒS.update(0.5);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.narrator, narratorText.Narrator.T0003);
                    await ƒS.update(0.5);

                    await new Promise(resolve => setTimeout(resolve, 500));
                    simulateCameraFlash();
                    dataForSave.atlasPortrait = true;
                    updateNotes();

                    await ƒS.update(0.2);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.angry, ƒS.positionPercent(75, 97));
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    await ƒS.update(1);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0001);
                    await ƒS.update(0.5);

                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0001);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0002);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0003);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0003);

                    let dialogoptionsElement = await ƒS.Menu.getInput(dialogoptions, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false); 

                    switch (dialogoptionsElement) {
                        case dialogoptions.iSayA:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.playful, ƒS.positionPercent(75, 97));
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004_a);
                            await ƒS.update(0.5);
                            break;
                        case dialogoptions.iSayB:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.angry, ƒS.positionPercent(75, 97));
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004_b);
                            await ƒS.update(0.5);
                    }

                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    await ƒS.update(0.5);

                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004_2);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004_3);

                    let dialogoptionsElement2 = await ƒS.Menu.getInput(dialogoptions2, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false); 

                    await ƒS.update(0.5);

                    switch (dialogoptionsElement2) {
                        case dialogoptions2.iSayA:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.playful, ƒS.positionPercent(75, 97));
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0005_a);
                            await ƒS.update(0.5);
                            break;
                        case dialogoptions2.iSayB:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0005_b);
                            await ƒS.update(0.5);
                    }

                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);
                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.angry, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0006);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.happy, ƒS.positionPercent(75, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0006);
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0006_2);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0007);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0007_1);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0007_2);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0007_3);
                    await ƒS.update(0.5);

                    dataForSave.solasMotive = true;
                    updateNotes();

                    let dialogoptionsElement3 = await ƒS.Menu.getInput(dialogoptions3, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false); 

                    switch (dialogoptionsElement3) {
                        case dialogoptions3.iSayA:         
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.playful, ƒS.positionPercent(75, 97));
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0008_a);
                            await ƒS.update(0.5);
                            break;
                        case dialogoptions3.iSayB:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.angry, ƒS.positionPercent(75, 97));
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0008_b);
                            await ƒS.update(0.5);
                    }

                    ƒS.Speech.hide();
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    delete startTalk.withAtlas;
                    break;
                case startTalk.withSolas:
                    delete startTalk.withSolas;
                    break;
                case startTalk.withLucia:
                    // go to library with her
                    // go back to classroom after
                    delete startTalk.withLucia;
                    break;
            }
            loopCount++;
        }
        
    }
}