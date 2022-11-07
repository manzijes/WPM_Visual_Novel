namespace Template {

    //  MENU - Audio functions

    export let volume: number = 1.0;
    export let volumeBeforeMute: number = 1.0;

    export function incrementSound(): void {
        if (volume >= 100)
            return;
        volume += 0.2;
        ƒS.Sound.setMasterVolume(volume);
    }

    export function decrementSound(): void {
        if (volume <= 0)
            return;
        volume -= 0.2;
        ƒS.Sound.setMasterVolume(volume);
    }

    export function toggleSound(): void {
        let toggleSound = document.getElementById("toggleSound");
        toggleSound.classList.toggle("active");
        if (volume > 0){
            volumeBeforeMute = volume;
            volume = 0;
            ƒS.Sound.setMasterVolume(volume);
        }
        else{
            ƒS.Sound.setMasterVolume(volumeBeforeMute);
            volume = volumeBeforeMute;
        }
    }

    // MENU

    export let menuInGame = {
        save: "speichern",
        load: "laden",
        credits: "credits",
        shortcuts: "shortcuts",
        toggleSound: "sound",
        turnUpVolume: "+",
        turnDownVolume: "-",
        toggleSuspects: "notes"
    };


    export let gameMenu: ƒS.Menu;

    export function showSuspects(): void {
        let toggleSuspects = document.getElementById("toggleSuspects");
        toggleSuspects.classList.toggle("active");

        var element = document.getElementById("suspects");
        element.classList.toggle("hidden");
    }

    export function showCredits(): void {
        ƒS.Text.setClass("credits");
        let credits =
            "<h1>CREDITS</h1>";
        ƒS.Text.print(credits);
    };

    export function showShortcuts(): void {
        ƒS.Text.setClass("shortcuts");
        let shortcuts =
            "<h1>SHORTCUTS</h1>\
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
        ƒS.Text.print(shortcuts);
    };

    // true = offen; false = geschlossen
    export let menu: boolean = true;

    export async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case menuInGame.save:
                await ƒS.Progress.save();
                break;
            case menuInGame.load:
                await ƒS.Progress.load();
                break;
            case menuInGame.credits:
                showCredits();
                break;
            case menuInGame.shortcuts:
                showShortcuts();
                break;
                case menuInGame.toggleSound:
                    toggleSound();
                    break;
            case menuInGame.turnUpVolume:
                incrementSound();
                break;
            case menuInGame.turnDownVolume:
                decrementSound();
                break;
            case menuInGame.toggleSuspects:
                showSuspects();
                break;
                

        }
    }


    // Shortcuts
    document.addEventListener("keydown", hndKeyPress);
    export async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.M:
                if (menu) {
                    console.log("Schließen");
                    gameMenu.close();
                    menu = false;
                }
                else {
                    console.log("Öffnen");
                    gameMenu.open();
                    menu = true;
                }
                break;
        }
    }


}