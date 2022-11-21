namespace Template {
    export async function test(): ƒS.SceneReturn {

          // control light off scene
        function setLights(action: String) {
            let htmlInDom = document.querySelector("html");
            switch (action){
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
            let x = e.clientX || e.touches[0].clientX
            let y = e.clientY || e.touches[0].clientY
    
            document.documentElement.style.setProperty('--cursorX', x + 'px')
            document.documentElement.style.setProperty('--cursorY', y + 'px')
        }
        document.addEventListener('mousemove', updateFlashlight);
        document.addEventListener('touchmove', updateFlashlight);

        function addSwitchToScene() {
            // set classes for possible positions of switch
            let classes = new Array ('bottomRight', 'bottomLeft', 'bottomCenter');
            let length = classes.length;

            let img = document.createElement("img");
            img.src = "https://github.com/manzijes/WPM_Visual_Novel/blob/main/Template/Images/switch.png?raw=true";
            img.id = "switch";
            // assign random class (therefore position)
            img.classList.add( classes[ Math.floor (Math.random() * length) ] );
            let src = document.getElementById("scene");
            src.appendChild(img);
            img.addEventListener('click', clickSwitch);
        }

        async function clickSwitch() {
            let switchImg = document.getElementById("switch");
            switchImg.remove();
            ƒS.Sound.play(sound.switch, 1, false); 
            ƒS.Sound.fade(sound.spookyMusic, 0, 4.5);
            ƒS.Sound.fade(sound.mainMusic, 1, 5, true); 
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
            setLights("turnOnLights");
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0.5);
            
            await ƒS.Character.show(characters.kira, characters.kira.pose.scared, ƒS.positionPercent(75, 97));
            await ƒS.update(0.5);
            await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0002);
            await ƒS.update(0.5);
        }

        let protagonistText = {
            Protagonist: {
                T0001: "Test.",
                T0002: "Jemand hat das Licht ausgeschaltet. Warte kurz, an meinem Schlüsselbund hängt eine kleine Taschenlampe. Ich suche gleich einen Lichtschalter.",
                T0003: "Gefunden!",
                T0004: "Sieh mal, da ist etwas an der Tür.",
                T0005: "Der Saboteur hat offenbar das Licht ausgeschaltet, um uns im Schutz der Dunkelheit diese Notiz zu hinterlassen. Vor der Tür gibt es einen zweiten Lichtschalter, das war also ganz einfach."
            }
        };

        let kiraText = {
            Kira: {
                T0001: "Holy Moly! Was ist passiert?",
                T0002: "Puh. Das hat mich ganz schön erschreckt..."
            }
        };

        let narratorText = {
            Narrator: {
                T0001: "Kira und du bleiben allein im Theaterraum zurück."
            }
        };

        await ƒS.Location.show(locations.classroomDay);
        await ƒS.update(1.5);
        await ƒS.Speech.tell(characters.narrator, narratorText.Narrator.T0001);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);

        await ƒS.update(0.5);
        setLights("turnOffLights");
        ƒS.Sound.fade(sound.mainMusic, 0, 3);
        ƒS.Sound.fade(sound.spookyMusic, 1, 2.5, true); 
        await ƒS.Character.hide(characters.protagonist);
        ƒS.Speech.hide();

        await ƒS.update(1.5);
        addSwitchToScene();

        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0001);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);
        await ƒS.update(0.5);

        setLights("turnOnFlashlight");
    }
}