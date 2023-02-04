namespace BehindTheScenes {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let transition = {
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

  export let sound = {
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

  export let locations = {
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

  export let chapterCovers = {
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
  }

  export let items = {
    key: {
      name: "key",
      description: "Lucias Schlüssel",
      image: "Images/Items/key.png"
    }
  }

  export let characters = {
    narrator: {
      name: "Narrator"
    },
    stranger: {
      name: "???"
    },
    protagonist: {
      name: "Du",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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

  export async function simulateCameraFlash() {
    let shutter = document.getElementById("shutter");
    shutter.classList.add("on");
    ƒS.Sound.play(sound.shutter, 0.5, false);
    setTimeout(function () {
      shutter.classList.remove('on');
    }, 30 * 2 + 45);
  }

  export async function showAquiredPages() {
    let pages: string[] = ['<div class="aquiredPagesWrapper"><h1>Indizien</h1><p>Im Laufe des Spiels erhältst du verschiedene Indizien, die du hier im Menü jederzeit aufrufen kannst.</p><p>Klick einfach weiter, um sie dir noch einmal anzuschauen.</p></div>'];
    let current: number = 0;
    let numberAquired = 0;

    if (dataForSave.luciaMotive == true) {
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
        </div>')
    }

    if (dataForSave.atlasDiary == true) {
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

    if (dataForSave.warningNote == true) {
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
      let choice: string;
      ƒS.Text.setClass("allhints");
      do {
        ƒS.Text.print(pages[current]);
        choice = await ƒS.Menu.getInput(flip, "flip");
        if (numberAquired > 1) {
          switch (choice) {
            case flip.back:
              current = Math.max(0, current - 1);
              ƒS.Sound.play(sound.pageflip, 0.5, false);
              break;
            case flip.next:
              current = Math.min(numberAquired, current + 1);
              ƒS.Sound.play(sound.pageflip, 0.5, false);
              break;
          }
        // exactly two pages
        } else {
          switch (choice) {
            case flip.back:
              current = Math.max(0, current - 1);
              ƒS.Sound.play(sound.pageflip, 0.5, false);
              break;
            case flip.next:
              current = Math.min(1, current + 1);
              ƒS.Sound.play(sound.pageflip, 0.5, false);
              break;

          }
        }
      } while (choice != flip.done);
      // single page
    } else {
      pages[0] = '<div class="aquiredPagesWrapper"><h1>Indizien</h1><p>Im Laufe des Spiels erhältst du verschiedene Indizien, die du hier im Menü jederzeit aufrufen kannst.</p><p>Hey, warte mal...! Du hast bisher noch gar keine Indizien gesammelt. Dachtest du, das merke ich nicht?</p><p>Spiel einfach weiter, dann kommt das schon.</p></div>'

      let close = { done: "x" };
      let choice: string;
      ƒS.Text.setClass("allhints");
      do {
        ƒS.Text.print(pages[current]);
        choice = await ƒS.Menu.getInput(close, "pageclose");
      } while (choice != close.done);
    }
    ƒS.Sound.play(sound.selectDialog, 1.5, false);
    ƒS.Text.close();
  }

  export function findFavorite(): string {
    let favorite = "Atlas";

    if (dataForSave.atlasScore < dataForSave.solasScore) {
      favorite = "Solas";
    }
    if (dataForSave.solasScore < dataForSave.luciaScore) {
      favorite = "Lucia";
    }

    return favorite;
  }

  export function updateNotes() {

    dataForSave.toggleSuspectsButton = true;
    let toggleSuspects = document.getElementById("toggleSuspects");
    toggleSuspects.style.visibility = "visible";
    toggleSuspects.style.opacity = "1";

    let toggleAquiredPages = document.getElementById("toggleAquiredPages");
    toggleAquiredPages.style.visibility = "visible";
    toggleAquiredPages.style.opacity = "1";

    // Portraits
    if (dataForSave.atlasPortrait == true) {
      let atlasPortrait = document.getElementById("atlasPortrait");
      atlasPortrait.style.filter = "unset";
    }
    if (dataForSave.solasPortrait == true) {
      let solasPortrait = document.getElementById("solasPortrait");
      solasPortrait.style.filter = "unset";
    }
    if (dataForSave.luciaPortrait == true) {
      let luciaPortrait = document.getElementById("luciaPortrait");
      luciaPortrait.style.filter = "unset";
    }
    // Motives
    if (dataForSave.solasMotive == true) {
      let solasMotive = document.getElementById("solasMotive");
      solasMotive.innerHTML = "Er könnte die Aufführung sabotieren, weil er ein Perfektionist ist und mehr Zeit braucht, um das Skript zu optimieren.";
    }
    if (dataForSave.atlasMotive == true) {
      if (dataForSave.atlasDiary == true) {
        let atlasMotive = document.getElementById("atlasMotive");
        atlasMotive.innerHTML = "Er könnte die Sabotage inszenieren, um dich von der Schule abzulenken, sodass er Jahrgangsbester bleibt.";
      } else {
        let atlasMotive = document.getElementById("atlasMotive");
        atlasMotive.innerHTML = "? ? ?";
      }
    }
    if (dataForSave.luciaMotive == true) {
      let luciaMotive = document.getElementById("luciaMotive");
      luciaMotive.innerHTML = "Sie könnte aus Rache die Sabotage begehen, weil ihr als Mitglied hinter den Kulissen die Wertschätzung fehlt.";
    }
    // Hints
    if (dataForSave.luciaOpportunity == true) {
      let luciaOpportunity = document.getElementById("luciaOpportunity");
      luciaOpportunity.innerHTML = "Sie sagt, sie habe den Schlüssel zum Theaterraum verloren. Stimmt das...?";
    }
    if (dataForSave.atlasOpportunity == true) {
      let atlasOpportunity = document.getElementById("atlasOpportunity");
      atlasOpportunity.innerHTML = "Das Mädchen auf dem Flur ( " + dataForSave.nameGirl + " ) gibt Atlas ein Alibi.";
    }
    if (dataForSave.lookedForKey == true) {
      let whatAboutKey = document.getElementById("whatAboutKey");
      if (dataForSave.foundKey == true) {
        whatAboutKey.innerHTML = "Lucia hat die Wahrheit gesagt. Vertrauensbonus?";
      } else {
        whatAboutKey.innerHTML = "Du konntest nicht herausfinden, ob Lucia lügt.";
      }
    }
    if (dataForSave.aboutAlibi == true) {
      let aboutAlibi = document.getElementById("aboutAlibi");
      aboutAlibi.innerHTML = "Die Glaubwürdigkeit von " + dataForSave.nameGirl + " ist zweifelhaft, da sie in Atlas verliebt ist."
    }
    if (dataForSave.solasHandwriting == true) {
      let solasHandwriting = document.getElementById("solasHandwriting");
      solasHandwriting.innerHTML = "Die Schrift auf der Notiz des Täters sieht aus wie Solas Schrift."
    }
    if (dataForSave.confrontedSolas == true) {
      if (dataForSave.solasHandwriting == true) {
        let solasPlea = document.getElementById("solasPlea");
        solasPlea.innerHTML = "Solas argumentiert, dass jemand seine Handschrift gefälscht haben könnte. Wer käme dafür infrage? Oder lockt er dich auf eine falsche Fährte?"
      } else {
        let solasPlea = document.getElementById("solasPlea");
        solasPlea.innerHTML = "Solas zeigt Mitleid mit der Kostümschneiderin, aber auch mit dem Täter."
      }
    }
  }

  export function removeFallingLeaves() {
    let leaves = document.getElementById("leaves");
    leaves.remove();
  }

  export function addFallingLeaves() {
    let scene = document.getElementById("scene");
    let div = document.createElement("div");
    div.id = "leaves";
    for (let index = 0; index < 15; index++) {
      let i = document.createElement("i");
      div.appendChild(i);
    }
    scene.appendChild(div);
  }

  // animation tutorial
  export function animation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5) },
      end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    };
  }

  // visibility solas meter
  export function showSolasMeter() {
    document.getElementsByName("solasScore").forEach(meterStuffSolas => meterStuffSolas.hidden = false);
  }
  export function hideSolasMeter() {
    document.getElementsByName("solasScore").forEach(meterStuffSolas => meterStuffSolas.hidden = true);
  }
  // visibility atlas meter
  export function showAtlasMeter() {
    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = false);
  }
  export function hideAtlasMeter() {
    document.getElementsByName("atlasScore").forEach(meterStuffAtlas => meterStuffAtlas.hidden = true);
  }
  // visibility lucia meter
  export function showLuciaMeter() {
    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = false);
  }
  export function hideLuciaMeter() {
    document.getElementsByName("luciaScore").forEach(meterStuffLucia => meterStuffLucia.hidden = true);
  }

  // let speechInDom = document.getElementById("speech");
  // speechInDom.addEventListener("change", listenSpeechChange);

  // function listenSpeechChange() {
  //   console.log("speaking");
  // }

  export let dataForSave = {
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
  function start(_event: Event): void {
    //Menü
    gameMenu = ƒS.Menu.create(menuInGame, buttonFunctionalities, "menuInGame"); //hier CSS Klasse angeben
    ƒS.Sound.fade(sound.splashMusic, 0.4, 0.1, true);

    let scenes: ƒS.Scenes = [
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

      // { scene: yourConclusion, name: "Du entscheidest, wen du für den Täter hältst." },

      // { id: "roofRight", scene: roofRight, name: "" },
      { id: "roofWrong", scene: roofWrong, name: "" },

      // { id: "roofRightEpilogue", scene: roofRightEpilogue, name: "" },
      { id: "roofWrongEpilogue", scene: roofWrongEpilogue, name: "" },

      { id: "yourTitle", scene: yourTitle, name: "Du erhältst einen Titel abhängig von deiner Spielweise" }
    ];

    // let uiElement: HTMLElement = document.querySelector("[type=interface]");
    // dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    let atlasInterface: HTMLElement = document.getElementById("atlasInterface");
    dataForSave = ƒS.Progress.setData(dataForSave, atlasInterface);

    let luciaInterface: HTMLElement = document.getElementById("luciaInterface");
    dataForSave = ƒS.Progress.setData(dataForSave, luciaInterface);

    let solasInterface: HTMLElement = document.getElementById("solasInterface");
    dataForSave = ƒS.Progress.setData(dataForSave, solasInterface);

    ƒS.Speech.clear();

    // start the sequence
    ƒS.Progress.go(scenes);

  }

}
