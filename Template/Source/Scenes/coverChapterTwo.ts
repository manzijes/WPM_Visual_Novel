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
        "Der erste Schritt deiner Nachforschungen wird es sein, die Verdächtigen zu befragen und mögliche Motive für die Sabotage auszumachen. Sobald du eine wertvolle Information erhältst, wird sie automatisch zu deinen Notizen hinzugefügt.",
        "Wenn du mit anderen interagierst, kann es passieren, dass du ihnen basierend auf deinen Antworten oder Entscheidungen mehr oder weniger sympathisch wirst. Aber keine Angst, Kira mag dich immer!", 
        "ch2");

        // await new Promise(resolve => setTimeout(resolve, 1600));

        await ƒS.Speech.tell(null, narratorText.Narrator.T0001);

        let ch2 = document.getElementById("ch2");
        ch2.remove();

        ƒS.Sound.play(sound.pageflip, 0.5, false); 

        ƒS.Sound.fade(sound.mainMusic, 0, 3, true); 
    
    }
}