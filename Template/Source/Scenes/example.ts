namespace Template {
    export async function exampleScene(): ƒS.SceneReturn {
        console.log("example scene");
        let text = {
            Protagonist: {
                T0001: "Hallo",
                T0002: "Hello",
                T0003: "Anderer Text"
            }
        };

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.classroomDay);
        await ƒS.update();
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.angry, ƒS.positionPercent(100, 70));
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
    }
}