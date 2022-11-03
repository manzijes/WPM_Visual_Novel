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
        await ƒS.Location.show(locations.schoolOutsideDay);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(30, 88));
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);


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
                pickedYes = true;
                console.log(pickedYes);
                await ƒS.Speech.tell(characters.protagonist, "Ja");
                break;
            case dialogoptions.iSayNo:
                pickedNo = true;
                console.log(pickedNo);
                await ƒS.Speech.tell(characters.protagonist, "Nein");
                break;
            case dialogoptions.iSayOk:
                pickedOkay = true;
                console.log(pickedOkay);
                await ƒS.Speech.tell(characters.protagonist, "Okay");
                break;
            case dialogoptions.iSayMaybe:
                pickedMaybe = true;
                console.log(pickedMaybe);
                await ƒS.Speech.tell(characters.protagonist, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,");
                break;
            }


    }
}