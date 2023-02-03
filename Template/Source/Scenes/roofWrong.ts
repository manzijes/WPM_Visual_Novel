namespace BehindTheScenes {
    export async function roofWrong(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        // let chosenCulprit = "";

        // if(dataForSave.choseLucia){
        //     chosenCulprit = "Lucia"
        // } else {
        //     chosenCulprit = "Solas"
        // }

        // let protagonistText = {
        //     Protagonist: {
        //         T0001: "Ich habe dich hergerufen, um dich zu stellen. Ich weiß, dass du der Saboteur bist. Du bist überführt, " + chosenCulprit + "."
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

        await ƒS.Location.show(locations.corridorDay);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        return "roofWrongEpilogue";

    }
}