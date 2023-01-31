namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let transition = {
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

  export let sound = {
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

  export let chapterCovers = {
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
        surprised: "Images/Characters/Protagonist/protagonist-surprised.png"
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
    atlas: {
      name: "Atlas",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Characters/Solas/solas-neutral.png",
        sad: "Images/Characters/Solas/solas-sad.png",
        happy: "Images/Characters/Solas/solas-happy.png",
        scared: "Images/Characters/Solas/solas-scared.png",
        angry: "Images/Characters/Solas/solas-angry.png",
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

  export async function showAquiredPages(){
    let pages: string[] = ['<div class="aquiredPagesWrapper"><p>Im Laufe des Spiels erhälst du verschiedene Indizien, die du hier im Menü jederzeit aufrufen kannst.</p></div>'];
    let current: number = 0;
    let numberAquired = 0;

    if(dataForSave.luciaMotive == true){
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

    if(dataForSave.atlasDiary == true){
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
    if(numberAquired > 0){
      let flip = { back: "Zurück", next: "Weiter", done: "x" };
      let choice: string;
      ƒS.Text.setClass("allhints");
      do {
        ƒS.Text.print(pages[current]);
        choice = await ƒS.Menu.getInput(flip, "flip");
        if(numberAquired > 1){
          switch (choice) {
            case flip.back: current = Math.max(0, current - 1); break;
            case flip.next: current = Math.min(numberAquired, current + 1); break;
          }
        } else{
          switch (choice) {
            case flip.back: current = Math.max(0, current - 1); break;
            case flip.next: current = Math.min(1, current + 1); break;
          }
        }
      } while (choice != flip.done);
    // single page
    } else{
      let close = { done: "x" };
      let choice: string;
      ƒS.Text.setClass("allhints");
      do {
          ƒS.Text.print(pages[current]);
          choice = await ƒS.Menu.getInput(close, "pageclose");
      } while (choice != close.done);
    }
    ƒS.Text.close();
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
      solasMotive.classList.remove("hidden");
    }
    if (dataForSave.atlasMotive == true) {
      if(dataForSave.atlasDiary == true){
        let atlasMotive = document.getElementById("motiveDiary");
        atlasMotive.classList.remove("hidden");
      } else{
        let atlasMotive = document.getElementById("motiveNoDiary");
        atlasMotive.classList.remove("hidden");
      }
    }
    if (dataForSave.luciaMotive == true) {
      let luciaMotive = document.getElementById("luciaMotive");
      luciaMotive.classList.remove("hidden");
    }
    // Opportunities
    if (dataForSave.luciaOpportunity == true) {
      let luciaOpportunity = document.getElementById("luciaOpportunity");
      luciaOpportunity.classList.remove("hidden");
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

  // create chapter cover text
  export function createText(givenheadline: string, giventext1: string, giventext2: string, givenid: string) {
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
  function start(_event: Event): void {
    //Menü
    gameMenu = ƒS.Menu.create(menuInGame, buttonFunctionalities, "menuInGame"); //hier CSS Klasse angeben

    let scenes: ƒS.Scenes = [
      // { scene: intro, name: "Einleitung"},
      // { scene: beta, name: "beta" },
      // { scene: coverChapterOne, name: "Hinweis" },
      // { scene: motive, name: "ProbeMotive" },
      { scene: lightsOut, name: "LichtAus" },
      { scene: coverChapterTwo, name: "Hinweis" }
    ];

    // let uiElement: HTMLElement = document.querySelector("[type=interface]");
    // dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    let atlasInterface: HTMLElement = document.getElementById("atlasInterface");
    dataForSave = ƒS.Progress.setData(dataForSave, atlasInterface);

    let luciaInterface: HTMLElement = document.getElementById("luciaInterface");
    dataForSave = ƒS.Progress.setData(dataForSave, luciaInterface);

    let solasInterface: HTMLElement = document.getElementById("solasInterface");
    dataForSave = ƒS.Progress.setData(dataForSave, solasInterface);

    // start the sequence
    ƒS.Progress.go(scenes);

  }

}
