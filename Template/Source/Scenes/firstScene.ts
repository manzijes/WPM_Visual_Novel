namespace Template {
    export async function firstScene(): ƒS.SceneReturn {
        console.log("first scene");
        let text = {
            Protagonist: {
                T0001: "Das beste am Schultag ist die Mittagspause... Kein Lehrer scheucht dich über den Sportplatz oder zwingt dich, an der Tafel Matheaufgaben zu lösen. Ich kann mich entspannen und lesen, die Stimmen der anderen verschmelzen zu einem Rauschen im Hintergrund. Himmlisch!",
                T0002: "Hello",
                T0003: "Anderer Text"
            }
        };

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.classroomDay);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(30, 101));
        await ƒS.update(1);
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