namespace Template {
    export async function lightsOut(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true); 
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true); 
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

        // add switch img to scene AFTER lights are out, so player doesn't know where it is
        function addSwitchToScene() {
            // set classes for possible positions of switch
            let classes = new Array('bottomRight', 'bottomLeft', 'centerLeft', 'centerRight');
            let length = classes.length;
            // create switch img
            let img = document.createElement("img");
            img.src = "https://github.com/manzijes/WPM_Visual_Novel/blob/main/Template/Images/switch.png?raw=true";
            img.id = "switch";
            // assign random class (therefore position)
            img.classList.add(classes[Math.floor(Math.random() * length)]);
            // add switch img to scene
            let src = document.getElementById("scene");
            src.appendChild(img);
            img.addEventListener('click', clickSwitch);
        }

        let protagonistText = {
            Protagonist: {
                T0001: "Ich habe mir ein gutes erstes Bild verschafft, aber das hat den Saboteur eventuell aufgeschreckt. Er könnte bald wieder handeln...",
                T0002: "Jemand hat das Licht ausgeschaltet. Warte kurz, an meinem Schlüsselbund hängt eine kleine Taschenlampe. Ich suche gleich einen Lichtschalter.",
                T0003: "Gefunden!",
                T0004: "Sieh mal, da ist etwas vor der Tür.",
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
                T0004: "Ich bin beunruhigt. Wer weiß, wie weit diese Person gehen wird? Wenn du den Saboteur nicht rechtzeitig findest, dann werde ich die Premiere absagen.",
                T0005: "Ich sage es ungern, aber die Zeit drängt. In zwei Tagen ist die Premiere."
            }
        };

        let narratorText = {
            Narrator: {
                T0000: "Die Probe ist zu Ende. Die Clubmitglieder verabschieden sich und trudeln auf den Flur.",
                T0001: "Kira und du bleiben allein im Theaterraum zurück."
            }
        };

        await ƒS.Location.show(locations.classroomDay);
        await ƒS.update(1);
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
        addSwitchToScene();

        await new Promise(resolve => setTimeout(resolve, 200));
        ƒS.Sound.play(sound.femalegasp, 1.5, false);

        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0002);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
        await ƒS.update(0.5);

        setLights("turnOnFlashlight");

        // how to proceed when player finds light switch
        async function clickSwitch() {
            // remove light switch
            let switchImg = document.getElementById("switch");
            switchImg.remove();

            ƒS.Sound.play(sound.switch, 1, false);
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));

            setLights("turnOnLights");

            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);

            await ƒS.Character.show(characters.kira, characters.kira.pose.scared, ƒS.positionPercent(75, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0003);
            await ƒS.update(0.5);

            // change spooky music to normal theme
            ƒS.Sound.fade(sound.spookyMusic, 0, 6);
            ƒS.Sound.fade(sound.mainMusic, 0.5, 5, true);

            ƒS.Sound.fade(sound.mainMusic, 0, 3, true); 
        }
    }
}