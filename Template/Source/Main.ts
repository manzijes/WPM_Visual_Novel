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
    shutter: "Audio/SFX/shutter.mp3"
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
      background: "Images/Backgrounds/Kapitel/chapter.png",
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

  export function updateNotes() {
      
    let toggleSuspects = document.getElementById("toggleSuspects");
    toggleSuspects.style.visibility = "visible";
    toggleSuspects.style.opacity = "1";
    
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
      { scene: beta, name: "beta" },
      { scene: coverChapterOne, name: "Hinweis" },
      { scene: motive, name: "ProbeMotive" },
      { scene: lightsOut, name: "LichtAus" }
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
