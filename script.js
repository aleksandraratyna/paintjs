let active = false;

const draw = function (ourEvent) {

    if (active == false) return;

    const x = ourEvent.clientX;
    const y = ourEvent.clientY;

    const div = document.createElement("div");
    div.style.top = y + "px";
    div.style.left = x + "px";
    document.body.appendChild(div);

}

const drawActive = function () {
    active = !active;
}


document.body.addEventListener("mousemove", draw);
document.body.addEventListener("mousedown", drawActive);
document.body.addEventListener("mouseup", drawActive)

/* @TODO zrobić, żeby działało na ekranach dotykowych, poniższy kod nie działa */
document.body.addEventListener("touchmove", draw);
document.body.addEventListener("touchstart", drawActive);
document.body.addEventListener("touchend", drawActive) 