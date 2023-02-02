"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transition = {
        fizzle: {
            duration: 1.3,
            alpha: "FreeTransitions/Others/005.jpg",
            edge: 2
        },
        waves: {
            duration: 1,
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
        shutter: "Audio/SFX/shutter.mp3",
        aua: "Audio/SFX/aua.wav",
        smallsigh: "Audio/SFX/defeated_sigh.wav",
        bigsigh: "Audio/SFX/heavy_sigh.wav"
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
        },
        roof: {
            name: "roof",
            background: "Images/Backgrounds/roof-day.png"
        },
        stairs: {
            name: "stairs",
            background: "Images/Backgrounds/stairs-day.jpg"
        }
    };
    Template.chapterCovers = {
        chapterOne: {
            name: "chapterOne",
            background: "Images/Backgrounds/Kapitel/chapter-one.png",
            foreground: ""
        },
        chapterTwo: {
            name: "chapterTwo",
            background: "Images/Backgrounds/Kapitel/chapter-two.png",
            foreground: ""
        },
        chapter: {
            name: "chapter",
            background: "Images/Backgrounds/Kapitel/chapter-lilac.png",
            foreground: ""
        },
    };
    Template.items = {
        key: {
            name: "key",
            description: "Lucias Schlüssel",
            image: "Images/Items/key.png"
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
                mean: "Images/Characters/Protagonist/protagonist-mean.png",
                surprised: "Images/Characters/Protagonist/protagonist-surprised.png",
                confident: "Images/Characters/Protagonist/protagonist-confident.png",
                serious: "Images/Characters/Protagonist/protagonist-serious.png"
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
        girl: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                annoyed: "Images/Characters/Girl/girl-annoyed.png",
                blushing: "Images/Characters/Girl/girl-blushing.png",
                smiling: "Images/Characters/Girl/girl-smiling.png",
                unsure: "Images/Characters/Girl/girl-unsure.png",
                upset: "Images/Characters/Girl/girl-upset.png",
                neutral: "Images/Characters/Girl/girl.png"
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
                upset: "Images/Characters/Solas/solas-upset.png",
                thoughtful: "Images/Characters/Solas/solas-thoughtful.png",
                confused: "Images/Characters/Solas/solas-confused.png",
                unhappy: "Images/Characters/Solas/solas-unhappy.png",
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
        let pages = ['<div class="aquiredPagesWrapper"><h1>Indizien</h1><p>Im Laufe des Spiels erhältst du verschiedene Indizien, die du hier im Menü jederzeit aufrufen kannst.</p><p>Klick einfach weiter, um sie dir noch einmal anzuschauen.</p></div>'];
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
        if (Template.dataForSave.warningNote == true) {
            numberAquired += 1;
            pages.push('<div class="warningPageWrapper-flip">\
      <div class="warningPage">\
      <p>Meine Möchtegern-Detektive,</p>\
      <p>lasst das Scooby-D<bold>oo</bold>-Spiel besser sein.</p>\
      <p>Das is<bold>t</bold> eine Warnung.</p>\
      <p>Die nächste wird nicht so nett ausfallen...</p>\
      <p style="text-align: right;">- Eu<bold>e</bold>r "Saboteur"</p>\
      </div>\
      </div>;');
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
            pages[0] = '<div class="aquiredPagesWrapper"><h1>Indizien</h1><p>Im Laufe des Spiels erhältst du verschiedene Indizien, die du hier im Menü jederzeit aufrufen kannst.</p><p>Hey, warte mal...! Du hast bisher noch gar keine Indizien gesammelt. Dachtest du, das merke ich nicht?</p><p>Spiel einfach weiter, dann kommt das schon.</p></div>';
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
    function findFavorite() {
        let favorite = "Atlas";
        if (Template.dataForSave.atlasScore < Template.dataForSave.solasScore) {
            favorite = "Solas";
        }
        if (Template.dataForSave.solasScore < Template.dataForSave.luciaScore) {
            favorite = "Lucia";
        }
        return favorite;
    }
    Template.findFavorite = findFavorite;
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
            solasMotive.innerHTML = "Er könnte die Aufführung sabotieren, weil er ein Perfektionist ist und mehr Zeit braucht, um das Skript zu optimieren.";
        }
        if (Template.dataForSave.atlasMotive == true) {
            if (Template.dataForSave.atlasDiary == true) {
                let atlasMotive = document.getElementById("atlasMotive");
                atlasMotive.innerHTML = "Er könnte die Sabotage inszenieren, um dich von der Schule abzulenken, sodass er Jahrgangsbester bleibt.";
            }
            else {
                let atlasMotive = document.getElementById("atlasMotive");
                atlasMotive.innerHTML = "? ? ?";
            }
        }
        if (Template.dataForSave.luciaMotive == true) {
            let luciaMotive = document.getElementById("luciaMotive");
            luciaMotive.innerHTML = "Sie könnte aus Rache die Sabotage begehen, weil ihr als Mitglied hinter den Kulissen die Wertschätzung fehlt.";
        }
        // Hints
        if (Template.dataForSave.luciaOpportunity == true) {
            let luciaOpportunity = document.getElementById("luciaOpportunity");
            luciaOpportunity.innerHTML = "Sie sagt, sie habe den Schlüssel zum Theaterraum verloren. Stimmt das...?";
        }
        if (Template.dataForSave.atlasOpportunity == true) {
            let atlasOpportunity = document.getElementById("atlasOpportunity");
            atlasOpportunity.innerHTML = "Das Mädchen auf dem Flur ( " + Template.dataForSave.nameGirl + " ) gibt Atlas ein Alibi.";
        }
        if (Template.dataForSave.lookedForKey == true) {
            let whatAboutKey = document.getElementById("whatAboutKey");
            if (Template.dataForSave.foundKey == true) {
                whatAboutKey.innerHTML = "Lucia hat die Wahrheit gesagt. Vetrauensbonus!";
            }
            else {
                whatAboutKey.innerHTML = "Du konntest nicht herausfinden, ob Lucia lügt.";
            }
        }
        if (Template.dataForSave.aboutAlibi == true) {
            let aboutAlibi = document.getElementById("aboutAlibi");
            aboutAlibi.innerHTML = "Die Glaubwürdigkeit von " + Template.dataForSave.nameGirl + " ist zweifelhaft, da sie in Atlas verliebt ist.";
        }
        if (Template.dataForSave.solasHandwriting == true) {
            let solasHandwriting = document.getElementById("solasHandwriting");
            solasHandwriting.innerHTML = "Die Schrift auf der Notiz des Täters sieht aus wie Solas Schrift.";
        }
        if (Template.dataForSave.confrontedSolas == true) {
            if (Template.dataForSave.solasHandwriting == true) {
                let solasPlea = document.getElementById("solasPlea");
                solasPlea.innerHTML = "Solas argumentiert, dass jemand seine Handschrift gefälscht haben könnte. Wer käme dafür infrage? Oder lockt er dich auf eine falsche Fährte?";
            }
            else {
                let solasPlea = document.getElementById("solasPlea");
                solasPlea.innerHTML = "Solas zeigt Mitleid mit der Kostümschneiderin, aber auch mit dem Täter.";
            }
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
        nameGirl: "Cat",
        // visibility of buttons in menu
        toggleSuspectsButton: false,
        // visibility of elements in notes window
        solasPortrait: false,
        solasMotive: false,
        solasHandwriting: false,
        confrontedSolas: false,
        atlasPortrait: false,
        atlasMotive: false,
        atlasOpportunity: false,
        aboutAlibi: false,
        atlasDiary: false,
        atlasNoDiary: false,
        luciaPortrait: false,
        luciaMotive: false,
        luciaOpportunity: false,
        // meterbars
        atlasScore: 20,
        luciaScore: 50,
        solasScore: 50,
        warningNote: false,
        foundKey: false,
        lookedForKey: false
    };
    window.addEventListener("load", start);
    function start(_event) {
        //Menü
        Template.gameMenu = Template.ƒS.Menu.create(Template.menuInGame, Template.buttonFunctionalities, "menuInGame"); //hier CSS Klasse angeben
        let scenes = [
            // { scene: intro, name: "Einleitung"},
            // { scene: beta, name: "beta" },
            // { scene: coverChapterOne, name: "Kapitel" },
            // { scene: motive, name: "Treffe die Verdächtigen" },
            // { scene: lightsOut, name: "Im Theaterraum gehen die Lichter aus" },
            // { scene: coverChapterTwo, name: "Kapitel" },
            // { scene: girlOnCorridor, name: "Ein Mädchen stoppt dich auf dem Flur" },
            { scene: Template.lookForKey, name: "Suche nach Lucias Schlüssel" },
            { id: "kiraGivesHint", scene: Template.kiraGivesHint, name: "Kira gibt einen Hinweis" },
            { id: "luciaGivesHint", scene: Template.luciaGivesHint, name: "Lucia gibt einen Hinweis" },
            { id: "confrontSolasAfterKira", scene: confrontSolasAfterKira, name: "Konfrontation mit Solas" },
            { id: "confrontSolasAfterLucia", scene: Template.confrontSolasAfterLucia, name: "Konfrontation mit Solas" },
            { scene: Template.yourConclusion, name: "Du sagst Kira, wen du für den Täter hältst." },
            { id: "roofAtlas", scene: Template.roofAtlas, name: "Verdächtige Atlas" },
            { id: "roofLucia", scene: Template.roofLucia, name: "Verdächtige Lucia" },
            { id: "roofSolas", scene: Template.roofSolas, name: "Verdächtige Solas" }
        ];
        // let uiElement: HTMLElement = document.querySelector("[type=interface]");
        // dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
        let atlasInterface = document.getElementById("atlasInterface");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, atlasInterface);
        let luciaInterface = document.getElementById("luciaInterface");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, luciaInterface);
        let solasInterface = document.getElementById("solasInterface");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, solasInterface);
        Template.ƒS.Speech.clear();
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
            <td>M</td>\
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
            // case ƒ.KEYBOARD_CODE.F9:
            //     if (dataForSave.toggleSuspectsButton == true) {
            //         showSuspects();
            //     }
            //     break;
            // case ƒ.KEYBOARD_CODE.F8:
            //     if (dataForSave.toggleSuspectsButton == true) {
            //         showAquiredPages();
            //     }
            //     break;
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
    async function beta() {
        // name the girl
        Template.dataForSave.nameGirl = await Template.ƒS.Speech.getInput();
        await Template.ƒS.update(0.5);
        Template.characters.girl.name = Template.dataForSave.nameGirl;
    }
    Template.beta = beta;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function confrontSolasAfterLucia() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        let protagonistText = {
            Protagonist: {
                T0001: "Hallo, Solas. Ich muss noch einmal mit dir sprechen.",
                T0002: "Der Täter hat uns eine Warnung zukommen lassen. Die Handschrift darauf sieht aus wie deine.",
                T0003_good: "Hellseherisches Talent",
                T0003_bad: "Ich nicht, aber Kira.",
                T0003_2_good: "Das stimmt wohl.",
                T0003_2_bad: "Das befürchte ich auch.",
                T0004: "Du wirkst sehr gefasst... Wenn du unschuldig wärst, würdest du nicht so ruhig reagieren.",
                T0005_bad: "Wie poetisch.",
                T0005_good: "Ich glaube, ich habe gerade einen Blick erhascht.",
                T0006: "Die Uhr tickt... Ich muss mit Kira sprechen."
            }
        };
        let solasText = {
            Solas: {
                T0001: "Sicher doch, was gibt es?",
                T0002: "Ist das so? Woher kennst du meine Handschrift?",
                T0003_a: "Wenn du wirklich eine Hellseherin wärst, müsstest du nicht Detektiv spielen, oder?",
                T0003_b: "Kira also... Vielleicht kennt sie mich nicht so gut, wie sie glaubt.",
                T0004: "Es gibt nur zwei Möglichkeiten.",
                T0005: "1. Jemand der anderen beiden hat meine Handschrift imitiert, um mir die Sache anzuhängen. Doch wer käme dafür infrage? Oder...",
                T0006: "2. Ich versuche gerade, dich zu manipulieren. Ein letzter Verzweiflungsakt, nachdem du mich überführt hast.",
                T0007: "Niccoló Machiavelli hat einmal gesagt: 'Jeder sieht wie du zu sein scheinst, wenige fühlen heraus wie du bist.'",
                T0008: "Wir können einander nicht ins Herz schauen. Darin liegt die eigentliche Tragödie.",
                T0009: "Ich muss jetzt weiter. Bis bald."
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Du begibst dich auf die Suche nach Solas. Du findest ihn schließlich draußen auf dem Schulhof."
            }
        };
        await Template.ƒS.Location.show(Template.locations.schoolOutsideTwilight);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        // close
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
        return "yourConclusion";
    }
    Template.confrontSolasAfterLucia = confrontSolasAfterLucia;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function confrontSolasAfterLucia() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        let protagonistText = {
            Protagonist: {
                T0001: "Hallo, Solas. Ich muss noch einmal mit dir sprechen.",
                T0002: "Ich habe inzwischen einige Hinweise gesammelt. Du bleibst mir aber nach wie vor ein Rätsel.",
                T0003_bad: "Und dein Ergebnis?",
                T0003_good: "Sag mir, was du denkst.",
                T0004: "Wie meinst du das?",
                T0005_bad: "Ich werde nicht schlau aus dir.",
                T0005_good: "Ich glaube, ich verstehe."
            }
        };
        let solasText = {
            Solas: {
                T0001: "Sicher doch, was gibt es?",
                T0002: "Ist das so, ja? Ich habe selbst den ganzen Tag über die Sache nachgedacht.",
                T0003: "Mir tut unsere Kostümschneiderin leid. Sie näht sehr kunstvoll und steckt ihr Herz in jedes Projekt. Wie du weißt, wurde eines der Kostüme zerstört...",
                T0004: "Aber auch der Saboteur hat meine Anteilnahme. Seine Handlungen zeugen von einem Gefühl der Ratlosigkeit, denkst du nicht?",
                T0005: "Du verdächtigst uns alle aus verschiedenen Gründen, aber hinter jedem Motiv, das du uns zugeschrieben hast, steht der Ehrgeiz.",
                T0006: "...und das eigentliche Wesen des Ehrgeizes ist nur der Schatten eines Traumes."
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Du begibst dich auf die Suche nach Solas. Du findest ihn schließlich draußen auf dem Schulhof."
            }
        };
        await Template.ƒS.Location.show(Template.locations.schoolOutsideTwilight);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        // close
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
        return "yourConclusion";
    }
    Template.confrontSolasAfterLucia = confrontSolasAfterLucia;
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
        await Template.ƒS.Location.show(Template.chapterCovers.chapterOne);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        // close
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
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
        await Template.ƒS.Location.show(Template.chapterCovers.chapterTwo);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        // close
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
        Template.ƒS.Sound.play(Template.sound.pageflip, 0.5, false);
    }
    Template.coverChapterTwo = coverChapterTwo;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function girlOnCorridor() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        let protagonistText = {
            Protagonist: {
                T0001: "Huh?",
                T0002: "Warte, ich kenne dich. Du heißt doch... ",
                T0003: "Wenn du es so ausdrücken willst, sicher.",
                T0004_a: "Oh? Er hat dich gar nicht erwähnt.",
                T0004_b: "Nachhilfe? Ich hätte nicht gedacht, dass Atlas so ein guter Samariter ist.",
                T0005: "Was für ein höfliches Mädchen."
            }
        };
        let girlText = {
            Girl: {
                T0001: "Hey, du!",
                T0002: "Ganz recht. Ich weiß auch, wer du bist. Du schnüffelst rum wegen dem Chaos im Theaterclub, oder nicht?",
                T0003: "Ich habe gehört, dass du Atlas verdächtigst. Das kannst du schön sein lassen. In der Zeitspanne, als das Kostüm zerstört wurde, war er bei mir. Er gibt mir Nachhilfe in Physik.",
                T0004: "N-Nicht? Tja, nun weißt du es.",
                T0005: "Jetzt entschuldige mich, ich muss in den Unterricht."
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Es ist früh morgens und du betrittst die Schule. Nach ein paar Schritten stoppt dich ein Mädchen auf dem Korridor.",
                T0001: "Sie dreht sich ohne ein weiteres Wort um und macht sich aus dem Staub.",
                T0002: "Du machst eine Notiz, dann gehst auch du in deine Klasse."
                // T0002: "Es ist Pause! Während des Unterrichts sind deine Gedanken immer wieder abgedriftet."
            }
        };
        let optionsAtlasTutoring = {
            good: "Oh? Er hat dich gar nicht erwähnt.",
            bad: "Nachhilfe? Ich habe nicht erwartet, dass Atlas so ein guter Samariter ist."
        };
        await Template.ƒS.Location.show(Template.locations.corridorDay);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.neutral, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell("???", girlText.Girl.T0001);
        await Template.ƒS.Character.hide(Template.characters.girl);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0001);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0002);
        // name the girl
        Template.dataForSave.nameGirl = await Template.ƒS.Speech.getInput();
        Template.dataForSave.nameGirl = Template.dataForSave.nameGirl.charAt(0).toUpperCase() + Template.dataForSave.nameGirl.slice(1);
        Template.characters.girl.name = Template.dataForSave.nameGirl;
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.annoyed, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.girl, girlText.Girl.T0002);
        await Template.ƒS.Character.hide(Template.characters.girl);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.surprised, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.upset, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.girl, girlText.Girl.T0003);
        await Template.ƒS.update(0.5);
        let optionsAtlasTutoringElement = await Template.ƒS.Menu.getInput(optionsAtlasTutoring, "dialogoptions");
        Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
        switch (optionsAtlasTutoringElement) {
            case optionsAtlasTutoring.good:
                Template.showAtlasMeter();
                await Template.ƒS.update(0.5);
                Template.dataForSave.atlasScore += 7;
                await Template.ƒS.update(0.5);
                Template.hideAtlasMeter();
                break;
            case optionsAtlasTutoring.bad:
                Template.showAtlasMeter();
                await Template.ƒS.update(0.5);
                Template.dataForSave.atlasScore -= 7;
                await Template.ƒS.update(0.5);
                Template.hideAtlasMeter();
                break;
        }
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.annoyed, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.girl, girlText.Girl.T0004);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.girl);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.unsure, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.girl, girlText.Girl.T0005);
        await Template.ƒS.Character.hide(Template.characters.girl);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await Template.ƒS.Character.hide(Template.characters.girl);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0005);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        Template.dataForSave.atlasOpportunity = true;
        Template.updateNotes();
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        // close
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
    }
    Template.girlOnCorridor = girlOnCorridor;
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
        Template.ƒS.Sound.fade(Template.sound.birds, 0, 3, true);
    }
    Template.intro = intro;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function kiraGivesHint() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        let protagonistText = {
            Protagonist: {
                T0001: "Ach ja? Was denn?",
                T0002: "Wirklich? Und weißt du auch, zu wem sie gehört?",
                T0003: "Ich verstehe... Das macht Solas zum Hauptverdächtigen. Mal sehen, was er dazu zu sagen hat. Bis später, Kira!"
            }
        };
        let kiraText = {
            Kira: {
                T0001: "Hey, ich habe dich gesucht! Mir ist etwas aufgefallen.",
                T0002: "Diese Notiz, die uns der Saboteur hinterlassen hat... Irgendwie kommt mir die Handschrift bekannt vor. Ich habe sie schon oft gesehen.",
                T0003: "Ich wollte sicher gehen, bevor ich mit dir darüber spreche. Deswegen habe ich sie noch einmal mit der Schrift unserer Verdächtigen verglichen, um meine Ahnung zu bestätigen.",
                T0004: "Sie sieht aus wie die Handschrift von... Solas.",
                T0005: "Alles, was ich höre, ist tick tack."
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Du läufst durch den Flur und denkst über deine nächsten Schritte nach, als du auf Kira triffst.",
                T0001: "Du begibst dich auf die Suche nach Solas, um ihn zu konfrontieren."
            }
        };
        await Template.ƒS.Location.show(Template.locations.corridorDay);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.neutral, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0001);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0001);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.neutral, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0003);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0002);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.sad, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0004);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        Template.dataForSave.solasHandwriting = true;
        Template.updateNotes();
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.serious, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.unsure, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0005);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        // close
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
        return "confrontSolasAfterKira";
    }
    Template.kiraGivesHint = kiraGivesHint;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function lightsOut() {
        // how long are the lights out (in seconds)?
        let waitSeconds = 30;
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
                T0003_e: "Stress mich nicht! Ich bin fast da.",
                T0004: "Sieh mal, da hat jemand etwas unter der Tür durchgeschoben.",
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
                T0004: "Was...? Lass mal sehen.",
                T0005: "Das ist ja unheimlich...",
                T0006: "Ich bin beunruhigt. Wer weiß, wie weit diese Person gehen wird? Wenn du den Saboteur nicht rechtzeitig findest, dann werde ich die Premiere absagen.",
                T0007: "Ich sage es ungern, aber die Zeit drängt. In zwei Tagen ist die Premiere."
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Die Probe ist zu Ende. Die Clubmitglieder verabschieden sich und trudeln auf den Flur.",
                T0001: "Kira und du bleiben allein im Theaterraum zurück.",
                T0002: "Der Schultag neigt sich dem Ende zu und du verabschiedest dich von Kira. Morgen wirst du deine Ermittlungen fortführen..."
            }
        };
        await Template.ƒS.Location.show(Template.locations.classroomDay);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
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
            Template.ƒS.Speech.clear();
            clickedSwitch += 1;
            if (clickedSwitch == 1) {
                Template.ƒS.Sound.play(Template.sound.smallsigh, 1.5, false);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003_b);
            }
            else if (clickedSwitch == 2) {
                Template.ƒS.Sound.play(Template.sound.smallsigh, 1.5, false);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003_c);
            }
            else if (clickedSwitch == 3) {
                Template.ƒS.Sound.play(Template.sound.aua, 1.5, false);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003_d);
            }
            else {
                Template.ƒS.Sound.play(Template.sound.bigsigh, 1.5, false);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003_e);
            }
        }
        await new Promise(resolve => setTimeout(resolve, 200));
        Template.ƒS.Sound.play(Template.sound.femalegasp, 1.5, false);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0002);
        await Template.ƒS.update(0.5);
        setLights("turnOnFlashlight");
        await new Promise(resolve => setTimeout(resolve, waitSeconds * 1000));
        // remove light switch
        let switchImg = document.getElementById("switch");
        switchImg.remove();
        Template.ƒS.Sound.play(Template.sound.switch, 1, false);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        setLights("turnOnLights");
        Template.ƒS.Speech.clear();
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.scared, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0003);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        // change spooky music to normal theme
        Template.ƒS.Sound.fade(Template.sound.spookyMusic, 0, 6);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 5, true);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0004);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.unsure, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0004);
        let diaryPage = "<div class='warningPage'>\
        <p>Meine Möchtegern-Detektive,</p>\
        <p>lasst das Scooby-D<bold>oo</bold>-Spiel besser sein.</p>\
        <p>Das is<bold>t</bold> eine Warnung.</p>\
        <p>Die nächste wird nicht so nett ausfallen...</p>\
        <p style='text-align: right;'>- Eu<bold>e</bold>r 'Saboteur'</p>\
        </div>";
        Template.ƒS.Text.setClass("warningPageWrapper blendin");
        let close = { done: "x" };
        let choice;
        do {
            Template.ƒS.Text.print(diaryPage);
            choice = await Template.ƒS.Menu.getInput(close, "pageclose");
        } while (choice != close.done);
        Template.ƒS.Text.close();
        Template.dataForSave.warningNote = true;
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.serious, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0005);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.scared, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0005);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.unsure, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0006);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0006);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.kira, Template.characters.kira.pose.scared, Template.ƒS.positionPercent(75, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.kira, kiraText.Kira.T0007);
        await Template.ƒS.Character.hide(Template.characters.kira);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.confident, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0007);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
    }
    Template.lightsOut = lightsOut;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function lookForKey() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        let protagonistText = {
            Protagonist: {
                T0001: "Es wird Zeit, meine Ermittlungen fortzusetzen...",
                T0002: "Lucia meinte, sie habe ihren Schlüssel zum Theaterraum verloren. Falls das stimmt, dann hatte sie keine Gelegenheit, zwischen den Proben die Sabotage zu begehen.",
                T0003: "Ich suche einfach mal nach dem Schlüssel. Wenn ich ihn finde, würde das Lucias Geschichte bestätigen... Am besten, ich schaue in der Bibliothek. Sie wohnt ja förmlich dort.",
                T0004: "Also dann, wo könnte Lucia den Schlüssel verloren haben?",
                T0004_b: "Die Suche geht weiter...",
                T0005: "Also hier schonmal nicht!",
                T0006: "Die Möglichkeiten sinken.",
                T0007: "Nope!",
                T0008: "Der Schlüssel bleibt verschollen.",
                T0010: "Kein Schlüssel... Oh man! Da sollte jemand dringend seine Browser History löschen...",
                T0011: "Da ist er nicht, aber ich habe ein neues Parfum entdeckt: Poubelle No.5. Dior, hit me up!",
                T0012: "Nein. Hier hätte man ihn sicher bemerkt...",
                T0013: "Kein Glück.",
                T0014: "Hier nicht, aber die frische Luft ist schön.",
                T0015: "Oh, da ist er! Ich 1 - Schlüssel 0.",
                T0016: "Ich gebe auf! Ich kann den Schlüssel nicht finden. Das war von Anfang an eine Schnapsidee... Ob Lucia die Wahrheit gesagt oder gelogen hat, bleibt wohl oder übel eine Vertrauensfrage...",
                T0017: "Lucia hat also die Wahrheit gesagt. Natürlich könnte immer noch ein großer Masterplan dahinter stecken, aber ich bin geneigt, ihr zu vertrauen. Ich werde sie suchen und den Schlüssel zurückgeben."
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Es ist Pause! Während des Unterrichts sind deine Gedanken immer wieder abgedriftet.",
                T0001: "Du betrittst die Bibliothek.",
                T0002: "Du verlässt die Bibliothek."
            }
        };
        await Template.ƒS.Location.show(Template.locations.stairs);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        Template.ƒS.Sound.play(Template.sound.schoolBell, 0.5, false);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0001);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.serious, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0003);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
        await Template.ƒS.Location.show(Template.locations.library);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0004);
        await Template.ƒS.update(0.5);
        let optionsPlacesToSearch = {
            onShelf: "Im Bücherregal",
            inTrash: "Im Mülleimer",
            sittingArea: "Beim Sitzbereich",
            inPlantPot: "Im Blumentopf",
            underTable: "Unter dem Tisch",
            onWindowsill: "Fensterbank",
            nextToPc: "Neben dem Computer",
            behindDeskRIGHT: "Hinter der Theke",
            inCorner: "In der Ecke",
            onChair: "Auf dem Stuhl"
        };
        let loopCount = 0;
        while (loopCount < 5) {
            if (loopCount > 0) {
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0004_b);
                await Template.ƒS.update(0.5);
            }
            let optionsPlacesToSearchElement = await Template.ƒS.Menu.getInput(optionsPlacesToSearch, "dialogoptions");
            Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
            switch (optionsPlacesToSearchElement) {
                case optionsPlacesToSearch.behindDeskRIGHT:
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0015);
                    await Template.ƒS.update(0.5);
                    Template.dataForSave.foundKey = true;
                    loopCount = 5;
                    delete optionsPlacesToSearch.behindDeskRIGHT;
                    break;
                case optionsPlacesToSearch.inCorner:
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0012);
                    await Template.ƒS.update(0.5);
                    delete optionsPlacesToSearch.inCorner;
                    break;
                case optionsPlacesToSearch.inPlantPot:
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0005);
                    await Template.ƒS.update(0.5);
                    delete optionsPlacesToSearch.inPlantPot;
                    break;
                case optionsPlacesToSearch.inTrash:
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0011);
                    await Template.ƒS.update(0.5);
                    delete optionsPlacesToSearch.inTrash;
                    break;
                case optionsPlacesToSearch.nextToPc:
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0010);
                    await Template.ƒS.update(0.5);
                    delete optionsPlacesToSearch.nextToPc;
                    break;
                case optionsPlacesToSearch.onChair:
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0006);
                    await Template.ƒS.update(0.5);
                    delete optionsPlacesToSearch.onChair;
                    break;
                case optionsPlacesToSearch.onShelf:
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0007);
                    await Template.ƒS.update(0.5);
                    delete optionsPlacesToSearch.onShelf;
                    break;
                case optionsPlacesToSearch.onWindowsill:
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0014);
                    await Template.ƒS.update(0.5);
                    delete optionsPlacesToSearch.onWindowsill;
                    break;
                case optionsPlacesToSearch.sittingArea:
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0008);
                    await Template.ƒS.update(0.5);
                    delete optionsPlacesToSearch.sittingArea;
                    break;
                case optionsPlacesToSearch.underTable:
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0013);
                    await Template.ƒS.update(0.5);
                    delete optionsPlacesToSearch.underTable;
                    break;
            }
            loopCount++;
        }
        Template.dataForSave.lookedForKey = true;
        switch (Template.dataForSave.foundKey) {
            case true:
                Template.updateNotes();
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0017);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.update(0.5);
                Template.ƒS.Speech.clear();
                Template.ƒS.Speech.hide();
                await Template.ƒS.update(0.5);
                return "luciaGivesHint";
                break;
            case false:
                Template.updateNotes();
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.angry, Template.ƒS.positionPercent(25, 97));
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0016);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.update(0.5);
                Template.ƒS.Speech.clear();
                Template.ƒS.Speech.hide();
                await Template.ƒS.update(0.5);
                return "kiraGivesHint";
                break;
        }
    }
    Template.lookForKey = lookForKey;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function luciaGivesHint() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        let protagonistText = {
            Protagonist: {
                T0001: "Hallo, Lucia. Ich habe deinen Schlüssel gefunden und möchte ihn dir zurückgeben.",
                T0002: "Die Sache hat auch sein Gutes. Dass ich deine Geschichte bestätigen konnte, entlastet dich.",
                T0003_good: "Nur zu, jede Information ist hilfreich.",
                T0003_bad: "Meinetwegen, aber ganz aus dem Schneider bist du nicht...",
                T0004: "Wieso das? Sie ist nicht besonders höflich, aber das heißt nicht, dass sie lügt. Nicht wahr?",
                T0005: "Ist das so? Das macht ihre Glaubwürdigkeit natürlich zweifelhaft.",
                T0006: "Der Hinweis von Lucia war hilfreich. Ich sollte allerdings nicht vergessen, ein näheres Auge auf Solas zu werfen. Im Moment ist er derjenige, über den ich am wenigsten weiß."
            }
        };
        let luciaText = {
            Lucia: {
                T0001: "Oh, vielen Dank! Ich habe mich schlecht gefühlt, weil ich ihn verloren hatte.",
                T0002: "Nun, w-was das angeht... Ich war mir nicht sicher, ob ich mich einmischen sollte, aber ich muss dir etwas sagen.",
                T0003: "Ich habe vorhin dein Gespräch mit " + Template.dataForSave.nameGirl + " mitbekommen. Ich möchte dich warnen, ihr nicht blind zu vertrauen.",
                T0004: "Darum ging es mir nicht. Es ist nur so... Jeder weiß, dass sie in Atlas verknallt ist. Wer weiß, ob sie ihn nur decken wollte?",
                T0005: "Das war schon alles, was ich dir sagen wollte. Ich muss jetzt los... Bis bald!"
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Du läufst auf der Suche nach Lucia durch den Flur und triffst sie schließlich an der Treppe.",
                T0001: "Lucia läuft die Treppe hinauf."
            }
        };
        await Template.ƒS.Location.show(Template.locations.stairs);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0001);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.neutral, Template.ƒS.positionPercent(75, 97));
        Template.showLuciaMeter();
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0001);
        Template.hideLuciaMeter();
        await Template.ƒS.Character.hide(Template.characters.lucia);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0002);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.unsure, Template.ƒS.positionPercent(75, 97));
        Template.showLuciaMeter();
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0002);
        let optionsLuciaInfo = {
            good: "Nur zu, jede Information ist hilfreich.",
            bad: "Meinetwegen, aber ganz aus dem Schneider bist du nicht..."
        };
        let optionsLuciaInfoElement = await Template.ƒS.Menu.getInput(optionsLuciaInfo, "dialogoptions");
        Template.ƒS.Sound.play(Template.sound.selectDialog, 1.5, false);
        switch (optionsLuciaInfoElement) {
            case optionsLuciaInfo.good:
                Template.dataForSave.luciaScore += 4;
                break;
            case optionsLuciaInfo.bad:
                Template.dataForSave.luciaScore -= 4;
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0003);
        Template.hideLuciaMeter();
        await Template.ƒS.Character.hide(Template.characters.lucia);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.surprised, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0004);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.unsure, Template.ƒS.positionPercent(75, 97));
        Template.showLuciaMeter();
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0004);
        Template.dataForSave.aboutAlibi = true;
        Template.updateNotes();
        Template.hideLuciaMeter();
        await Template.ƒS.Character.hide(Template.characters.lucia);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.serious, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0005);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.lucia, Template.characters.lucia.pose.neutral, Template.ƒS.positionPercent(75, 97));
        Template.showLuciaMeter();
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.lucia, luciaText.Lucia.T0005);
        await Template.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await Template.ƒS.update(0.5);
        Template.hideLuciaMeter();
        await Template.ƒS.Character.hide(Template.characters.lucia);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.neutral, Template.ƒS.positionPercent(25, 97));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, protagonistText.Protagonist.T0006);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0.5);
        // close
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
        return "confrontSolasAfterLucia";
    }
    Template.luciaGivesHint = luciaGivesHint;
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
                T0004: "Ja... Worüber ich eigentlich mit dir sprechen wollte... Du hast doch sicher mitbekommen, dass jemand eure Aufführung verhindern möchte.",
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
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
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
                    await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.confused, Template.ƒS.positionPercent(75, 97));
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
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.serious, Template.ƒS.positionPercent(25, 97));
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
                            await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.unhappy, Template.ƒS.positionPercent(75, 97));
                            Template.dataForSave.solasScore -= 10;
                            await Template.ƒS.update(0.5);
                            await Template.ƒS.Speech.tell(Template.characters.solas, solasText.Solas.T0005_bad);
                            await Template.ƒS.update(0.5);
                            break;
                        case optionsSolasHonest.good:
                            await Template.ƒS.Character.hide(Template.characters.solas);
                            await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.thoughtful, Template.ƒS.positionPercent(75, 97));
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
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.serious, Template.ƒS.positionPercent(25, 97));
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
                            await Template.ƒS.Character.show(Template.characters.solas, Template.characters.solas.pose.upset, Template.ƒS.positionPercent(75, 97));
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
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.serious, Template.ƒS.positionPercent(25, 97));
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
                    await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.surprised, Template.ƒS.positionPercent(25, 97));
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
                            Template.dataForSave.atlasNoDiary = true;
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
                            await Template.ƒS.update(0.5);
                            Template.dataForSave.atlasMotive = true;
                            Template.dataForSave.atlasDiary = true;
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
var Template;
(function (Template) {
    async function roofAtlas() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        // let isFavorite = findFavorite();
        // drei fälle für die erklärung:
        // diary true und key true
        // diary false und key false
        // diary false und key true ODER diary true und key false
        // let conclusionDiaryKey = {
        //     Protagonist: {
        //         T0001: "Lucia erwies sich als vertrauenswürdig. Sie gab mir den Tipp, dass dein Alibi zum Himmel stinkt.",
        //         T0002: "Außerdem hatte der Täter uns eine Warnung zukommen lassen. Diese Warnung verglich ich mit einer Probe deiner Handschrift...",
        //         T0003: "Auf den ersten Blick ähnelten sie sich nicht, aber ein paar Buchstaben sehen identisch aus. Ich glaube, du hast versucht, eine andere Handschrift zu imitieren."
        //         T0004: "Und zu guter Letzt... Ich bin ein guter Menschenkenner. Solas wirkte aufrichtig, als er sein Mitgefühl mit der Kostümschneiderin äußerte.",
        //}
        // };
        // let conclusionNoDiaryNoKey = {
        //     Protagonist: {
        //         T0001: "Der Täter hatte uns eine Warnung zukommen lassen. Es sah erst so aus, als gehöre die Handschrift zu Solas...",
        //         T0002: "Solas wiederum brachte mich auf die Idee, dass jemand seine Handschrift imitiert haben könnte. Deswegen sah ich mir die Warnung noch einmal an...",
        //         T0003: "Dabei fiel mir auf, dass einige Buchstaben aus der Reihe tanzten. So war mir klar, dass jemand Solas die Sache anhängen wollte.",
        //         T0004: "Aber wer könnte so meisterhaft eine andere Handschrift fälschen? Du, natürlich. Seit Jahren bist du Mitglied in der Kalligraphie AG. Lucia, der Nerd, hat dagegen wahrscheinlich noch nie einen Stift benutzt."
        //     }
        // };
        // let conclusionNoDiaryKey = {
        //     Protagonist: {
        //         T0001: "Lucia erwies sich als vertrauenswürdig. Sie gab mir den Tipp, dass dein Alibi zum Himmel stinkt.",
        //         T0002: "Außerdem hatte der Täter uns eine Warnung zukommen lassen. Dabei fiel mir auf, dass einige Buchstaben aus der Reihe tanzten...",
        //         T0003: "Jemand hatte also versucht, die Schrift eines anderen zu imitieren. Doch wer hätte die Fähigkeit dazu? Du, natürlich. Seit Jahren bist du Mitglied in der Kalligraphie AG"
        //         T0004: "Und zu guter Letzt... Ich bin ich ein guter Menschenkenner. Solas wirkte aufrichtig, als er sein Mitgefühl mit der Kostümschneiderin äußerte."
        //     }
        // };
        // let protagonistText = {
        //     Protagonist: {
        //         T0001: "Ich habe dich hergerufen, um dich zu stellen. Ich weiß, dass du der Saboteur bist. Du bist überführt, Atlas.",
        //         T0002: "Na gut, lass mich dir meine Schlussfolgerungen darlegen...",
        //         T0003: "Reicht dir das?"
        //     }
        // };
        // let kiraText = {
        //     Kira: {
        //         T0001: "Huh?"
        //     }
        // };
        // let atlasText = {
        //     Atlas: {
        //         T0001: "Überführt, ja? Wieso glaubst du, dass ich der Täter bin?",
        //         T0002: "Schon gut, ich gebe es zu. Du hast mich in meinem eigenen Spiel besiegt.",
        //         T0003: "Ich habe die Sabotage inszeniert, um dir ein wenig Zeit zu stehlen. Jede freie Minute steckt deine Nase in einem Buch. Ich wollte nicht, dass du mir den Titel des Jahrgangsbesten abnimmst.",
        //         T0004: "Solas sagte etwas darüber, dass hinter der Sabotage etwas Tieferes steckt... und es stimmt. Ich glaube, ich hatte Angst. Wenn ich nicht der Beste sein kann... wer bin ich dann überhaupt?",
        //         T0005: "Ich sehe jetzt ein, dass das dumm war."
        //     }
        // };
        // let narratorTextAtlasFavorit = {
        //     Narrator: {
        //         T0000: "Atlas gibt also zu, der Täter zu sein. Die Entscheidung liegt nun bei dir..."
        //     }
        // };
        // let narratorText = {
        //     Narrator: {
        //         T0000: "Atlas gibt also zu, der Täter zu sein. Gute Arbeit!"
        //     }
        // };
        await Template.ƒS.Location.show(Template.locations.corridorDay);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        // close
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
    }
    Template.roofAtlas = roofAtlas;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function roofLucia() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        // let protagonistText = {
        //     Protagonist: {
        //         T0001: "Ich habe dich hergerufen, um dich zu stellen. Ich weiß, dass du der Saboteur bist. Du bist überführt, Lucia.",
        //         T0002: "Oh nein... Habe ich mich etwa geirrt?"
        //     }
        // };
        // let kiraText = {
        //     Protagonist: {
        //         T0001: "Huh?"
        //     }
        // };
        let luciaText = {
            Lucia: {
                T0001: "Du glaubst, ich bin der Täter...?",
                T0002: "Es tut mir leid, dich zu enttäuschen, aber ich bin es wirklich nicht. Ich liebe den Theaterclub von Herzen."
            }
        };
        // let narratorText = {
        //     Narrator: {
        //         T0000: ""
        //     }
        // };
        await Template.ƒS.Location.show(Template.locations.corridorDay);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        // close
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
    }
    Template.roofLucia = roofLucia;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function roofSolas() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        // let protagonistText = {
        //     Protagonist: {
        //         T0001: "Ich habe dich hergerufen, um dich zu stellen. Ich weiß, dass du der Saboteur bist. Du bist überführt, Solas."
        //     }
        // };
        // let kiraText = {
        //     Protagonist: {
        //         T0001: "Huh?"
        //     }
        // };
        // let solasText = {
        //     Protagonist: {
        //         T0001: "Huh?"
        //     }
        // };
        // let narratorText = {
        //     Narrator: {
        //         T0000: "Es ist früh morgens und du betrittst die Schule. Nach ein paar Schritten stoppt dich ein Mädchen auf dem Korridor."
        //     }
        // };
        await Template.ƒS.Location.show(Template.locations.corridorDay);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        // close
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
    }
    Template.roofSolas = roofSolas;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function yourConclusion() {
        Template.ƒS.Sound.fade(Template.sound.splashMusic, 0, 0.0, true);
        Template.ƒS.Sound.fade(Template.sound.mainMusic, 0.5, 0.1, true);
        Template.updateNotes();
        // let protagonistText = {
        //     Protagonist: {
        //         T0001: "Huh?"
        //     }
        // };
        // let kiraText = {
        //     Protagonist: {
        //         T0001: "Schau dir alles, was du gesammelt hast, noch einmal genau an und suche nach Unstimmigkeiten.",
        //     }
        // };
        // let luciaText = {
        //     Protagonist: {
        //         T0001: "Huh?"
        //     }
        // };
        // let narratorText = {
        //     Narrator: {
        //         T0000: "Es ist früh morgens und du betrittst die Schule. Nach ein paar Schritten stoppt dich ein Mädchen auf dem Korridor."
        //     }
        // };
        await Template.ƒS.Location.show(Template.locations.corridorDay);
        await Template.ƒS.update(Template.transition.fizzle.duration, Template.transition.fizzle.alpha, Template.transition.fizzle.edge);
        // close
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
    }
    Template.yourConclusion = yourConclusion;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map