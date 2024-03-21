function dis(val) {
    document.getElementById("hasil").value += val;
}

function solve() {
    let x = document.getElementById("hasil").value;
    let y = eval(x);
    document.getElementById("hasil").value = y;
}
function clr() {
    document.getElementById("hasil").value = "";
}
function myFunction(event) {
    let x = event.key;
    if (x === 'Enter') {
        solve();
    } else if (x === 'Escape') {
        clr();
    } else {
        dis(x);
    }
}

