namespace Template {
    export async function motive(): ƒS.SceneReturn {

        updateNotes();

        let narratorText = {
            Narrator: {
                T0001: "Du triffst pünkltich bei der Probe des Theaterclubs ein. Neben den anderen Mitgliedern sind auch deine Verdächtigen anwesend.",
                T0002: "Mit wem möchtest du sprechen?",
                T0003: "Schnell ein Foto für die Notes...",
                // Lucia
                T0004: "Du begleitest Lucia zur Bibliothek.",
                T0005: "Du begibst dich zusammen mit Lucia zurück in den Theaterraum."
            }
        };

        let atlasText = {
            Atlas: {
                T0001: "... ?",
                T0002: "Nur, dass solche amateurhaften Sabotageversuche das Theaterstück nicht stoppen werden.",
                T0003: "Nein, ich bin sehr beschäftigt. Ich bin Jahrgangsbester und Schulsprecher, wie du vielleicht weißt. Obendrein bin ich Mitglied in mehreren AGs. Der Theaterclub, der Schach-Club, der Kalligraphie-Club... Meinst du wirklich, ich habe Zeit für solche Kindereien?",
                T0004_a: "Na dann kannst du dir jetzt ein Bild machen.",
                T0004_b: "Kusch doch nicht gleich. Gute Ermittler sollten etwas mehr Rückrat zeigen.",
                T0004_2: "Soll ich dir sagen, was ich denke? Verschwundene Skripte, ein zerstörtes Kostüm... Es würde mich nicht wundern, wenn das alles ein bescheuerter Streich wäre. Ernst nehme ich das jedenfalls nicht.",
                T0004_3: "Es sei denn...",
                T0005_a: "Ist das deine Strategie? Du suchst nach Lösungen bei deinen Verdächtigen? Vielleicht solltest du selbst anfangen nachzudenken.",
                T0005_b: "Es sei denn, du selbst hast die Sabotage inszeniert, um dich wichtig zu machen. Naja, wir werden bald sehen, wie viel heiße Luft in deinem Kopf ist...",
                T0006: "Hm... Da wir schon reden, möchte ich dir einen Hinweis geben.",
                T0006_2: "Bitte erzähle nicht herum, dass du das von mir hast. Mir ist mein guter Ruf sehr wichtig. Du verstehst das sicher, so von Schulsprecher zu Stellvertreterin.",
                T0007_1: "Solas macht sich wohl in letzter Zeit viel Druck. Es ist das erste Mal, dass die Schule ein Theaterstück genehmigt hat, das von einem Schüler geschrieben wurde. Normalerweise führt der Theaterclub nur Klassiker auf.",
                T0007_2: "Solas möchte unbedingt, dass alles perfekt läuft. Das Stück ist sein Meisterwerk, so etwas verstehen nur Künstler. Aber er hatte keine Zeit mehr, das Skript zu überarbeiten. Wenn nun jedoch die Premiere verschoben werden müsste...",
                T0007_3: "Du verstehst, worauf ich hinaus will, ja?",
                T0008_a: "Und du bist überraschend scharfzüngig. Na dann, viel Erfolg.",
                T0008_b: "Das kann ja nur schiefgehen..."
            }
        };

        let luciaText = {
            Lucia: {
                T0001: "... ?",
                T0002: "Oh! Gerade passt es schlecht, ich habe etwas in der Bibliothek vergessen, das ich holen gehen wollte... Komm doch einfach mit und wir sprechen dort.",
                T0003: "So, da sind wir schon. Es gibt nichts schöneres als den Geruch alter Bücher, findest du nicht?",
                T0004_a: "Wenn du meinst...",
                T0004_b: "Britische Forscher haben das Aroma alter Bücher einmal beschrieben. Die Duftnote sei eine Kombination aus Gras-Noten, einer Spur Säure und einem Hauch Vanille. So muss Magie riechen.",
                T0005: "Du meinst unser Theaterstück? N-Natürlich. Kira glaubt, dahinter steckt jemand mit einer klaren Intention.",
                T0006: "Ja, drei von uns besitzen einen Schlüssel. Atlas, weil er ungestört Zusatzproben machen möchte. Solas, weil er als Autor und Regisseur von der Vorbereitung bis zur Premiere alles steuert. Und ich, weil ich hin und wieder an der Technik feilen muss.",
                T0007: "Das macht Sinn... Nur hatte ich keinen Zugang. Ich habe meinen Schlüssel vor ein paar Tagen verloren.",
                T0008: "T-Tut mir leid, das kann ich dir auch nicht sagen. Aber ich habe vor kurzem etwas in der Bibliothek gefunden, das für dich von Interesse sein könnte...",
                T0009: "Ich kam neulich hier an, als Atlas seine Sachen gepackt hat. Ich habe mich an seinen Tisch gesetzt und er hat das hier vergessen. Es sieht aus wie eine Seite aus einem Tagebuch.",
                T0010: "Damit hast du wohl Recht. Trotzdem...",
                T0011: "Ich hoffe, ich konnte dir weiterhelfen.",
                T0012_a: "Dann bis bald.",
                T0012_b: "Haha..."
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

        let protagonistToLucia = {
            Protagonist: {
                T0001: "Du bist Lucia, richtig? Könnte ich kurz mit dir reden?",
                T0002: "In Ordnung.",
                T0003_a: "Ganz schön muffig.",
                T0003_b: "Das finde ich auch.",
                T0004: "Worüber ich eigentlich mit dir sprechen wollte... Du hast doch sicher mitbekommen, dass jemand eure Aufführung verhindern möchte.",
                T0005: "Das denke ich auch. Weißt du, Kira hat mich beauftragt, den Saboteur zu entlarven. Du bist eine von wenigen, die uneingeschränkten Zugang zum Theaterraum haben.",
                T0006: "Ich glaube, einer von euch ist für die Sabotage verantwortlich. Niemand sonst hatte eine Gelegenheit.",
                T0007: "Ich verstehe. Wenn das wahr ist, kann ich dich ausschließen. Aber woher weiß ich, ob das stimmt?",
                T0008: "Tatsächlich?",
                T0009_a: "Ein Tagebuch? Das sollte ich nicht lesen, es sind private Gedanken.",
                T0009_b: "Her damit.",
                T00010: "Atlas hat wirklich eine schöne Schrift. Das ist dann wohl sein einziger Vorzug..."
            }
        };

        let startTalk = {
            withAtlas: "Atlas",
            withSolas: "Solas",
            withLucia: "Lucia"
        };

        let dialogoptionsAtlas = {
            iSayA: "Ich kenne deinen Terminkalender nicht.",
            iSayB: "Sorry, ich wollte dich nicht anklagen."
        }
        let dialogoptions2Atlas = {
            iSayA: "Es sei denn... was? Hast du einen Verdacht?",
            iSayB: "Spucks aus, du Angeber."
        }
        let dialogoptions3Atlas = {
            iSayA: "Das war überraschend hilfreich. Ich danke dir.",
            iSayB: "Pff... Alles klar. Und tschüss."
        }
        let dialogoptionsLucia = {
            iSayA: "Ganz schön muffig",
            iSayB: "Das finde ich auch."
        }
        let dialogoptionsLucia2 = {
            iSayA: "Ein Tagebuch? Das sollte ich nicht lesen, es sind private Gedanken.",
            iSayB: "Her damit."
        }
        let dialogoptionsLucia3 = {
            iSayA: "Ja, vielen Dank.",
            iSayB: "Streng dich das nächste Mal bitte etwas mehr an."
        }


        await ƒS.Location.show(locations.classroomDay);
        await ƒS.update(2);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await ƒS.Speech.tell(null, narratorText.Narrator.T0002);

        let loopCount: number = 0;
        let loopLength: number = Object.keys(startTalk).length;

        while (loopCount < loopLength) {
            if(loopCount > 0){
                await ƒS.Speech.tell(null, narratorText.Narrator.T0002);
            }

            let startTalkElement = await ƒS.Menu.getInput(startTalk, "dialogoptions");
            ƒS.Sound.play(sound.selectDialog, 1.5, false); 

            switch (startTalkElement) {
                case startTalk.withAtlas:
                    await ƒS.update(0.5);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);

                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(null, narratorText.Narrator.T0003);
                    await ƒS.update(0.5);

                    await new Promise(resolve => setTimeout(resolve, 500));
                    simulateCameraFlash();
                    dataForSave.atlasPortrait = true;
                    updateNotes();

                    await ƒS.update(0.2);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.angry, ƒS.positionPercent(75, 97));
                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                    await ƒS.update(1);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0001);
                    await ƒS.update(0.5);

                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = true);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0001);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0002);
                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = true);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0003);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0003);

                    let dialogoptionsAtlasElement = await ƒS.Menu.getInput(dialogoptionsAtlas, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false); 

                    switch (dialogoptionsAtlasElement) {
                        case dialogoptionsAtlas.iSayA:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.playful, ƒS.positionPercent(75, 97));
                            document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                            dataForSave.atlasScore += 10;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004_a);
                            await ƒS.update(0.5);
                            break;
                        case dialogoptionsAtlas.iSayB:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.angry, ƒS.positionPercent(75, 97));
                            document.getElementsByName("atlasScore").forEach(meterChildren => meterChildren.hidden = false);
                            dataForSave.atlasScore -= 10;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004_b);
                            await ƒS.update(0.5);
                    }

                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                    await ƒS.update(0.5);

                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004_2);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004_3);

                    let dialogoptions2AtlasElement = await ƒS.Menu.getInput(dialogoptions2Atlas, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false); 

                    await ƒS.update(0.5);

                    switch (dialogoptions2AtlasElement) {
                        case dialogoptions2Atlas.iSayA:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.playful, ƒS.positionPercent(75, 97));
                            document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                            dataForSave.atlasScore -= 10;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0005_a);
                            await ƒS.update(0.5);
                            break;
                        case dialogoptions2Atlas.iSayB:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.playful, ƒS.positionPercent(75, 97));
                            document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                            dataForSave.atlasScore += 10;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0005_b);
                            await ƒS.update(0.5);
                    }

                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = true);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);
                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.angry, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0006);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.happy, ƒS.positionPercent(75, 97));
                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0006);
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0006_2);
                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = true);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0007);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0007_1);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0007_2);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0007_3);
                    await ƒS.update(0.5);

                    dataForSave.solasMotive = true;
                    updateNotes();

                    let dialogoptionsAtlasElement3 = await ƒS.Menu.getInput(dialogoptions3Atlas, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false); 

                    switch (dialogoptionsAtlasElement3) {
                        case dialogoptions3Atlas.iSayA:         
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.playful, ƒS.positionPercent(75, 97));
                            document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                            dataForSave.atlasScore += 5;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0008_a);
                            await ƒS.update(0.5);
                            break;
                        case dialogoptions3Atlas.iSayB:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.angry, ƒS.positionPercent(75, 97));
                            document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
                            dataForSave.atlasScore -= 5;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0008_b);
                            await ƒS.update(0.5);
                    }

                    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = true);
                    
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    ƒS.Speech.clear();
                    ƒS.Speech.hide();

                    delete startTalk.withAtlas;
                    break;

                case startTalk.withSolas:
                    delete startTalk.withSolas;
                    break;

                case startTalk.withLucia:
                    // go to library with her
                    await ƒS.update(0.5);
                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(null, narratorText.Narrator.T0003);
                    await ƒS.update(0.5);

                    await new Promise(resolve => setTimeout(resolve, 500));
                    simulateCameraFlash();
                    dataForSave.luciaPortrait = true;
                    updateNotes();

                    await ƒS.update(0.2);
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
                    await ƒS.update(1);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0001);
                    await ƒS.update(0.5);

                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0001);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0002);
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0002);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Speech.tell(null, narratorText.Narrator.T0004);
                    await ƒS.update(0.5);

                    // LIBRARY
                    await ƒS.Location.show(locations.library);
                    await ƒS.update(transition.waves.duration, transition.waves.alpha, transition.waves.edge);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0003);
                    await ƒS.update(0.5);

                    let dialogoptionsLuciaElement = await ƒS.Menu.getInput(dialogoptionsLucia, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false); 

                    await ƒS.update(0.5);

                    switch (dialogoptionsLuciaElement) {
                        case dialogoptionsLucia.iSayA:
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.Character.show(characters.lucia, characters.lucia.pose.sad, ƒS.positionPercent(75, 97));
                            dataForSave.luciaScore -= 30;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0004_a);
                            await ƒS.update(0.5);
                            break;
                        case dialogoptionsLucia.iSayB:
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.Character.show(characters.lucia, characters.lucia.pose.smiling, ƒS.positionPercent(75, 97));
                            dataForSave.luciaScore += 10;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0004_b);
                            await ƒS.update(0.5);
                    }

                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);

                    ƒS.Speech.clear();
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0004);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0005);
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0005);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0006);
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);
   
                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0006);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0007);

                    dataForSave.luciaOpportunity = true;
                    updateNotes();

                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0007);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0008);
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0008);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0009);

                    let dialogoptionsLuciaElement2 = await ƒS.Menu.getInput(dialogoptionsLucia2, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false); 

                    await ƒS.update(0.5);

                    switch (dialogoptionsLuciaElement2) {
                        case dialogoptionsLucia2.iSayA:
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
                            dataForSave.luciaScore -= 5;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0010);
                            await ƒS.update(0.5);
                            await ƒS.Character.hide(characters.lucia);

                            dataForSave.atlasMotive = true;
                            updateNotes();
                            break;
                        case dialogoptionsLucia2.iSayB:
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                            dataForSave.luciaScore += 5;

                            ƒS.Speech.clear();

                            let diaryPage: string = "<div class='diaryPage'>\
                            <p>Mein Tagebuch,</p>\
                            <p>ich muss zugeben, dass ich frustriert bin. Sollen meine Bemühungen umsonst gewesen sein?</p>\
                            <p>Jeder mit Augen im Kopf muss doch erkennen, dass ich mit Abstand der beste Schüler an dieser Schule bin... Trotzdem droht der Titel des Jahrgangsbesten mir nun abhanden zu kommen.</p>\
                            <p>Ausgerechnet die stellvertretende Schulsprecherin macht mir Konkurrenz. Dabei erhalte ich die Auszeichnung jedes Schuljahr mit Leichtigkeit, also wie konnte es dazu kommen? Habe ich mich mit dem Amt des Schulsprechers und den vielen AGs etwa übernommen?</p>\
                            <p>Ich wünschte, meine Stellvertreterin stünde unter demselben Druck wie ich. Dann würden faire Bedingungen herrschen.</p>\
                            <p style='text-align: right'>Gezeichnet, Atlas.</p>\
                            </div>";

                            ƒS.Text.setClass("diaryPageWrapper");
                            let close = { done: "x" };
                            let choice: string;
                            do {
                              ƒS.Text.print(diaryPage);
                              choice = await ƒS.Menu.getInput(close, "pageclose");
                            } while (choice != close.done);
                            ƒS.Text.close();

                            dataForSave.atlasDiary = true;
                            
                            await ƒS.update(0.5);

                            dataForSave.atlasMotive = true;
                            updateNotes();
        
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.update(0.5);
                            document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);
        
                            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T00010);
                            await ƒS.Character.hide(characters.protagonist);
                            await ƒS.update(0.5);
                    }

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
                    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
                    await ƒS.update(0.5);

                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0011);
                    await ƒS.update(0.5);

                    let dialogoptionsLuciaElement3 = await ƒS.Menu.getInput(dialogoptionsLucia3, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false); 

                    await ƒS.update(0.5);

                    switch (dialogoptionsLuciaElement3) {
                        case dialogoptionsLucia3.iSayA:
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.Character.show(characters.lucia, characters.lucia.pose.smiling, ƒS.positionPercent(75, 97));
                            dataForSave.luciaScore += 5;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0012_a);
                            await ƒS.update(0.5);
                            document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.update(0.5);
                            break;
                        case dialogoptionsLucia3.iSayB:
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.Character.show(characters.lucia, characters.lucia.pose.sad, ƒS.positionPercent(75, 97));
                            dataForSave.luciaScore -= 5;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0012_b);
                            await ƒS.update(0.5);
                            document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.update(0.5);
                    }

                    await ƒS.Speech.tell(null, narratorText.Narrator.T0005);

                    // CLUB ROOM
                    await ƒS.Location.show(locations.classroomDay);
                    await ƒS.update(transition.waves.duration, transition.waves.alpha, transition.waves.edge);
                    
                    delete startTalk.withLucia;
                    break;
            }
            loopCount++;
        }

    }
}