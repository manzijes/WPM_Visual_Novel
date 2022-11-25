namespace Template {
    export async function coverChapterOne(): ƒS.SceneReturn {

        updateNotes();

        dataForSave.toggleSuspectsButton = true;
        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true); 
        updateNotes();

        addFallingLeaves();

        let narratorText = {
            Narrator: {
                T0001: "Klicke, um fortzufahren."
            }
        };

        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true); 
        await ƒS.Location.show(chapterCovers.chapter);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        createText("Kapitel 1: Motive", 
        "Der erste Schritt deiner Nachforschungen wird es sein, die Verdächtigen zu befragen und mögliche Motive für die Sabotage auszumachen. Sobald du eine wertvolle Information erhältst, wird sie automatisch zu deinen Notizen hinzugefügt.",
        "Wenn du mit anderen interagierst, kann es passieren, dass du ihnen basierend auf deinen Antworten oder Entscheidungen mehr oder weniger sympathisch wirst. Aber keine Angst, Kira mag dich immer!", 
        "ch1");

        // await new Promise(resolve => setTimeout(resolve, 1600));

        await ƒS.Speech.tell(characters.narrator, narratorText.Narrator.T0001);

        let ch1 = document.getElementById("ch1");
        ch1.remove();

        removeFallingLeaves();

        ƒS.Sound.play(sound.pageflip, 0.5, false); 
    
    }
}