namespace BehindTheScenes {
    export async function beta(): ƒS.SceneReturn {
        
        // name the girl
        dataForSave.nameGirl = await ƒS.Speech.getInput();
        await ƒS.update(0.5);
        characters.girl.name = dataForSave.nameGirl;
}
}