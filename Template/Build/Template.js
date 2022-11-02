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
        drop: "../Audio/drop.mp3"
    };
    Template.locations = {
        classroomDay: {
            name: "classroom day",
            background: "",
            foreground: ""
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: "Protagonist",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "../Images/Characters/Protagonist/protagonist-neutral.png",
                happy: "",
                upset: ""
            }
        },
        aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "../Images/Characters/",
                happy: "",
                upset: ""
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" },
            { scene: Template.exampleScene, name: "example" }
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
    async function exampleScene() {
        console.log("example scene");
        let text = {
            Protagonist: {
                T0001: "Hallo",
                T0002: "Hello",
                T0003: "Anderer Text"
            }
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.classroomDay);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.angry, Template.ƒS.positionPercent(100, 70));
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.Protagonist.T0001);
    }
    Template.exampleScene = exampleScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map