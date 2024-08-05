
// Function 1
export const handleNewDarkFilePath = (isDark, DarkPath, LightPath, Id) => {
    isDark.subscribe((dark) => {
        const merryElement = document.getElementById(Id);
        if (merryElement) {
            if (dark) {
                merryElement.src = DarkPath;
            } else {
                merryElement.src = LightPath;
            }
        }
    });
}


