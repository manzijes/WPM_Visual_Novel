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
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(65, 100));
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
        await ƒS.update(2);

        let dialogoptions = {
            iSayYes: "Yes",
            iSayOk: "Okay",
            iSayNo: "No",
            iSayMaybe: "Maybe"
        };

        let dialogoptionsElement = await ƒS.Menu.getInput(dialogoptions, "dialogoptions");

        let pickedYes: boolean;
        let pickedOkay: boolean;
        let pickedNo: boolean;
        let pickedMaybe: boolean;

        switch (dialogoptionsElement) {
            case dialogoptions.iSayYes:
                await ƒS.Speech.tell(characters.protagonist, "Ja");
                break;
            case dialogoptions.iSayNo:
                await ƒS.Speech.tell(characters.protagonist, "Nein");
                break;
            case dialogoptions.iSayOk:
                await ƒS.Speech.tell(characters.protagonist, "Okay");
                break;
            case dialogoptions.iSayMaybe:
                await ƒS.Speech.tell(characters.protagonist, "Vielleicht");
                break;
            }


    }
}