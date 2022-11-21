namespace Template {
    export async function test(): ƒS.SceneReturn {

          // control light off scene
        function setLights(action: String) {
            let htmlInDom = document.querySelector("html");
            switch (action){
            case "turnOffLights":
                htmlInDom.classList.add("dark");
                break;
            case "turnOnLights":
                htmlInDom.classList.remove("dark");
                break;
            case "turnOnFlashlight":
                htmlInDom.classList.add("flashlight");
                break;
            case "turnOffFlashlight":
                htmlInDom.classList.remove("flashlight");
                break;
            default:
                break;
            }
        }

        function updateFlashlight(e: any) {
            var x = e.clientX || e.touches[0].clientX
            var y = e.clientY || e.touches[0].clientY
    
            document.documentElement.style.setProperty('--cursorX', x + 'px')
            document.documentElement.style.setProperty('--cursorY', y + 'px')
        }
        document.addEventListener('mousemove', updateFlashlight);
        document.addEventListener('touchmove', updateFlashlight);

        function addSwitchToScene() {
            let img = document.createElement("img");
            img.src = "../Images/switch.png";
            img.id = "switch";
            let src = document.getElementById("scene");
            src.appendChild(img);
            img.addEventListener('click', clickSwitch);
        }

        async function clickSwitch(){
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
                T0002: "Jemand hat das Licht ausgeschaltet. Warte kurz, an meinem Schlüsselbund hängt eine kleine Taschenlampe. Ich suche gleich den Lichtschalter.",
                T0003: "Gefunden!"
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
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.narrator, narratorText.Narrator.T0001);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);

        await ƒS.update(0.5);
        setLights("turnOffLights");
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