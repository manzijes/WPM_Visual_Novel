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
        },
        library: {
            name: "library",
            background: "Images/Backgrounds/library.png"
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
            background: "Images/Backgrounds/Kapitel/chapter-lilac.png",
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
        },
        solas: {
            name: "Solas",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/Solas/solas-neutral.png",
                sad: "Images/Characters/Solas/solas-sad.png",
                happy: "Images/Characters/Solas/solas-happy.png",
                scared: "Images/Characters/Solas/solas-scared.png",
                angry: "Images/Characters/Solas/solas-angry.png",
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
    async function showAquiredPages() {
        let pages = ['<div class="aquiredPagesWrapper"><p>Im Laufe des Spiels erhälst du verschiedene Indizien, die du hier im Menü jederzeit aufrufen kannst.</p></div>'];
        let current = 0;
        let numberAquired = 0;
        if (Template.dataForSave.luciaMotive == true) {
            numberAquired += 1;
            pages.push('<div class="smartphone">\
      <div class="content">\
          <div class="chatcontainer">\
              <p class="chatname">Lucia:</p>\
              <p>Ich bin es einfach leid tbh 😑 Ich gebe alles für diesen Club, aber höre ich mal ein Danke? Nein.</p>\
              <span class="time-right">11:00</span>\
          </div>\
          \
          <div class="chatcontainer darker">\
              <p class="chatname">Solas:</p>\
              <p>Das tut mir leid 😣</p>\
              <span class="time-right">11:01</span>\
          </div>\
          \
          <div class="chatcontainer">\
              <p class="chatname">Lucia:</p>\
              <p>Es liegt einfach daran, dass ich hinter den Kulissen arbeite. Nur, weil ich nicht als ⭐Star⭐ auf der Bühne stehe, werde ich von den anderen wie Luft behandelt.</p>\
              <span class="time-right">11:02</span>\
          </div>\
          \
          <div class="chatcontainer">\
              <p class="chatname">Lucia:</p>\
              <p>Ich will eigentlich nur etwas Wertschätzung..</p>\
              <span class="time-right">11:02</span>\
          </div>\
          \
          <div class="chatcontainer darker">\
              <p class="chatname">Solas:</p>\
              <p>Das wird schon 🌞 In zwei Tagen ist die Premiere! Wenn am Ende alle applaudieren, stehen auch du und ich auf der Bühne.</p>\
              <span class="time-right">11:05</span>\
          </div>\
          </div>\
        </div>');
        }
        if (Template.dataForSave.atlasDiary == true) {
            numberAquired += 1;
            pages.push('<div class="diaryPageWrapper-flip">\
      <div class="diaryPage">\
      <p>Mein Tagebuch,</p>\
      <p>ich muss zugeben, dass ich frustriert bin. Sollen meine Bemühungen umsonst gewesen sein?</p>\
      <p>Jeder mit Augen im Kopf muss doch erkennen, dass ich mit Abstand der beste Schüler an dieser Schule bin... Trotzdem droht der Titel des Jahrgangsbesten mir nun abhanden zu kommen.</p>\
      <p>Ausgerechnet die stellvertretende Schulsprecherin macht mir Konkurrenz. Dabei erhalte ich die Auszeichnung jedes Schuljahr mit Leichtigkeit, also wie konnte es dazu kommen? Habe ich mich mit dem Amt des Schulsprechers und den vielen AGs etwa übernommen?</p>\
      <p>Ich wünschte, meine Stellvertreterin stünde unter demselben Druck wie ich. Dann würden faire Bedingungen herrschen.</p>\
      <p style="text-align: right">Gezeichnet, Atlas.</p>\
      </div>\
      </div>');
        }
        console.log("number: " + numberAquired);
        // multiple pages
        if (numberAquired > 0) {
            let flip = { back: "Zurück", next: "Weiter", done: "x" };
            let choice;
            Template.ƒS.Text.setClass("allhints");
            do {
                Template.ƒS.Text.print(pages[current]);
                choice = await Template.ƒS.Menu.getInput(flip, "flip");
                if (numberAquired > 1) {
                    switch (choice) {
                        case flip.back:
                            current = Math.max(0, current - 1);
                            break;
                        case flip.next:
                            current = Math.min(numberAquired, current + 1);
                            break;
                    }
                }
                else {
                    switch (choice) {
                        case flip.back:
                            current = Math.max(0, current - 1);
                            break;
                        case flip.next:
                            current = Math.min(1, current + 1);
                            break;
                    }
                }
            } while (choice != flip.done);
            // single page
        }
        else {
            let close = { done: "x" };
            let choice;
            Template.ƒS.Text.setClass("allhints");
            do {
                Template.ƒS.Text.print(pages[current]);
                choice = await Template.ƒS.Menu.getInput(close, "pageclose");
            } while (choice != close.done);
        }
        Template.ƒS.Text.close();
    }
    Template.showAquiredPages = showAquiredPages;
    function updateNotes() {
        Template.dataForSave.toggleSuspectsButton = true;
        let toggleSuspects = document.getElementById("toggleSuspects");
        toggleSuspects.style.visibility = "visible";
        toggleSuspects.style.opacity = "1";
        let toggleAquiredPages = document.getElementById("toggleAquiredPages");
        toggleAquiredPages.style.visibility = "visible";
        toggleAquiredPages.style.opacity = "1";
        // Portraits
        if (Template.dataForSave.atlasPortrait == true) {
            let atlasPortrait = document.getElementById("atlasPortrait");
            atlasPortrait.style.filter = "unset";
        }
        if (Template.dataForSave.solasPortrait == true) {
            let solasPortrait = document.getElementById("solasPortrait");
            solasPortrait.style.filter = "unset";
        }
        if (Template.dataForSave.luciaPortrait == true) {
            let luciaPortrait = document.getElementById("luciaPortrait");
            luciaPortrait.style.filter = "unset";
        }
        // Motives
        if (Template.dataForSave.solasMotive == true) {
            let solasMotive = document.getElementById("solasMotive");
            solasMotive.classList.remove("hidden");
        }
        if (Template.dataForSave.atlasMotive == true) {
            if (Template.dataForSave.atlasDiary == true) {
                let atlasMotive = document.getElementById("motiveDiary");
                atlasMotive.classList.remove("hidden");
            }
            else {
                let atlasMotive = document.getElementById("motiveNoDiary");
                atlasMotive.classList.remove("hidden");
            }
        }
        if (Template.dataForSave.luciaMotive == true) {
            let luciaMotive = document.getElementById("luciaMotive");
            luciaMotive.classList.remove("hidden");
        }
        // Opportunities
        if (Template.dataForSave.luciaOpportunity == true) {
            let luciaOpportunity = document.getElementById("luciaOpportunity");
            luciaOpportunity.classList.remove("hidden");
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
    // visibility solas meter
    function showSolasMeter() {
        document.getElementsByName("solasScore").forEach(meterStuffSolas => meterStuffSolas.hidden = false);
    }
    Template.showSolasMeter = showSolasMeter;
    function hideSolasMeter() {
        document.getElementsByName("solasScore").forEach(meterStuffSolas => meterStuffSolas.hidden = true);
    }
    Template.hideSolasMeter = hideSolasMeter;
    // visibility atlas meter
    function showAtlasMeter() {
        document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
    }
    Template.showAtlasMeter = showAtlasMeter;
    function hideAtlasMeter() {
        document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = true);
    }
    Template.hideAtlasMeter = hideAtlasMeter;
    // visibility lucia meter
    function showLuciaMeter() {
        document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
    }
    Template.showLuciaMeter = showLuciaMeter;
    function hideLuciaMeter() {
        document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);
    }
    Template.hideLuciaMeter = hideLuciaMeter;
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
        atlasDiary: false,
        luciaPortrait: false,
        luciaMotive: false,
        luciaOpportunity: false,
        // meterbars
        atlasScore: 20,
        luciaScore: 50,
        solasScore: 50
    };
    window.addEventListener("load", start);
    function start(_event) {
        //Menü
        Template.gameMenu = Template.ƒS.Menu.create(Template.menuInGame, Template.buttonFunctionalities, "menuInGame"); //hier CSS Klasse angeben
        let scenes = [
            // { scene: intro, name: "Einleitung"},
            // { scene: beta, name: "beta" },
            // { scene: coverChapterOne, name: "Hinweis" },
            // { scene: motive, name: "ProbeMotive" },
            { scene: Template.lightsOut, name: "LichtAus" },
            { scene: Template.coverChapterTwo, name: "Hinweis" }
        ];
        // let uiElement: HTMLElement = document.querySelector("[type=interface]");
        // dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
        let atlasInterface = document.getElementById("atlasInterface");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, atlasInterface);
        let luciaInterface = document.getElementById("luciaInterface");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, luciaInterface);
        let solasInterface = document.getElementById("solasInterface");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, solasInterface);
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
            <td>S</td>\
          </tr>\
          <tr>\
            <td>Load</td>\
            <td>L</td>\
          </tr>\
          <tr>\
            <td>Notes</td>\
            <td>N</td>\
        </tr>\
        <tr>\
        <td>Indizien</td>\
        <td>H</td>\
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
        toggleSuspects: "Notes",
        toggleAquiredPages: "Indizien"
    };
    // true = offen; false = geschlossen
    Template.menuOpen = true;
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
            case Template.menuInGame.toggleAquiredPages:
                Template.ƒS.Sound.play(Template.sound.select, 2, false);
                Template.showAquiredPages();
                break;
        }
    }
    Template.buttonFunctionalities = buttonFunctionalities;
    // Shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.S:
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.L:
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.N:
                if (Template.dataForSave.toggleSuspectsButton == true) {
                    showSuspects();
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.H:
                if (Template.dataForSave.toggleSuspectsButton == true) {
                    Template.showAquiredPages();
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.C:
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
    async function beta() {
    }
    Template.beta = beta;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function coverChapterOne() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        let narratorText = {
            Narrator: {
                T0001: "Klicke, um fortzufahren."
            }
        };
        await Template.ƒS.Location.show(Template.chapterCovers.chapter);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        Template.createText("Kapitel 1: Motive", "Der erste Schritt deiner Nachforschungen wird es sein, die Verdächtigen zu befragen und mögliche Motive für die Sabotage auszumachen. Sobald du eine wertvolle Information erhältst, wird sie automatisch zu deinen Notizen hinzugefügt.", "Wenn du mit anderen interagierst, kann es passieren, dass du ihnen basierend auf deinen Antworten oder Entscheidungen mehr oder weniger sympathisch wirst. Aber keine Angst, Kira mag dich immer!", "ch1");
        // await new Promise(resolve => setTimeout(resolve, 1600));
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        let ch1 = document.getElementById("ch1");
        ch1.remove();
        Template.ƒS.Sound.play(Template.sound.pageflip, 0.5, false);
    }
    Template.coverChapterOne = coverChapterOne;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function coverChapterTwo() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        let narratorText = {
            Narrator: {
                T0001: "Klicke, um fortzufahren."
            }
        };
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        await Template.ƒS.Location.show(Template.chapterCovers.chapter);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        Template.createText("Kapitel 2: Indizien", "Der nächste Tag ist angebrochen und die Zeit drängt. Du hast bereits einen ersten Einblick gewonnen. Weiter so!", "Dein nächster Schritt wird es sein, Hinweise zu sammeln, die dich zum richtigen Täter führen. Am Ende dieses Kapitels wirst du Kira dein Ergebnis mitteilen.", "ch2");
        // await new Promise(resolve => setTimeout(resolve, 1600));
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        let ch2 = document.getElementById("ch2");
        ch2.remove();
        Template.ƒS.Sound.play(Template.sound.pageflip, 0.5, false);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0, 3, true);
    }
    Template.coverChapterTwo = coverChapterTwo;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function intro() {
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
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
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
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
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
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0003);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0010);
        Template.updateNotes();
        Template.ƒS.Sound.play(Template.sound.sparkle, 0.5, false);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.happyEyesClosed, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0011);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0004);
        Template.removeFallingLeaves();
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0, 3, true);
        Template.ƒS.Sound.fade(Template.sound.birds, 0, 3, true);
    }
    Template.intro = intro;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function lightsOut() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
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
        let protagonistText = {
            Protagonist: {
                T0001: "Ich habe mir ein gutes erstes Bild verschafft, aber das hat den Saboteur eventuell aufgeschreckt. Er könnte bald wieder handeln...",
                T0002: "Jemand hat das Licht ausgeschaltet. Warte kurz, an meinem Schlüsselbund hängt eine kleine Taschenlampe. Ich suche gleich einen Lichtschalter.",
                T0003: "Ich hab ihn!",
                T0003_b: "Da ist er! Warte, ich laufe kurz hin...",
                T0003_c: "Geduld, bitte. Ich will nirgendwo anstoßen!",
                T0003_d: "Autsch! Jetzt bin ich gestolpert...",
                T0003_e: "Fast da!",
                T0004: "Sieh mal, da ist etwas vor der Tür.",
                T0005: "Der Saboteur hat offenbar das Licht ausgeschaltet, um uns im Schutz der Dunkelheit diese Notiz zu hinterlassen. Im Flur gibt es einen zweiten Lichtschalter, das war also ganz einfach.",
                T0006: "Das sehe ich ein. Ich werde dich nicht enttäuschen.",
                T0007: "Keine Sorge. Morgen werde ich Indizien sammeln und den Schleier lüften."
            }
        };
        let kiraText = {
            Kira: {
                T0000: "Hallo, du. Wie kommen deine Ermittlungen voran?",
                T0001: "Ich verstehe. Und was hast du nun-",
                T0002: "Holy Moly! Was ist passiert?",
                T0003: "Puh. Das hat mich ganz schön erschreckt...",
                T0004: "Ich bin beunruhigt. Wer weiß, wie weit diese Person gehen wird? Wenn du den Saboteur nicht rechtzeitig findest, dann werde ich die Premiere absagen.",
                T0005: "Ich sage es ungern, aber die Zeit drängt. In zwei Tagen ist die Premiere."
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Die Probe ist zu Ende. Die Clubmitglieder verabschieden sich und trudeln auf den Flur.",
                T0001: "Kira und du bleiben allein im Theaterraum zurück."
            }
        };
        await Template.ƒS.Location.show(Template.locations.classroomDay);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.smiling, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0000);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0001);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.neutral, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0001);
        await Template.ƒS.update(0.5);
        setLights("turnOffLights");
        // change normal theme to spooky music
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0, 3);
        Template.ƒS.Sound.fade(Template.sound.spookyMusic, 0.5, 2.5, true);
        // remove characters and speech, add light switch
        await Template.ƒS.Character.hide(Template.characters.kira);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1.5);
        // set classes for possible positions of switch
        let classes = new Array('bottomRight', 'bottomLeft', 'centerLeft', 'centerRight');
        let length = classes.length;
        // get switch img
        let img = document.getElementById("switch");
        // assign random class (therefore position)
        img.classList.add(classes[Math.floor(Math.random() * length)]);
        // make visible
        img.hidden = false;
        img.addEventListener("click", clickSwitch);
        let clickedSwitch = 0;
        async function clickSwitch() {
            if (clickedSwitch == 0) {
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003_b);
            }
            if (clickedSwitch == 1) {
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003_c);
            }
            if (clickedSwitch == 2) {
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003_d);
            }
            if (clickedSwitch > 2) {
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003_e);
            }
            clickedSwitch += 1;
        }
        await new Promise(resolve => setTimeout(resolve, 200));
        Template.ƒS.Sound.play(Template.sound.femalegasp, 1.5, false);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0002);
        await Template.ƒS.update(0.5);
        setLights("turnOnFlashlight");
        await new Promise(resolve => setTimeout(resolve, 20000));
        // remove light switch
        let switchImg = document.getElementById("switch");
        switchImg.remove();
        Template.ƒS.Sound.play(Template.sound.switch, 1, false);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        setLights("turnOnLights");
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.scared, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0003);
        await Template.ƒS.update(0.5);
        // change spooky music to normal theme
        Template.ƒS.Sound.fade(Template.sound.spookyMusic, 0, 6);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 5, true);
        await Template.ƒS.Character.hide(Template.characters.kira);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
    }
    Template.lightsOut = lightsOut;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function motive() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        let narratorText = {
            Narrator: {
                T0001: "Du triffst pünktlich bei der Probe des Theaterclubs ein. Neben den anderen Mitgliedern sind auch deine Verdächtigen anwesend.",
                T0002: "Mit wem möchtest du sprechen?",
                T0003: "Schnell ein Foto für die Notes...",
                T0004: "Du begleitest Lucia zur Bibliothek.",
                T0005: "Du begibst dich zusammen mit Lucia zurück in den Theaterraum."
            }
        };
        // Suspects Texts
        let atlasText = {
            Atlas: {
                T0001: "... ?",
                T0002: "Nur, dass solche amateurhaften Sabotageversuche das Theaterstück nicht stoppen werden.",
                T0003: "Nein, ich bin sehr beschäftigt. Ich bin Jahrgangsbester und Schulsprecher, wie du vielleicht weißt. Obendrein bin ich Mitglied in mehreren AGs. Der Theaterclub, der Schach-Club, der Kalligraphie-Club... Meinst du wirklich, ich habe Zeit für solche Kindereien?",
                T0004_good: "Na dann kannst du dir jetzt ein Bild machen.",
                T0004_bad: "Kusch doch nicht gleich. Gute Ermittler sollten etwas mehr Rückrat zeigen.",
                T0004_2: "Soll ich dir sagen, was ich denke? Verschwundene Skripte, ein zerstörtes Kostüm... Es würde mich nicht wundern, wenn das alles ein bescheuerter Streich wäre. Ernst nehme ich das jedenfalls nicht.",
                T0004_3: "Es sei denn...",
                T0005_bad: "Ist das deine Strategie? Du suchst nach Lösungen bei deinen Verdächtigen? Vielleicht solltest du selbst anfangen nachzudenken.",
                T0005_good: "Es sei denn, du selbst hast die Sabotage inszeniert, um dich wichtig zu machen. Naja, wir werden bald sehen, wie viel heiße Luft in deinem Kopf ist...",
                T0006: "Hm... Da wir schon reden, möchte ich dir einen Hinweis geben.",
                T0006_2: "Bitte erzähle nicht herum, dass du das von mir hast. Mir ist mein guter Ruf sehr wichtig. Du verstehst das sicher, so von Schulsprecher zu Stellvertreterin.",
                T0007_1: "Solas macht sich wohl in letzter Zeit viel Druck. Es ist das erste Mal, dass die Schule ein Theaterstück genehmigt hat, das von einem Schüler geschrieben wurde. Normalerweise führt der Theaterclub nur Klassiker auf.",
                T0007_2: "Solas möchte unbedingt, dass alles perfekt läuft. Das Stück ist sein Meisterwerk, so etwas verstehen nur Künstler. Aber er hatte keine Zeit mehr, das Skript zu überarbeiten. Wenn nun jedoch die Premiere verschoben werden müsste...",
                T0007_3: "Du verstehst, worauf ich hinaus will, ja?",
                T0008_good: "Und du bist überraschend scharfzüngig. Na dann, viel Erfolg.",
                T0008_bad: "Das kann ja nur schiefgehen..."
            }
        };
        let luciaText = {
            Lucia: {
                T0001: "... ?",
                T0002: "Oh! Gerade passt es schlecht, ich habe etwas in der Bibliothek vergessen, das ich holen gehen wollte... Komm doch einfach mit und wir sprechen dort.",
                T0003: "So, da sind wir schon. Es gibt nichts schöneres als den Geruch alter Bücher, findest du nicht?",
                T0004_bad: "Wenn du meinst...",
                T0004_good: "Britische Forscher haben das Aroma alter Bücher einmal beschrieben. Die Duftnote sei eine Kombination aus Gras-Noten, einer Spur Säure und einem Hauch Vanille. So muss Magie riechen.",
                T0005: "Du meinst unser Theaterstück? N-Natürlich. Kira glaubt, dahinter steckt jemand mit einer klaren Intention.",
                T0006: "Ja, drei von uns besitzen einen Schlüssel. Atlas, weil er ungestört Zusatzproben machen möchte. Solas, weil er als Autor und Regisseur von der Vorbereitung bis zur Premiere alles steuert. Und ich, weil ich hin und wieder an der Technik feilen muss.",
                T0007: "Das macht Sinn... Nur hatte ich keinen Zugang. Ich habe meinen Schlüssel vor ein paar Tagen verloren.",
                T0008: "T-Tut mir leid, das kann ich dir auch nicht sagen. Aber ich habe vor kurzem etwas in der Bibliothek gefunden, das für dich von Interesse sein könnte...",
                T0009: "Ich kam neulich hier an, als Atlas seine Sachen gepackt hat. Ich habe mich an seinen Tisch gesetzt und er hat das hier vergessen. Es sieht aus wie eine Seite aus einem Tagebuch.",
                T0010: "Damit hast du wohl Recht. Trotzdem...",
                T0011: "Ich hoffe, ich konnte dir weiterhelfen.",
                T0012_good: "Dann bis bald.",
                T0012_bad: "Haha..."
            }
        };
        let solasText = {
            Solas: {
                T0001: "Oh?",
                T0002: "Was ich darüber denke? Nun... Es ist keine schöne Sache, nicht wahr? Ich habe mein  Herz in dieses Stück gesteckt.",
                T0003: "Ja, natürlich. Wir haben sofort neue Skripte für jeden gedruckt. Es war trotzdem lästig, weil ich Notizen auf mein Skript geschrieben hatte. Anmerkungen und solche Sachen. Die sind jetzt leider verloren.",
                T0004: "Ich kann mir vorstellen, wieso. Nur drei Mitglieder haben Zugang zum Theaterraum außerhalb der Proben. Darf ich auch ehrlich mit dir sein?",
                T0005_bad: "Dass jemand das Stück sabotieren will, kann ich nicht nachvollziehen, aber es inspiriert mich auch. Was steckt dahinter, wenn jemand zu solchen Mitteln greift? Ich denke es ist Verzweiflung. Starke Gefühle sind eine Quelle der Kreativität, aber sie können ebenso destruktiv wirken.",
                T0005_good: "Irgendwie habe ich Mitleid mit der Person, die dahinter steckt. Unter der Oberfläche entpuppt sich jedes noch so triviale Motiv als Ausdruck für etwas Tieferes, denkst du nicht?",
                T0006: "Nun ja... Ich möchte niemanden anschwärzen, aber Lucia spricht viel über den Theaterclub. Leider nicht viel Gutes. Warte, ich zeige dir ein Beispiel, damit du weißt, was ich meine.",
                T0007: "Das muss noch nichts heißen. In dubio pro reo.",
                T0008_good: "Ich bin zuversichtlich, dass am Ende die Wahrheit übrig sein wird.",
                T0008_bad: "Mir ist entgangen, dass das mein Problem ist.",
                T0009: "Denk daran. Wichtiger als die Fakten, sind die Menschen. Manchmal trügt der Schein... und manchmal sind die Leute genau so, wie sie auf den ersten Blick anmuten.",
                T0010_good: "Auf Wiedersehen.",
                T0010_bad: "Ciao."
            }
        };
        // Protagonist Texts
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
        let protagonistToLucia = {
            Protagonist: {
                T0001: "Du bist Lucia, richtig? Könnte ich kurz mit dir reden?",
                T0002: "In Ordnung.",
                T0003_a: "Ganz schön muffig.",
                T0003_b: "Das finde ich auch.",
                T0004: "Worüber ich eigentlich mit dir sprechen wollte... Du hast doch sicher mitbekommen, dass jemand eure Aufführung verhindern möchte.",
                T0005: "Das denke ich auch. Weißt du, Kira hat mich beauftragt, den Saboteur zu entlarven. Du bist eine von wenigen, die uneingeschränkten Zugang zum Theaterraum haben.",
                T0006: "Ich glaube, einer von euch ist für die Sabotage verantwortlich. Niemand sonst hatte eine Gelegenheit.",
                T0007: "Ich verstehe. Wenn das wahr ist, kann ich dich ausschließen. Aber woher weiß ich, ob das stimmt?",
                T0008: "Tatsächlich?",
                T0009_a: "Ein Tagebuch? Das sollte ich nicht lesen, es sind private Gedanken.",
                T0009_b: "Her damit.",
                T00010: "Atlas hat wirklich eine schöne Schrift... und er mag mich nicht, weil ich ihm den Titel des Jahrgangsbesten streitig mache. Interessant."
            }
        };
        let protagonistToSolas = {
            Protagonist: {
                T0001: "Hey, ich würde gerne mal mit dir reden. Kurz und knapp: Was denkst du über die Sabotage eures Theaterstücks?",
                T0002: "Das tut mir leid. Dass die Skripte verschwunden sind, ist ärgerlich, aber du hast das Original bestimmt digital gespeichert, oder?",
                T0003: "Ich verstehe... Darf ich ehrlich mit dir sein? Ich versuche herauszufinden, wer dahinter steckt. Drei Leute sind verdächtig, darunter auch du.",
                T0004_a: "Here we go.",
                T0004_b: "Natürlich.",
                T0005: "Das... kann gut sein. Du bist ein interessanter Typ, weißt du das? Hast du womöglich einen Hinweis darauf, wer der Täter sein könnte?",
                T0006: "Lucia hat offenbar eine Menge negative Gefühle angestaut...",
                T0007_a: "Ich finde dich sehr verdächtig.",
                T0007_b: "Macht es dich nicht nervös, dass du unter Verdacht stehst?",
                T0008_a: "Nun gut. Bis bald.",
                T0008_b: "Du machst mich irre. Ciao!"
            }
        };
        // Dialog Options to start talk (to be called in while loop)
        let startTalk = {
            withAtlas: "Atlas",
            withSolas: "Solas",
            withLucia: "Lucia"
        };
        // Atlas Dialog Options
        let optionsAtlasBusy = {
            good: "Ich kenne deinen Terminkalender nicht.",
            bad: "Sorry, ich wollte dich nicht anklagen."
        };
        let optionsAtlasUnless = {
            bad: "Es sei denn... was? Hast du einen Verdacht?",
            good: "Spucks aus, du Angeber."
        };
        let optionsAtlasGoodbye = {
            good: "Das war überraschend hilfreich. Ich danke dir.",
            bad: "Pff... Alles klar. Und tschüss."
        };
        // Lucia Dialog Options
        let optionsLuciaBooks = {
            bad: "Ganz schön muffig",
            good: "Das finde ich auch."
        };
        let optionsLuciaDiary = {
            bad: "Ein Tagebuch? Das sollte ich nicht lesen, es sind private Gedanken.",
            good: "Her damit."
        };
        let optionsLuciaGoodbye = {
            good: "Ja, vielen Dank.",
            bad: "Streng dich das nächste Mal bitte etwas mehr an."
        };
        // Solas Dialog Options
        let optionsSolasHonest = {
            bad: "Here we go.",
            good: "Natürlich."
        };
        let optionsSolasSuspect = {
            bad: "Ich finde dich sehr verdächtig.",
            good: "Macht es dich nicht nervös, dass du unter Verdacht stehst?"
        };
        let optionsSolasGoodbye = {
            good: "Nun gut. Bis bald.",
            bad: "Du machst mich irre. Ciao!"
        };
        await Template.ƒS.Location.show(Template.locations.classroomDay);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        let loopCount = 0;
        let loopLength = Object.keys(startTalk).length;
        while (loopCount < loopLength) {
            if (loopCount > 0) {
                await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
            }
            let startTalkElement = await Template.ƒS.Menu.getInput(startTalk, "dialogoptions");
            Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
            switch (startTalkElement) {
                // CASE Talk To Atlas
                case startTalk.withAtlas:
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showAtlasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0003);
                    await Template.ƒS.update(0.5);
                    await new Promise(resolve => setTimeout(resolve, 500));
                    Template.simulateCameraFlash();
                    Template.dataForSave.atlasPortrait = true;
                    Template.updateNotes();
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.angry, Template.ƒS.positionPercent(75, 97));
                    Template.showAtlasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showAtlasMeter();
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0001);
                    await Template.ƒS.update(0.5);
                    Template.hideAtlasMeter();
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToAtlas.Protagonist.T0001);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showAtlasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0002);
                    Template.hideAtlasMeter();
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToAtlas.Protagonist.T0003);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showAtlasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0003);
                    let optionsAtlasBusyElement = await Template.ƒS.Menu.getInput(optionsAtlasBusy, "dialogoptions");
                    Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
                    switch (optionsAtlasBusyElement) {
                        case optionsAtlasBusy.good:
                            await Template.ƒS.Character.hide(Template.characters.atlas);
                            await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.playful, Template.ƒS.positionPercent(75, 97));
                            Template.showAtlasMeter();
                            Template.dataForSave.atlasScore += 10;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0004_good);
                            await Template.ƒS.update(0.5);
                            break;
                        case optionsAtlasBusy.bad:
                            await Template.ƒS.Character.hide(Template.characters.atlas);
                            await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.angry, Template.ƒS.positionPercent(75, 97));
                            document.getElementsByName("atlasScore").forEach(meterChildren => meterChildren.hidden = false);
                            Template.dataForSave.atlasScore -= 10;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0004_bad);
                            await Template.ƒS.update(0.5);
                    }
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showAtlasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0004_2);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0004_3);
                    let optionsAtlasUnlessElement = await Template.ƒS.Menu.getInput(optionsAtlasUnless, "dialogoptions");
                    Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
                    await Template.ƒS.update(0.5);
                    switch (optionsAtlasUnlessElement) {
                        case optionsAtlasUnless.bad:
                            await Template.ƒS.Character.hide(Template.characters.atlas);
                            await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.playful, Template.ƒS.positionPercent(75, 97));
                            Template.showAtlasMeter();
                            Template.dataForSave.atlasScore -= 10;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0005_bad);
                            await Template.ƒS.update(0.5);
                            break;
                        case optionsAtlasUnless.good:
                            await Template.ƒS.Character.hide(Template.characters.atlas);
                            await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.playful, Template.ƒS.positionPercent(75, 97));
                            Template.showAtlasMeter();
                            Template.dataForSave.atlasScore += 10;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0005_good);
                            await Template.ƒS.update(0.5);
                    }
                    Template.hideAtlasMeter();
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.angry, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToAtlas.Protagonist.T0006);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showAtlasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0006);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.happy, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0006_2);
                    Template.hideAtlasMeter();
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.surprised, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToAtlas.Protagonist.T0007);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showAtlasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0007_1);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0007_2);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0007_3);
                    await Template.ƒS.update(0.5);
                    Template.dataForSave.solasMotive = true;
                    Template.updateNotes();
                    let optionsAtlasGoodbyeElement = await Template.ƒS.Menu.getInput(optionsAtlasGoodbye, "dialogoptions");
                    Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
                    switch (optionsAtlasGoodbyeElement) {
                        case optionsAtlasGoodbye.good:
                            await Template.ƒS.Character.hide(Template.characters.atlas);
                            await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.playful, Template.ƒS.positionPercent(75, 97));
                            Template.showAtlasMeter();
                            Template.dataForSave.atlasScore += 5;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0008_good);
                            await Template.ƒS.update(0.5);
                            break;
                        case optionsAtlasGoodbye.bad:
                            await Template.ƒS.Character.hide(Template.characters.atlas);
                            await Template.ƒS.Character.show(Template.characters.atlas, Template.characters.atlas.pose.angry, Template.ƒS.positionPercent(75, 97));
                            Template.showAtlasMeter();
                            Template.dataForSave.atlasScore -= 5;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.atlas, atlasText.Atlas.T0008_bad);
                            await Template.ƒS.update(0.5);
                    }
                    Template.hideAtlasMeter();
                    await Template.ƒS.Character.hide(Template.characters.atlas);
                    await Template.ƒS.update(0.5);
                    Template.ƒS.Speech.clear();
                    Template.ƒS.Speech.hide();
                    delete startTalk.withAtlas;
                    break;
                // CASE Talk To Solas
                case startTalk.withSolas:
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showSolasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0003);
                    await Template.ƒS.update(0.5);
                    await new Promise(resolve => setTimeout(resolve, 500));
                    Template.simulateCameraFlash();
                    Template.dataForSave.solasPortrait = true;
                    Template.updateNotes();
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.hide(Template.characters.solas);
                    await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.sad, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.solas);
                    await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0001);
                    await Template.ƒS.update(0.5);
                    Template.hideSolasMeter();
                    await Template.ƒS.Character.hide(Template.characters.solas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToSolas.Protagonist.T0001);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showSolasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0002);
                    Template.hideSolasMeter();
                    await Template.ƒS.Character.hide(Template.characters.solas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToSolas.Protagonist.T0002);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showSolasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0003);
                    Template.hideSolasMeter();
                    await Template.ƒS.Character.hide(Template.characters.solas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToSolas.Protagonist.T0003);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showSolasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0004);
                    let optionsSolasHonestElement = await Template.ƒS.Menu.getInput(optionsSolasHonest, "dialogoptions");
                    Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
                    await Template.ƒS.update(0.5);
                    switch (optionsSolasHonestElement) {
                        case optionsSolasHonest.bad:
                            await Template.ƒS.Character.hide(Template.characters.solas);
                            await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                            Template.dataForSave.solasScore -= 10;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0005_bad);
                            await Template.ƒS.update(0.5);
                            break;
                        case optionsSolasHonest.good:
                            Template.dataForSave.solasScore += 10;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0005_good);
                            await Template.ƒS.update(0.5);
                            break;
                    }
                    Template.hideSolasMeter();
                    await Template.ƒS.Character.hide(Template.characters.solas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToSolas.Protagonist.T0005);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showSolasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0006);
                    let diaryPage = '\
                        <div class="content">\
                            <div class="chatcontainer">\
                                <p class="chatname">Lucia:</p>\
                                <p>Ich bin es einfach leid tbh 😑 Ich gebe alles für diesen Club, aber höre ich mal ein Danke? Nein.</p>\
                                <span class="time-right">11:00</span>\
                            </div>\
                            \
                            <div class="chatcontainer darker">\
                                <p class="chatname">Solas:</p>\
                                <p>Das tut mir leid 😣</p>\
                                <span class="time-right">11:01</span>\
                            </div>\
                            \
                            <div class="chatcontainer">\
                                <p class="chatname">Lucia:</p>\
                                <p>Es liegt einfach daran, dass ich hinter den Kulissen arbeite. Nur, weil ich nicht als ⭐Star⭐ auf der Bühne stehe, werde ich von den anderen wie Luft behandelt.</p>\
                                <span class="time-right">11:02</span>\
                            </div>\
                            \
                            <div class="chatcontainer">\
                                <p class="chatname">Lucia:</p>\
                                <p>Ich will eigentlich nur etwas Wertschätzung..</p>\
                                <span class="time-right">11:02</span>\
                            </div>\
                            \
                            <div class="chatcontainer darker">\
                                <p class="chatname">Solas:</p>\
                                <p>Das wird schon 🌞 In zwei Tagen ist die Premiere! Wenn am Ende alle applaudieren, stehen auch du und ich auf der Bühne.</p>\
                                <span class="time-right">11:05</span>\
                            </div>\
                    </div>';
                    Template.ƒS.Text.setClass("smartphone blendin");
                    let close = { done: "x" };
                    let choice;
                    do {
                        Template.ƒS.Text.print(diaryPage);
                        choice = await Template.ƒS.Menu.getInput(close, "pageclose");
                    } while (choice != close.done);
                    Template.ƒS.Text.close();
                    await Template.ƒS.update(0.5);
                    Template.dataForSave.luciaMotive = true;
                    Template.updateNotes();
                    Template.hideSolasMeter();
                    await Template.ƒS.Character.hide(Template.characters.solas);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToSolas.Protagonist.T0006);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showSolasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0007);
                    let optionsSolasSuspectElement = await Template.ƒS.Menu.getInput(optionsSolasSuspect, "dialogoptions");
                    Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
                    await Template.ƒS.update(0.5);
                    switch (optionsSolasSuspectElement) {
                        case optionsSolasSuspect.bad:
                            await Template.ƒS.Character.hide(Template.characters.solas);
                            await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                            Template.dataForSave.solasScore -= 20;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0008_bad);
                            await Template.ƒS.update(0.5);
                            break;
                        case optionsSolasSuspect.good:
                            await Template.ƒS.Character.hide(Template.characters.solas);
                            await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.happy, Template.ƒS.positionPercent(75, 97));
                            Template.dataForSave.solasScore += 10;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0008_good);
                            await Template.ƒS.update(0.5);
                            break;
                    }
                    await Template.ƒS.Character.hide(Template.characters.solas);
                    await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showSolasMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0009);
                    let optionsSolasGoodbyeElement = await Template.ƒS.Menu.getInput(optionsSolasGoodbye, "dialogoptions");
                    Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
                    await Template.ƒS.update(0.5);
                    switch (optionsSolasGoodbyeElement) {
                        case optionsSolasGoodbye.bad:
                            await Template.ƒS.Character.hide(Template.characters.solas);
                            await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.sad, Template.ƒS.positionPercent(75, 97));
                            Template.dataForSave.solasScore -= 5;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0010_bad);
                            await Template.ƒS.update(0.5);
                            break;
                        case optionsSolasGoodbye.good:
                            await Template.ƒS.Character.hide(Template.characters.solas);
                            await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.happy, Template.ƒS.positionPercent(75, 97));
                            Template.dataForSave.solasScore += 5;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0010_good);
                            await Template.ƒS.update(0.5);
                            break;
                    }
                    Template.hideSolasMeter();
                    await Template.ƒS.Character.hide(Template.characters.solas);
                    await Template.ƒS.update(0.5);
                    delete startTalk.withSolas;
                    break;
                // CASE Talk To Lucia
                case startTalk.withLucia:
                    // go to library with her
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showLuciaMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0003);
                    await Template.ƒS.update(0.5);
                    await new Promise(resolve => setTimeout(resolve, 500));
                    Template.simulateCameraFlash();
                    Template.dataForSave.luciaPortrait = true;
                    Template.updateNotes();
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.hide(Template.characters.lucia);
                    await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.unsure, Template.ƒS.positionPercent(75, 97));
                    Template.showLuciaMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.lucia);
                    await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0001);
                    await Template.ƒS.update(0.5);
                    Template.hideLuciaMeter();
                    await Template.ƒS.Character.hide(Template.characters.lucia);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToLucia.Protagonist.T0001);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showLuciaMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0002);
                    Template.hideLuciaMeter();
                    await Template.ƒS.Character.hide(Template.characters.lucia);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToLucia.Protagonist.T0002);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0004);
                    await Template.ƒS.update(0.5);
                    // LIBRARY
                    await Template.ƒS.Location.show(Template.locations.library);
                    await Template.ƒS.update(Template.transition.waves.duration, Template.transition.waves.alpha, Template.transition.waves.edge);
                    await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showLuciaMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0003);
                    await Template.ƒS.update(0.5);
                    let optionsLuciaBooksElement = await Template.ƒS.Menu.getInput(optionsLuciaBooks, "dialogoptions");
                    Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
                    await Template.ƒS.update(0.5);
                    switch (optionsLuciaBooksElement) {
                        case optionsLuciaBooks.bad:
                            await Template.ƒS.Character.hide(Template.characters.lucia);
                            await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.sad, Template.ƒS.positionPercent(75, 97));
                            Template.dataForSave.luciaScore -= 30;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0004_bad);
                            await Template.ƒS.update(0.5);
                            break;
                        case optionsLuciaBooks.good:
                            await Template.ƒS.Character.hide(Template.characters.lucia);
                            await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.smiling, Template.ƒS.positionPercent(75, 97));
                            Template.dataForSave.luciaScore += 10;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0004_good);
                            await Template.ƒS.update(0.5);
                    }
                    await Template.ƒS.Character.hide(Template.characters.lucia);
                    await Template.ƒS.update(0.5);
                    Template.ƒS.Speech.clear();
                    Template.hideLuciaMeter();
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToLucia.Protagonist.T0004);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.unsure, Template.ƒS.positionPercent(75, 97));
                    Template.showLuciaMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0005);
                    Template.hideLuciaMeter();
                    await Template.ƒS.Character.hide(Template.characters.lucia);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToLucia.Protagonist.T0005);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.unsure, Template.ƒS.positionPercent(75, 97));
                    Template.showLuciaMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0006);
                    Template.hideLuciaMeter();
                    await Template.ƒS.Character.hide(Template.characters.lucia);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToLucia.Protagonist.T0006);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.unsure, Template.ƒS.positionPercent(75, 97));
                    Template.showLuciaMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0007);
                    Template.dataForSave.luciaOpportunity = true;
                    Template.updateNotes();
                    Template.hideLuciaMeter();
                    await Template.ƒS.Character.hide(Template.characters.lucia);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToLucia.Protagonist.T0007);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.unsure, Template.ƒS.positionPercent(75, 97));
                    Template.showLuciaMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0008);
                    Template.hideLuciaMeter();
                    await Template.ƒS.Character.hide(Template.characters.lucia);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToLucia.Protagonist.T0008);
                    await Template.ƒS.Character.hide(Template.characters.protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.unsure, Template.ƒS.positionPercent(75, 97));
                    Template.showLuciaMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0009);
                    let optionsLuciaDiaryElement = await Template.ƒS.Menu.getInput(optionsLuciaDiary, "dialogoptions");
                    Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
                    await Template.ƒS.update(0.5);
                    switch (optionsLuciaDiaryElement) {
                        case optionsLuciaDiary.bad:
                            await Template.ƒS.Character.hide(Template.characters.lucia);
                            await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.neutral, Template.ƒS.positionPercent(75, 97));
                            Template.dataForSave.luciaScore -= 5;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0010);
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Character.hide(Template.characters.lucia);
                            Template.dataForSave.atlasMotive = true;
                            Template.updateNotes();
                            break;
                        case optionsLuciaDiary.good:
                            await Template.ƒS.Character.hide(Template.characters.lucia);
                            await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.unsure, Template.ƒS.positionPercent(75, 97));
                            Template.dataForSave.luciaScore += 5;
                            let diaryPage = "<div class='diaryPage'>\
                            <p>Mein Tagebuch,</p>\
                            <p>ich muss zugeben, dass ich frustriert bin. Sollen meine Bemühungen umsonst gewesen sein?</p>\
                            <p>Jeder mit Augen im Kopf muss doch erkennen, dass ich mit Abstand der beste Schüler an dieser Schule bin... Trotzdem droht der Titel des Jahrgangsbesten mir nun abhanden zu kommen.</p>\
                            <p>Ausgerechnet die stellvertretende Schulsprecherin macht mir Konkurrenz. Dabei erhalte ich die Auszeichnung jedes Schuljahr mit Leichtigkeit, also wie konnte es dazu kommen? Habe ich mich mit dem Amt des Schulsprechers und den vielen AGs etwa übernommen?</p>\
                            <p>Ich wünschte, meine Stellvertreterin stünde unter demselben Druck wie ich. Dann würden faire Bedingungen herrschen.</p>\
                            <p style='text-align: right'>Gezeichnet, Atlas.</p>\
                            </div>";
                            Template.ƒS.Text.setClass("diaryPageWrapper blendin");
                            let close = { done: "x" };
                            let choice;
                            do {
                                Template.ƒS.Text.print(diaryPage);
                                choice = await Template.ƒS.Menu.getInput(close, "pageclose");
                            } while (choice != close.done);
                            Template.ƒS.Text.close();
                            Template.dataForSave.atlasDiary = true;
                            await Template.ƒS.update(0.5);
                            Template.dataForSave.atlasMotive = true;
                            Template.updateNotes();
                            await Template.ƒS.Character.hide(Template.characters.lucia);
                            await Template.ƒS.update(0.5);
                            Template.hideLuciaMeter();
                            await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistToLucia.Protagonist.T00010);
                            await Template.ƒS.Character.hide(Template.characters.protagonist);
                            await Template.ƒS.update(0.5);
                    }
                    await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.neutral, Template.ƒS.positionPercent(75, 97));
                    Template.showLuciaMeter();
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0011);
                    await Template.ƒS.update(0.5);
                    let optionsLuciaGoodbyeElement = await Template.ƒS.Menu.getInput(optionsLuciaGoodbye, "dialogoptions");
                    Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
                    await Template.ƒS.update(0.5);
                    switch (optionsLuciaGoodbyeElement) {
                        case optionsLuciaGoodbye.good:
                            await Template.ƒS.Character.hide(Template.characters.lucia);
                            await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.smiling, Template.ƒS.positionPercent(75, 97));
                            Template.dataForSave.luciaScore += 5;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0012_good);
                            await Template.ƒS.update(0.5);
                            Template.hideLuciaMeter();
                            await Template.ƒS.Character.hide(Template.characters.lucia);
                            await Template.ƒS.update(0.5);
                            break;
                        case optionsLuciaGoodbye.bad:
                            await Template.ƒS.Character.hide(Template.characters.lucia);
                            await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.sad, Template.ƒS.positionPercent(75, 97));
                            Template.dataForSave.luciaScore -= 5;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0012_bad);
                            await Template.ƒS.update(0.5);
                            Template.hideLuciaMeter();
                            await Template.ƒS.Character.hide(Template.characters.lucia);
                            await Template.ƒS.update(0.5);
                    }
                    await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0005);
                    // CLUB ROOM
                    await Template.ƒS.Location.show(Template.locations.classroomDay);
                    await Template.ƒS.update(Template.transition.waves.duration, Template.transition.waves.alpha, Template.transition.waves.edge);
                    delete startTalk.withLucia;
                    break;
            }
            loopCount++;
        }
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0, 3, true);
    }
    Template.motive = motive;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map