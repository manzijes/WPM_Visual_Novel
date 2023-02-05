"use strict";
var BehindTheScenes;
(function (BehindTheScenes) {
    BehindTheScenes.ƒ = FudgeCore;
    BehindTheScenes.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    BehindTheScenes.transition = {
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
    BehindTheScenes.sound = {
        // music
        mainMusic: "Audio/Music/inspiration.mp3",
        spookyMusic: "Audio/Music/nightmare.mp3",
        splashMusic: "Audio/Music/hillofwind.mp3",
        ending: "Audio/Music/pond.mp3",
        // ambiance
        birds: "Audio/Ambiance/springBirds.wav",
        // SFX
        schoolBell: "Audio/SFX/schoolBell.wav",
        sparkle: "Audio/SFX/sparkle.mp3",
        pageflip: "Audio/SFX/pageflip.wav",
        switch: "Audio/SFX/switch.wav",
        flashlight: "Audio/SFX/flashlight.wav",
        select: "Audio/SFX/select.wav",
        selectDialog: "Audio/SFX/selectdialog.wav",
        femalegasp: "Audio/SFX/femalegasp.mp3",
        shutter: "Audio/SFX/shutter.mp3",
        aua: "Audio/SFX/aua.wav",
        smallsigh: "Audio/SFX/defeated_sigh.wav",
        bigsigh: "Audio/SFX/heavy_sigh.wav"
    };
    BehindTheScenes.locations = {
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
        corridorDay2: {
            name: "corridorDay2",
            background: "Images/Backgrounds/corridor-day-2.png",
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
            background: "Images/Backgrounds/roof-day.jpg"
        },
        roofTwilight: {
            name: "roofTwilight",
            background: "Images/Backgrounds/roof-twilight.jpg"
        },
        stairs: {
            name: "stairs",
            background: "Images/Backgrounds/stairs-day.jpg"
        }
    };
    BehindTheScenes.chapterCovers = {
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
        epilogue: {
            name: "epilogue",
            background: "Images/Backgrounds/Kapitel/epilogue.png",
            foreground: ""
        },
    };
    BehindTheScenes.items = {
        key: {
            name: "key",
            origin: BehindTheScenes.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                center: "Images/Items/key.png"
            }
        },
        ticket: {
            name: "ticket",
            origin: BehindTheScenes.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                center: "Images/Items/ticket.png"
            }
        },
        melonpan: {
            name: "melonpan",
            origin: BehindTheScenes.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                center: "Images/Items/melonpan.png"
            }
        }
    };
    BehindTheScenes.characters = {
        narrator: {
            name: "Narrator"
        },
        stranger: {
            name: "???"
        },
        protagonist: {
            name: "Du",
            origin: BehindTheScenes.ƒS.ORIGIN.BOTTOMCENTER,
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
                serious: "Images/Characters/Protagonist/protagonist-serious.png",
                benevolent: "Images/Characters/Protagonist/protagonist-benevolent.png"
            }
        },
        kira: {
            name: "Kira",
            origin: BehindTheScenes.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: BehindTheScenes.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: BehindTheScenes.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/Atlas/atlas-angry-2.png",
                happy: "Images/Characters/Atlas/atlas-happy-2.png",
                sad: "Images/Characters/Atlas/atlas-sad.png",
                neutral: "Images/Characters/Atlas/atlas-neutral.png",
                scared: "Images/Characters/Atlas/atlas-scared.png",
                playful: "Images/Characters/Atlas/atlas-playful.png",
                smiling: "Images/Characters/Atlas/atlas-smiling.png",
                unhappy: "Images/Characters/Atlas/atlas-unhappy.png"
            }
        },
        lucia: {
            name: "Lucia",
            origin: BehindTheScenes.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/Lucia/lucia-neutral.png",
                sad: "Images/Characters/Lucia/lucia-sad.png",
                smiling: "Images/Characters/Lucia/lucia-smiling.png",
                surprised: "Images/Characters/Lucia/lucia-surprised.png",
                unsure: "Images/Characters/Lucia/lucia-unsure.png",
                upset: "Images/Characters/Lucia/lucia-upset.png",
                happy: "Images/Characters/Lucia/lucia-happy.png",
                smiling2: "Images/Characters/Lucia/lucia-smiling-2.png",
                unhappy: "Images/Characters/Lucia/lucia-unhappy.png",
            }
        },
        solas: {
            name: "Solas",
            origin: BehindTheScenes.ƒS.ORIGIN.BOTTOMCENTER,
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
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.shutter, 0.5, false);
        setTimeout(function () {
            shutter.classList.remove('on');
        }, 30 * 2 + 45);
    }
    BehindTheScenes.simulateCameraFlash = simulateCameraFlash;
    async function showAquiredPages() {
        let pages = ['<div class="aquiredPagesWrapper"><h1>Indizien</h1><p>Im Laufe des Spiels erhältst du verschiedene Indizien, die du hier im Menü jederzeit aufrufen kannst.</p><p>Klick einfach weiter, um sie dir noch einmal anzuschauen.</p></div>'];
        let current = 0;
        let numberAquired = 0;
        if (BehindTheScenes.dataForSave.luciaMotive == true) {
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
        if (BehindTheScenes.dataForSave.atlasDiary == true) {
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
        if (BehindTheScenes.dataForSave.warningNote == true) {
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
            BehindTheScenes.ƒS.Text.setClass("allhints");
            do {
                BehindTheScenes.ƒS.Text.print(pages[current]);
                choice = await BehindTheScenes.ƒS.Menu.getInput(flip, "flip");
                if (numberAquired > 1) {
                    switch (choice) {
                        case flip.back:
                            current = Math.max(0, current - 1);
                            BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.pageflip, 0.5, false);
                            break;
                        case flip.next:
                            current = Math.min(numberAquired, current + 1);
                            BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.pageflip, 0.5, false);
                            break;
                    }
                    // exactly two pages
                }
                else {
                    switch (choice) {
                        case flip.back:
                            current = Math.max(0, current - 1);
                            BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.pageflip, 0.5, false);
                            break;
                        case flip.next:
                            current = Math.min(1, current + 1);
                            BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.pageflip, 0.5, false);
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
            BehindTheScenes.ƒS.Text.setClass("allhints");
            do {
                BehindTheScenes.ƒS.Text.print(pages[current]);
                choice = await BehindTheScenes.ƒS.Menu.getInput(close, "pageclose");
            } while (choice != close.done);
        }
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
        BehindTheScenes.ƒS.Text.close();
    }
    BehindTheScenes.showAquiredPages = showAquiredPages;
    function findFavorite() {
        let favorite = "Atlas";
        if (BehindTheScenes.dataForSave.atlasScore < BehindTheScenes.dataForSave.solasScore) {
            favorite = "Solas";
        }
        if (BehindTheScenes.dataForSave.solasScore < BehindTheScenes.dataForSave.luciaScore) {
            favorite = "Lucia";
        }
        return favorite;
    }
    BehindTheScenes.findFavorite = findFavorite;
    function updateNotes() {
        BehindTheScenes.dataForSave.toggleSuspectsButton = true;
        let toggleSuspects = document.getElementById("toggleSuspects");
        toggleSuspects.style.visibility = "visible";
        toggleSuspects.style.opacity = "1";
        let toggleAquiredPages = document.getElementById("toggleAquiredPages");
        toggleAquiredPages.style.visibility = "visible";
        toggleAquiredPages.style.opacity = "1";
        // Portraits
        if (BehindTheScenes.dataForSave.atlasPortrait == true) {
            let atlasPortrait = document.getElementById("atlasPortrait");
            atlasPortrait.style.filter = "unset";
        }
        if (BehindTheScenes.dataForSave.solasPortrait == true) {
            let solasPortrait = document.getElementById("solasPortrait");
            solasPortrait.style.filter = "unset";
        }
        if (BehindTheScenes.dataForSave.luciaPortrait == true) {
            let luciaPortrait = document.getElementById("luciaPortrait");
            luciaPortrait.style.filter = "unset";
        }
        // Motives
        if (BehindTheScenes.dataForSave.solasMotive == true) {
            let solasMotive = document.getElementById("solasMotive");
            solasMotive.innerHTML = "Er könnte die Aufführung sabotieren, weil er ein Perfektionist ist und mehr Zeit braucht, um das Skript zu optimieren.";
        }
        if (BehindTheScenes.dataForSave.atlasMotive == true) {
            if (BehindTheScenes.dataForSave.atlasDiary == true) {
                let atlasMotive = document.getElementById("atlasMotive");
                atlasMotive.innerHTML = "Er könnte die Sabotage inszenieren, um dich von der Schule abzulenken, sodass er Jahrgangsbester bleibt.";
            }
            else {
                let atlasMotive = document.getElementById("atlasMotive");
                atlasMotive.innerHTML = "? ? ?";
            }
        }
        if (BehindTheScenes.dataForSave.luciaMotive == true) {
            let luciaMotive = document.getElementById("luciaMotive");
            luciaMotive.innerHTML = "Sie könnte aus Rache die Sabotage begehen, weil ihr als Mitglied hinter den Kulissen die Wertschätzung fehlt.";
        }
        // Hints
        if (BehindTheScenes.dataForSave.luciaOpportunity == true) {
            let luciaOpportunity = document.getElementById("luciaOpportunity");
            luciaOpportunity.innerHTML = "Sie sagt, sie habe den Schlüssel zum Theaterraum verloren. Stimmt das...?";
        }
        if (BehindTheScenes.dataForSave.atlasOpportunity == true) {
            let atlasOpportunity = document.getElementById("atlasOpportunity");
            atlasOpportunity.innerHTML = "Das Mädchen auf dem Flur ( " + BehindTheScenes.dataForSave.nameGirl + " ) gibt Atlas ein Alibi.";
        }
        if (BehindTheScenes.dataForSave.lookedForKey == true) {
            let whatAboutKey = document.getElementById("whatAboutKey");
            if (BehindTheScenes.dataForSave.foundKey == true) {
                whatAboutKey.innerHTML = "Lucia hat die Wahrheit gesagt. Vertrauensbonus?";
            }
            else {
                whatAboutKey.innerHTML = "Du konntest nicht herausfinden, ob Lucia lügt.";
            }
        }
        if (BehindTheScenes.dataForSave.aboutAlibi == true) {
            let aboutAlibi = document.getElementById("aboutAlibi");
            aboutAlibi.innerHTML = "Die Glaubwürdigkeit von " + BehindTheScenes.dataForSave.nameGirl + " ist zweifelhaft, da sie in Atlas verliebt ist.";
        }
        if (BehindTheScenes.dataForSave.solasHandwriting == true) {
            let solasHandwriting = document.getElementById("solasHandwriting");
            solasHandwriting.innerHTML = "Die Schrift auf der Notiz des Täters sieht aus wie Solas Schrift.";
        }
        if (BehindTheScenes.dataForSave.confrontedSolas == true) {
            if (BehindTheScenes.dataForSave.solasHandwriting == true) {
                let solasPlea = document.getElementById("solasPlea");
                solasPlea.innerHTML = "Solas argumentiert, dass jemand seine Handschrift gefälscht haben könnte. Wer käme dafür infrage? Oder lockt er dich auf eine falsche Fährte?";
            }
            else {
                let solasPlea = document.getElementById("solasPlea");
                solasPlea.innerHTML = "Solas zeigt Mitleid mit der Kostümschneiderin, aber auch mit dem Täter.";
            }
        }
    }
    BehindTheScenes.updateNotes = updateNotes;
    function removeFallingLeaves() {
        let leaves = document.getElementById("leaves");
        leaves.remove();
    }
    BehindTheScenes.removeFallingLeaves = removeFallingLeaves;
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
    BehindTheScenes.addFallingLeaves = addFallingLeaves;
    // animation tutorial
    function fromCenterToCenter() {
        return {
            start: { translation: BehindTheScenes.ƒS.positions.center, scaling: new BehindTheScenes.ƒS.Position(0.5, 0.5) },
            end: { translation: BehindTheScenes.ƒS.positions.center, scaling: new BehindTheScenes.ƒS.Position(0.5, 0.5) },
            duration: 2,
            playmode: BehindTheScenes.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    BehindTheScenes.fromCenterToCenter = fromCenterToCenter;
    // visibility solas meter
    function showSolasMeter() {
        document.getElementsByName("solasScore").forEach(meterStuffSolas => meterStuffSolas.hidden = false);
    }
    BehindTheScenes.showSolasMeter = showSolasMeter;
    function hideSolasMeter() {
        document.getElementsByName("solasScore").forEach(meterStuffSolas => meterStuffSolas.hidden = true);
    }
    BehindTheScenes.hideSolasMeter = hideSolasMeter;
    // visibility atlas meter
    function showAtlasMeter() {
        document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
    }
    BehindTheScenes.showAtlasMeter = showAtlasMeter;
    function hideAtlasMeter() {
        document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = true);
    }
    BehindTheScenes.hideAtlasMeter = hideAtlasMeter;
    // visibility lucia meter
    function showLuciaMeter() {
        document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
    }
    BehindTheScenes.showLuciaMeter = showLuciaMeter;
    function hideLuciaMeter() {
        document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);
    }
    BehindTheScenes.hideLuciaMeter = hideLuciaMeter;
    // let speechInDom = document.getElementById("speech");
    // speechInDom.addEventListener("change", listenSpeechChange);
    // function listenSpeechChange() {
    //   console.log("speaking");
    // }
    BehindTheScenes.dataForSave = {
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
        lookedForKey: false,
        choseAtlas: false,
        choseSolas: false,
        choseLucia: false,
        letCulpritGo: false
    };
    window.addEventListener("load", start);
    function start(_event) {
        //Menü
        BehindTheScenes.gameMenu = BehindTheScenes.ƒS.Menu.create(BehindTheScenes.menuInGame, BehindTheScenes.buttonFunctionalities, "menuInGame"); //hier CSS Klasse angeben
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0.4, 0.1, true);
        let scenes = [
            // { scene: intro, name: "Einleitung"},
            // { scene: coverChapterOne, name: "Kapitel" },
            // { scene: motive, name: "Treffe die Verdächtigen" },
            // { scene: lightsOut, name: "Im Theaterraum gehen die Lichter aus" },
            // { scene: coverChapterTwo, name: "Kapitel" },
            // { scene: girlOnCorridor, name: "Ein Mädchen stoppt dich auf dem Flur" },
            // { scene: lookForKey, name: "Suche nach Lucias Schlüssel" },
            // { id: "kiraGivesHint", scene: kiraGivesHint, name: "Kira gibt einen Hinweis" },
            // { id: "luciaGivesHint", scene: luciaGivesHint, name: "Lucia gibt einen Hinweis" },
            // { id: "confrontSolasAfterKira", scene: confrontSolasAfterKira, name: "Konfrontation mit Solas" },
            // { id: "confrontSolasAfterLucia", scene: confrontSolasAfterLucia, name: "Konfrontation mit Solas" },
            // { id: "yourConclusion", scene: yourConclusion, name: "Wer ist der Täter" },
            // { id: "roofRight", scene: roofRight, name: "Richtiger Täter" },
            // { id: "roofWrong", scene: roofWrong, name: "Falscher Täter" },
            { id: "roofRightEpilogue", scene: BehindTheScenes.roofRightEpilogue, name: "" },
            { id: "roofWrongEpilogue", scene: BehindTheScenes.roofWrongEpilogue, name: "" },
            { id: "yourTitle", scene: BehindTheScenes.yourTitle, name: "Du erhältst einen Titel abhängig von deiner Spielweise" }
        ];
        // let uiElement: HTMLElement = document.querySelector("[type=interface]");
        // dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
        let atlasInterface = document.getElementById("atlasInterface");
        BehindTheScenes.dataForSave = BehindTheScenes.ƒS.Progress.setData(BehindTheScenes.dataForSave, atlasInterface);
        let luciaInterface = document.getElementById("luciaInterface");
        BehindTheScenes.dataForSave = BehindTheScenes.ƒS.Progress.setData(BehindTheScenes.dataForSave, luciaInterface);
        let solasInterface = document.getElementById("solasInterface");
        BehindTheScenes.dataForSave = BehindTheScenes.ƒS.Progress.setData(BehindTheScenes.dataForSave, solasInterface);
        BehindTheScenes.ƒS.Speech.clear();
        // start the sequence
        BehindTheScenes.ƒS.Progress.go(scenes);
    }
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    //  MENU - Audio functions
    BehindTheScenes.volume = 1.0;
    BehindTheScenes.volumeBeforeMute = 1.0;
    function incrementSound() {
        if (BehindTheScenes.volume >= 100)
            return;
        BehindTheScenes.volume += 0.2;
        BehindTheScenes.ƒS.Sound.setMasterVolume(BehindTheScenes.volume);
    }
    BehindTheScenes.incrementSound = incrementSound;
    function decrementSound() {
        if (BehindTheScenes.volume <= 0)
            return;
        BehindTheScenes.volume -= 0.2;
        BehindTheScenes.ƒS.Sound.setMasterVolume(BehindTheScenes.volume);
    }
    BehindTheScenes.decrementSound = decrementSound;
    function toggleSound() {
        let toggleSound = document.getElementById("toggleSound");
        toggleSound.classList.toggle("active");
        if (BehindTheScenes.volume > 0) {
            BehindTheScenes.volumeBeforeMute = BehindTheScenes.volume;
            BehindTheScenes.volume = 0;
            BehindTheScenes.ƒS.Sound.setMasterVolume(BehindTheScenes.volume);
        }
        else {
            BehindTheScenes.ƒS.Sound.setMasterVolume(BehindTheScenes.volumeBeforeMute);
            BehindTheScenes.volume = BehindTheScenes.volumeBeforeMute;
        }
    }
    BehindTheScenes.toggleSound = toggleSound;
    function showSuspects() {
        let toggleSuspects = document.getElementById("toggleSuspects");
        toggleSuspects.classList.toggle("active");
        var element = document.getElementById("suspects");
        element.classList.toggle("hidden");
    }
    BehindTheScenes.showSuspects = showSuspects;
    async function showCredits() {
        BehindTheScenes.ƒS.Text.setClass("credits hint");
        let credits = ["<h1>Bilder</h1>\
            <table>\
            <tr>\
                <td>Character Sprites</td>\
                <td>Sutemo<br>https://sutemo.itch.io/ <br>https://www.deviantart.com/stereo-mono <br>https://ko-fi.com/sutemo</td>\
            </tr>\
            <br>\
            <tr>\
                <td>Background Artworks</td>\
                <td>彩 雅介<br>https://www.pixiv.net/member.php?id=698864</td>\
            </tr>\
            <tr>\
                <td>Notebook-Seite</td>\
                <td>Piotr Siedlecki<br>https://www.publicdomainpictures.net/de/view-image.php?image=40205&picture=notebook-seite</td>\
            </tr>\
            </table>\
            ",
            "<h1>Sounds</h1>\
            <table>\
            <tr>\
                <td>Flashlight</td>\
                <td>Lunardrive, https://freesound.org/people/Lunardrive/sounds/48979/</td>\
            </tr>\
            <tr>\
                <td>Pageflip</td>\
                <td>qubodup, https://freesound.org/people/qubodup/sounds/454707/</td>\
            </tr>\
            <tr>\
                <td>Breaker</td>\
                <td>Deathscyp, https://freesound.org/people/Deathscyp/sounds/404049/</td>\
            </tr>\
            <tr>\
                <td>Home standard ding dong</td>\
                <td>Mixkit, https://mixkit.co/free-sound-effects/bell/</td>\
            </tr>\
            <tr>\
                <td>Spring Birds Raw (New Jersey)</td>\
                <td>hargissssound, https://freesound.org/people/hargissssound/</td>\
            </tr>\
            <tr>\
                <td>Nightmare</td>\
                <td>Alexander Nakarada, https://cloudnovel.net/RoyaltyFreeMusic/music/nightmare</td>\
            </tr>\
            <tr>\
                <td>Inspiration</td>\
                <td>Rafael Krux, https://cloudnovel.net/RoyaltyFreeMusic/music/inspiration</td>\
             </tr>\
             <tr>\
                <td>Hill of Wind</td>\
                <td>SamFree, https://en.wikipedia.org/wiki/Samfree</td>\
            </tr>\
            </table>\
            ",
            "<h1>Codepens</h1>\
            <table>\
            <tr>\
                <td>Falling Leaves CSS</td>\
                <td>Aaron Griffin, https://codepen.io/uurrnn/pen/WNLVdN</td>\
            </tr>\
            <tr>\
            <td>Scotch Tape Effect</td>\
            <td>Alexander Stirn, https://codepen.io/binarykiwi/pen/BbOoPy</td>\
        </tr>\
            <tr>\
                <td>Mouse Cursor Flashlight</td>\
                <td>tomhodgins, https://codepen.io/tomhodgins/pen/egWjBb</td>\
            </tr>\
            </table>\
            "
        ];
        let flip = { back: "Zurück", next: "Weiter", done: "x" };
        let choice;
        let current = 0;
        do {
            BehindTheScenes.ƒS.Text.print(credits[current]);
            choice = await BehindTheScenes.ƒS.Menu.getInput(flip, "flip");
            switch (choice) {
                case flip.back:
                    current = Math.max(0, current - 1);
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.pageflip, 0.5, false);
                    break;
                case flip.next:
                    current = Math.min(2, current + 1);
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.pageflip, 0.5, false);
                    break;
            }
        } while (choice != flip.done);
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
        BehindTheScenes.ƒS.Text.close();
    }
    BehindTheScenes.showCredits = showCredits;
    function showShortcuts() {
        BehindTheScenes.ƒS.Text.setClass("shortcuts hint");
        let shortcuts = "<h1>Shortcuts</h1>\
        <table>\
          <tr>\
            <td>Menu ein-/ausblenden</td>\
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
            <td>peichern</td>\
            <td>S</td>\
          </tr>\
          <tr>\
            <td>Laden</td>\
            <td>L</td>\
          </tr>\
          <tr>\
          <td>Notizen ein-/ausblenden</td>\
          <td>N</td>\
        </tr>\
        </table>\
        ";
        BehindTheScenes.ƒS.Text.print(shortcuts);
    }
    BehindTheScenes.showShortcuts = showShortcuts;
    ;
    // MENU
    BehindTheScenes.menuInGame = {
        save: "Speichern",
        load: "Laden",
        // close: "Close",
        credits: "Credits",
        shortcuts: "Shortcuts",
        toggleSound: "Sound",
        turnUpVolume: "+",
        turnDownVolume: "-",
        toggleSuspects: "Notizen",
        toggleAquiredPages: "Indizien"
    };
    // true = offen; false = geschlossen
    BehindTheScenes.menuOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case BehindTheScenes.menuInGame.save:
                await BehindTheScenes.ƒS.Progress.save();
                break;
            case BehindTheScenes.menuInGame.load:
                await BehindTheScenes.ƒS.Progress.load();
                break;
            // case menuInGame.close:
            //     gameMenu.close();
            //     menuOpen = false;
            //     break;
            case BehindTheScenes.menuInGame.credits:
                BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.select, 2, false);
                showCredits();
                break;
            case BehindTheScenes.menuInGame.shortcuts:
                BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.select, 2, false);
                showShortcuts();
                break;
            case BehindTheScenes.menuInGame.toggleSound:
                BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.select, 2, false);
                toggleSound();
                break;
            case BehindTheScenes.menuInGame.turnUpVolume:
                BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.select, 2, false);
                incrementSound();
                break;
            case BehindTheScenes.menuInGame.turnDownVolume:
                BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.select, 2, false);
                decrementSound();
                break;
            case BehindTheScenes.menuInGame.toggleSuspects:
                BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.select, 2, false);
                showSuspects();
                break;
            case BehindTheScenes.menuInGame.toggleAquiredPages:
                BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.select, 2, false);
                BehindTheScenes.showAquiredPages();
                break;
        }
    }
    BehindTheScenes.buttonFunctionalities = buttonFunctionalities;
    // Shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case BehindTheScenes.ƒ.KEYBOARD_CODE.S:
                await BehindTheScenes.ƒS.Progress.save();
                break;
            case BehindTheScenes.ƒ.KEYBOARD_CODE.L:
                await BehindTheScenes.ƒS.Progress.load();
                break;
            case BehindTheScenes.ƒ.KEYBOARD_CODE.N:
                if (BehindTheScenes.dataForSave.toggleSuspectsButton == true) {
                    showSuspects();
                }
                break;
            case BehindTheScenes.ƒ.KEYBOARD_CODE.M:
                if (BehindTheScenes.menuOpen) {
                    console.log("Schließen");
                    BehindTheScenes.gameMenu.close();
                    BehindTheScenes.menuOpen = false;
                }
                else {
                    console.log("Öffnen");
                    BehindTheScenes.gameMenu.open();
                    BehindTheScenes.menuOpen = true;
                }
                break;
        }
    }
    BehindTheScenes.hndKeyPress = hndKeyPress;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function beta() {
        // space for testing snippets
    }
    BehindTheScenes.beta = beta;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function confrontSolasAfterKira() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
        let protagonistText = {
            Protagonist: {
                T0001: "Hallo, Solas. Ich muss noch einmal mit dir sprechen.",
                T0002: "Ich sage es geradeheraus: Der Täter hat uns eine Warnung zukommen lassen. Die Handschrift darauf sieht aus wie deine.",
                T0003_good: "Hellseherisches Talent.",
                T0003_bad: "Ich nicht, aber Kira.",
                T0003_2_good: "Das stimmt wohl.",
                T0003_2_bad: "Das befürchte ich auch.",
                T0004: "Du wirkst sehr gefasst... Wenn du unschuldig wärst, würdest du nicht so ruhig reagieren.",
                T0005_bad: "Wie poetisch.",
                T0005_good: "Ich glaube, ich habe gerade einen Blick erhascht.",
                T0006: "Bis bald."
            }
        };
        let solasText = {
            Solas: {
                T0001: "Sicher doch, was gibt es?",
                T0002: "Ist das so? Woher kennst du meine Handschrift?",
                T0003_a: "Wenn du wirklich eine Hellseherin wärst, müsstest du nicht Detektiv spielen, oder?",
                T0003_b: "Kira also... Vielleicht kennt sie mich nicht so gut, wie sie glaubt.",
                T0004: "Ich verstehe, dass mich das mit der Handschrift belastet. So wie ich das sehe, gibt es nur zwei Möglichkeiten.",
                T0005: "Möglichkeit 1: Jemand der anderen beiden hat meine Handschrift imitiert, um mir die Sache anzuhängen. Doch wer käme dafür infrage?",
                T0006: "Möglichkeit 2: Ich versuche gerade, dich zu manipulieren. Ein letzter Verzweiflungsakt, nachdem du mich überführt hast.",
                T0007: "Niccoló Machiavelli hat einmal gesagt: 'Jeder sieht wie du zu sein scheinst, wenige fühlen heraus wie du bist.' Ich glaube, er meinte damit... Wir können einander nicht ins Herz schauen. Darin liegt die eigentliche Tragödie.",
                T0009: "Ich muss jetzt weiter. Bis bald."
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Du findest Solas in einem abgelegenen Korridor."
            }
        };
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.corridorDay2);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showSolasMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0001);
        BehindTheScenes.hideSolasMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showSolasMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0002);
        let optionsSolasHandwriting = {
            good: "Hellseherisches Talent.",
            bad: "Ich nicht, aber Kira."
        };
        let optionsSolasHandwritingElement = await BehindTheScenes.ƒS.Menu.getInput(optionsSolasHandwriting, "dialogoptions");
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
        switch (optionsSolasHandwritingElement) {
            case optionsSolasHandwriting.good:
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.thoughtful, BehindTheScenes.ƒS.positionPercent(75, 97));
                BehindTheScenes.dataForSave.solasScore += 9;
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0003_a);
                BehindTheScenes.hideSolasMeter();
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003_2_good);
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                await BehindTheScenes.ƒS.update(0.5);
                break;
            case optionsSolasHandwriting.bad:
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.unhappy, BehindTheScenes.ƒS.positionPercent(75, 97));
                BehindTheScenes.dataForSave.solasScore -= 9;
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0003_b);
                BehindTheScenes.hideSolasMeter();
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003_2_bad);
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                await BehindTheScenes.ƒS.update(0.5);
                break;
        }
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showSolasMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0004);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0005);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0006);
        BehindTheScenes.hideSolasMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0004);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showSolasMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0007);
        let optionsSolasHeart = {
            bad: "Wie poetisch.",
            good: "Ich glaube, ich habe gerade einen Blick erhascht."
        };
        let optionsSolasHeartElement = await BehindTheScenes.ƒS.Menu.getInput(optionsSolasHeart, "dialogoptions");
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
        switch (optionsSolasHeartElement) {
            case optionsSolasHeart.good:
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.happy, BehindTheScenes.ƒS.positionPercent(75, 97));
                BehindTheScenes.dataForSave.solasScore += 5;
                await BehindTheScenes.ƒS.update(0.5);
                break;
            case optionsSolasHeart.bad:
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.sad, BehindTheScenes.ƒS.positionPercent(75, 97));
                BehindTheScenes.dataForSave.solasScore -= 5;
                await BehindTheScenes.ƒS.update(0.5);
                break;
        }
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0009);
        BehindTheScenes.hideSolasMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
        await BehindTheScenes.ƒS.update(0.5);
        BehindTheScenes.dataForSave.confrontedSolas = true;
        BehindTheScenes.updateNotes();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0006);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        // close
        BehindTheScenes.ƒS.Speech.clear();
        BehindTheScenes.ƒS.Speech.hide();
        await BehindTheScenes.ƒS.update(0.5);
        return "yourConclusion";
    }
    BehindTheScenes.confrontSolasAfterKira = confrontSolasAfterKira;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function confrontSolasAfterLucia() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
        let protagonistText = {
            Protagonist: {
                T0001: "Hallo, Solas. Ich muss noch einmal mit dir sprechen.",
                T0002: "Ich habe inzwischen einige Hinweise gesammelt. Du bleibst mir aber nach wie vor ein Rätsel.",
                T0003: "Und?",
                T0004: "Hmm... Wie meinst du das?",
                T0005_bad: "Ich werde nicht schlau aus dir.",
                T0005_excellent: "Ich glaube, ich verstehe.",
                T0006: "Bis bald."
            }
        };
        let solasText = {
            Solas: {
                T0001: "Sicher doch, was gibt es?",
                T0002: "Ist das so, ja? Ich habe selbst den ganzen Tag über die Sache nachgedacht...",
                T0003: "Naja. Mir tut unsere Kostümschneiderin leid. Sie näht sehr kunstvoll und steckt ihr Herz in jedes Projekt. Wie du weißt, wurde eines der Kostüme zerstört... Das ist wirklich unfair.",
                T0004: "Aber auch der Saboteur tut mir leid. Seine Handlungen zeugen von einem Gefühl der Ratlosigkeit, denkst du nicht?",
                T0005: "Du verdächtigst uns alle aus verschiedenen Gründen, aber hinter jedem Motiv, das du uns zugeschrieben hast, steht der Ehrgeiz.",
                T0006: "...und das eigentliche Wesen des Ehrgeizes ist nur der Schatten eines Traumes. Zumindest schrieb das Shakespeare.",
                T0007: "Ich muss jetzt weiter. Bis bald."
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Du findest Solas in einem abgelegenen Korridor.",
                T0001: "Solas verschwindet. "
            }
        };
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.corridorDay2);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showSolasMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0001);
        BehindTheScenes.hideSolasMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.thoughtful, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showSolasMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0002);
        BehindTheScenes.hideSolasMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showSolasMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0003);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0004);
        BehindTheScenes.hideSolasMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0004);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.thoughtful, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showSolasMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0005);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0006);
        let optionsSolasDream = {
            bad: "Ich werde nicht schlau aus dir.",
            good: "Der Schatten eines Traumes...",
            excellent: "Ich glaube, ich verstehe."
        };
        let optionsSolasDreamElement = await BehindTheScenes.ƒS.Menu.getInput(optionsSolasDream, "dialogoptions");
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
        switch (optionsSolasDreamElement) {
            case optionsSolasDream.good:
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.thoughtful, BehindTheScenes.ƒS.positionPercent(75, 97));
                BehindTheScenes.dataForSave.solasScore += 3;
                await BehindTheScenes.ƒS.update(0.5);
                break;
            case optionsSolasDream.excellent:
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.happy, BehindTheScenes.ƒS.positionPercent(75, 97));
                BehindTheScenes.dataForSave.solasScore += 10;
                await BehindTheScenes.ƒS.update(0.5);
                break;
            case optionsSolasDream.bad:
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.unhappy, BehindTheScenes.ƒS.positionPercent(75, 97));
                BehindTheScenes.dataForSave.solasScore -= 3;
                await BehindTheScenes.ƒS.update(0.5);
                break;
        }
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0007);
        BehindTheScenes.dataForSave.confrontedSolas = true;
        BehindTheScenes.updateNotes();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await BehindTheScenes.ƒS.update(0.5);
        BehindTheScenes.hideSolasMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
        await BehindTheScenes.ƒS.update(0.5);
        return "yourConclusion";
    }
    BehindTheScenes.confrontSolasAfterLucia = confrontSolasAfterLucia;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function coverChapterOne() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.chapterCovers.chapter);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        let pages = "<h1>Kapitel 1: Motive</h1><h5>Der erste Schritt deiner Nachforschungen wird es sein, die Verdächtigen zu befragen und mögliche Motive für die Sabotage auszumachen. Sobald du eine wertvolle Information erhältst, wird sie automatisch zu deinen Notizen oder Indizien hinzugefügt.</h5><h5>Wenn du mit anderen interagierst, kann es passieren, dass du ihnen basierend auf deinen Antworten oder Entscheidungen mehr oder weniger sympathisch wirst. Aber keine Angst, Kira mag dich immer!</h5>";
        let close = { done: "Weiter" };
        let choice;
        BehindTheScenes.ƒS.Text.setClass("coverTitle");
        do {
            BehindTheScenes.ƒS.Text.print(pages);
            choice = await BehindTheScenes.ƒS.Menu.getInput(close, "pageclose");
        } while (choice != close.done);
        BehindTheScenes.ƒS.Text.close();
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.pageflip, 0.5, false);
    }
    BehindTheScenes.coverChapterOne = coverChapterOne;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function coverChapterTwo() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.chapterCovers.chapter);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        let pages = "<h1>Kapitel 2: Hinweise</h1><h5>Der nächste Tag ist angebrochen und die Zeit drängt. Du hast bereits einen ersten Eindruck gewonnen, weiter so!</h5><h5>Dein nächster Schritt wird es sein, Hinweise zu sammeln, die dich zum richtigen Täter führen. Am Ende dieses Kapitels wirst du deine Entscheidung treffen.</h5>";
        let close = { done: "Weiter" };
        let choice;
        BehindTheScenes.ƒS.Text.setClass("coverTitle");
        do {
            BehindTheScenes.ƒS.Text.print(pages);
            choice = await BehindTheScenes.ƒS.Menu.getInput(close, "pageclose");
        } while (choice != close.done);
        BehindTheScenes.ƒS.Text.close();
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.pageflip, 0.5, false);
    }
    BehindTheScenes.coverChapterTwo = coverChapterTwo;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function girlOnCorridor() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
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
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.corridorDay);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.girl, BehindTheScenes.characters.girl.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell("???", girlText.Girl.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.girl);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
        // name the girl
        BehindTheScenes.dataForSave.nameGirl = await BehindTheScenes.ƒS.Speech.getInput();
        BehindTheScenes.dataForSave.nameGirl = BehindTheScenes.dataForSave.nameGirl.charAt(0).toUpperCase() + BehindTheScenes.dataForSave.nameGirl.slice(1);
        BehindTheScenes.characters.girl.name = BehindTheScenes.dataForSave.nameGirl;
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.girl, BehindTheScenes.characters.girl.pose.annoyed, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.girl, girlText.Girl.T0002);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.girl);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.girl, BehindTheScenes.characters.girl.pose.upset, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.girl, girlText.Girl.T0003);
        await BehindTheScenes.ƒS.update(0.5);
        let optionsAtlasTutoringElement = await BehindTheScenes.ƒS.Menu.getInput(optionsAtlasTutoring, "dialogoptions");
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
        switch (optionsAtlasTutoringElement) {
            case optionsAtlasTutoring.good:
                BehindTheScenes.showAtlasMeter();
                await BehindTheScenes.ƒS.update(0.5);
                BehindTheScenes.dataForSave.atlasScore += 6;
                await BehindTheScenes.ƒS.update(0.5);
                BehindTheScenes.hideAtlasMeter();
                break;
            case optionsAtlasTutoring.bad:
                BehindTheScenes.showAtlasMeter();
                await BehindTheScenes.ƒS.update(0.5);
                BehindTheScenes.dataForSave.atlasScore -= 6;
                await BehindTheScenes.ƒS.update(0.5);
                BehindTheScenes.hideAtlasMeter();
                break;
        }
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.girl, BehindTheScenes.characters.girl.pose.annoyed, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.girl, girlText.Girl.T0004);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.girl);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.girl, BehindTheScenes.characters.girl.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.girl, girlText.Girl.T0005);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.girl);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.girl);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0005);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        BehindTheScenes.dataForSave.atlasOpportunity = true;
        BehindTheScenes.updateNotes();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        // close
        BehindTheScenes.ƒS.Speech.clear();
        BehindTheScenes.ƒS.Speech.hide();
        await BehindTheScenes.ƒS.update();
    }
    BehindTheScenes.girlOnCorridor = girlOnCorridor;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
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
                T0004: "Du hast ein Notizheft angelegt. Sehr vorbildlich, du Musterschülerin! Du kannst es ab jetzt im Menü unter 'Notizen' oder mit 'N' ein- und ausblenden. Dann kannst du auch gleich einen ersten Blick auf deine Indizien-Sammlung werfen..."
            }
        };
        let kiraText = {
            Kira: {
                T0001: "Ja, das stimmt.",
                T0001_2: "Wir stecken gerade mitten in den Proben für die nächste Aufführung. Aber seit ein paar Tagen läuft alles schief.",
                T0002: "Zum Beispiel letztens. Da verschwanden alle Skripte aus unserem Clubraum. Oder gestern, da fanden wir plötzlich eines der Kostüme im Müll. Es war total zerschnitten! Jemand hat es auf uns abgesehen, denkst du nicht?",
                T0003_a: "Eigentlich wäre ich damit zum ersten Schulsprecher gegangen, aber er gehört selbst zum Theaterclub. Es ist besser, wenn sich ein Außenstehender damit beschäftigt.",
                T0003_b: "Hah, du bist ja drollig. Eigentlich wäre ich damit zum ersten Schulsprecher gegangen, aber er gehört selbst zum Theaterclub. Es ist besser, wenn sich ein Außenstehender damit beschäftigt.",
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
        BehindTheScenes.addFallingLeaves();
        BehindTheScenes.ƒS.Speech.hide();
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.schoolBell, 0.5, false);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.schoolOutsideTwilight);
        await BehindTheScenes.ƒS.update(2);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.birds, 0.5, true);
        await BehindTheScenes.ƒS.update(1);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.25);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.stranger, strangerText.Stranger.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.stranger, strangerText.Stranger.T0002);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0004);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.stranger, strangerText.Stranger.T0003);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0005);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.smiling, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0001);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0001_2);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0006);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0002);
        let dialogoptionsElement = await BehindTheScenes.ƒS.Menu.getInput(dialogoptions, "dialogoptions");
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        switch (dialogoptionsElement) {
            case dialogoptions.iSayA:
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0007_a);
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0003_a);
                await BehindTheScenes.ƒS.update(0.5);
                break;
            case dialogoptions.iSayB:
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0007_b);
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.smiling, BehindTheScenes.ƒS.positionPercent(75, 97));
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0003_b);
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                await BehindTheScenes.ƒS.update(0.5);
                break;
        }
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0003_3);
        let dialogoptionsElement2 = await BehindTheScenes.ƒS.Menu.getInput(dialogoptions2, "dialogoptions");
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        switch (dialogoptionsElement2) {
            case dialogoptions2.iSayA:
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0008_a);
                break;
            case dialogoptions2.iSayB:
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0008_b);
                break;
        }
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0004);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0004_2);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0004_3);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0004_4);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0009);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0005);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0003);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0010);
        BehindTheScenes.updateNotes();
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.sparkle, 0.5, false);
        await BehindTheScenes.ƒS.update(2);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0011);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        BehindTheScenes.ƒS.Speech.clear();
        BehindTheScenes.ƒS.Speech.hide();
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0004);
        BehindTheScenes.removeFallingLeaves();
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.birds, 0, 3, true);
        BehindTheScenes.ƒS.Speech.clear();
        BehindTheScenes.ƒS.Speech.hide();
        await BehindTheScenes.ƒS.update();
    }
    BehindTheScenes.intro = intro;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function kiraGivesHint() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
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
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.corridorDay);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0002);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0003);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0004);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        BehindTheScenes.dataForSave.solasHandwriting = true;
        BehindTheScenes.updateNotes();
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0005);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        return "confrontSolasAfterKira";
    }
    BehindTheScenes.kiraGivesHint = kiraGivesHint;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function lightsOut() {
        // how long are the lights out (in seconds)?
        let waitSeconds = 30;
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
        // control lights in scene
        function setLights(action) {
            let htmlInDom = document.querySelector("html");
            switch (action) {
                case "turnOffLights":
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.switch, 1.5, false);
                    htmlInDom.classList.add("dark");
                    break;
                case "turnOnLights":
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.switch, 1.5, false);
                    htmlInDom.classList.remove("dark");
                    break;
                case "turnOnFlashlight":
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.flashlight, 1, false);
                    htmlInDom.classList.add("flashlight");
                    break;
                case "turnOffFlashlight":
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.flashlight, 1, false);
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
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.classroomDay);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.smiling, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0000);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0001);
        await BehindTheScenes.ƒS.update(0.5);
        setLights("turnOffLights");
        // change normal theme to spooky music
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0, 3);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.spookyMusic, 0.5, 2.5, true);
        // remove characters and speech, add light switch
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        BehindTheScenes.ƒS.Speech.hide();
        await BehindTheScenes.ƒS.update(1.5);
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
            BehindTheScenes.ƒS.Speech.clear();
            clickedSwitch += 1;
            if (clickedSwitch == 1) {
                BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.smallsigh, 1.5, false);
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003_b);
            }
            else if (clickedSwitch == 2) {
                BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.smallsigh, 1.5, false);
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003_c);
            }
            else if (clickedSwitch == 3) {
                BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.aua, 1.5, false);
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003_d);
            }
            else {
                BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.bigsigh, 1.5, false);
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003_e);
            }
        }
        await new Promise(resolve => setTimeout(resolve, 200));
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.femalegasp, 1.5, false);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0002);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
        await BehindTheScenes.ƒS.update(0.5);
        setLights("turnOnFlashlight");
        await new Promise(resolve => setTimeout(resolve, waitSeconds * 1000));
        // remove light switch
        let switchImg = document.getElementById("switch");
        switchImg.remove();
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.switch, 1, false);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        setLights("turnOnLights");
        BehindTheScenes.ƒS.Speech.clear();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.scared, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0003);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        // change spooky music to normal theme
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.spookyMusic, 0, 6);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 5, true);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0004);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0004);
        let diaryPage = "<div class='warningPage'>\
        <p>Meine Möchtegern-Detektive,</p>\
        <p>lasst das Scooby-D<bold>oo</bold>-Spiel besser sein.</p>\
        <p>Das is<bold>t</bold> eine Warnung.</p>\
        <p>Die nächste wird nicht so nett ausfallen...</p>\
        <p style='text-align: right;'>- Eu<bold>e</bold>r 'Saboteur'</p>\
        </div>";
        BehindTheScenes.ƒS.Text.setClass("warningPageWrapper blendin");
        let close = { done: "x" };
        let choice;
        do {
            BehindTheScenes.ƒS.Text.print(diaryPage);
            choice = await BehindTheScenes.ƒS.Menu.getInput(close, "pageclose");
        } while (choice != close.done);
        BehindTheScenes.ƒS.Text.close();
        BehindTheScenes.dataForSave.warningNote = true;
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0005);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.scared, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0005);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0006);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0006);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.scared, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0007);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.confident, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0007);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        BehindTheScenes.ƒS.Speech.clear();
        BehindTheScenes.ƒS.Speech.hide();
        await BehindTheScenes.ƒS.update(0.5);
    }
    BehindTheScenes.lightsOut = lightsOut;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function lookForKey() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
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
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.stairs);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.schoolBell, 0.5, false);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        BehindTheScenes.ƒS.Speech.clear();
        BehindTheScenes.ƒS.Speech.hide();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.library);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0004);
        await BehindTheScenes.ƒS.update(0.5);
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
        // 5 tries then give up
        while (loopCount < 5) {
            if (loopCount > 0) {
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0004_b);
                await BehindTheScenes.ƒS.update(0.5);
            }
            let optionsPlacesToSearchElement = await BehindTheScenes.ƒS.Menu.getInput(optionsPlacesToSearch, "dialogoptions");
            BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
            switch (optionsPlacesToSearchElement) {
                case optionsPlacesToSearch.behindDeskRIGHT:
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.items.key, BehindTheScenes.items.key.pose.center, BehindTheScenes.ƒS.positionPercent(50, 50));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0015);
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.dataForSave.foundKey = true;
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.items.key);
                    await BehindTheScenes.ƒS.update(0.5);
                    loopCount = 5;
                    delete optionsPlacesToSearch.behindDeskRIGHT;
                    break;
                case optionsPlacesToSearch.inCorner:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0012);
                    await BehindTheScenes.ƒS.update(0.5);
                    delete optionsPlacesToSearch.inCorner;
                    break;
                case optionsPlacesToSearch.inPlantPot:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0005);
                    await BehindTheScenes.ƒS.update(0.5);
                    delete optionsPlacesToSearch.inPlantPot;
                    break;
                case optionsPlacesToSearch.inTrash:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0011);
                    await BehindTheScenes.ƒS.update(0.5);
                    delete optionsPlacesToSearch.inTrash;
                    break;
                case optionsPlacesToSearch.nextToPc:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0010);
                    await BehindTheScenes.ƒS.update(0.5);
                    delete optionsPlacesToSearch.nextToPc;
                    break;
                case optionsPlacesToSearch.onChair:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0006);
                    await BehindTheScenes.ƒS.update(0.5);
                    delete optionsPlacesToSearch.onChair;
                    break;
                case optionsPlacesToSearch.onShelf:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0007);
                    await BehindTheScenes.ƒS.update(0.5);
                    delete optionsPlacesToSearch.onShelf;
                    break;
                case optionsPlacesToSearch.onWindowsill:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0014);
                    await BehindTheScenes.ƒS.update(0.5);
                    delete optionsPlacesToSearch.onWindowsill;
                    break;
                case optionsPlacesToSearch.sittingArea:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0008);
                    await BehindTheScenes.ƒS.update(0.5);
                    delete optionsPlacesToSearch.sittingArea;
                    break;
                case optionsPlacesToSearch.underTable:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0013);
                    await BehindTheScenes.ƒS.update(0.5);
                    delete optionsPlacesToSearch.underTable;
                    break;
            }
            loopCount++;
        }
        BehindTheScenes.dataForSave.lookedForKey = true;
        switch (BehindTheScenes.dataForSave.foundKey) {
            case true:
                BehindTheScenes.updateNotes();
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0017);
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                await BehindTheScenes.ƒS.update(0.5);
                BehindTheScenes.ƒS.Speech.clear();
                BehindTheScenes.ƒS.Speech.hide();
                await BehindTheScenes.ƒS.update(0.5);
                return "luciaGivesHint";
                break;
            case false:
                BehindTheScenes.updateNotes();
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.angry, BehindTheScenes.ƒS.positionPercent(25, 97));
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0016);
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
                await BehindTheScenes.ƒS.update(0.5);
                await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                await BehindTheScenes.ƒS.update(0.5);
                BehindTheScenes.ƒS.Speech.clear();
                BehindTheScenes.ƒS.Speech.hide();
                await BehindTheScenes.ƒS.update(0.5);
                return "kiraGivesHint";
                break;
        }
    }
    BehindTheScenes.lookForKey = lookForKey;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function luciaGivesHint() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
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
                T0003: "Ich habe vorhin dein Gespräch mit " + BehindTheScenes.dataForSave.nameGirl + " mitbekommen. Ich möchte dich warnen, ihr nicht blind zu vertrauen.",
                T0004: "Darum ging es mir nicht. Es ist nur so... Jeder weiß, dass sie in Atlas verknallt ist. Wer weiß, ob sie ihn nur decken wollte?",
                T0005: "Das war schon alles, was ich dir sagen wollte. Ich muss jetzt los... Bis bald!"
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Du läufst auf der Suche nach Lucia durch den Flur und triffst sie schließlich an der Treppe.",
                T0001: "Lucia läuft die Treppe hinauf.",
                T0002: "Du begibst dich auf die Suche nach Solas, um mehr von ihm zu erfahren."
            }
        };
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.stairs);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showLuciaMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0001);
        BehindTheScenes.hideLuciaMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showLuciaMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0002);
        let optionsLuciaInfo = {
            good: "Nur zu, jede Information ist hilfreich.",
            bad: "Meinetwegen, aber ganz aus dem Schneider bist du nicht..."
        };
        let optionsLuciaInfoElement = await BehindTheScenes.ƒS.Menu.getInput(optionsLuciaInfo, "dialogoptions");
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
        switch (optionsLuciaInfoElement) {
            case optionsLuciaInfo.good:
                BehindTheScenes.dataForSave.luciaScore += 4;
                break;
            case optionsLuciaInfo.bad:
                BehindTheScenes.dataForSave.luciaScore -= 4;
                break;
        }
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0003);
        BehindTheScenes.hideLuciaMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0004);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showLuciaMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0004);
        BehindTheScenes.dataForSave.aboutAlibi = true;
        BehindTheScenes.updateNotes();
        BehindTheScenes.hideLuciaMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0005);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showLuciaMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0005);
        BehindTheScenes.hideLuciaMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0006);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        await BehindTheScenes.ƒS.update(0.5);
        return "confrontSolasAfterLucia";
    }
    BehindTheScenes.luciaGivesHint = luciaGivesHint;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function motive() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
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
                T0005_bad: "Dass jemand das Stück sabotieren will, kann ich nicht nachvollziehen, aber es inspiriert mich auch. Was steckt dahinter, wenn jemand zu solchen Mitteln greift? Ich denke es ist Verzweiflung.",
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
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.classroomDay);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        let loopCount = 0;
        let loopLength = Object.keys(startTalk).length;
        while (loopCount < loopLength) {
            if (loopCount > 0) {
                await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
            }
            let startTalkElement = await BehindTheScenes.ƒS.Menu.getInput(startTalk, "dialogoptions");
            BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
            switch (startTalkElement) {
                // CASE Talk To Atlas
                case startTalk.withAtlas:
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0003);
                    await BehindTheScenes.ƒS.update(0.5);
                    await new Promise(resolve => setTimeout(resolve, 500));
                    BehindTheScenes.simulateCameraFlash();
                    BehindTheScenes.dataForSave.atlasPortrait = true;
                    BehindTheScenes.updateNotes();
                    await BehindTheScenes.ƒS.update(0.2);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.angry, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(1);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0001);
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.hideAtlasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToAtlas.Protagonist.T0001);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0002);
                    BehindTheScenes.hideAtlasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToAtlas.Protagonist.T0003);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0003);
                    let optionsAtlasBusyElement = await BehindTheScenes.ƒS.Menu.getInput(optionsAtlasBusy, "dialogoptions");
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
                    switch (optionsAtlasBusyElement) {
                        case optionsAtlasBusy.good:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.playful, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.showAtlasMeter();
                            BehindTheScenes.dataForSave.atlasScore += 10;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0004_good);
                            await BehindTheScenes.ƒS.update(0.5);
                            break;
                        case optionsAtlasBusy.bad:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.angry, BehindTheScenes.ƒS.positionPercent(75, 97));
                            document.getElementsByName("atlasScore").forEach(meterChildren => meterChildren.hidden = false);
                            BehindTheScenes.dataForSave.atlasScore -= 10;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0004_bad);
                            await BehindTheScenes.ƒS.update(0.5);
                    }
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0004_2);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0004_3);
                    let optionsAtlasUnlessElement = await BehindTheScenes.ƒS.Menu.getInput(optionsAtlasUnless, "dialogoptions");
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
                    await BehindTheScenes.ƒS.update(0.5);
                    switch (optionsAtlasUnlessElement) {
                        case optionsAtlasUnless.bad:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.playful, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.showAtlasMeter();
                            BehindTheScenes.dataForSave.atlasScore -= 10;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0005_bad);
                            await BehindTheScenes.ƒS.update(0.5);
                            break;
                        case optionsAtlasUnless.good:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.playful, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.showAtlasMeter();
                            BehindTheScenes.dataForSave.atlasScore += 10;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0005_good);
                            await BehindTheScenes.ƒS.update(0.5);
                    }
                    BehindTheScenes.hideAtlasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.angry, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToAtlas.Protagonist.T0006);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0006);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.happy, BehindTheScenes.ƒS.positionPercent(75, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0006_2);
                    BehindTheScenes.hideAtlasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToAtlas.Protagonist.T0007);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0007_1);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0007_2);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0007_3);
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.dataForSave.solasMotive = true;
                    BehindTheScenes.updateNotes();
                    let optionsAtlasGoodbyeElement = await BehindTheScenes.ƒS.Menu.getInput(optionsAtlasGoodbye, "dialogoptions");
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
                    switch (optionsAtlasGoodbyeElement) {
                        case optionsAtlasGoodbye.good:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.playful, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.showAtlasMeter();
                            BehindTheScenes.dataForSave.atlasScore += 5;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0008_good);
                            await BehindTheScenes.ƒS.update(0.5);
                            break;
                        case optionsAtlasGoodbye.bad:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.angry, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.showAtlasMeter();
                            BehindTheScenes.dataForSave.atlasScore -= 5;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0008_bad);
                            await BehindTheScenes.ƒS.update(0.5);
                    }
                    BehindTheScenes.hideAtlasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.update(0.5);
                    delete startTalk.withAtlas;
                    break;
                // CASE Talk To Solas
                case startTalk.withSolas:
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showSolasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0003);
                    await BehindTheScenes.ƒS.update(0.5);
                    await new Promise(resolve => setTimeout(resolve, 500));
                    BehindTheScenes.simulateCameraFlash();
                    BehindTheScenes.dataForSave.solasPortrait = true;
                    BehindTheScenes.updateNotes();
                    await BehindTheScenes.ƒS.update(0.2);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.confused, BehindTheScenes.ƒS.positionPercent(75, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    await BehindTheScenes.ƒS.update(1);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0001);
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.hideSolasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToSolas.Protagonist.T0001);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showSolasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0002);
                    BehindTheScenes.hideSolasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToSolas.Protagonist.T0002);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showSolasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0003);
                    BehindTheScenes.hideSolasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToSolas.Protagonist.T0003);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showSolasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0004);
                    let optionsSolasHonestElement = await BehindTheScenes.ƒS.Menu.getInput(optionsSolasHonest, "dialogoptions");
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
                    await BehindTheScenes.ƒS.update(0.5);
                    switch (optionsSolasHonestElement) {
                        case optionsSolasHonest.bad:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.unhappy, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.dataForSave.solasScore -= 10;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0005_bad);
                            await BehindTheScenes.ƒS.update(0.5);
                            break;
                        case optionsSolasHonest.good:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.thoughtful, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.dataForSave.solasScore += 10;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0005_good);
                            await BehindTheScenes.ƒS.update(0.5);
                            break;
                    }
                    BehindTheScenes.hideSolasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToSolas.Protagonist.T0005);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showSolasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0006);
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
                    BehindTheScenes.ƒS.Text.setClass("smartphone blendin");
                    let close = { done: "x" };
                    let choice;
                    do {
                        BehindTheScenes.ƒS.Text.print(diaryPage);
                        choice = await BehindTheScenes.ƒS.Menu.getInput(close, "pageclose");
                    } while (choice != close.done);
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
                    BehindTheScenes.ƒS.Text.close();
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.dataForSave.luciaMotive = true;
                    BehindTheScenes.updateNotes();
                    BehindTheScenes.hideSolasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToSolas.Protagonist.T0006);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showSolasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0007);
                    let optionsSolasSuspectElement = await BehindTheScenes.ƒS.Menu.getInput(optionsSolasSuspect, "dialogoptions");
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
                    await BehindTheScenes.ƒS.update(0.5);
                    switch (optionsSolasSuspectElement) {
                        case optionsSolasSuspect.bad:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.upset, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.dataForSave.solasScore -= 20;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0008_bad);
                            await BehindTheScenes.ƒS.update(0.5);
                            break;
                        case optionsSolasSuspect.good:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.happy, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.dataForSave.solasScore += 10;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0008_good);
                            await BehindTheScenes.ƒS.update(0.5);
                            break;
                    }
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showSolasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0009);
                    let optionsSolasGoodbyeElement = await BehindTheScenes.ƒS.Menu.getInput(optionsSolasGoodbye, "dialogoptions");
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
                    await BehindTheScenes.ƒS.update(0.5);
                    switch (optionsSolasGoodbyeElement) {
                        case optionsSolasGoodbye.bad:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.sad, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.dataForSave.solasScore -= 5;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0010_bad);
                            await BehindTheScenes.ƒS.update(0.5);
                            break;
                        case optionsSolasGoodbye.good:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.happy, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.dataForSave.solasScore += 5;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0010_good);
                            await BehindTheScenes.ƒS.update(0.5);
                            break;
                    }
                    BehindTheScenes.hideSolasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
                    await BehindTheScenes.ƒS.update(0.5);
                    delete startTalk.withSolas;
                    break;
                // CASE Talk To Lucia
                case startTalk.withLucia:
                    // go to library with her
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showLuciaMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0003);
                    await BehindTheScenes.ƒS.update(0.5);
                    await new Promise(resolve => setTimeout(resolve, 500));
                    BehindTheScenes.simulateCameraFlash();
                    BehindTheScenes.dataForSave.luciaPortrait = true;
                    BehindTheScenes.updateNotes();
                    await BehindTheScenes.ƒS.update(0.2);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showLuciaMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    await BehindTheScenes.ƒS.update(1);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0001);
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.hideLuciaMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToLucia.Protagonist.T0001);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showLuciaMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0002);
                    BehindTheScenes.hideLuciaMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToLucia.Protagonist.T0002);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0004);
                    await BehindTheScenes.ƒS.update(0.5);
                    // LIBRARY
                    await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.library);
                    await BehindTheScenes.ƒS.update(BehindTheScenes.transition.waves.duration, BehindTheScenes.transition.waves.alpha, BehindTheScenes.transition.waves.edge);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showLuciaMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0003);
                    await BehindTheScenes.ƒS.update(0.5);
                    let optionsLuciaBooksElement = await BehindTheScenes.ƒS.Menu.getInput(optionsLuciaBooks, "dialogoptions");
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
                    await BehindTheScenes.ƒS.update(0.5);
                    switch (optionsLuciaBooksElement) {
                        case optionsLuciaBooks.bad:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.sad, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.dataForSave.luciaScore -= 30;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0004_bad);
                            await BehindTheScenes.ƒS.update(0.5);
                            break;
                        case optionsLuciaBooks.good:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.smiling, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.dataForSave.luciaScore += 10;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0004_good);
                            await BehindTheScenes.ƒS.update(0.5);
                    }
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.ƒS.Speech.clear();
                    BehindTheScenes.hideLuciaMeter();
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToLucia.Protagonist.T0004);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showLuciaMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0005);
                    BehindTheScenes.hideLuciaMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToLucia.Protagonist.T0005);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showLuciaMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0006);
                    BehindTheScenes.hideLuciaMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToLucia.Protagonist.T0006);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showLuciaMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0007);
                    BehindTheScenes.dataForSave.luciaOpportunity = true;
                    BehindTheScenes.updateNotes();
                    BehindTheScenes.hideLuciaMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToLucia.Protagonist.T0007);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showLuciaMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0008);
                    BehindTheScenes.hideLuciaMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToLucia.Protagonist.T0008);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showLuciaMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0009);
                    let optionsLuciaDiaryElement = await BehindTheScenes.ƒS.Menu.getInput(optionsLuciaDiary, "dialogoptions");
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
                    await BehindTheScenes.ƒS.update(0.5);
                    switch (optionsLuciaDiaryElement) {
                        case optionsLuciaDiary.bad:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.dataForSave.luciaScore -= 5;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0010);
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                            BehindTheScenes.dataForSave.atlasMotive = true;
                            BehindTheScenes.dataForSave.atlasNoDiary = true;
                            BehindTheScenes.updateNotes();
                            break;
                        case optionsLuciaDiary.good:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.dataForSave.luciaScore += 5;
                            let diaryPage = "<div class='diaryPage'>\
                            <p>Mein Tagebuch,</p>\
                            <p>ich muss zugeben, dass ich frustriert bin. Sollen meine Bemühungen umsonst gewesen sein?</p>\
                            <p>Jeder mit Augen im Kopf muss doch erkennen, dass ich mit Abstand der beste Schüler an dieser Schule bin... Trotzdem droht der Titel des Jahrgangsbesten mir nun abhanden zu kommen.</p>\
                            <p>Ausgerechnet die stellvertretende Schulsprecherin macht mir Konkurrenz. Dabei erhalte ich die Auszeichnung jedes Schuljahr mit Leichtigkeit, also wie konnte es dazu kommen? Habe ich mich mit dem Amt des Schulsprechers und den vielen AGs etwa übernommen?</p>\
                            <p>Ich wünschte, meine Stellvertreterin stünde unter demselben Druck wie ich. Dann würden faire Bedingungen herrschen.</p>\
                            <p style='text-align: right'>Gezeichnet, Atlas.</p>\
                            </div>";
                            BehindTheScenes.ƒS.Text.setClass("diaryPageWrapper blendin");
                            let close = { done: "x" };
                            let choice;
                            do {
                                BehindTheScenes.ƒS.Text.print(diaryPage);
                                choice = await BehindTheScenes.ƒS.Menu.getInput(close, "pageclose");
                            } while (choice != close.done);
                            BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
                            BehindTheScenes.ƒS.Text.close();
                            await BehindTheScenes.ƒS.update(0.5);
                            BehindTheScenes.dataForSave.atlasMotive = true;
                            BehindTheScenes.dataForSave.atlasDiary = true;
                            BehindTheScenes.updateNotes();
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                            await BehindTheScenes.ƒS.update(0.5);
                            BehindTheScenes.hideLuciaMeter();
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToLucia.Protagonist.T00010);
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                            await BehindTheScenes.ƒS.update(0.5);
                    }
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showLuciaMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0011);
                    await BehindTheScenes.ƒS.update(0.5);
                    let optionsLuciaGoodbyeElement = await BehindTheScenes.ƒS.Menu.getInput(optionsLuciaGoodbye, "dialogoptions");
                    BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
                    await BehindTheScenes.ƒS.update(0.5);
                    switch (optionsLuciaGoodbyeElement) {
                        case optionsLuciaGoodbye.good:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.smiling, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.dataForSave.luciaScore += 5;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0012_good);
                            await BehindTheScenes.ƒS.update(0.5);
                            BehindTheScenes.hideLuciaMeter();
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                            await BehindTheScenes.ƒS.update(0.5);
                            break;
                        case optionsLuciaGoodbye.bad:
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.sad, BehindTheScenes.ƒS.positionPercent(75, 97));
                            BehindTheScenes.dataForSave.luciaScore -= 5;
                            await BehindTheScenes.ƒS.update(0.5);
                            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0012_bad);
                            await BehindTheScenes.ƒS.update(0.5);
                            BehindTheScenes.hideLuciaMeter();
                            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
                            await BehindTheScenes.ƒS.update(0.5);
                    }
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0005);
                    // CLUB ROOM
                    await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.classroomDay);
                    await BehindTheScenes.ƒS.update(BehindTheScenes.transition.waves.duration, BehindTheScenes.transition.waves.alpha, BehindTheScenes.transition.waves.edge);
                    delete startTalk.withLucia;
                    break;
            }
            loopCount++;
        }
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0, 3, true);
    }
    BehindTheScenes.motive = motive;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function roofRight() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
        let isFavorite = BehindTheScenes.findFavorite();
        // drei fälle für die erklärung:
        // diary true und key true
        // diary false und key false
        // diary false und key true ODER diary true und key false
        let conclusionDiaryKey = {
            Protagonist: {
                T0001: "Lucia erwies sich als vertrauenswürdig. Sie gab mir den Tipp, dass dein Alibi zum Himmel stinkt.",
                T0002: "Außerdem hatte der Täter uns eine Warnung zukommen lassen. Diese Warnung verglich ich mit einer Probe deiner Handschrift... Auf den ersten Blick ähnelten sie sich nicht, aber ein paar Buchstaben sehen identisch aus.",
                T0003: "Ich glaube, du hast versucht, eine andere Handschrift zu imitieren, um den Verdacht von dir abzulenken.",
                T0004: "Und zu guter Letzt... Ich bin ein guter Menschenkenner. Solas wirkte aufrichtig, als er sein Mitgefühl mit der Kostümschneiderin äußerte.",
            }
        };
        // conclusion DiaryNoKey
        let conclusionNoDiaryNoKey = {
            Protagonist: {
                T0001: "Der Täter hatte uns eine Warnung zukommen lassen. Es sah erst so aus, als gehöre die darauf Handschrift zu Solas...",
                T0002: "Doch Solas brachte mich auf die Idee, dass jemand seine Handschrift imitiert haben könnte. Deswegen sah ich mir die Warnung noch einmal an... Dabei fiel mir auf, dass einige Buchstaben aus der Reihe tanzten. So war mir klar, dass jemand Solas die Sache anhängen wollte.",
                T0003: "Aber wer könnte so meisterhaft eine andere Handschrift fälschen? Du, natürlich. Seit Jahren bist du Mitglied in der Kalligraphie AG. Lucia, der Nerd, hat dagegen wahrscheinlich noch nie einen Stift benutzt."
            }
        };
        let conclusionNoDiaryKey = {
            Protagonist: {
                T0001: "Lucia erwies sich als vertrauenswürdig. Sie gab mir den Tipp, dass dein Alibi zum Himmel stinkt.",
                T0002: "Außerdem hatte der Täter uns eine Warnung zukommen lassen. Dabei fiel mir auf, dass einige Buchstaben aus der Reihe tanzten...",
                T0003: "Jemand hatte also versucht, die Schrift eines anderen zu imitieren. Doch wer hätte die Fähigkeiten dazu? Du, natürlich. Seit Jahren bist du Mitglied in der Kalligraphie AG.",
                T0004: "Und zu guter Letzt... Ich bin ich ein guter Menschenkenner. Solas wirkte aufrichtig, als er sein Mitgefühl mit der Kostümschneiderin äußerte."
            }
        };
        let protagonistText = {
            Protagonist: {
                T0001: "Ich habe dich hergerufen, um dich zu stellen. Ich weiß, dass du der Saboteur bist... Du bist überführt, Atlas.",
                T0002: "Lass mich dir meine Schlussfolgerungen darlegen...",
                T0003: "Reicht dir das?",
                T0004: "Wenigstens gibst du es zu."
            }
        };
        let atlasText = {
            Atlas: {
                T0001: "Überführt, ja? Wieso glaubst du, dass ich der Täter bin?",
                T0002: "Schon gut, ich gebe es zu. Du hast mich in meinem eigenen Spiel besiegt.",
                T0003: "Ich habe die Sabotage inszeniert, um dir ein wenig Zeit zu stehlen. Jede freie Minute steckt deine Nase in einem Buch und ich selbst habe kaum Zeit, zu lernen... Ich wollte nicht, dass du mir den Titel des Jahrgangsbesten abnimmst.",
                T0004: "...",
                T0005: "Sieh an... Die Sonne geht unter.",
                T0006: "Weißt du, Solas sagte etwas darüber, dass hinter der Sabotage etwas Tieferes steckt... und es stimmt. Ich glaube, ich hatte Angst. Wenn ich nicht der Beste sein kann... wer bin ich dann überhaupt?",
                T0007: "Ich sehe jetzt ein, dass das dumm war."
            }
        };
        let narratorTextAtlasFavorit = {
            Narrator: {
                T0000: "Du hast also den richtigen Täter gefunden... Gute Arbeit!",
                T0000_2: "Du scheinst dich allerdings gut mit Atlas zu verstehen. Die Entscheidung liegt nun bei dir...",
                T0001: "Du schreibst Kira, dass du den Saboteur nicht entlarven konntest und sie sagt die Premiere ab.",
                T0002: "Atlas und du bleiben noch eine Weile auf dem Dach. Er fordert dich heraus, auch nächstes Schuljahr dein Bestes zu geben.",
                T0003: "Ende."
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Du wartest auf dem Schuldach auf Atlas. Nach ein paar Minuten erscheint er. Sein Gesicht ist audruckslos, aber das muss eine Farce sein...",
                T0001: "Du hast also den richtigen Täter gefunden... Gute Arbeit!"
            }
        };
        let protagonistLetGo = {
            Protagonist: {
                T0000: "...",
                T0001: "Ich werde dich nicht an Kira ausliefern.",
                T0002: "Glaub es oder nicht, aber... Ich mag dich. Ich glaube, wenn wir uns anders getroffen hätten, dann wären wir gute Freunde geworden.",
                T0003: "Du bist ja auch ein Idiot.",
                T0004: "Naja... Ich denke, Kira wird die Premiere absagen. Zumindest vorerst. Aber da die Sabotage nun endet, wird sich die Lage beruhigen. Spätestens in ein paar Wochen steht ihr alle auf der Bühne.",
                T0005: "Soll das sowas wie eine Einladung sein?",
                T0006: "Dann werde ich da sein."
            }
        };
        let AtlasLetGo = {
            Atlas: {
                T0001: "Nicht? Aber... Wieso?",
                T0002: "Freunde...?",
                T0003: "Ich danke dir.",
                T0004: "Ich dachte die ganze Zeit, ich sei der beste Schüler an dieser Schule. Ich habe dich sogar sabotiert, um das zu beweisen. Stattdessen hast du mir etwas beigebracht... Du bist nicht nur klüger als ich, sondern auch gütiger.",
                T0005: "Ich komme mir vor wie ein riesen Idiot.",
                T0006: "Was wird nun geschehen?",
                T0007: "Und wirst du dann im Publikum sitzen?",
                T0008: "Ja."
            }
        };
        let protagonistDontLetGo = {
            Protagonist: {
                T0000: "Ich mag Atlas, aber ich kann ihn nicht davonkommen lassen. Kira vertraut auf mich."
            }
        };
        let narratorTextDontLetGo = {
            Narrator: {
                T0000: "Du schreibst Kira, dass du den Täter entlarvt hast und erklärst ihr alles.",
                T0001: "Sie ist enttäuscht von Atlas und setzt seine Zweitbesetzung ein, die Hauptrolle zu übernehmen.",
                T0002: "Ob Atlas im Theaterclub bleiben darf, muss sie sich noch überlegen..."
            }
        };
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.roof);
        BehindTheScenes.addFallingLeaves();
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.birds, 0.6, true);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showAtlasMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0001);
        BehindTheScenes.hideAtlasMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.angry, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
        await BehindTheScenes.ƒS.update(0.5);
        if (BehindTheScenes.dataForSave.atlasDiary == true && BehindTheScenes.dataForSave.foundKey == true) {
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, conclusionDiaryKey.Protagonist.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, conclusionDiaryKey.Protagonist.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, conclusionDiaryKey.Protagonist.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, conclusionDiaryKey.Protagonist.T0004);
            await BehindTheScenes.ƒS.update(0.5);
        }
        else if (BehindTheScenes.dataForSave.atlasDiary == false && BehindTheScenes.dataForSave.foundKey == false || BehindTheScenes.dataForSave.atlasDiary == true && BehindTheScenes.dataForSave.foundKey == false) {
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, conclusionNoDiaryNoKey.Protagonist.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, conclusionNoDiaryNoKey.Protagonist.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, conclusionNoDiaryNoKey.Protagonist.T0003);
            await BehindTheScenes.ƒS.update(0.5);
        }
        else {
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, conclusionNoDiaryKey.Protagonist.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, conclusionNoDiaryKey.Protagonist.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, conclusionNoDiaryKey.Protagonist.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, conclusionNoDiaryKey.Protagonist.T0004);
            await BehindTheScenes.ƒS.update(0.5);
        }
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.confident, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
        BehindTheScenes.showAtlasMeter();
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0002);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0003);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0004);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.unhappy, BehindTheScenes.ƒS.positionPercent(75, 97));
        await BehindTheScenes.ƒS.update(0.5);
        // TWILIGHT SET
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.roofTwilight);
        await BehindTheScenes.ƒS.update(2.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0005);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0006);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0007);
        await BehindTheScenes.ƒS.update(0.5);
        BehindTheScenes.hideAtlasMeter();
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0004);
        await BehindTheScenes.ƒS.update(0.5);
        if (isFavorite == "Atlas") {
            await BehindTheScenes.ƒS.Speech.tell(null, narratorTextAtlasFavorit.Narrator.T0000);
            await BehindTheScenes.ƒS.Speech.tell(null, narratorTextAtlasFavorit.Narrator.T0000_2);
            let optionsLoveOrLaw = {
                letGo: "Atlas laufen lassen.",
                dontLetGo: "Atlas an Kira ausliefern."
            };
            let optionsLoveOrLawElement = await BehindTheScenes.ƒS.Menu.getInput(optionsLoveOrLaw, "dialogoptions");
            BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
            switch (optionsLoveOrLawElement) {
                // you don't tell kira who the culprit is
                case optionsLoveOrLaw.letGo:
                    BehindTheScenes.dataForSave.letCulpritGo = true;
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistLetGo.Protagonist.T0000);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistLetGo.Protagonist.T0001);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, AtlasLetGo.Atlas.T0001);
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.hideAtlasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistLetGo.Protagonist.T0002);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, AtlasLetGo.Atlas.T0002);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.smiling, BehindTheScenes.ƒS.positionPercent(75, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, AtlasLetGo.Atlas.T0003);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, AtlasLetGo.Atlas.T0004);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, AtlasLetGo.Atlas.T0005);
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.hideAtlasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistLetGo.Protagonist.T0003);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, AtlasLetGo.Atlas.T0006);
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.hideAtlasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistLetGo.Protagonist.T0004);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, AtlasLetGo.Atlas.T0007);
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.hideAtlasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistLetGo.Protagonist.T0005);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.smiling, BehindTheScenes.ƒS.positionPercent(75, 97));
                    BehindTheScenes.showAtlasMeter();
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, AtlasLetGo.Atlas.T0008);
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.hideAtlasMeter();
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistLetGo.Protagonist.T0006);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    // change normal theme to ending music
                    BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0, 4);
                    BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.ending, 0.7, 2, true);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorTextAtlasFavorit.Narrator.T0001);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorTextAtlasFavorit.Narrator.T0002);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorTextAtlasFavorit.Narrator.T0003);
                    await BehindTheScenes.ƒS.update(0.5);
                    BehindTheScenes.ƒS.Speech.clear();
                    BehindTheScenes.ƒS.Speech.hide();
                    await BehindTheScenes.ƒS.update();
                    BehindTheScenes.removeFallingLeaves();
                    return "yourTitle";
                    break;
                // you tell kira who the culprit is
                case optionsLoveOrLaw.dontLetGo:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistDontLetGo.Protagonist.T0000);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorTextDontLetGo.Narrator.T0000);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorTextDontLetGo.Narrator.T0001);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorTextDontLetGo.Narrator.T0002);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.clear();
                    await BehindTheScenes.ƒS.Speech.hide();
                    await BehindTheScenes.ƒS.update(0);
                    BehindTheScenes.removeFallingLeaves();
                    return "roofRightEpilogue";
                    break;
            }
            // you tell kira who the culprit is
        }
        else {
            await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(null, narratorTextDontLetGo.Narrator.T0000);
            await BehindTheScenes.ƒS.Speech.tell(null, narratorTextDontLetGo.Narrator.T0001);
            await BehindTheScenes.ƒS.Speech.tell(null, narratorTextDontLetGo.Narrator.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.clear();
            await BehindTheScenes.ƒS.Speech.hide();
            await BehindTheScenes.ƒS.update();
            BehindTheScenes.removeFallingLeaves();
            return "roofRightEpilogue";
        }
    }
    BehindTheScenes.roofRight = roofRight;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function roofRightEpilogue() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.ending, 0.7, 0.1, true);
        BehindTheScenes.updateNotes();
        let isFavorite = BehindTheScenes.findFavorite();
        let protagonistText = {
            Protagonist: {
                T0001: "Wir haben wirklich schönes Wetter heute. Ein toller Tag zum Faulenzen.",
                T0002: "Nanu? Ach, du bist es, Kira.",
                T0003: "Nanu? Ach, du bist es, Solas.",
                T0004: "Nanu? Ach, du bist es, Lucia.",
                T0005: "Ich habe gerne geholfen."
            }
        };
        let protagonistToKiraText = {
            Protagonist: {
                T0001: "Mich einladen?",
                T0002: "Vielen Dank, Kira. Ich werde kommen."
            }
        };
        let protagonistToFavText = {
            Protagonist: {
                T0001: "Nicht? Was wolltest du dann?",
                T0002: "Vielen Dank, " + isFavorite + ". Ich werde kommen.",
            }
        };
        let narratorText = {
            Narrator: {
                T0000_a: "Zum Epilog...",
                T0000: "Am nächsten Tag verbringst du die Mittagspause wie immer draußen auf dem Hof.",
                T0001: "Hey, du.",
                T0002: "Kira winkt dir zum Abschied und du spürst ein glückliches Lächeln auf deinem Gesicht.",
                T0002_b: isFavorite + " winkt dir zum Abschied und du spürst ein glückliches Lächeln auf deinem Gesicht.",
                T000end: "Ende."
            }
        };
        let kiraText = {
            Kira: {
                T0001: "Ich wollte mich noch einmal bei dir bedanken. Heute Abend findet die Premiere statt. Alle sind schon ganz aufgeregt.",
                T0001_b: "Verzeih' mir, wenn ich mich irre, aber ich hatte den Eindruck, du hättest Atlas gemocht. Und er hat dich auch gemocht, das weiß ich. Du bist vermutlich genauso enttäuscht von ihm wie ich. Wie dem auch sei...",
                T0002: "Wenn du noch nichts vorhast... Naja... Ich würde dich gerne einladen!",
                T0003: "Ja, komm bitte zur Premiere. Hier ist eine Eintrittskarte für die erste Reihe. Der Platz ist direkt neben meinem. Es würde mich sehr freuen, wenn du da wärst.",
                T0004: "Toll! Dann sehe ich dich dort. Bis heute Abend!"
            }
        };
        let favText = {
            isFavorite: {
                T0000: "Ja, ich bins.",
                T0001: "Heute Abend findet die Premiere statt und alle sind schon ganz aufgeregt. Das haben wir nur dir zu verdanken.",
                T0002: "Das ist aber eigentlich nicht der Grund, warum ich mit dir reden wollte...",
                T0003: "Ich würde dich gerne zur Premiere einladen. Hier ist eine Eintrittskarte für die erste Reihe... Es würde mich sehr freuen, wenn du da wärst.",
                T0004: "Wirklich? Toll! Dann sehe ich dich dort. Bis heute Abend!"
            }
        };
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.chapterCovers.chapter);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        let pages = "<h1>Epilog</h1>";
        let close = { done: "Weiter" };
        let choice;
        BehindTheScenes.ƒS.Text.setClass("coverTitle");
        do {
            BehindTheScenes.ƒS.Text.print(pages);
            choice = await BehindTheScenes.ƒS.Menu.getInput(close, "pageclose");
        } while (choice != close.done);
        BehindTheScenes.ƒS.Text.close();
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.pageflip, 0.5, false);
        //  SCENE
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.schoolOutsideDay);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        BehindTheScenes.addFallingLeaves();
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await BehindTheScenes.ƒS.update(0.5);
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.birds, 0.6, true);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happy, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell("???", narratorText.Narrator.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        if (isFavorite == "Atlas") {
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.happy, BehindTheScenes.ƒS.positionPercent(75, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0005);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0001_b);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToKiraText.Protagonist.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            // ITEM
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.items.ticket, BehindTheScenes.items.ticket.pose.center, BehindTheScenes.ƒS.positionPercent(50, 50));
            await BehindTheScenes.ƒS.update(0.5);
            await new Promise(resolve => setTimeout(resolve, 2000));
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.items.ticket);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToKiraText.Protagonist.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.kira, BehindTheScenes.characters.kira.pose.happy, BehindTheScenes.ƒS.positionPercent(75, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.kira, kiraText.Kira.T0004);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.kira);
            await BehindTheScenes.ƒS.update(0.5);
        }
        else if (isFavorite == "Solas") {
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.happy, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(isFavorite, favText.isFavorite.T0000);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(isFavorite, favText.isFavorite.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            // hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0005);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(isFavorite, favText.isFavorite.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            // hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToFavText.Protagonist.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(isFavorite, favText.isFavorite.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            // ITEM
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.items.ticket, BehindTheScenes.items.ticket.pose.center, BehindTheScenes.ƒS.positionPercent(50, 50));
            await BehindTheScenes.ƒS.update(0.5);
            await new Promise(resolve => setTimeout(resolve, 2000));
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.items.ticket);
            await BehindTheScenes.ƒS.update(0.5);
            // hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToFavText.Protagonist.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(isFavorite, favText.isFavorite.T0004);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002_b);
            // hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
            await BehindTheScenes.ƒS.update(0.5);
        }
        else {
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0004);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showLuciaMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(isFavorite, favText.isFavorite.T0000);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(isFavorite, favText.isFavorite.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            // hideLuciaMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0005);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showLuciaMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(isFavorite, favText.isFavorite.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            // hideLuciaMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToFavText.Protagonist.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showLuciaMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(isFavorite, favText.isFavorite.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            // ITEM
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.items.ticket, BehindTheScenes.items.ticket.pose.center, BehindTheScenes.ƒS.positionPercent(50, 50));
            await BehindTheScenes.ƒS.update(0.5);
            await new Promise(resolve => setTimeout(resolve, 2000));
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.items.ticket);
            await BehindTheScenes.ƒS.update(0.5);
            // hideLuciaMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToFavText.Protagonist.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showLuciaMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(isFavorite, favText.isFavorite.T0004);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002_b);
            // hideLuciaMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.update(0.5);
        }
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T000end);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.clear();
        // await ƒS.Speech.hide();
        await BehindTheScenes.ƒS.update(0.5);
        BehindTheScenes.removeFallingLeaves();
        return "yourTitle";
    }
    BehindTheScenes.roofRightEpilogue = roofRightEpilogue;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function roofWrong() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
        let chosenCulprit = "";
        // player chose lucia or solas?
        if (BehindTheScenes.dataForSave.choseLucia) {
            chosenCulprit = "Lucia";
        }
        else {
            chosenCulprit = "Solas";
        }
        let protagonistText = {
            Protagonist: {
                T0001: "Ich habe dich hergerufen, um dich zu stellen. Ich weiß, dass du der Saboteur bist. Du bist überführt, " + chosenCulprit + ".",
                T0002: "Du... bist es nicht?",
                T0003: "Ich dachte... Die Hinweise...",
                T0004: "Vielleicht habe ich wirklich etwas übersehen. Ich hatte so ein komisches Gefühl, als entginge mir da ein Detail.",
                T0005: "Oh nein... Die Sonne geht bereits unter. Der Schultag ist so gut wie zu Ende.",
                T0006: "Der wahre Täter ist noch da draußen. Das bedeutet wohl, dass Kira die Premiere absagen wird. Ich habe versagt...",
                T0007: "Aber ich habe Kira enttäuscht. Ich habe ihr versprochen, den Saboteur zu finden. Jetzt ist es zu spät, der Tag ist um.",
                T0008: "Danke, " + chosenCulprit + "...",
                T0009: "Trotzdem... Ich komme mir vor wie ein riesen Idiot."
            }
        };
        let solasText = {
            Solas: {
                T0001: "Überführt sagst du?",
                T0002: "...",
                T0003: "Tut mir leid, aber ich bin nicht der Täter. Ich liebe den Theaterclub. Das ist die Wahrheit.",
                T0004: "Ich werfe dir nicht vor, dass du mich verdächtigst. Aber du irrst dich.",
                T0005: "Sei nicht so hart zu dir selbst. Die Welt ist nicht untergegangen, niemand wurde verletzt.",
                T0006: "Ich kenne Kira. Sie hat ein gutes Herz. Deswegen wird sie die Premiere absagen, um weiteren Schaden zu verhindern. Und sie wird dir nicht böse sein."
            }
        };
        let luciaText = {
            Lucia: {
                T0001: "Ü-Überführt sagst du?",
                T0002: "...",
                T0003: "Tut mir leid, aber ich bin nicht die Täterin. Ich liebe den Theaterclub. Das ist die Wahrheit.",
                T0004: "Ich verstehe ja, dass du mich verdächtigst. Aber du irrst dich.",
                T0005: "Sei bitte nicht so hart zu dir... I-Ich bin sicher, du hast dein Bestes gegeben.",
                T0006: "Kira wird das verstehen. Sie wird dir sicher nicht böse sein."
            }
        };
        let narratorText = {
            Narrator: {
                T0000_solas: "Du wartest auf dem Schuldach auf Solas. Nach ein paar Minuten erscheint er.",
                T0000_lucia: "Du wartest auf dem Schuldach auf Lucia. Nach ein paar Minuten erscheint sie.",
                T0001: "Du teilst Kira mit, was passiert ist. Auch sie ist nicht überzeugt von deinem Ergebnis...",
                T0002: "Sie sagt die Premiere ab. Die Mitglieder des Theaterclubs sind enttäuscht, aber sie verstehen Kiras Entscheidung."
            }
        };
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.roof);
        BehindTheScenes.addFallingLeaves();
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        if (chosenCulprit == "Solas") {
            await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000_solas);
            await BehindTheScenes.ƒS.update(0.5);
        }
        else {
            await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000_lucia);
            await BehindTheScenes.ƒS.update(0.5);
        }
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.birds, 0.6, true);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        // Solas Version
        if (chosenCulprit == "Solas") {
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            BehindTheScenes.showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            BehindTheScenes.dataForSave.solasScore -= 5;
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            BehindTheScenes.hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            BehindTheScenes.showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0004);
            await BehindTheScenes.ƒS.update(0.5);
            BehindTheScenes.hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.scared, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0004);
            await BehindTheScenes.ƒS.update(0.5);
            // TWILIGHT SET
            await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.roofTwilight);
            await BehindTheScenes.ƒS.update(2.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.sad, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0005);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0006);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            BehindTheScenes.showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0005);
            await BehindTheScenes.ƒS.update(0.5);
            BehindTheScenes.hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.scared, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0007);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            BehindTheScenes.showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0006);
            await BehindTheScenes.ƒS.update(0.5);
            BehindTheScenes.hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.scared, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0008);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0009);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            // Lucia Version
        }
        else {
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unhappy, BehindTheScenes.ƒS.positionPercent(75, 97));
            BehindTheScenes.showLuciaMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            BehindTheScenes.dataForSave.luciaScore -= 5;
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            BehindTheScenes.hideLuciaMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
            BehindTheScenes.showLuciaMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0004);
            await BehindTheScenes.ƒS.update(0.5);
            BehindTheScenes.hideLuciaMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.scared, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0004);
            await BehindTheScenes.ƒS.update(0.5);
            // TWILIGHT SET
            await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.roofTwilight);
            await BehindTheScenes.ƒS.update(2.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.sad, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0005);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0006);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unhappy, BehindTheScenes.ƒS.positionPercent(75, 97));
            BehindTheScenes.showLuciaMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0005);
            await BehindTheScenes.ƒS.update(0.5);
            BehindTheScenes.hideLuciaMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.scared, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0007);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.unsure, BehindTheScenes.ƒS.positionPercent(75, 97));
            BehindTheScenes.showLuciaMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0006);
            await BehindTheScenes.ƒS.update(0.5);
            BehindTheScenes.hideLuciaMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.scared, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0008);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0009);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
        }
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.clear();
        await BehindTheScenes.ƒS.Speech.hide();
        await BehindTheScenes.ƒS.update();
        BehindTheScenes.removeFallingLeaves();
        return "roofWrongEpilogue";
    }
    BehindTheScenes.roofWrong = roofWrong;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function roofWrongEpilogue() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.ending, 0.7, 0.1, true);
        BehindTheScenes.updateNotes();
        let isFavorite = BehindTheScenes.findFavorite();
        let protagonistText = {
            Protagonist: {
                T0001: "Ich komme mir immer noch ziemlich dumm vor, weil ich den Täter nicht schnappen konnte.",
                T0002: "Nanu? Ach, du bist es, " + isFavorite + "."
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Am nächsten Tag verbringst du die Mittagspause wie immer draußen auf dem Hof.",
                T0001: "Hey, du.",
                T0002: "Atlas überreicht dir ein Melonenbrötchen.",
                T000end: "Ende."
            }
        };
        let protagonistToAtlas = {
            Protagonist: {
                T0001: "Kommt darauf an, was du willst.",
                T0002: "Ich dachte, du kommst in Frieden?",
                T0003: "Du gibst mir ein Melonenbrötchen...?",
                T0004: "Ich verstehe...",
                T0004b: "Danke, Atlas.",
                T0005: "Hm...",
                T0006: "Ja, das denke ich auch."
            }
        };
        let protagonistToSolas = {
            Protagonist: {
                T0001: "Ach ja? Obwohl ich dich verdächtigt habe?",
                T0001b: "Ich finde es auch schön, dich zu sehen, aber... Mir ist das alles ein bisschen peinlich.",
                T0002: "Ich bezweifle, dass es einen nächsten Fall geben wird. Aber...",
                T0003: "Danke, Solas.",
            }
        };
        let protagonistToLucia = {
            Protagonist: {
                T0001: "Ach ja? Obwohl ich dich verdächtigt habe?",
                T0001b: "Ich finde es auch schön, dich zu sehen, aber... Mir ist das alles ein bisschen peinlich.",
                T0002: "Du... hast Recht.",
                T0003: "Ich bin dankbar dafür, dich getroffen zu haben."
            }
        };
        let atlasText = {
            Atlas: {
                T0001: "Ja, ich bin es. Freust du dich etwa nicht, mich zu sehen?",
                T0002: "Keine Sorge, ich komme in Frieden.",
                T0002b: "Weißt du, ich habe gehört, dass die Premiere abgesagt wurde. Wenn ich du wäre, würde ich mir ziemlich blöd vorkommen.",
                T0003: "Das tue ich auch, wirklich. Tatsächlich bin ich hier, um dich aufzuheitern. Hier, nimm das.",
                T0004: "Du hast so ein bitteres Gesicht gemacht.",
                T0005: "...",
                T0006: "Weißt du, ich glaube... Wer auch immer der wahre Täter war, es tut ihm sicher leid.",
                T0007: "Er hat wohl bekommen, was er wollte, oder? Aber vielleicht hätte er etwas anderes gebraucht. Wie auch immer... Ich weiß nicht, was ich rede."
            }
        };
        let solasText = {
            Solas: {
                T0001: "Ja, ich bin es. Schön, dich zu sehen.",
                T0002: "Naja... Dumm gelaufen, wie die Sache ausgegangen ist. Aber am Ende des Tages geht es jedem von uns gut. Darauf kommt es an.",
                T0003: "Ich finde, du hast deine Sache trotzdem gut gemacht. Du bist durch die Flure spaziert wie eine echte Detektivin. Den nächsten Fall knackst du sicher!",
                T0004: "Das ist alles, was ich sehen wollte. Du lächelst."
            }
        };
        let luciaText = {
            Lucia: {
                T0001: "J-Ja. Hallo nochmal. Schön, dich zu sehen.",
                T0002: "Mach dich nicht verrückt wegen der Sache mit dem Theaterclub. Du kannst nicht ändern, wie es gelaufen ist... Deswegen musst du einfach nach vorne blicken.",
                T0003: "Sieh es positiv... Wäre das alles nicht passiert, dann hätten wir uns nie kennengelernt.",
                T0004: "W-Wirklich?",
                T0005: "Ich... Ich bin auch dankbar."
            }
        };
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.chapterCovers.chapter);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        let pages = "<h1>Epilog</h1>";
        let close = { done: "Weiter" };
        let choice;
        BehindTheScenes.ƒS.Text.setClass("coverTitle");
        do {
            BehindTheScenes.ƒS.Text.print(pages);
            choice = await BehindTheScenes.ƒS.Menu.getInput(close, "pageclose");
        } while (choice != close.done);
        BehindTheScenes.ƒS.Text.close();
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.pageflip, 0.5, false);
        //  SCENE
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.schoolOutsideDay);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        BehindTheScenes.addFallingLeaves();
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        await BehindTheScenes.ƒS.update(0.5);
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.birds, 0.6, true);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.scared, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell("???", narratorText.Narrator.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.update(0.5);
        // Atlas version
        if (isFavorite == "Atlas") {
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.unhappy, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showAtlasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            // hideAtlasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToAtlas.Protagonist.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.playful, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showAtlasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0002b);
            await BehindTheScenes.ƒS.update(0.5);
            // hideAtlasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.angry, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToAtlas.Protagonist.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.smiling, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showAtlasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.items.melonpan, BehindTheScenes.items.melonpan.pose.center, BehindTheScenes.ƒS.positionPercent(50, 50));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            // ITEM
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.items.melonpan);
            await BehindTheScenes.ƒS.update(0.5);
            // hideAtlasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.surprised, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToAtlas.Protagonist.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.smiling, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showAtlasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0004);
            await BehindTheScenes.ƒS.update(0.5);
            // hideAtlasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToAtlas.Protagonist.T0004);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToAtlas.Protagonist.T0004b);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.atlas, BehindTheScenes.characters.atlas.pose.unhappy, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showAtlasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0005);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0006);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.atlas, atlasText.Atlas.T0007);
            await BehindTheScenes.ƒS.update(0.5);
            // hideAtlasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.atlas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToAtlas.Protagonist.T0005);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.benevolent, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToAtlas.Protagonist.T0006);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            // Solas Version
        }
        else if (isFavorite == "Solas") {
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            // hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.scared, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            if (BehindTheScenes.dataForSave.choseSolas) {
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToSolas.Protagonist.T0001);
                await BehindTheScenes.ƒS.update(0.5);
            }
            else {
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToSolas.Protagonist.T0001b);
                await BehindTheScenes.ƒS.update(0.5);
            }
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.happy, BehindTheScenes.ƒS.positionPercent(75, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            // hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToSolas.Protagonist.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToSolas.Protagonist.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.solas, BehindTheScenes.characters.solas.pose.happy, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.solas, solasText.Solas.T0004);
            await BehindTheScenes.ƒS.update(0.5);
            // hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.solas);
            await BehindTheScenes.ƒS.update(0.5);
            // Lucia Version
        }
        else {
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0001);
            await BehindTheScenes.ƒS.update(0.5);
            // hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.scared, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            if (BehindTheScenes.dataForSave.choseLucia) {
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToLucia.Protagonist.T0001);
                await BehindTheScenes.ƒS.update(0.5);
            }
            else {
                await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToLucia.Protagonist.T0001b);
                await BehindTheScenes.ƒS.update(0.5);
            }
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.smiling2, BehindTheScenes.ƒS.positionPercent(75, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            // hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.neutral, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToLucia.Protagonist.T0002);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.happyEyesClosed, BehindTheScenes.ƒS.positionPercent(25, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistToLucia.Protagonist.T0003);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.neutral, BehindTheScenes.ƒS.positionPercent(75, 97));
            // showSolasMeter();
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0004);
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.lucia, BehindTheScenes.characters.lucia.pose.smiling, BehindTheScenes.ƒS.positionPercent(75, 97));
            await BehindTheScenes.ƒS.update(0.5);
            await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.lucia, luciaText.Lucia.T0005);
            await BehindTheScenes.ƒS.update(0.5);
            // hideSolasMeter();
            await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.lucia);
            await BehindTheScenes.ƒS.update(0.5);
        }
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T000end);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.clear();
        // await ƒS.Speech.hide();
        await BehindTheScenes.ƒS.update(0.5);
        BehindTheScenes.removeFallingLeaves();
        return "yourTitle";
    }
    BehindTheScenes.roofWrongEpilogue = roofWrongEpilogue;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function yourConclusion() {
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0.5, 0.1, true);
        BehindTheScenes.updateNotes();
        let protagonistText = {
            Protagonist: {
                T0001: "Die Zeit ist um... Ich muss eine Entscheidung treffen.",
                T0002: "Am besten, ich schaue mir alle Indizien noch einmal genau an und lasse meine Ermittlungen Revue passieren... Besonders die Notiz des Täters ist ein interessantes Beweisstück...",
                T0003: "Also dann...",
                T0004: "Der Täter ist Atlas!",
                T0005: "Der Täter ist Solas!",
                T0006: "Der Täter ist Lucia!",
                T0007: "Der Täter ist Kira! Warte, nein. So ein Quatsch...",
            }
        };
        let narratorText = {
            Narrator: {
                T0000: "Der Tag neigt sich dem Ende zu. Du gehst auf den Schulhof und schnappst frische Luft.",
                T0001: "Wer ist der Täter?",
                T0002: "Du bestellst Atlas auf das Schuldach, um ihn mit deiner Schlussfolgerung zu konfrontieren...",
                T0003: "Du bestellst Solas auf das Schuldach, um ihn mit deiner Schlussfolgerung zu konfrontieren...",
                T0004: "Du bestellst Lucia auf das Schuldach, um sie mit deiner Schlussfolgerung zu konfrontieren...",
            }
        };
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.locations.schoolOutsideDay);
        BehindTheScenes.addFallingLeaves();
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.birds, 0.6, true);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.serious, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0001);
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        await BehindTheScenes.ƒS.Character.show(BehindTheScenes.characters.protagonist, BehindTheScenes.characters.protagonist.pose.confident, BehindTheScenes.ƒS.positionPercent(25, 97));
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0002);
        await BehindTheScenes.ƒS.update(0.5);
        await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0003);
        await BehindTheScenes.ƒS.update(0.5);
        let optionsCulprit = {
            atlas: "Atlas!",
            solas: "Solas!",
            lucia: "Lucia!",
            kira: "Kira!"
        };
        let loopCount = 0;
        while (loopCount < 1) {
            await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0001);
            let optionsCulpritElement = await BehindTheScenes.ƒS.Menu.getInput(optionsCulprit, "dialogoptions");
            BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
            switch (optionsCulpritElement) {
                case optionsCulprit.atlas:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0004);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0002);
                    BehindTheScenes.dataForSave.choseAtlas = true;
                    loopCount++;
                    break;
                case optionsCulprit.solas:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0005);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0003);
                    BehindTheScenes.dataForSave.choseSolas = true;
                    loopCount++;
                    break;
                case optionsCulprit.lucia:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0006);
                    await BehindTheScenes.ƒS.update(0.5);
                    await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0004);
                    BehindTheScenes.dataForSave.choseLucia = true;
                    loopCount++;
                    break;
                case optionsCulprit.kira:
                    await BehindTheScenes.ƒS.Speech.tell(BehindTheScenes.characters.protagonist, protagonistText.Protagonist.T0007);
                    await BehindTheScenes.ƒS.update(0.5);
                    delete optionsCulprit.kira;
                    break;
            }
        }
        await BehindTheScenes.ƒS.Character.hide(BehindTheScenes.characters.protagonist);
        BehindTheScenes.ƒS.Speech.clear();
        BehindTheScenes.ƒS.Speech.hide();
        await BehindTheScenes.ƒS.update(0.5);
        BehindTheScenes.removeFallingLeaves();
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.birds, 0, 3, true);
        await BehindTheScenes.ƒS.update(0.5);
        if (BehindTheScenes.dataForSave.choseAtlas == true) {
            return "roofRight";
        }
        else {
            return "roofWrong";
        }
    }
    BehindTheScenes.yourConclusion = yourConclusion;
})(BehindTheScenes || (BehindTheScenes = {}));
var BehindTheScenes;
(function (BehindTheScenes) {
    async function yourTitle() {
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.pageflip, 0.5, false);
        let narratorText = {
            Narrator: {
                T0000: "Basierend auf deinem Spielverlauf erhältst du diesen Titel..."
            }
        };
        let isFavorite = BehindTheScenes.findFavorite();
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.splashMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.mainMusic, 0, 0.0, true);
        BehindTheScenes.ƒS.Sound.fade(BehindTheScenes.sound.ending, 0.7, 0.1, true);
        BehindTheScenes.updateNotes();
        await BehindTheScenes.ƒS.Location.show(BehindTheScenes.chapterCovers.chapter);
        await BehindTheScenes.ƒS.update(BehindTheScenes.transition.fizzle.duration, BehindTheScenes.transition.fizzle.alpha, BehindTheScenes.transition.fizzle.edge);
        await BehindTheScenes.ƒS.Speech.tell(null, narratorText.Narrator.T0000);
        // set title
        let pages = "";
        if (BehindTheScenes.dataForSave.letCulpritGo && isFavorite == "Atlas") {
            pages = "<h1>Bonnie (und Clyde)</h1><h2>Du dachtest dir so: Partners in crime, let's go. Aber bist schon ein Verräter...</h2>";
        }
        else if (BehindTheScenes.dataForSave.letCulpritGo == false && isFavorite == "Atlas" && BehindTheScenes.dataForSave.choseAtlas == true) {
            pages = "<h1>Loyal bis zum Ende</h1><h2>Du hast Kira nicht im Stich gelassen. In ihren Augen wirst du immer eine Heldin sein.</h2>";
        }
        else if (BehindTheScenes.dataForSave.letCulpritGo == false && isFavorite == "Atlas" && BehindTheScenes.dataForSave.choseAtlas == false) {
            pages = "<h1>Keep your friends close...</h1><h2>...but your enemies closer.</h2>";
        }
        else if (isFavorite == "Solas") {
            pages = "<h1>Die Muse</h1><h2>Du scheinst etwas für Künstler übrig zu haben... Oder hast du nur verwirrt zu allem genickt, was Solas gesagt hat?</h2>";
        }
        else {
            pages = "<h1>Gutes Herz</h1><h2>Du magst das Girl next door! It's not everyone's favorite, but it's yours. And you're totally chill about it.</h2>";
        }
        // print title
        let close = { done: "x" };
        let choice;
        BehindTheScenes.ƒS.Text.setClass("playerTitle");
        do {
            BehindTheScenes.ƒS.Text.print(pages);
            choice = await BehindTheScenes.ƒS.Menu.getInput(close, "pageclose");
        } while (choice != close.done);
        BehindTheScenes.ƒS.Speech.hide();
        BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
        BehindTheScenes.ƒS.Text.close();
        // Spiel neustarten
        let backToStart = {
            Restart: "Neustart."
        };
        let loopCount = 0;
        while (loopCount < 1) {
            let backToStartElement = await BehindTheScenes.ƒS.Menu.getInput(backToStart, "dialogoptions");
            BehindTheScenes.ƒS.Sound.play(BehindTheScenes.sound.selectDialog, 1.5, false);
            switch (backToStartElement) {
                case backToStart.Restart:
                    if (confirm("Spiel neustarten?")) {
                        loopCount++;
                        window.location.href = "../Template/Template.html";
                    }
                    break;
            }
        }
    }
    BehindTheScenes.yourTitle = yourTitle;
})(BehindTheScenes || (BehindTheScenes = {}));
//# sourceMappingURL=Template.js.map