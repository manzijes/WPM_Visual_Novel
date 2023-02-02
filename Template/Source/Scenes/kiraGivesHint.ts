namespace Template {
    export async function kiraGivesHint(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        let protagonistText = {
            Protagonist: {
                T0001: "Ach ja? Was denn?",
                T0002: "Wirklich? Und weißt du auch, zu wem sie gehört?",
                T0003: "Ich verstehe... Das macht Solas zum Hauptverdächtigen. Mal sehen, was er dazu zu sagen hat. Bis später, Kira!"
            }
        };

        let kiraText = {
            Kira: {
                T0001: "Hey, ich habe dich gesucht! Mir ist etwas aufgefallen.",
                T0002: "Diese Notiz, die uns der Saboteur hinterlassen hat... Irgendwie kommt mir die Handschrift bekannt vor. Ich habe sie schon oft gesehen.",
                T0003: "Ich wollte sicher gehen, bevor ich mit dir darüber spreche. Deswegen habe ich sie noch einmal mit der Schrift unserer Verdächtigen verglichen, um meine Ahnung zu bestätigen.",
                T0004: "Sie sieht aus wie die Handschrift von... Solas.",
                T0005: "Alles, was ich höre, ist tick tack."
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Du läufst durch den Flur und denkst über deine nächsten Schritte nach, als du auf Kira triffst.",
                T0001: "Du begibst dich auf die Suche nach Solas, um ihn zu konfrontieren."
            }
        };

        await ƒS.Location.show(locations.corridorDay);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0000);

        await ƒS.Character.show(characters.kira, characters.kira.pose.neutral, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0001);
        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.neutral, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0002);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0003);
        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.sad, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0004);
        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        dataForSave.solasHandwriting = true;
        updateNotes();

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.unsure, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0005);
        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);
        
        // close
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(0.5);

        return "confrontSolasAfterKira";

    }
}