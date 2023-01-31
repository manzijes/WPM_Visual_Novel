namespace Template {
    export async function coverChapterTwo(): ƒS.SceneReturn {
        
            ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true); 
            ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true); 
            updateNotes();
    
            let narratorText = {
                Narrator: {
                    T0001: "Klicke, um fortzufahren."
                }
            };
    
            ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true); 
            await ƒS.Location.show(chapterCovers.chapter);
            await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);
    
            createText("Kapitel 2: Indizien", 
            "Der nächste Tag ist angebrochen und die Zeit drängt. Du hast bereits einen ersten Einblick gewonnen. Weiter so!",
            "Dein nächster Schritt wird es sein, Hinweise zu sammeln, die dich zum richtigen Täter führen. Am Ende dieses Kapitels wirst du Kira dein Ergebnis mitteilen.", 
            "ch2");
    
            // await new Promise(resolve => setTimeout(resolve, 1600));
    
            await ƒS.Speech.tell(null, narratorText.Narrator.T0001);
    
            let ch2 = document.getElementById("ch2");
            ch2.remove();
    
            ƒS.Sound.play(sound.pageflip, 0.5, false); 
    
            ƒS.Sound.fade(sound.mainMusic, 0, 3, true); 
        }
    
}