namespace Template {
    export async function roofRight(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let isFavorite = findFavorite();

        // drei fälle für die erklärung:
        // diary true und key true
        // diary false und key false
        // diary false und key true ODER diary true und key false

        let conclusionDiaryKey = {
            Protagonist: {
                T0001: "Lucia erwies sich als vertrauenswürdig. Sie gab mir den Tipp, dass dein Alibi zum Himmel stinkt.",
                T0002: "Außerdem hatte der Täter uns eine Warnung zukommen lassen. Diese Warnung verglich ich mit einer Probe deiner Handschrift... Auf den ersten Blick ähnelten sie sich nicht, aber ein paar Buchstaben sehen identisch aus.",
                T0003: "Ich glaube, du hast versucht, eine andere Handschrift zu imitieren, um den Verdacht von dir abzulenken.",
                T0004: "Und zu guter Letzt... Ich bin ein guter Menschenkenner. Solas wirkte aufrichtig, als er sein Mitgefühl mit der Kostümschneiderin äußerte.",
            }
        };

        let conclusionNoDiaryNoKey = {
            Protagonist: {
                T0001: "Der Täter hatte uns eine Warnung zukommen lassen. Es sah erst so aus, als gehöre die darauf Handschrift zu Solas...",
                T0002: "Doch Solas brachte mich auf die Idee, dass jemand seine Handschrift imitiert haben könnte. Deswegen sah ich mir die Warnung noch einmal an... Dabei fiel mir auf, dass einige Buchstaben aus der Reihe tanzten. So war mir klar, dass jemand Solas die Sache anhängen wollte.",
                T0003: "Aber wer könnte so meisterhaft eine andere Handschrift fälschen? Du, natürlich. Seit Jahren bist du Mitglied in der Kalligraphie AG. Lucia, der Nerd, hat dagegen wahrscheinlich noch nie einen Stift benutzt."
            }
        };

        let conclusionNoDiaryKey = {
            Protagonist: {
                T0001: "Lucia erwies sich als vertrauenswürdig. Sie gab mir den Tipp, dass dein Alibi zum Himmel stinkt.",
                T0002: "Außerdem hatte der Täter uns eine Warnung zukommen lassen. Dabei fiel mir auf, dass einige Buchstaben aus der Reihe tanzten...",
                T0003: "Jemand hatte also versucht, die Schrift eines anderen zu imitieren. Doch wer hätte die Fähigkeiten dazu? Du, natürlich. Seit Jahren bist du Mitglied in der Kalligraphie AG.",
                T0004: "Und zu guter Letzt... Ich bin ich ein guter Menschenkenner. Solas wirkte aufrichtig, als er sein Mitgefühl mit der Kostümschneiderin äußerte."
            }
        };

        let protagonistText = {
            Protagonist: {
                T0001: "Ich habe dich hergerufen, um dich zu stellen. Ich weiß, dass du der Saboteur bist... Du bist überführt, Atlas.",
                T0002: "Lass mich dir meine Schlussfolgerungen darlegen...",
                T0003: "Reicht dir das?",
                T0004: "Wenigstens gibst du es zu."
            }
        };

        let atlasText = {
            Atlas: {
                T0001: "Überführt, ja? Wieso glaubst du, dass ich der Täter bin?",
                T0002: "Schon gut, ich gebe es zu. Du hast mich in meinem eigenen Spiel besiegt.",
                T0003: "Ich habe die Sabotage inszeniert, um dir ein wenig Zeit zu stehlen. Jede freie Minute steckt deine Nase in einem Buch und ich selbst habe kaum Zeit, zu lernen... Ich wollte nicht, dass du mir den Titel des Jahrgangsbesten abnimmst.",
                T0004: "...",
                T0005: "Sieh an... Die Sonne geht unter.",
                T0006: "Weißt du, Solas sagte etwas darüber, dass hinter der Sabotage etwas Tieferes steckt... und es stimmt. Ich glaube, ich hatte Angst. Wenn ich nicht der Beste sein kann... wer bin ich dann überhaupt?",
                T0007: "Ich sehe jetzt ein, dass das dumm war."
            }
        };

        let narratorTextAtlasFavorit = {
            Narrator: {
                T0000: "Du hast also den richtigen Täter gefunden... Gute Arbeit!",
                T0000_2: "Du scheinst dich allerdings gut mit Atlas zu verstehen. Die Entscheidung liegt nun bei dir...",
            
                T0001: "Du schreibst Kira, dass du den Saboteur nicht entlarven konntest und sie sagt die Premiere ab.",
                T0002: "Atlas und du bleiben noch eine Weile auf dem Dach. Er fordert dich heraus, auch nächstes Schuljahr dein Bestes zu geben."
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Du wartest auf dem Schuldach auf Atlas. Nach ein paar Minuten erscheint er. Sein Gesicht ist audruckslos, aber das muss eine Farce sein...",
                T0001: "Du hast also den richtigen Täter gefunden... Gute Arbeit!"
            }
        };

        let protagonistLetGo = {
            Protagonist: {
                T0000: "...",
                T0001: "Ich werde dich nicht an Kira ausliefern.",
                T0002: "Glaub es oder nicht, aber... Ich mag dich. Ich glaube, wenn wir uns anders getroffen hätten, dann wären wir gute Freunde geworden.",
                T0003: "Du bist ja auch ein Idiot.",
                T0004: "Naja... Ich denke, Kira wird die Premiere absagen. Zumindest vorerst. Aber da die Sabotage nun endet, wird sich die Lage beruhigen. Spätestens in ein paar Wochen steht ihr alle auf der Bühne.",
                T0005: "Soll das sowas wie eine Einladung sein?",
                T0006: "Dann werde ich da sein."
            }
        }
        let AtlasLetGo = {
            Atlas: {
                T0001: "Nicht? Aber... Wieso?",
                T0002: "Freunde...?",
                T0003: "Ich danke dir.",
                T0004: "Ich dachte die ganze Zeit, ich sei der beste Schüler an dieser Schule. Ich habe dich sogar sabotiert, um das zu beweisen. Stattdessen hast du mir etwas beigebracht... Du bist nicht nur klüger als ich, sondern auch gütiger.",
                T0005: "Ich komme mir vor wie ein riesen Idiot.",
                T0006: "Was wird nun geschehen?",
                T0007: "Und wirst du dann im Publikum sitzen?",
                T0008: "Ja."
            }
        }

        let protagonistDontLetGo = {
            Protagonist: {
                T0000: "Ich mag Atlas, aber ich kann ihn nicht davonkommen lassen. Kira vertraut auf mich."
            }
        }

        let narratorTextDontLetGo = {
            Narrator: {
                T0000: "Du schreibst Kira, dass du den Täter entlarvt hast und erklärst ihr alles.",
                T0001: "Sie ist enttäuscht von Atlas und setzt seine Zweitbesetzung ein, die Hauptrolle zu übernehmen.",
                T0002: "Ob Atlas im Theaterclub bleiben darf, muss sie sich noch überlegen..."
            }
        };

        await ƒS.Location.show(locations.roof);
        addFallingLeaves();
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0000);

        ƒS.Sound.play(sound.birds, 0.6, true);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
        showAtlasMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0001);
        hideAtlasMeter();
        await ƒS.Character.hide(characters.atlas);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.angry, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
        await ƒS.update(0.5);

        if (dataForSave.atlasDiary == true && dataForSave.foundKey == true) {
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);

            await ƒS.Speech.tell(characters.protagonist, conclusionDiaryKey.Protagonist.T0001);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, conclusionDiaryKey.Protagonist.T0002);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, conclusionDiaryKey.Protagonist.T0003);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, conclusionDiaryKey.Protagonist.T0004);
            await ƒS.update(0.5);
        } else if (dataForSave.atlasDiary == false && dataForSave.foundKey == false) {
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);

            await ƒS.Speech.tell(characters.protagonist, conclusionNoDiaryNoKey.Protagonist.T0001);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, conclusionNoDiaryNoKey.Protagonist.T0002);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, conclusionNoDiaryNoKey.Protagonist.T0003);
            await ƒS.update(0.5);
        } else {
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);

            await ƒS.Speech.tell(characters.protagonist, conclusionNoDiaryKey.Protagonist.T0001);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, conclusionNoDiaryKey.Protagonist.T0002);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, conclusionNoDiaryKey.Protagonist.T0003);
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, conclusionNoDiaryKey.Protagonist.T0004);
            await ƒS.update(0.5);
        }
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.confident, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
        await ƒS.update(0.5);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
        showAtlasMeter();
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0002);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0003);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0004);
        await ƒS.update(0.5);

        await ƒS.Character.hide(characters.atlas);
        await ƒS.Character.show(characters.atlas, characters.atlas.pose.unhappy, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);

        // TWILIGHT SET
        await ƒS.Location.show(locations.roofTwilight);
        await ƒS.update(2.5);

        await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0005);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0006);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.atlas, atlasText.Atlas.T0007);
        await ƒS.update(0.5);

        hideAtlasMeter();
        await ƒS.Character.hide(characters.atlas);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0004);
        await ƒS.update(0.5);

        if (isFavorite == "Atlas") {
            await ƒS.Speech.tell(null, narratorTextAtlasFavorit.Narrator.T0000);
            await ƒS.Speech.tell(null, narratorTextAtlasFavorit.Narrator.T0000_2);

            let optionsLoveOrLaw = {
                letGo: "Atlas laufen lassen.",
                dontLetGo: "Atlas an Kira ausliefern."
            }

            let optionsLoveOrLawElement = await ƒS.Menu.getInput(optionsLoveOrLaw, "dialogoptions");
            ƒS.Sound.play(sound.selectDialog, 1.5, false);

            switch (optionsLoveOrLawElement) {
                case optionsLoveOrLaw.letGo:
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistLetGo.Protagonist.T0000);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistLetGo.Protagonist.T0001);
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    showAtlasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, AtlasLetGo.Atlas.T0001);
                    await ƒS.update(0.5);

                    hideAtlasMeter();
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistLetGo.Protagonist.T0002);
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    showAtlasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, AtlasLetGo.Atlas.T0002);
                    await ƒS.update(0.5);
                  
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.smiling, ƒS.positionPercent(75, 97));
                    await ƒS.update(0.5);

                    await ƒS.Speech.tell(characters.protagonist, AtlasLetGo.Atlas.T0003);
                    await ƒS.update(0.5);

                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, AtlasLetGo.Atlas.T0004);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, AtlasLetGo.Atlas.T0005);
                    await ƒS.update(0.5);

                    hideAtlasMeter();
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistLetGo.Protagonist.T0003);
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    showAtlasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, AtlasLetGo.Atlas.T0006);
                    await ƒS.update(0.5);

                    hideAtlasMeter();
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistLetGo.Protagonist.T0004);
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.neutral, ƒS.positionPercent(75, 97));
                    showAtlasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, AtlasLetGo.Atlas.T0007);
                    await ƒS.update(0.5);

                    hideAtlasMeter();
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);
                    
                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistLetGo.Protagonist.T0005);
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.atlas, characters.atlas.pose.smiling, ƒS.positionPercent(75, 97));
                    showAtlasMeter();
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.atlas, AtlasLetGo.Atlas.T0008);
                    await ƒS.update(0.5);

                    hideAtlasMeter();
                    await ƒS.Character.hide(characters.atlas);
                    await ƒS.update(0.5);

                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(characters.protagonist, protagonistLetGo.Protagonist.T0006);
                    await ƒS.update(0.5);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.update(0.5);

                    await ƒS.Speech.tell(null, narratorTextAtlasFavorit.Narrator.T0001);
                    await ƒS.update(0.5);
                    await ƒS.Speech.tell(null, narratorTextAtlasFavorit.Narrator.T0002);
                    await ƒS.update(0.5);

                    break;
                case optionsLoveOrLaw.dontLetGo:
                    await ƒS.Speech.tell(characters.protagonist, protagonistDontLetGo.Protagonist.T0000);
                    await ƒS.update(0.5);
                    
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
                    await ƒS.update(0.5);

                    await ƒS.Speech.tell(null, narratorTextDontLetGo.Narrator.T0000);
                    await ƒS.Speech.tell(null, narratorTextDontLetGo.Narrator.T0001);
                    await ƒS.Speech.tell(null, narratorTextDontLetGo.Narrator.T0002);
                    await ƒS.update(0.5);
                    break;
            }

        } else {
            await ƒS.Speech.tell(null, narratorText.Narrator.T0001);

            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
            await ƒS.update(0.5);
            
            await ƒS.Speech.tell(null, narratorTextDontLetGo.Narrator.T0000);
            await ƒS.Speech.tell(null, narratorTextDontLetGo.Narrator.T0001);
            await ƒS.Speech.tell(null, narratorTextDontLetGo.Narrator.T0002);
            await ƒS.update(0.5);
        }

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Speech.clear();
        await ƒS.Speech.hide();
        await ƒS.update(0.5);

        removeFallingLeaves();
        return "roofRightEpilogue";

    }
}