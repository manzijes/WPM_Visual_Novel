namespace BehindTheScenes {
    export async function motive(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let narratorText = {
            Narrator: {
                T0001: "Du triffst pünktlich bei der Probe des Theaterclubs ein. Neben den anderen Mitgliedern sind auch deine Verdächtigen anwesend.",
                T0002: "Mit wem möchtest du sprechen?",
                T0003: "Schnell ein Foto für die Notes...",
                T0004: "Du begleitest Lucia zur Bibliothek.",
                T0005: "Du begibst dich zusammen mit Lucia zurück in den Theaterraum."
            }
        };

        // Suspects Texts

        let atlasText = {
            Atlas: {
                T0001: "... ?",
                T0002: "Nur, dass solche amateurhaften Sabotageversuche das Theaterstück nicht stoppen werden.",
                T0003: "Nein, ich bin sehr beschäftigt. Ich bin Jahrgangsbester und Schulsprecher, wie du vielleicht weißt. Obendrein bin ich Mitglied in mehreren AGs. Der Theaterclub, der Schach-Club, der Kalligraphie-Club... Meinst du wirklich, ich habe Zeit für solche Kindereien?",
                T0004_good: "Na dann kannst du dir jetzt ein Bild machen.",
                T0004_bad: "Kusch doch nicht gleich. Gute Ermittler sollten etwas mehr Rückrat zeigen.",
                T0004_2: "Soll ich dir sagen, was ich denke? Verschwundene Skripte, ein zerstörtes Kostüm... Es würde mich nicht wundern, wenn das alles ein bescheuerter Streich wäre. Ernst nehme ich das jedenfalls nicht.",
                T0004_3: "Es sei denn...",
                T0005_bad: "Ist das deine Strategie? Du suchst nach Lösungen bei deinen Verdächtigen? Vielleicht solltest du selbst anfangen nachzudenken.",
                T0005_good: "Es sei denn, du selbst hast die Sabotage inszeniert, um dich wichtig zu machen. Naja, wir werden bald sehen, wie viel heiße Luft in deinem Kopf ist...",
                T0006: "Hm... Da wir schon reden, möchte ich dir einen Hinweis geben.",
                T0006_2: "Bitte erzähle nicht herum, dass du das von mir hast. Mir ist mein guter Ruf sehr wichtig. Du verstehst das sicher, so von Schulsprecher zu Stellvertreterin.",
                T0007_1: "Solas macht sich wohl in letzter Zeit viel Druck. Es ist das erste Mal, dass die Schule ein Theaterstück genehmigt hat, das von einem Schüler geschrieben wurde. Normalerweise führt der Theaterclub nur Klassiker auf.",
                T0007_2: "Solas möchte unbedingt, dass alles perfekt läuft. Das Stück ist sein Meisterwerk, so etwas verstehen nur Künstler. Aber er hatte keine Zeit mehr, das Skript zu überarbeiten. Wenn nun jedoch die Premiere verschoben werden müsste...",
                T0007_3: "Du verstehst, worauf ich hinaus will, ja?",
                T0008_good: "Und du bist überraschend scharfzüngig. Na dann, viel Erfolg.",
                T0008_bad: "Das kann ja nur schiefgehen..."
            }
        };

        let luciaText = {
            Lucia: {
                T0001: "... ?",
                T0002: "Oh! Gerade passt es schlecht, ich habe etwas in der Bibliothek vergessen, das ich holen gehen wollte... Komm doch einfach mit und wir sprechen dort.",
                T0003: "So, da sind wir schon. Es gibt nichts schöneres als den Geruch alter Bücher, findest du nicht?",
                T0004_bad: "Wenn du meinst...",
                T0004_good: "Britische Forscher haben das Aroma alter Bücher einmal beschrieben. Die Duftnote sei eine Kombination aus Gras-Noten, einer Spur Säure und einem Hauch Vanille. So muss Magie riechen.",
                T0005: "Du meinst unser Theaterstück? N-Natürlich. Kira glaubt, dahinter steckt jemand mit einer klaren Intention.",
                T0006: "Ja, drei von uns besitzen einen Schlüssel. Atlas, weil er ungestört Zusatzproben machen möchte. Solas, weil er als Autor und Regisseur von der Vorbereitung bis zur Premiere alles steuert. Und ich, weil ich hin und wieder an der Technik feilen muss.",
                T0007: "Das macht Sinn... Nur hatte ich keinen Zugang. Ich habe meinen Schlüssel vor ein paar Tagen verloren.",
                T0008: "T-Tut mir leid, das kann ich dir auch nicht sagen. Aber ich habe vor kurzem etwas in der Bibliothek gefunden, das für dich von Interesse sein könnte...",
                T0009: "Ich kam neulich hier an, als Atlas seine Sachen gepackt hat. Ich habe mich an seinen Tisch gesetzt und er hat das hier vergessen. Es sieht aus wie eine Seite aus einem Tagebuch.",
                T0010: "Damit hast du wohl Recht. Trotzdem...",
                T0011: "Ich hoffe, ich konnte dir weiterhelfen.",
                T0012_good: "Dann bis bald.",
                T0012_bad: "Haha..."
            }
        };

        let solasText = {
            Solas: {
                T0001: "Oh?",
                T0002: "Was ich darüber denke? Nun... Es ist keine schöne Sache, nicht wahr? Ich habe mein  Herz in dieses Stück gesteckt.",
                T0003: "Ja, natürlich. Wir haben sofort neue Skripte für jeden gedruckt. Es war trotzdem lästig, weil ich Notizen auf mein Skript geschrieben hatte. Anmerkungen und solche Sachen. Die sind jetzt leider verloren.",
                T0004: "Ich kann mir vorstellen, wieso. Nur drei Mitglieder haben Zugang zum Theaterraum außerhalb der Proben. Darf ich auch ehrlich mit dir sein?",
                T0005_bad: "Dass jemand das Stück sabotieren will, kann ich nicht nachvollziehen, aber es inspiriert mich auch. Was steckt dahinter, wenn jemand zu solchen Mitteln greift? Ich denke es ist Verzweiflung.",
                T0005_good: "Irgendwie habe ich Mitleid mit der Person, die dahinter steckt. Unter der Oberfläche entpuppt sich jedes noch so triviale Motiv als Ausdruck für etwas Tieferes, denkst du nicht?",
                T0006: "Nun ja... Ich möchte niemanden anschwärzen, aber Lucia spricht viel über den Theaterclub. Leider nicht viel Gutes. Warte, ich zeige dir ein Beispiel, damit du weißt, was ich meine.",
                T0007: "Das muss noch nichts heißen. In dubio pro reo.",
                T0008_good: "Ich bin zuversichtlich, dass am Ende die Wahrheit übrig sein wird.",
                T0008_bad: "Mir ist entgangen, dass das mein Problem ist.",
                T0009: "Denk daran. Wichtiger als die Fakten, sind die Menschen. Manchmal trügt der Schein... und manchmal sind die Leute genau so, wie sie auf den ersten Blick anmuten.",
                T0010_good: "Auf Wiedersehen.",
                T0010_bad: "Ciao."
            }
        }

        // Protagonist Texts

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
                T0004: "Ja... Worüber ich eigentlich mit dir sprechen wollte... Du hast doch sicher mitbekommen, dass jemand eure Aufführung verhindern möchte.",
                T0005: "Das denke ich auch. Weißt du, Kira hat mich beauftragt, den Saboteur zu entlarven. Du bist eine von wenigen, die uneingeschränkten Zugang zum Theaterraum haben.",
                T0006: "Ich glaube, einer von euch ist für die Sabotage verantwortlich. Niemand sonst hatte eine Gelegenheit.",
                T0007: "Ich verstehe. Wenn das wahr ist, kann ich dich ausschließen. Aber woher weiß ich, ob das stimmt?",
                T0008: "Tatsächlich?",
                T0009_a: "Ein Tagebuch? Das sollte ich nicht lesen, es sind private Gedanken.",
                T0009_b: "Her damit.",
                T00010: "Atlas hat wirklich eine schöne Schrift... und er mag mich nicht, weil ich ihm den Titel des Jahrgangsbesten streitig mache. Interessant."
            }
        };

        let protagonistToSolas = {
            Protagonist: {
                T0001: "Hey, ich würde gerne mal mit dir reden. Kurz und knapp: Was denkst du über die Sabotage eures Theaterstücks?",
                T0002: "Das tut mir leid. Dass die Skripte verschwunden sind, ist ärgerlich, aber du hast das Original bestimmt digital gespeichert, oder?",
                T0003: "Ich verstehe... Darf ich ehrlich mit dir sein? Ich versuche herauszufinden, wer dahinter steckt. Drei Leute sind verdächtig, darunter auch du.",
                T0004_a: "Here we go.",
                T0004_b: "Natürlich.",
                T0005: "Das... kann gut sein. Du bist ein interessanter Typ, weißt du das? Hast du womöglich einen Hinweis darauf, wer der Täter sein könnte?",
                T0006: "Lucia hat offenbar eine Menge negative Gefühle angestaut...",
                T0007_a: "Ich finde dich sehr verdächtig.",
                T0007_b: "Macht es dich nicht nervös, dass du unter Verdacht stehst?",
                T0008_a: "Nun gut. Bis bald.",
                T0008_b: "Du machst mich irre. Ciao!"
            }
        };

        // Dialog Options to start talk (to be called in while loop)
        let startTalk = {
            withAtlas: "Atlas",
            withSolas: "Solas",
            withLucia: "Lucia"
        };

        // Atlas Dialog Options
        let optionsAtlasBusy = {
            good: "Ich kenne deinen Terminkalender nicht.",
            bad: "Sorry, ich wollte dich nicht anklagen."
        }
        let optionsAtlasUnless = {
            bad: "Es sei denn... was? Hast du einen Verdacht?",
            good: "Spucks aus, du Angeber."
        }
        let optionsAtlasGoodbye = {
            good: "Das war überraschend hilfreich. Ich danke dir.",
            bad: "Pff... Alles klar. Und tschüss."
        }

        // Lucia Dialog Options
        let optionsLuciaBooks = {
            bad: "Ganz schön muffig",
            good: "Das finde ich auch."
        }
        let optionsLuciaDiary = {
            bad: "Ein Tagebuch? Das sollte ich nicht lesen, es sind private Gedanken.",
            good: "Her damit."
        }
        let optionsLuciaGoodbye = {
            good: "Ja, vielen Dank.",
            bad: "Streng dich das nächste Mal bitte etwas mehr an."
        }

        // Solas Dialog Options
        let optionsSolasHonest = {
            bad: "Here we go.",
            good: "Natürlich."
        }
        let optionsSolasSuspect = {
            bad: "Ich finde dich sehr verdächtig.",
            good: "Macht es dich nicht nervös, dass du unter Verdacht stehst?"
        }
        let optionsSolasGoodbye = {
            good: "Nun gut. Bis bald.",
            bad: "Du machst mich irre. Ciao!"
        }

        await ƒS.Location.show(locations.classroomDay);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        await ƒS.update(0.5);

        let loopCount: number = 0;
        let loopLength: number = Object.keys(startTalk).length;

        while (loopCount < loopLength) {
            if (loopCount > 0) {
                await ƒS.Speech.tell(null, narratorText.Narrator.T0002);
            }

            let startTalkElement = await ƒS.Menu.getInput(startTalk, "dialogoptions");
            ƒS.Sound.play(sound.selectDialog, 1.5, false);

            switch (startTalkElement) {
                // CASE Talk To Atlas
                case startTalk.withAtlas:
                    await ƒS.update(0.5);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    showAtlasMeter();

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
                    showAtlasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    showAtlasMeter();
                    await ƒS.update(1);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0001);
                    await ƒS.update(0.5);

                    hideAtlasMeter();
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0001);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    showAtlasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0002);
                    hideAtlasMeter();
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0003);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    showAtlasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0003);

                    let optionsAtlasBusyElement = await ƒS.Menu.getInput(optionsAtlasBusy, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false);

                    switch (optionsAtlasBusyElement) {
                        case optionsAtlasBusy.good:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.playful, ƒS.positionPercent(75, 97));
                            showAtlasMeter();
                            dataForSave.atlasScore += 14;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004_good);
                            await ƒS.update(0.5);
                            break;
                        case optionsAtlasBusy.bad:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.angry, ƒS.positionPercent(75, 97));
                            document.getElementsByName("atlasScore").forEach(meterChildren => meterChildren.hidden = false);
                            dataForSave.atlasScore -= 9;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004_bad);
                            await ƒS.update(0.5);
                    }

                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    showAtlasMeter();
                    await ƒS.update(0.5);

                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004_2);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004_3);

                    let optionsAtlasUnlessElement = await ƒS.Menu.getInput(optionsAtlasUnless, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false);

                    await ƒS.update(0.5);

                    switch (optionsAtlasUnlessElement) {
                        case optionsAtlasUnless.bad:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.playful, ƒS.positionPercent(75, 97));
                            showAtlasMeter();
                            dataForSave.atlasScore -= 10;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0005_bad);
                            await ƒS.update(0.5);
                            break;
                        case optionsAtlasUnless.good:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.playful, ƒS.positionPercent(75, 97));
                            showAtlasMeter();
                            dataForSave.atlasScore += 10;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0005_good);
                            await ƒS.update(0.5);
                    }

                    hideAtlasMeter();
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);
                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.angry, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0006);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    showAtlasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0006);
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.happy, ƒS.positionPercent(75, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0006_2);

                    hideAtlasMeter();
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToAtlas.Protagonist.T0007);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    showAtlasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0007_1);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0007_2);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0007_3);
                    await ƒS.update(0.5);

                    dataForSave.solasMotive = true;
                    updateNotes();

                    let optionsAtlasGoodbyeElement = await ƒS.Menu.getInput(optionsAtlasGoodbye, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false);

                    switch (optionsAtlasGoodbyeElement) {
                        case optionsAtlasGoodbye.good:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.playful, ƒS.positionPercent(75, 97));
                            showAtlasMeter();
                            dataForSave.atlasScore += 5;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0008_good);
                            await ƒS.update(0.5);
                            break;
                        case optionsAtlasGoodbye.bad:
                            await ƒS.Character.hide(characters.atlas);
                            await ƒS.Character.show(characters.atlas, characters.atlas.pose.angry, ƒS.positionPercent(75, 97));
                            showAtlasMeter();
                            dataForSave.atlasScore -= 5;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0008_bad);
                            await ƒS.update(0.5);
                    }

                    hideAtlasMeter();

                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    delete startTalk.withAtlas;
                    break;

                // CASE Talk To Solas
                case startTalk.withSolas:
                    await ƒS.update(0.5);
                    await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
                    showSolasMeter();

                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(null, narratorText.Narrator.T0003);
                    await ƒS.update(0.5);

                    await new Promise(resolve => setTimeout(resolve, 500));
                    simulateCameraFlash();
                    dataForSave.solasPortrait = true;
                    updateNotes();

                    await ƒS.update(0.2);
                    await ƒS.Character.hide(characters.solas);
                    await ƒS.Character.show(characters.solas, characters.solas.pose.confused, ƒS.positionPercent(75, 97));
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.solas);
                    await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
                    await ƒS.update(1);
                    await ƒS.Speech.tell(characters.solas, solasText.Solas.T0001);
                    await ƒS.update(0.5);

                    hideSolasMeter();
                    await ƒS.Character.hide(characters.solas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToSolas.Protagonist.T0001);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
                    showSolasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.solas, solasText.Solas.T0002);

                    hideSolasMeter();
                    await ƒS.Character.hide(characters.solas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToSolas.Protagonist.T0002);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
                    showSolasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.solas, solasText.Solas.T0003);

                    hideSolasMeter();
                    await ƒS.Character.hide(characters.solas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToSolas.Protagonist.T0003);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
                    showSolasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.solas, solasText.Solas.T0004);

                    let optionsSolasHonestElement = await ƒS.Menu.getInput(optionsSolasHonest, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false);
                    await ƒS.update(0.5);

                    switch (optionsSolasHonestElement) {
                        case optionsSolasHonest.bad:
                            await ƒS.Character.hide(characters.solas);
                            await ƒS.Character.show(characters.solas, characters.solas.pose.unhappy, ƒS.positionPercent(75, 97));
                            dataForSave.solasScore -= 10;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0005_bad);
                            await ƒS.update(0.5);
                            break;
                        case optionsSolasHonest.good:
                            await ƒS.Character.hide(characters.solas);
                            await ƒS.Character.show(characters.solas, characters.solas.pose.thoughtful, ƒS.positionPercent(75, 97));
                            dataForSave.solasScore += 10;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0005_good);
                            await ƒS.update(0.5);
                            break;
                    }

                    hideSolasMeter();
                    await ƒS.Character.hide(characters.solas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToSolas.Protagonist.T0005);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
                    showSolasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.solas, solasText.Solas.T0006);

                    closeSuspects();

                    let diaryPage: string = '\
                        <div class="content">\
                            <div class="chatcontainer">\
                                <p class="chatname">Lucia:</p>\
                                <p>Ich bin es einfach leid tbh 😑 Ich gebe alles für diesen Club, aber höre ich mal ein Danke? Nein.</p>\
                                <span class="time-right">11:00</span>\
                            </div>\
                            \
                            <div class="chatcontainer darker">\
                                <p class="chatname">Solas:</p>\
                                <p>Das tut mir leid 😣</p>\
                                <span class="time-right">11:01</span>\
                            </div>\
                            \
                            <div class="chatcontainer">\
                                <p class="chatname">Lucia:</p>\
                                <p>Es liegt einfach daran, dass ich hinter den Kulissen arbeite. Nur, weil ich nicht als ⭐Star⭐ auf der Bühne stehe, werde ich von den anderen wie Luft behandelt.</p>\
                                <span class="time-right">11:02</span>\
                            </div>\
                            \
                            <div class="chatcontainer">\
                                <p class="chatname">Lucia:</p>\
                                <p>Ich will eigentlich nur etwas Wertschätzung..</p>\
                                <span class="time-right">11:02</span>\
                            </div>\
                            \
                            <div class="chatcontainer darker">\
                                <p class="chatname">Solas:</p>\
                                <p>Das wird schon 🌞 In zwei Tagen ist die Premiere! Wenn am Ende alle applaudieren, stehen auch du und ich auf der Bühne.</p>\
                                <span class="time-right">11:05</span>\
                            </div>\
                    </div>';

                    ƒS.Text.setClass("smartphone blendin");
                    ƒS.Text.print(diaryPage);
                    await ƒS.Speech.tell(null, "...");

                    dataForSave.luciaMotive = true;
                    updateNotes();

                    hideSolasMeter();
                    await ƒS.Character.hide(characters.solas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToSolas.Protagonist.T0006);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
                    showSolasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.solas, solasText.Solas.T0007);

                    let optionsSolasSuspectElement = await ƒS.Menu.getInput(optionsSolasSuspect, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false);
                    await ƒS.update(0.5);

                    switch (optionsSolasSuspectElement) {
                        case optionsSolasSuspect.bad:
                            await ƒS.Character.hide(characters.solas);
                            await ƒS.Character.show(characters.solas, characters.solas.pose.upset, ƒS.positionPercent(75, 97));
                            dataForSave.solasScore -= 20;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0008_bad);
                            await ƒS.update(0.5);
                            break;
                        case optionsSolasSuspect.good:
                            await ƒS.Character.hide(characters.solas);
                            await ƒS.Character.show(characters.solas, characters.solas.pose.happy, ƒS.positionPercent(75, 97));
                            dataForSave.solasScore += 10;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0008_good);
                            await ƒS.update(0.5);
                            break;
                    }

                    await ƒS.Character.hide(characters.solas);
                    await ƒS.Character.show(characters.solas, characters.solas.pose.neutral, ƒS.positionPercent(75, 97));
                    showSolasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.solas, solasText.Solas.T0009);

                    let optionsSolasGoodbyeElement = await ƒS.Menu.getInput(optionsSolasGoodbye, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false);
                    await ƒS.update(0.5);

                    switch (optionsSolasGoodbyeElement) {
                        case optionsSolasGoodbye.bad:
                            await ƒS.Character.hide(characters.solas);
                            await ƒS.Character.show(characters.solas, characters.solas.pose.sad, ƒS.positionPercent(75, 97));
                            dataForSave.solasScore -= 5;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0010_bad);
                            await ƒS.update(0.5);
                            break;
                        case optionsSolasGoodbye.good:
                            await ƒS.Character.hide(characters.solas);
                            await ƒS.Character.show(characters.solas, characters.solas.pose.happy, ƒS.positionPercent(75, 97));
                            dataForSave.solasScore += 5;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.solas, solasText.Solas.T0010_good);
                            await ƒS.update(0.5);
                            break;
                    }

                    hideSolasMeter();
                    await ƒS.Character.hide(characters.solas);
                    await ƒS.update(0.5);

                    delete startTalk.withSolas;
                    break;

                // CASE Talk To Lucia
                case startTalk.withLucia:
                    // go to library with her
                    await ƒS.update(0.5);
                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
                    showLuciaMeter();
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
                    showLuciaMeter();
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
                    await ƒS.update(1);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0001);
                    await ƒS.update(0.5);

                    hideLuciaMeter();
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0001);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
                    showLuciaMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0002);
                    hideLuciaMeter();
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
                    showLuciaMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0003);
                    await ƒS.update(0.5);

                    let optionsLuciaBooksElement = await ƒS.Menu.getInput(optionsLuciaBooks, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false);

                    await ƒS.update(0.5);

                    switch (optionsLuciaBooksElement) {
                        case optionsLuciaBooks.bad:
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.Character.show(characters.lucia, characters.lucia.pose.sad, ƒS.positionPercent(75, 97));
                            dataForSave.luciaScore -= 30;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0004_bad);
                            await ƒS.update(0.5);
                            break;
                        case optionsLuciaBooks.good:
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.Character.show(characters.lucia, characters.lucia.pose.smiling, ƒS.positionPercent(75, 97));
                            dataForSave.luciaScore += 7;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0004_good);
                            await ƒS.update(0.5);
                    }

                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);

                    ƒS.Speech.clear();
                    hideLuciaMeter();

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0004);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                    showLuciaMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0005);
                    hideLuciaMeter();
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0005);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                    showLuciaMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0006);
                    hideLuciaMeter();
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0006);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                    showLuciaMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0007);

                    dataForSave.luciaOpportunity = true;
                    updateNotes();

                    hideLuciaMeter();
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0007);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                    showLuciaMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0008);
                    hideLuciaMeter();
                    await ƒS.Character.hide(characters.lucia);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T0008);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                    showLuciaMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0009);

                    let optionsLuciaDiaryElement = await ƒS.Menu.getInput(optionsLuciaDiary, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false);

                    await ƒS.update(0.5);

                    switch (optionsLuciaDiaryElement) {
                        case optionsLuciaDiary.bad:
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
                            dataForSave.luciaScore -= 5;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0010);
                            await ƒS.update(0.5);
                            await ƒS.Character.hide(characters.lucia);

                            dataForSave.atlasMotive = true;
                            dataForSave.atlasNoDiary = true;
                            updateNotes();

                            break;
                        case optionsLuciaDiary.good:
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.Character.show(characters.lucia, characters.lucia.pose.unsure, ƒS.positionPercent(75, 97));
                            dataForSave.luciaScore += 5;

                            closeSuspects();

                            let diaryPage: string = "<div class='diaryPage'>\
                            <p>Mein Tagebuch,</p>\
                            <p>ich muss zugeben, dass ich frustriert bin. Sollen meine Bemühungen umsonst gewesen sein?</p>\
                            <p>Jeder mit Augen im Kopf muss doch erkennen, dass ich mit Abstand der beste Schüler an dieser Schule bin... Trotzdem droht der Titel des Jahrgangsbesten mir nun abhanden zu kommen.</p>\
                            <p>Ausgerechnet die stellvertretende Schulsprecherin macht mir Konkurrenz. Dabei erhalte ich die Auszeichnung jedes Schuljahr mit Leichtigkeit, also wie konnte es dazu kommen? Habe ich mich mit dem Amt des Schulsprechers und den vielen AGs etwa übernommen?</p>\
                            <p>Ich wünschte, meine Stellvertreterin stünde unter demselben Druck wie ich. Dann würden faire Bedingungen herrschen.</p>\
                            <p style='text-align: right'>Gezeichnet, Atlas.</p>\
                            </div>";

                            ƒS.Text.setClass("diaryPageWrapper blendin");
                            ƒS.Text.print(diaryPage);
                          
                            await ƒS.Speech.tell(null, "...");

                            dataForSave.atlasMotive = true;
                            dataForSave.atlasDiary = true;
                            updateNotes();

                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.update(0.5);
                            hideLuciaMeter();

                            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.protagonist, protagonistToLucia.Protagonist.T00010);
                            await ƒS.Character.hide(characters.protagonist);
                            await ƒS.update(0.5);
                    }

                    await ƒS.Character.show(characters.lucia, characters.lucia.pose.neutral, ƒS.positionPercent(75, 97));
                    showLuciaMeter();
                    await ƒS.update(0.5);

                    await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0011);
                    await ƒS.update(0.5);

                    let optionsLuciaGoodbyeElement = await ƒS.Menu.getInput(optionsLuciaGoodbye, "dialogoptions");
                    ƒS.Sound.play(sound.selectDialog, 1.5, false);

                    await ƒS.update(0.5);

                    switch (optionsLuciaGoodbyeElement) {
                        case optionsLuciaGoodbye.good:
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.Character.show(characters.lucia, characters.lucia.pose.smiling, ƒS.positionPercent(75, 97));
                            dataForSave.luciaScore += 5;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0012_good);
                            await ƒS.update(0.5);
                            hideLuciaMeter();
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.update(0.5);
                            break;
                        case optionsLuciaGoodbye.bad:
                            await ƒS.Character.hide(characters.lucia);
                            await ƒS.Character.show(characters.lucia, characters.lucia.pose.sad, ƒS.positionPercent(75, 97));
                            dataForSave.luciaScore -= 5;
                            await ƒS.update(0.5);
                            await ƒS.Speech.tell(characters.lucia, luciaText.Lucia.T0012_bad);
                            await ƒS.update(0.5);
                            hideLuciaMeter();
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

        ƒS.Sound.fade(sound.mainMusic, 0, 3, true);
        await ƒS.update(0.5);

    }
}