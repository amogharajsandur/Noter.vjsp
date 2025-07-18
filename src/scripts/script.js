const noteCapturer = document.getElementById("add-note");
let noteRenderer = document.getElementById("display-section");

noteCapturer.addEventListener("click", captureNote);

function captureNote() {
    let capturedNote = document.getElementById("note-input");
    if (capturedNote.value) {
        renderNote(capturedNote.value);
    } else {
        alert("Note is empty!");
    }
}

function renderNote(note) {
    noteRenderer.innerHTML += note;
}