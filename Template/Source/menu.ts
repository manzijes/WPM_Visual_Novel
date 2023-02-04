namespace BehindTheScenes {

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
        if (volume > 0) {
            volumeBeforeMute = volume;
            volume = 0;
            ƒS.Sound.setMasterVolume(volume);
        }
        else {
            ƒS.Sound.setMasterVolume(volumeBeforeMute);
            volume = volumeBeforeMute;
        }
    }

    export function showSuspects(): void {
        let toggleSuspects = document.getElementById("toggleSuspects");
        toggleSuspects.classList.toggle("active");

        var element = document.getElementById("suspects");
        element.classList.toggle("hidden");
    }

    export async function showCredits() {
        ƒS.Text.setClass("credits hint");
        let credits: string[] =
            ["<h1>Bilder</h1>\
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
                <td>Birds singing</td>\
                <td>DCPoke, https://freesound.org/people/DCPoke/sounds/387978/</td>\
            </tr>\
            <tr>\
                <td>Button</td>\
                <td>Universfield, https://pixabay.com/de/sound-effects/button-124476/</td>\
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
        let choice: string;
        let current: number = 0;
        do {
            ƒS.Text.print(credits[current]);
            choice = await ƒS.Menu.getInput(flip, "flip");

            switch (choice) {
                case flip.back:
                    current = Math.max(0, current - 1);
                    ƒS.Sound.play(sound.pageflip, 0.5, false);
                    break;
                case flip.next:
                    current = Math.min(2, current + 1);
                    ƒS.Sound.play(sound.pageflip, 0.5, false);
                    break;
            }
        } while (choice != flip.done);
        ƒS.Sound.play(sound.selectDialog, 1.5, false);
        ƒS.Text.close();
    }

    export function showShortcuts(): void {
        ƒS.Text.setClass("shortcuts hint");
        let shortcuts =
            "<h1>Shortcuts</h1>\
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
          <tr>\
          <td>Notes ein-/ausblenden</td>\
          <td>N</td>\
        </tr>\
        </table>\
        ";
        ƒS.Text.print(shortcuts);
    };

    // MENU

    export let menuInGame = {
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

    export let gameMenu: ƒS.Menu;

    // true = offen; false = geschlossen
    export let menuOpen: boolean = true;

    export async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case menuInGame.save:
                await ƒS.Progress.save();
                break;
            case menuInGame.load:
                await ƒS.Progress.load();
                break;
            // case menuInGame.close:
            //     gameMenu.close();
            //     menuOpen = false;
            //     break;
            case menuInGame.credits:
                ƒS.Sound.play(sound.select, 2, false);
                showCredits();
                break;
            case menuInGame.shortcuts:
                ƒS.Sound.play(sound.select, 2, false);
                showShortcuts();
                break;
            case menuInGame.toggleSound:
                ƒS.Sound.play(sound.select, 2, false);
                toggleSound();
                break;
            case menuInGame.turnUpVolume:
                ƒS.Sound.play(sound.select, 2, false);
                incrementSound();
                break;
            case menuInGame.turnDownVolume:
                ƒS.Sound.play(sound.select, 2, false);
                decrementSound();
                break;
            case menuInGame.toggleSuspects:
                ƒS.Sound.play(sound.select, 2, false);
                showSuspects();
                break;
            case menuInGame.toggleAquiredPages:
                ƒS.Sound.play(sound.select, 2, false);
                showAquiredPages();
                break;


        }
    }

    // Shortcuts
    document.addEventListener("keydown", hndKeyPress);
    export async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.S:
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.L:
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.N:
                if (dataForSave.toggleSuspectsButton == true) {
                    showSuspects();
                }
                break;
            case ƒ.KEYBOARD_CODE.M:
                if (menuOpen) {
                    console.log("Schließen");
                    gameMenu.close();
                    menuOpen = false;
                }
                else {
                    console.log("Öffnen");
                    gameMenu.open();
                    menuOpen = true;
                }
                break;
        }
    }

}