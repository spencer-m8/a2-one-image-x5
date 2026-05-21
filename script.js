document.addEventListener('keydown', (event) => {
    //event.key gives the key pressed
    //event.code is keycode (for comparisons)
    console.log(`Key pressed: ${event.key}`);
});

const el = document.getElementById("keyCodes");
const held = new Set();
let combo = [];

const next = () => {
    combo = Array.from({length: 3}, () => String.fromCharCode(97 + Math.floor(Math.random() * 26)), );

    el.innerHTML = `Press: ${combo.join(" + ")}`;
};

window.onkeydown = (e) => {
    held.add(e.key.toLowerCase());
    if (held.has(combo[0]) && held.has(combo[1]) && held.has(combo[2])) {
        const score = combo .join("") .split("") .reduce((sum, c) => sum + c.charCodeAt(0), 0);
        document.body.style.backgroundColor = `hs1(${(score *35) % 360}, 70%, 70%)`;
        held.clear();
        next();
    }
}