"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transition = {
        fizzle: {
            duration: 1.5,
            alpha: "FreeTransitions/Others/005.jpg",
            edge: 2
        },
        waves: {
            duration: 2,
            alpha: "FreeTransitions/WipesAndOther/9.jpg",
            edge: 2
        }
    };
    Template.sound = {
        // music
        mainMusic: "Audio/Music/inspiration.mp3",
        spookyMusic: "Audio/Music/nightmare.mp3",
        splashMusic: "Audio/Music/hillofwind.mp3",
        // ambiance
        birds: "Audio/Ambiance/springBirds.wav",
        // SFX
        drop: "Audio/SFX/drop.mp3",
        schoolBell: "Audio/SFX/schoolBell.wav",
        sparkle: "Audio/SFX/sparkle.mp3",
        pageflip: "Audio/SFX/pageflip.wav",
        switch: "Audio/SFX/switch.wav",
        flashlight: "Audio/SFX/flashlight.wav",
        select: "Audio/SFX/select.wav",
        selectDialog: "Audio/SFX/selectdialog.wav",
        typing: "Audio/SFX/phone.wav",
        femalegasp: "Audio/SFX/femalegasp.mp3",
        shutter: "Audio/SFX/shutter.mp3"
    };
    Template.locations = {
        schoolOutsideDay: {
            name: "schoolOutsideDay",
            background: "Images/Backgrounds/school-outside-day.jpg",
            foreground: ""
        },
        schoolOutsideTwilight: {
            name: "schoolOutsideTwilight",
            background: "Images/Backgrounds/school-outside-twilight.jpg",
            foreground: ""
        },
        corridorDay: {
            name: "corridorDay",
            background: "Images/Backgrounds/corridor-day.jpg",
            foreground: ""
        },
        classroomDay: {
            name: "classroomDay",
            background: "Images/Backgrounds/classroom-day.jpg",
            foreground: ""
        }
    };
    Template.chapterCovers = {
        chapterSimple: {
            name: "chapterSimple",
            background: "Images/Backgrounds/Kapitel/Kapitel1.png",
            foreground: ""
        },
        chapter: {
            name: "chapterOne",
            background: "Images/Backgrounds/Kapitel/chapter.png",
            foreground: ""
        },
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
                mean: "Images/Characters/Protagonist/protagonist-mean.png",
                surprised: "Images/Characters/Protagonist/protagonist-surprised.png"
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
                scared: "Images/Characters/Kira/kira-scared.png",
                unsure: "Images/Characters/Kira/kira-unsure.png",
                smiling: "Images/Characters/Kira/kira-smiling.png"
            }
        },
        atlas: {
            name: "Atlas",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/Atlas/atlas-angry-2.png",
                happy: "Images/Characters/Atlas/atlas-happy-2.png",
                sad: "Images/Characters/Atlas/atlas-sad.png",
                neutral: "Images/Characters/Atlas/atlas-neutral.png",
                scared: "Images/Characters/Atlas/atlas-scared.png",
                playful: "Images/Characters/Atlas/atlas-playful.png"
            }
        },
        lucia: {
            name: "Lucia",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/Lucia/lucia-neutral.png",
                sad: "Images/Characters/Lucia/lucia-sad.png",
                smiling: "Images/Characters/Lucia/lucia-smiling.png",
                surprised: "Images/Characters/Lucia/lucia-surprised.png",
                unsure: "Images/Characters/Lucia/lucia-unsure.png",
                upset: "Images/Characters/Lucia/lucia-upset.png",
            }
        }
    };
    async function simulateCameraFlash() {
        let shutter = document.getElementById("shutter");
        shutter.classList.add("on");
        Template.ƒS.Sound.play(Template.sound.shutter, 0.5, false);
        setTimeout(function () {
            shutter.classList.remove('on');
        }, 30 * 2 + 45);
    }
    Template.simulateCameraFlash = simulateCameraFlash;
    function revealNotes() {
        Template.dataForSave.toggleSuspectsButton = true;
    }
    Template.revealNotes = revealNotes;
    function updateNotes() {
        if (Template.dataForSave.toggleSuspectsButton == true) {
            let toggleSuspects = document.getElementById("toggleSuspects");
            toggleSuspects.style.visibility = "visible";
            toggleSuspects.style.opacity = "1";
        }
        // Portraits
        if (Template.dataForSave.atlasPortrait == true) {
            let atlasPortrait = document.getElementById("atlasPortrait");
            atlasPortrait.style.filter = "unset";
        }
        if (Template.dataForSave.solasPortrait == true) {
            let atlasPortrait = document.getElementById("solasPortrait");
            atlasPortrait.style.filter = "unset";
        }
        if (Template.dataForSave.luciaPortrait == true) {
            let atlasPortrait = document.getElementById("luciaPortrait");
            atlasPortrait.style.filter = "unset";
        }
        // Motives
        if (Template.dataForSave.solasMotive == true) {
            let solasMotive = document.getElementById("solasMotive");
            solasMotive.classList.remove("hidden");
        }
    }
    Template.updateNotes = updateNotes;
    function removeFallingLeaves() {
        let leaves = document.getElementById("leaves");
        leaves.remove();
    }
    Template.removeFallingLeaves = removeFallingLeaves;
    function addFallingLeaves() {
        let scene = document.getElementById("scene");
        let div = document.createElement("div");
        div.id = "leaves";
        for (let index = 0; index < 15; index++) {
            let i = document.createElement("i");
            div.appendChild(i);
        }
        scene.appendChild(div);
    }
    Template.addFallingLeaves = addFallingLeaves;
    // create chapter cover text
    function createText(givenheadline, giventext1, giventext2, givenid) {
        let scene = document.getElementById("scene");
        // create div
        let div = document.createElement("div");
        div.classList.add("coverDialog");
        div.id = givenid;
        // create headline, append to div
        let headline = document.createElement("h1");
        let headlineContent = document.createTextNode(givenheadline);
        headline.appendChild(headlineContent);
        div.appendChild(headline);
        // create text, append to div
        let ptag1 = document.createElement("p");
        let text1 = document.createTextNode(giventext1);
        ptag1.appendChild(text1);
        div.appendChild(ptag1);
        let ptag2 = document.createElement("p");
        let text2 = document.createTextNode(giventext2);
        ptag2.appendChild(text2);
        div.appendChild(ptag2);
        // append div to scene
        scene.appendChild(div);
    }
    Template.createText = createText;
    // animation tutorial
    function animation() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft, rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5) },
            end: { translation: Template.ƒS.positions.bottomright, rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.animation = animation;
    // let speechInDom = document.getElementById("speech");
    // speechInDom.addEventListener("change", listenSpeechChange);
    // function listenSpeechChange() {
    //   console.log("speaking");
    // }
    Template.dataForSave = {
        nameProtagonist: "",
        // visibility of buttons in menu
        toggleSuspectsButton: false,
        // visibility of elements in notes window
        solasPortrait: false,
        solasMotive: false,
        solasOpportunity: false,
        atlasPortrait: false,
        atlasMotive: false,
        atlasOpportunity: false,
        luciaPortrait: false,
        luciaMotive: false,
        luciaOpportunity: false,
    };
    window.addEventListener("load", start);
    function start(_event) {
        //Menü
        Template.gameMenu = Template.ƒS.Menu.create(Template.menuInGame, Template.buttonFunctionalities, "menuInGame"); //hier CSS Klasse angeben
        let scenes = [
            // { scene: firstScene, name: "firstScene"}
            { scene: Template.coverChapterOne, name: "chapterOne" },
            { scene: Template.motive, name: "motive" },
            { scene: Template.test, name: "test" }
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
    function showSuspects() {
        let toggleSuspects = document.getElementById("toggleSuspects");
        toggleSuspects.classList.toggle("active");
        var element = document.getElementById("suspects");
        element.classList.toggle("hidden");
    }
    Template.showSuspects = showSuspects;
    function showCredits() {
        Template.ƒS.Text.setClass("credits hint");
        let credits = "<h1>Credits</h1>\
            <table>\
            <tr>\
                <td>Falling Leaves CSS</td>\
                <td>Aaron Griffin, https://codepen.io/uurrnn/pen/WNLVdN</td>\
            </tr>\
            </table>\
          ";
        Template.ƒS.Text.print(credits);
    }
    Template.showCredits = showCredits;
    ;
    function showShortcuts() {
        Template.ƒS.Text.setClass("shortcuts hint");
        let shortcuts = "<h1>Shortcuts</h1>\
        <table>\
          <tr>\
            <td>Menu (open/close)</td>\
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
          <tr>\
            <td>Notes</td>\
            <td>S</td>\
        </tr>\
        </table>\
        ";
        Template.ƒS.Text.print(shortcuts);
    }
    Template.showShortcuts = showShortcuts;
    ;
    // MENU
    Template.menuInGame = {
        save: "Save",
        load: "Load",
        // close: "Close",
        credits: "Credits",
        shortcuts: "Shortcuts",
        toggleSound: "Sound",
        turnUpVolume: "+",
        turnDownVolume: "-",
        toggleSuspects: "Notes"
    };
    // true = offen; false = geschlossen
    Template.menuOpen = true;
    Template.notesCreated = false;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case Template.menuInGame.save:
                await Template.ƒS.Progress.save();
                break;
            case Template.menuInGame.load:
                await Template.ƒS.Progress.load();
                break;
            // case menuInGame.close:
            //     gameMenu.close();
            //     menuOpen = false;
            //     break;
            case Template.menuInGame.credits:
                Template.ƒS.Sound.play(Template.sound.select, 2, false);
                showCredits();
                break;
            case Template.menuInGame.shortcuts:
                Template.ƒS.Sound.play(Template.sound.select, 2, false);
                showShortcuts();
                break;
            case Template.menuInGame.toggleSound:
                Template.ƒS.Sound.play(Template.sound.select, 2, false);
                toggleSound();
                break;
            case Template.menuInGame.turnUpVolume:
                Template.ƒS.Sound.play(Template.sound.select, 2, false);
                incrementSound();
                break;
            case Template.menuInGame.turnDownVolume:
                Template.ƒS.Sound.play(Template.sound.select, 2, false);
                decrementSound();
                break;
            case Template.menuInGame.toggleSuspects:
                Template.ƒS.Sound.play(Template.sound.select, 2, false);
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
            case Template.ƒ.KEYBOARD_CODE.S:
                if (Template.notesCreated) {
                    console.log("Suspects");
                    showSuspects();
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (Template.menuOpen) {
                    console.log("Schließen");
                    Template.gameMenu.close();
                    Template.menuOpen = false;
                }
                else {
                    console.log("Öffnen");
                    Template.gameMenu.open();
                    Template.menuOpen = true;
                }
                break;
        }
    }
    Template.hndKeyPress = hndKeyPress;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function animationExampleScene() {
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.happy, Template.animation());
        await Template.ƒS.update();
    }
    Template.animationExampleScene = animationExampleScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function coverChapterOne() {
        Template.updateNotes();
        Template.dataForSave.toggleSuspectsButton = true;
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.updateNotes();
        Template.addFallingLeaves();
        let narratorText = {
            Narrator: {
                T0001: "Klicke, um fortzufahren."
            }
        };
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        await Template.ƒS.Location.show(Template.chapterCovers.chapter);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        Template.createText("Kapitel 1: Motive", "Der erste Schritt deiner Nachforschungen wird es sein, die Verdächtigen zu befragen und mögliche Motive für die Sabotage auszumachen. Sobald du eine wertvolle Information erhältst, wird sie automatisch zu deinen Notizen hinzugefügt.", "Wenn du mit anderen interagierst, kann es passieren, dass du ihnen basierend auf deinen Antworten oder Entscheidungen mehr oder weniger sympathisch wirst. Aber keine Angst, Kira mag dich immer!", "ch1");
        // await new Promise(resolve => setTimeout(resolve, 1600));
        await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0001);
        let ch1 = document.getElementById("ch1");
        ch1.remove();
        Template.removeFallingLeaves();
        Template.ƒS.Sound.play(Template.sound.pageflip, 0.5, false);
    }
    Template.coverChapterOne = coverChapterOne;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstScene() {
        let strangerText = {
            Stranger: {
                T0001: "Entschuldigung!",
                T0002: "Es tut mir leid, falls ich dich störe, aber ich brauche deine Hilfe. Du bist Schulsprecherin, richtig?",
                T0003: "Ich weiß nicht, wie ich es erklären soll, aber... Ich glaube, jemand sabotiert den Theaterclub.",
            }
        };
        let narratorText = {
            Narrator: {
                T0001: "Die Glocke zur Pause schlägt. Endlich! Du schlenderst nach draußen und erfreust dich an der Nachmittagssonne.",
                T0002: "Du drehst dich um und erblickst ein Mädchen, das dir bekannt vorkommt. Sie geht nicht in deine Klasse, also woher...?",
                T0003: "Du schaust zu, wie Kira im Schulgebäude verschwindet.",
                T0004: "Du hast ein Notizheft angelegt. Sehr vorbildlich, du Musterschülerin! Du kannst es ab jetzt im Menü unter 'Notes' einblenden."
            }
        };
        let kiraText = {
            Kira: {
                T0001: "Ja, das stimmt.",
                T0001_2: "Wir stecken gerade mitten in den Proben für die nächste Aufführung. Aber seit ein paar Tagen läuft alles schief.",
                T0002: "Zum Beispiel letztens. Da verschwanden alle Skripte aus unserem Clubraum. Oder gestern, da fanden wir plötzlich eines der Kostüme im Müll. Es war total zerschnitten! Jemand hat es auf uns abgesehen, denkst du nicht?",
                T0003_a: "Eigentlich wäre ich damit zum ersten Schulsprecher gegangen, aber er gehört selbst zum Theaterclub. Es ist besser, wenn sich ein Außenstehender damit beschäftigt.",
                T0003_b: "Hah, du bist ja drollig. Eigentlich wäre ich damit zum ersten Schulsprecher gegangen, aber er gehört selbst zum Theaterclub. Es ist besser, wenn sich ein Außenstehender damit beschäftigt.",
                // T0003_2: "Eigentlich wäre ich damit zum ersten Schulsprecher gegangen, aber er gehört selbst zum Theaterclub. Es ist besser, wenn sich ein Außenstehender damit beschäftigt.",
                T0003_3: "Ich weiß zufällig, dass du nicht auf den Kopf gefallen bist. Immer, wenn ich dich sehe, steckt deine Nase in einem Buch... Und auf der Ziellinie zur Jahrgangsbesten bist du auch. Also, was sagst du?",
                T0004: "Ehm... Es hatten soweit ich weiß nur drei Schüler freien Zugang zum Theaterraum und damit Gelegenheit zu der Sabotage...",
                T0004_2: "Zunächst Solas. Er ist der Autor des Stücks.",
                T0004_3: "Dann ist da Atlas, der Schulsprecher. Er spielt die männliche Hauptrolle.",
                T0004_4: "Und zuletzt gibt es noch Lucia. Sie kümmert sich um die Technik.",
                T0005: "Vielen Dank! Dann sehe ich dich dort."
            }
        };
        let protagonistText = {
            Protagonist: {
                T0001: "Das beste am Schultag ist die Pause... Kein Lehrer scheucht dich über den Sportplatz oder zwingt dich, an der Tafel Matheaufgaben zu lösen.",
                T0002: "Ich kann mich entspannen und lesen, die Stimmen der anderen verschmelzen zu einem Rauschen im Hintergrund. Himmlisch!",
                T0003: "Nanu? Spricht da jemand mit mir?",
                T0004: "Stellvertretende Schulsprecherin, wenn man es genau nimmt. Was gibt’s denn?",
                T0005: "Natürlich. Jetzt weiß ich, woher ich dich kenne. Du bist Kira, die Leiterin des Theaterclubs.",
                T0006: "Wie meinst du das?",
                T0007_a: "Das klingt in der Tat seltsam. Aber wieso kommst du damit zu mir?",
                T0007_b: "Ein Geist war das jedenfalls nicht... Aber wieso kommst du damit zu mir?",
                T0008_a: "Weißt du, der Schülerrat ist eigentlich keine Detektei... Egal. Natürlich helfe ich dir, das gehört zu meinen Pflichten dazu. Du siehst selber ganz helle aus, hast du bereits Verdächtige?",
                T0008_b: "Ich bin dabei! Zu einem guten Mystery sage ich nicht nein. Du siehst selber ganz helle aus, hast du bereits Verdächtige?",
                T0009: "In Ordnung. Ich begleite dich zu der Probe heute und nehme die drei mal unter die Lupe.",
                T0010: "Komisch. Was für einen Grund sollte jemand haben, eine Theateraufführung zu sabotieren? Naja, das finde ich bald heraus... Am besten, ich mache mir Notizen wie ein richtiger Ermittler.",
                T0011: "Perfekt! Wenn ich gut organisiert bin, dann ist die Sache im Handumdrehen gegessen."
            }
        };
        let dialogoptions = {
            iSayA: "Das klingt in der Tat seltsam.",
            iSayB: "Ein Geist war das jedenfalls nicht..."
        };
        let dialogoptions2 = {
            iSayA: "Weißt du, der Schülerrat ist eigentlich keine Detektei... Egal.",
            iSayB: "Ich bin dabei!"
        };
        Template.addFallingLeaves();
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.sound.schoolBell, 0.5, false);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.schoolOutsideTwilight);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0001);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        Template.ƒS.Sound.play(Template.sound.birds, 0.5, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0001);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.happyEyesClosed, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.stranger, strangerText.Stranger.T0001);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.surprised, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.neutral, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.stranger, strangerText.Stranger.T0002);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0004);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.neutral, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.stranger, strangerText.Stranger.T0003);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0005);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.smiling, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0001);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.neutral, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0001_2);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.surprised, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0006);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.unsure, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0002);
        let dialogoptionsElement = await Template.ƒS.Menu.getInput(dialogoptions, "dialogoptions");
        Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        switch (dialogoptionsElement) {
            case dialogoptions.iSayA:
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0007_a);
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.neutral, Template.ƒS.positionPercent(75, 97));
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0003_a);
                await Template.ƒS.update(0.5);
                break;
            case dialogoptions.iSayB:
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0007_b);
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.smiling, Template.ƒS.positionPercent(75, 97));
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0003_b);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Character.hide(Template.characters.kira);
                await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.neutral, Template.ƒS.positionPercent(75, 97));
                await Template.ƒS.update(0.5);
                break;
        }
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0003_3);
        let dialogoptionsElement2 = await Template.ƒS.Menu.getInput(dialogoptions2, "dialogoptions");
        Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        switch (dialogoptionsElement2) {
            case dialogoptions2.iSayA:
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0008_a);
                break;
            case dialogoptions2.iSayB:
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0008_b);
                break;
        }
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.neutral, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0004);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0004_2);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0004_3);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0004_4);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0009);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.neutral, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0005);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0003);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0010);
        Template.revealNotes();
        Template.updateNotes();
        Template.ƒS.Sound.play(Template.sound.sparkle, 0.5, false);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.happyEyesClosed, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0011);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0004);
        Template.removeFallingLeaves();
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0, 3, true);
        Template.ƒS.Sound.fade(Template.sound.birds, 0, 3, true);
    }
    Template.firstScene = firstScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function motive() {
        Template.updateNotes();
        let narratorText = {
            Narrator: {
                T0001: "Du triffst pünkltich bei der Probe des Theaterclubs ein. Neben den anderen Mitgliedern sind auch deine Verdächtigen anwesend.",
                T0002: "Mit wem möchtest du sprechen?",
                T0003: "Schnell ein Foto für die Notes..."
            }
        };
        let atlasText = {
            Atlas: {
                T0001: "... ?",
                T0002: "Nur, dass solche amateurhaften Sabotageversuche das Theaterstück nicht stoppen werden.",
                T0003: "Nein, ich bin sehr beschäftigt. Ich bin Jahrgangsbester und Schulsprecher, wie du vielleicht weißt. Obendrein bin ich Mitglied in mehreren AGs. Der Theaterclub, der Schach-Club, der Kalligraphie-Club... Meinst du wirklich, ich habe Zeit für solche Kindereien?",
                T0004_a: "Na dann kannst du dir jetzt ein Bild machen.",
                T0004_b: "Kusch doch nicht gleich. Gute Ermittler sollten etwas mehr Rückrat zeigen.",
                T0004_2: "Soll ich dir sagen, was ich denke? Verschwundene Skripte, ein zerstörtes Kostüm... Ich glaube, bei dieser vermeintlichen Sabotage handelt es sich um einen bescheuerten Streich. Ernst nehme ich das jedenfalls nicht.",
                T0004_3: "Es sei denn...",
                T0005_a: "Ist das deine Strategie? Du suchst nach Lösungen bei deinen Verdächtigen? Vielleicht solltest du selbst anfangen nachzudenken.",
                T0005_b: "Es sei denn, du selbst hast die Sabotage inszeniert, um dich wichtig zu machen. Naja, wir werden bald sehen, wie viel heiße Luft in deinem Kopf ist...",
                T0006: "Hm... Da wir schon reden, möchte ich dir noch einen Hinweis geben.",
                T0006_2: "Bitte erzähle nicht herum, dass du das von mir hast. Mir ist mein guter Ruf sehr wichtig. Du verstehst das sicher, so von Schulsprecher zu Stellvertreterin.",
                T0007_1: "Solas macht sich wohl in letzter Zeit viel Druck. Es ist das erste Mal, dass die Schule ein Theaterstück genehmigt hat, das von einem Schüler geschrieben wurde. Normalerweise führt der Theaterclub nur Klassiker auf.",
                T0007_2: "Solas möchte unbedingt, dass alles perfekt läuft. Das Stück ist sein Meisterwerk, so etwas verstehen nur Künstler. Aber er hatte keine Zeit mehr, das Skript zu überarbeiten. Wenn nun jedoch die Premiere verschoben werden müsste...",
                T0007_3: "Du verstehst, worauf ich hinaus will, ja?",
                T0008_a: "Und du bist überraschend scharfzüngig. Na dann, viel Erfolg.",
                T0008_b: "Das kann ja nur schiefgehen..."
            }
        };
        let protagonistToAtlas = {
            Protagonist: {
                T0001: "Hallo, ich höre mich nur ein wenig um. Jemand hat es wohl auf den Theaterclub abgesehen und möchte eure Aufführung verhindern. Weißt du etwas darüber?",
                T0003: "Dann hast du nichts damit zu tun?",
                T0004_a: "Ich kenne deinen Terminkalender nicht.",
                T0004_b: "Sorry, ich wollte dich nicht anklagen.",
                T0005_a: "Es sei denn... was? Hast du einen Verdacht?",
                T0005_b: "Spucks aus, du Angeber.",
                T0006: "Wars das?",
                T0007: "Ich höre?",
                T0008_a: "Das war überraschend hilfreich. Ich danke dir.",
                T0008_b: "Pff... Alles klar. Und tschüss."
            }
        };
        let startTalk = {
            withAtlas: "Atlas",
            withSolas: "Solas",
            withLucia: "Lucia"
        };
        let dialogoptions = {
            iSayA: "Ich kenne deinen Terminkalender nicht.",
            iSayB: "Sorry, ich wollte dich nicht anklagen."
        };
        let dialogoptions2 = {
            iSayA: "Es sei denn... was? Hast du einen Verdacht?",
            iSayB: "Spucks aus, du Angeber."
        };
        let dialogoptions3 = {
            iSayA: "Das war überraschend hilfreich. Ich danke dir.",
            iSayB: "Pff... Alles klar. Und tschüss."
        };
        await Template.ƒS.Location.show(Template.locations.classroomDay);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0002);
        let loopCount = 0;
        let loopLength = Object.keys(startTalk).length;
        while (loopCount < loopLength) {
            if (loopCount > 0) {
                await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0002);
            }
            let startTalkElement = await Template.ƒS.Menu.getInput(startTalk, "dialogoptions");
            Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
            switch (startTalkElement) {
                case startTalk.withAtlas:
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0003);
                    await Template.ƒS.update(0.5);
                    await new Promise(resolve => setTimeout(resolve, 500));
                    Template.simulateCameraFlash();
                    Template.dataForSave.atlasPortrait = true;
                    Template.updateNotes();
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.angry, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0001);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToAtlas.Protagonist.T0001);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0002);
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToAtlas.Protagonist.T0003);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0003);
                    let dialogoptionsElement = await Template.ƒS.Menu.getInput(dialogoptions, "dialogoptions");
                    Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
                    switch (dialogoptionsElement) {
                        case dialogoptions.iSayA:
                            await Template.ƒS.Character.hide(Template.characters.atlas);
                            await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.playful, Template.ƒS.positionPercent(75, 97));
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0004_a);
                            await Template.ƒS.update(0.5);
                            break;
                        case dialogoptions.iSayB:
                            await Template.ƒS.Character.hide(Template.characters.atlas);
                            await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.angry, Template.ƒS.positionPercent(75, 97));
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0004_b);
                            await Template.ƒS.update(0.5);
                    }
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0004_2);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0004_3);
                    let dialogoptionsElement2 = await Template.ƒS.Menu.getInput(dialogoptions2, "dialogoptions");
                    Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
                    await Template.ƒS.update(0.5);
                    switch (dialogoptionsElement2) {
                        case dialogoptions2.iSayA:
                            await Template.ƒS.Character.hide(Template.characters.atlas);
                            await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.playful, Template.ƒS.positionPercent(75, 97));
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0005_a);
                            await Template.ƒS.update(0.5);
                            break;
                        case dialogoptions2.iSayB:
                            await Template.ƒS.Character.hide(Template.characters.atlas);
                            await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0005_b);
                            await Template.ƒS.update(0.5);
                    }
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.angry, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToAtlas.Protagonist.T0006);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.happy, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0006);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0006_2);
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.surprised, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToAtlas.Protagonist.T0007);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0007_1);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0007_2);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0007_3);
                    await Template.ƒS.update(0.5);
                    Template.dataForSave.solasMotive = true;
                    Template.updateNotes();
                    let dialogoptionsElement3 = await Template.ƒS.Menu.getInput(dialogoptions3, "dialogoptions");
                    Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
                    switch (dialogoptionsElement3) {
                        case dialogoptions3.iSayA:
                            await Template.ƒS.Character.hide(Template.characters.atlas);
                            await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.playful, Template.ƒS.positionPercent(75, 97));
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0008_a);
                            await Template.ƒS.update(0.5);
                            break;
                        case dialogoptions3.iSayB:
                            await Template.ƒS.Character.hide(Template.characters.atlas);
                            await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.angry, Template.ƒS.positionPercent(75, 97));
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0008_b);
                            await Template.ƒS.update(0.5);
                    }
                    Template.ƒS.Speech.hide();
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.update(0.5);
                    delete startTalk.withAtlas;
                    break;
                case startTalk.withSolas:
                    delete startTalk.withSolas;
                    break;
                case startTalk.withLucia:
                    // go to library with her
                    // go back to classroom after
                    delete startTalk.withLucia;
                    break;
            }
            loopCount++;
        }
    }
    Template.motive = motive;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function test() {
        Template.updateNotes();
        // control lights in scene
        function setLights(action) {
            let htmlInDom = document.querySelector("html");
            switch (action) {
                case "turnOffLights":
                    Template.ƒS.Sound.play(Template.sound.switch, 1.5, false);
                    htmlInDom.classList.add("dark");
                    break;
                case "turnOnLights":
                    Template.ƒS.Sound.play(Template.sound.switch, 1.5, false);
                    htmlInDom.classList.remove("dark");
                    break;
                case "turnOnFlashlight":
                    Template.ƒS.Sound.play(Template.sound.flashlight, 1, false);
                    htmlInDom.classList.add("flashlight");
                    break;
                case "turnOffFlashlight":
                    Template.ƒS.Sound.play(Template.sound.flashlight, 1, false);
                    htmlInDom.classList.remove("flashlight");
                    break;
                default:
                    break;
            }
        }
        function updateFlashlight(e) {
            // get current cursor position
            let x = e.clientX || e.touches[0].clientX;
            let y = e.clientY || e.touches[0].clientY;
            // set as position of flashlight with css
            document.documentElement.style.setProperty('--cursorX', x + 'px');
            document.documentElement.style.setProperty('--cursorY', y + 'px');
        }
        // call updateFlashlight on mouse movement
        document.addEventListener('mousemove', updateFlashlight);
        document.addEventListener('touchmove', updateFlashlight);
        // add switch img to scene AFTER lights are out, so player doesn't know where it is
        function addSwitchToScene() {
            // set classes for possible positions of switch
            let classes = new Array('bottomRight', 'bottomLeft', 'centerLeft', 'centerRight');
            let length = classes.length;
            // create switch img
            let img = document.createElement("img");
            img.src = "https://github.com/manzijes/WPM_Visual_Novel/blob/main/Template/Images/switch.png?raw=true";
            img.id = "switch";
            // assign random class (therefore position)
            img.classList.add(classes[Math.floor(Math.random() * length)]);
            // add switch img to scene
            let src = document.getElementById("scene");
            src.appendChild(img);
            img.addEventListener('click', clickSwitch);
        }
        // how to proceed when player finds light switch
        async function clickSwitch() {
            // remove switch image
            let switchImg = document.getElementById("switch");
            switchImg.remove();
            Template.ƒS.Sound.play(Template.sound.switch, 1, false);
            await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
            setLights("turnOnLights");
            await Template.ƒS.update(0.5);
            await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003);
            await Template.ƒS.Character.hide(Template.characters.protagonist);
            await Template.ƒS.update(0.5);
            await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.scared, Template.ƒS.positionPercent(75, 97));
            await Template.ƒS.update(0.5);
            await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0002);
            await Template.ƒS.update(0.5);
            // change spooky music to normal theme
            Template.ƒS.Sound.fade(Template.sound.spookyMusic, 0, 6);
            Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 5, true);
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
        await Template.ƒS.Location.show(Template.locations.classroomDay);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, narratorText.Narrator.T0001);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0001);
        await Template.ƒS.update(0.5);
        setLights("turnOffLights");
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0, 3);
        Template.ƒS.Sound.fade(Template.sound.spookyMusic, 0.5, 2.5, true);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1.5);
        addSwitchToScene();
        await new Promise(resolve => setTimeout(resolve, 200));
        Template.ƒS.Sound.play(Template.sound.femalegasp, 1.5, false);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0001);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0002);
        await Template.ƒS.update(0.5);
        setLights("turnOnFlashlight");
    }
    Template.test = test;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map