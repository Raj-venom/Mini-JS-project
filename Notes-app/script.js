"use strict"

const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll('.note textarea');
    let data = []

    notes.forEach((note) => {

        data.push(note.value)
    })

    localStorage.setItem('notes', JSON.stringify(data))
}

const loadNotes = () => {
    let data = localStorage.getItem("notes");
    data = JSON.parse(data)

    // if there is no value saved on localStorage active addNotes()
    if (data == null || data.length == 0) {

        addNotes()
    }
    else {

        data.forEach((text) => {
            addNotes(text)
        })
    }

}


const addNotes = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note')
    note.innerHTML = `
     <div class="tool">
     <i class="fas fa-save"></i>

    <i class="fas fa-trash"></i>
    </div>
    <textarea spellcheck="false" >${text}</textarea>
     `
    console.log(text)

    note.querySelector('.fa-trash').addEventListener('click', function () {
        note.remove()
        saveNotes()
    })

    note.querySelector('textarea').addEventListener('focusout', function () {
        saveNotes()
    })

    main.appendChild(note);
    saveNotes()

}

loadNotes()
