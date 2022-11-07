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
        // music
        mainMusic: "Audio/Music/inspiration.mp3",
        // ambiance
        birds: "Audio/Ambiance/springBirds.wav",
        // SFX
        drop: "Audio/SFX/drop.mp3",
        schoolBell: "Audio/SFX/schoolBell.wav"
    };
    Template.locations = {
        gardenDoor: {
            name: "GardenDoor",
            background: "Images/Backgrounds/Garden/garden1.png",
            foreground: ""
        },
        gardenPath: {
            name: "GardenPath",
            background: "Images/Backgrounds/Garden/garden2.png",
            foreground: ""
        },
        gardenSwing: {
            name: "GardenSwing",
            background: "Images/Backgrounds/Garden/garden3.png",
            foreground: ""
        },
        gardenHouse: {
            name: "GardenHouse",
            background: "Images/Backgrounds/Garden/garden4.png",
            foreground: ""
        },
        gardenBridge: {
            name: "GardenBridge",
            background: "Images/Backgrounds/Garden/garden5.png",
            foreground: ""
        },
        gardenTable: {
            name: "GardenTable",
            background: "Images/Backgrounds/Garden/garden6.png",
            foreground: ""
        },
        gardenGreenhouse: {
            name: "GardenGreenhouse",
            background: "Images/Backgrounds/Garden/garden7.png",
            foreground: ""
        },
        schoolOutsideDay: {
            name: "schoolOutsideDay",
            background: "Images/Backgrounds/school-outside-twilight.jpg",
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
            name: "Du",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/Protagonist/protagonist-angry.png",
                happy: "Images/Characters/Protagonist/protagonist-happy.png",
                happyEyesClosed: "Images/Characters/Protagonist/protagonist-happy-2.png",
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
                angry: "Images/Characters/Kira/kira-angry.png",
                happy: "Images/Characters/Kira/kira-happy.png",
                sad: "Images/Characters/Kira/kira-sad.png",
                neutral: "Images/Characters/Kira/kira-neutral.png",
                scared: "Images/Characters/Kira/protagonist-scared.png"
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        //Menü
        Template.gameMenu = Template.ƒS.Menu.create(Template.menuInGame, Template.buttonFunctionalities, "menuInGame"); //hier CSS Klasse angeben
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
    //  MENU - Audio functions
    Template.volume = 1.0;
    Template.volumeBeforeMute = 1.0;
    function incrementSound() {
        if (Template.volume >= 100)
            return;
        Template.volume += 0.2;
        Template.ƒS.Sound.setMasterVolume(Template.volume);
    }
    Template.incrementSound = incrementSound;
    function decrementSound() {
        if (Template.volume <= 0)
            return;
        Template.volume -= 0.2;
        Template.ƒS.Sound.setMasterVolume(Template.volume);
    }
    Template.decrementSound = decrementSound;
    function toggleSound() {
        let toggleSound = document.getElementById("toggleSound");
        toggleSound.classList.toggle("active");
        if (Template.volume > 0) {
            Template.volumeBeforeMute = Template.volume;
            Template.volume = 0;
            Template.ƒS.Sound.setMasterVolume(Template.volume);
        }
        else {
            Template.ƒS.Sound.setMasterVolume(Template.volumeBeforeMute);
            Template.volume = Template.volumeBeforeMute;
        }
    }
    Template.toggleSound = toggleSound;
    // MENU
    Template.menuInGame = {
        save: "speichern",
        load: "laden",
        credits: "credits",
        shortcuts: "shortcuts",
        toggleSound: "sound",
        turnUpVolume: "+",
        turnDownVolume: "-",
        toggleSuspects: "notes"
    };
    function showSuspects() {
        let toggleSuspects = document.getElementById("toggleSuspects");
        toggleSuspects.classList.toggle("active");
        var element = document.getElementById("suspects");
        element.classList.toggle("hidden");
    }
    Template.showSuspects = showSuspects;
    function showCredits() {
        Template.ƒS.Text.setClass("credits");
        let credits = "<h1>CREDITS</h1>";
        Template.ƒS.Text.print(credits);
    }
    Template.showCredits = showCredits;
    ;
    function showShortcuts() {
        Template.ƒS.Text.setClass("shortcuts");
        let shortcuts = "<h1>SHORTCUTS</h1>\
        <table>\
          <tr>\
            <td>Menu (open/ close)</td>\
            <td>m</td>\
          </tr>\
          <tr>\
            <td>Full-screen Windows</td>\
            <td>f11</td>\
          </tr>\
          <tr>\
            <td>Full-screen Mac</td>\
            <td>Ctrl - Cmd – F </td>\
          </tr>\
          <tr>\
            <td>Save</td>\
            <td>f8</td>\
          </tr>\
          <tr>\
            <td>Load</td>\
            <td>f9</td>\
          </tr>\
        </table>\
        ";
        Template.ƒS.Text.print(shortcuts);
    }
    Template.showShortcuts = showShortcuts;
    ;
    // true = offen; false = geschlossen
    Template.menu = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case Template.menuInGame.save:
                await Template.ƒS.Progress.save();
                break;
            case Template.menuInGame.load:
                await Template.ƒS.Progress.load();
                break;
            case Template.menuInGame.credits:
                showCredits();
                break;
            case Template.menuInGame.shortcuts:
                showShortcuts();
                break;
            case Template.menuInGame.toggleSound:
                toggleSound();
                break;
            case Template.menuInGame.turnUpVolume:
                incrementSound();
                break;
            case Template.menuInGame.turnDownVolume:
                decrementSound();
                break;
            case Template.menuInGame.toggleSuspects:
                showSuspects();
                break;
        }
    }
    Template.buttonFunctionalities = buttonFunctionalities;
    // Shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (Template.menu) {
                    console.log("Schließen");
                    Template.gameMenu.close();
                    Template.menu = false;
                }
                else {
                    console.log("Öffnen");
                    Template.gameMenu.open();
                    Template.menu = true;
                }
                break;
        }
    }
    Template.hndKeyPress = hndKeyPress;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstScene() {
        console.log("first scene");
        let strangerText = {
            Stranger: {
                T0001: "Entschuldigung!",
                T0002: "Es tut mir leid, falls ich dich störe, aber ich brauche deine Hilfe. Du bist die Schulsprecherin, richtig?"
            }
        };
        let narratorText = {
            Narrator: {
                T0001: "Die Glocke zur Pause schlägt. Endlich! Du schlenderst nach draußen und erfreust dich an der Nachmittagssonne.",
                T0002: "Du drehst dich um und erblickst ein Mädchen, das dir bekannt vorkommt. Sie geht nicht in deine Klasse, also woher...?"
            }
        };
        let protagonistText = {
            Protagonist: {
                T0001: "Das beste am Schultag ist die Mittagspause... Kein Lehrer scheucht dich über den Sportplatz oder zwingt dich, an der Tafel Matheaufgaben zu lösen.",
                T0002: "Ich kann mich entspannen und lesen, die Stimmen der anderen verschmelzen zu einem Rauschen im Hintergrund. Himmlisch!",
                T0003: "Nanu? Spricht da jemand mit mir?"
            }
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.sound.schoolBell, 0.15, false);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.07, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.schoolOutsideDay);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0001);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        Template.ƒS.Sound.play(Template.sound.birds, 0.2, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0001);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.happyEyesClosed, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.stranger, strangerText.Stranger.T0001);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.neutral, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.stranger, strangerText.Stranger.T0002);
        // Praktikum Session zu Dialog Options 
        // let dialogoptions = {
        //     iSayYes: "Ich sage ja. Daher wird pickedMe true werden.",
        //     iSayOk: "Okay",
        //     iSayNo: "No",
        //     iSayMaybe: "Maybe"
        // };
        // let dialogoptionsElement = await ƒS.Menu.getInput(dialogoptions, "dialogoptions");
        // let pickedYes: boolean;
        // let pickedOkay: boolean;
        // let pickedNo: boolean;
        // let pickedMaybe: boolean;
        // switch (dialogoptionsElement) {
        //     case dialogoptions.iSayYes:
        //         pickedYes = true;
        //         console.log(pickedYes);
        //         await ƒS.Speech.tell(characters.protagonist, "Ja");
        //         break;
        //     case dialogoptions.iSayNo:
        //         pickedNo = true;
        //         console.log(pickedNo);
        //         await ƒS.Speech.tell(characters.protagonist, "Nein");
        //         break;
        //     case dialogoptions.iSayOk:
        //         pickedOkay = true;
        //         console.log(pickedOkay);
        //         await ƒS.Speech.tell(characters.protagonist, "Okay");
        //         break;
        //     case dialogoptions.iSayMaybe:
        //         pickedMaybe = true;
        //         console.log(pickedMaybe);
        //         await ƒS.Speech.tell(characters.protagonist, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,");
        //         break;
        //     }
    }
    Template.firstScene = firstScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map