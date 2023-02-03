namespace Template {
    export async function roofRight(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        // let isFavorite = findFavorite();

        // drei fälle für die erklärung:
        // diary true und key true
        // diary false und key false
        // diary false und key true ODER diary true und key false

        // let conclusionDiaryKey = {
        //     Protagonist: {
        //         T0001: "Lucia erwies sich als vertrauenswürdig. Sie gab mir den Tipp, dass dein Alibi zum Himmel stinkt.",
        //         T0002: "Außerdem hatte der Täter uns eine Warnung zukommen lassen. Diese Warnung verglich ich mit einer Probe deiner Handschrift...",
        //         T0003: "Auf den ersten Blick ähnelten sie sich nicht, aber ein paar Buchstaben sehen identisch aus. Ich glaube, du hast versucht, eine andere Handschrift zu imitieren."
        //         T0004: "Und zu guter Letzt... Ich bin ein guter Menschenkenner. Solas wirkte aufrichtig, als er sein Mitgefühl mit der Kostümschneiderin äußerte.",
        //}
        // };

        // let conclusionNoDiaryNoKey = {
        //     Protagonist: {
        //         T0001: "Der Täter hatte uns eine Warnung zukommen lassen. Es sah erst so aus, als gehöre die Handschrift zu Solas...",
        //         T0002: "Doch Solas brachte mich auf die Idee, dass jemand seine Handschrift imitiert haben könnte. Deswegen sah ich mir die Warnung noch einmal an...",
        //         T0003: "Dabei fiel mir auf, dass einige Buchstaben aus der Reihe tanzten. So war mir klar, dass jemand Solas die Sache anhängen wollte.",
        //         T0004: "Aber wer könnte so meisterhaft eine andere Handschrift fälschen? Du, natürlich. Seit Jahren bist du Mitglied in der Kalligraphie AG. Lucia, der Nerd, hat dagegen wahrscheinlich noch nie einen Stift benutzt."
        //     }
        // };

        // let conclusionNoDiaryKey = {
        //     Protagonist: {
        //         T0001: "Lucia erwies sich als vertrauenswürdig. Sie gab mir den Tipp, dass dein Alibi zum Himmel stinkt.",
        //         T0002: "Außerdem hatte der Täter uns eine Warnung zukommen lassen. Dabei fiel mir auf, dass einige Buchstaben aus der Reihe tanzten...",
        //         T0003: "Jemand hatte also versucht, die Schrift eines anderen zu imitieren. Doch wer hätte die Fähigkeiten dazu? Du, natürlich. Seit Jahren bist du Mitglied in der Kalligraphie AG.",
        //         T0004: "Und zu guter Letzt... Ich bin ich ein guter Menschenkenner. Solas wirkte aufrichtig, als er sein Mitgefühl mit der Kostümschneiderin äußerte."
        //     }
        // };

        // let protagonistText = {
        //     Protagonist: {
        //         T0001: "Ich habe dich hergerufen, um dich zu stellen. Ich weiß, dass du der Saboteur bist. Du bist überführt, Atlas.",
        //         T0002: "Na gut, lass mich dir meine Schlussfolgerungen darlegen...",
        //         T0003: "Reicht dir das?"
        //     }
        // };

        // let kiraText = {
        //     Kira: {
        //         T0001: "Huh?"
        //     }
        // };

        // let atlasText = {
        //     Atlas: {
        //         T0001: "Überführt, ja? Wieso glaubst du, dass ich der Täter bin?",
        //         T0002: "Schon gut, ich gebe es zu. Du hast mich in meinem eigenen Spiel besiegt.",
        //         T0003: "Ich habe die Sabotage inszeniert, um dir ein wenig Zeit zu stehlen. Jede freie Minute steckt deine Nase in einem Buch. Ich wollte nicht, dass du mir den Titel des Jahrgangsbesten abnimmst.",
        //         T0004: "Solas sagte etwas darüber, dass hinter der Sabotage etwas Tieferes steckt... und es stimmt. Ich glaube, ich hatte Angst. Wenn ich nicht der Beste sein kann... wer bin ich dann überhaupt?",
        //         T0005: "Ich sehe jetzt ein, dass das dumm war."
        //     }
        // };

        // let narratorTextAtlasFavorit = {
        //     Narrator: {
        //         T0000: "Atlas gibt also zu, der Täter zu sein. Die Entscheidung liegt nun bei dir..."
        //     }
        // };

        // let narratorText = {
        //     Narrator: {
        //         T0000: "Atlas gibt also zu, der Täter zu sein... Gute Arbeit!"
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