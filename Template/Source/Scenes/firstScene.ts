namespace Template {
    export async function firstScene(): ƒS.SceneReturn {
        console.log("first scene");
        
        let narratorText = {
            Narrator: {
                T0001: "Die Glocke zur Pause schlägt. Endlich! Du schlenderst nach draußen und tankst etwas Vitamin D."
            }
        };
        
        let protagonistText = {
            Protagonist: {
                T0001: "Das beste am Schultag ist die Mittagspause... Kein Lehrer scheucht dich über den Sportplatz oder zwingt dich, an der Tafel Matheaufgaben zu lösen.",
                T0002: "Ich kann mich entspannen und lesen, die Stimmen der anderen verschmelzen zu einem Rauschen im Hintergrund. Himmlisch!",
                T0003: "Anderer Text"
            }
        };

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.classroomDay);

        await ƒS.update(2);
        await ƒS.Speech.tell(characters.narrator, narratorText.Narrator.T0001);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happy, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);


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