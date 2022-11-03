"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transition = {
        puzzle: {
            duration: 1,
            alpha: "",
            edge: 1
        }
    };
    Template.sound = {
        // themes
        // SFX
        drop: "../Audio/SFX/drop.mp3"
    };
    Template.locations = {
        classroomDay: {
            name: "classroomDay",
            background: "Images/Backgrounds/Garden/garden1.png",
            foreground: ""
        },
        classroomNight: {
            name: "classroomNight",
            background: "Images/Backgrounds/classroom-night.jpg",
            foreground: ""
        },
        schoolOutsideDay: {
            name: "schoolOutsideDay",
            background: "Images/Backgrounds/apocalypse.png",
            foreground: ""
        }
    };
    Template.characters = {
        narrator: {
            name: "Narrator"
        },
        stranger: {
            name: "???"
        },
        protagonist: {
            name: "Protagonist",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/Protagonist/protagonist-angry.png",
                happy: "Images/Characters/Protagonist/protagonist-happy.png",
                sad: "Images/Characters/Protagonist/protagonist-sad.png",
                neutral: "Images/Characters/Protagonist/protagonist-neutral.png",
                scared: "Images/Characters/Protagonist/protagonist-scared.png",
                mean: "Images/Characters/Protagonist/protagonist-mean.png"
            }
        },
        kira: {
            name: "Kira",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "../Images/Characters/Kira/kira-angry.png",
                happy: "../Images/Characters/Kira/kira-happy.png",
                sad: "../Images/Characters/Kira/kira-sad.png",
                neutral: "../Images/Characters/Kira/kira-neutral.png",
                scared: "../Images/Characters/Kira/protagonist-scared.png"
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            // { scene: Scene, name: "Scene" },
            { scene: Template.firstScene, name: "firstScene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstScene() {
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
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.classroomDay);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0001);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0001);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0002);
        let dialogoptions = {
            iSayYes: "Yes",
            iSayOk: "Okay",
            iSayNo: "No",
            iSayMaybe: "Maybe"
        };
        let dialogoptionsElement = await Template.ƒS.Menu.getInput(dialogoptions, "dialogoptions");
        let pickedYes;
        let pickedOkay;
        let pickedNo;
        let pickedMaybe;
        switch (dialogoptionsElement) {
            case dialogoptions.iSayYes:
                pickedYes = true;
                console.log(pickedYes);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Ja");
                break;
            case dialogoptions.iSayNo:
                pickedNo = true;
                console.log(pickedNo);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Nein");
                break;
            case dialogoptions.iSayOk:
                pickedOkay = true;
                console.log(pickedOkay);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Okay");
                break;
            case dialogoptions.iSayMaybe:
                pickedMaybe = true;
                console.log(pickedMaybe);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,");
                break;
        }
    }
    Template.firstScene = firstScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map