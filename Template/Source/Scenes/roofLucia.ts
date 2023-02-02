namespace Template {
    export async function roofLucia(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        // let protagonistText = {
        //     Protagonist: {
        //         T0001: "Ich habe dich hergerufen, um dich zu stellen. Ich weiß, dass du der Saboteur bist. Du bist überführt, Lucia.",
        //         T0002: "Oh nein... Habe ich mich etwa geirrt?"
        //     }
        // };

        // let kiraText = {
        //     Protagonist: {
        //         T0001: "Huh?"
        //     }
        // };

        let luciaText = {
            Lucia: {
                T0001: "Du glaubst, ich bin der Täter...?",
                T0002: "Es tut mir leid, dich zu enttäuschen, aber ich bin es wirklich nicht. Ich liebe den Theaterclub von Herzen."
            }
        };

        // let narratorText = {
        //     Narrator: {
        //         T0000: ""
        //     }
        // };

        await ƒS.Location.show(locations.corridorDay);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);



        // close
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(0.5);

    }
}