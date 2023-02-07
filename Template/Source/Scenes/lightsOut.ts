namespace BehindTheScenes {
    export async function lightsOut(): ƒS.SceneReturn {

        // how long are the lights out (in seconds)?
        let waitSeconds = 20;

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 5, true);
        updateNotes();

        // control lights in scene
        function setLights(action: String) {
            let htmlInDom = document.querySelector("html");
            switch (action) {
                case "turnOffLights":
                    ƒS.Sound.play(sound.switch, 1.5, false);
                    htmlInDom.classList.add("dark");
                    break;
                case "turnOnLights":
                    ƒS.Sound.play(sound.switch, 1.5, false);
                    htmlInDom.classList.remove("dark");
                    break;
                case "turnOnFlashlight":
                    ƒS.Sound.play(sound.flashlight, 1, false);
                    htmlInDom.classList.add("flashlight");
                    break;
                case "turnOffFlashlight":
                    ƒS.Sound.play(sound.flashlight, 1, false);
                    htmlInDom.classList.remove("flashlight");
                    break;
                default:
                    break;
            }
        }

        function updateFlashlight(e: any) {
            // get current cursor position
            let x = e.clientX || e.touches[0].clientX
            let y = e.clientY || e.touches[0].clientY
            // set as position of flashlight with css
            document.documentElement.style.setProperty('--cursorX', x + 'px')
            document.documentElement.style.setProperty('--cursorY', y + 'px')
        }
        // call updateFlashlight on mouse movement
        document.addEventListener('mousemove', updateFlashlight);
        document.addEventListener('touchmove', updateFlashlight);

        let protagonistText = {
            Protagonist: {
                T0001: "Ich habe mir ein gutes erstes Bild verschafft, aber das hat den Saboteur eventuell aufgeschreckt. Er könnte bald wieder handeln...",
                T0002: "Jemand hat das Licht ausgeschaltet. Warte kurz, an meinem Schlüsselbund hängt eine kleine Taschenlampe. Ich suche gleich einen Lichtschalter.",
                T0003: "Ich hab ihn!",
                T0003_b: "Da ist er! Warte, ich laufe kurz hin...",
                T0003_c: "Geduld, bitte. Ich will nirgendwo anstoßen!",
                T0003_d: "Autsch! Jetzt bin ich gestolpert...",
                T0003_e: "Stress mich nicht! Ich bin fast da.",
                T0004: "Sieh mal, da hat jemand etwas unter der Tür durchgeschoben.",
                T0005: "Der Saboteur hat offenbar das Licht ausgeschaltet, um uns im Schutz der Dunkelheit diese Notiz zu hinterlassen. Im Flur gibt es einen zweiten Lichtschalter, das war also ganz einfach.",
                T0006: "Das sehe ich ein. Ich werde dich nicht enttäuschen.",
                T0007: "Keine Sorge. Morgen werde ich Indizien sammeln und den Schleier lüften."
            }
        };

        let kiraText = {
            Kira: {
                T0000: "Hallo, du. Wie kommen deine Ermittlungen voran?",
                T0001: "Ich verstehe. Und was hast du nun-",
                T0002: "Holy Moly! Was ist passiert?",
                T0003: "Puh. Das hat mich ganz schön erschreckt...",
                T0004: "Was...? Lass mal sehen.",
                T0005: "Das ist ja unheimlich...",
                T0006: "Ich bin beunruhigt. Wer weiß, wie weit diese Person gehen wird? Wenn du den Saboteur nicht rechtzeitig findest, dann werde ich die Premiere absagen.",
                T0007: "Ich sage es ungern, aber die Zeit drängt. In zwei Tagen ist die Premiere."
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Die Probe ist zu Ende. Die Clubmitglieder verabschieden sich und trudeln auf den Flur.",
                T0001: "Kira und du bleiben allein im Theaterraum zurück.",
                T0002: "Der Schultag neigt sich dem Ende zu und du verabschiedest dich von Kira. Morgen wirst du deine Ermittlungen fortführen..."
            }
        };

        await ƒS.Location.show(locations.classroomDay);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);
        await ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await ƒS.Speech.tell(null, narratorText.Narrator.T0001);

        await ƒS.Character.show(characters.kira, characters.kira.pose.smiling, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0000);
        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.neutral, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0001);

        await ƒS.update(0.5);
        setLights("turnOffLights");

        // change normal theme to spooky music
        ƒS.Sound.fade(sound.mainMusic, 0, 3);
        ƒS.Sound.fade(sound.spookyMusic, 0.5, 2.5, true);

        // remove characters and speech, add light switch
        await ƒS.Character.hide(characters.kira);
        ƒS.Speech.hide();
        await ƒS.update(1.5);

        // set classes for possible positions of switch
        let classes = new Array('bottomRight', 'bottomLeft', 'centerLeft', 'centerRight');
        let length = classes.length;
        // get switch img
        let img = document.getElementById("switch");
        // assign random position
        img.classList.add(classes[Math.floor(Math.random() * length)]);
        // make visible
        img.hidden = false;
        img.addEventListener("click", clickSwitch);

        let clickedSwitch: number = 0;

        async function clickSwitch() {
            ƒS.Speech.clear();
            clickedSwitch += 1;
            if (clickedSwitch == 1) {
                ƒS.Sound.play(sound.smallsigh, 1.5, false);
                await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003_b);
            } else if (clickedSwitch == 2) {
                ƒS.Sound.play(sound.smallsigh, 1.5, false);
                await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003_c);
            } else if (clickedSwitch == 3) {
                ƒS.Sound.play(sound.aua, 1.5, false);
                await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003_d);
            } else {
                ƒS.Sound.play(sound.bigsigh, 1.5, false);
                await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003_e);
            }
        }

        await new Promise(resolve => setTimeout(resolve, 200));
        ƒS.Sound.play(sound.femalegasp, 1.5, false);

        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0002);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
        await ƒS.update(0.5);

        setLights("turnOnFlashlight");

        await new Promise(resolve => setTimeout(resolve, waitSeconds * 1000));

        ƒS.Speech.clear();

        // remove light switch
        let switchImg = document.getElementById("switch");
        switchImg.remove();
        ƒS.Sound.play(sound.switch, 1, false);

        await ƒS.update(0.5);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));

        setLights("turnOnLights");

        ƒS.Speech.clear();

        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.scared, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0003);
        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        // change spooky music to normal theme
        ƒS.Sound.fade(sound.spookyMusic, 0, 6);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 5, true);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0004);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.unsure, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0004);

        closeSuspects();

        let diaryPage: string = "<div class='warningPage'>\
        <p>Meine Möchtegern-Detektive,</p>\
        <p>lasst das Scooby-D<bold>oo</bold>-Spiel besser sein.</p>\
        <p>Das is<bold>t</bold> eine Warnung.</p>\
        <p>Die nächste wird nicht so nett ausfallen...</p>\
        <p style='text-align: right;'>- Eu<bold>e</bold>r 'Saboteur'</p>\
        </div>";

        ƒS.Text.setClass("warningPageWrapper blendin");
        let close = { done: "x" };
        let choice: string;
        do {
            ƒS.Text.print(diaryPage);
            choice = await ƒS.Menu.getInput(close, "pageclose");
        } while (choice != close.done);
        ƒS.Text.close();

        dataForSave.warningNote = true;
        await ƒS.update(0.5);

        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.serious, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0005);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.scared, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0005);
        await ƒS.Character.hide(characters.kira);
        await ƒS.Character.show(characters.kira, characters.kira.pose.unsure, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0006);
        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0006);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.scared, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0007);
        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.confident, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0007);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0002);

        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(0.5);

    }
}