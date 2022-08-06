const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const noteButton = document.getElementById("addNoteButton")
const template = document.getElementById("noteTemplate")
const container = document.getElementById("container")
const deleteButton = document.getElementById("deleteButton")

const getDate = function() {
  var currentDate = new Date()

  var month = MONTHS[currentDate.getMonth()]

  var day = String(currentDate.getDate())
  if (day == "1") day += "st"
  else if (day == "2") day += "nd"
  else day += "th"

  var year = String(currentDate.getFullYear())

  newDate = [month, day, year].join(' ')
  return newDate
}

const buildNoteElement = function(title, content) {
  const newNote = document.createElement('div')
  newNote.classList.add('note', 'hidden')

  const newTitle = document.createElement('b')
  newTitle.classList.add('title')
  const titleContent = document.createElement('div')
  titleContent.classList.add('title')
  const deleteButton = document.createElement('div')
  deleteButton.classList.add('delete')
  deleteButton.innerHTML = 'X'
  newTitle.append(titleContent)
  newTitle.append(deleteButton)
  deleteButton.addEventListener("click", function() {
    setTimeout(function() { newNote.classList.add('hidden'); }, 0);
    newNote.remove()
  })


  titleContent.innerHTML = title
  newNote.append(newTitle)

  const newContent = document.createElement('p')
  newContent.classList.add('content')
  newContent.innerHTML = content
  newNote.append(newContent)


  currentDate = getDate()
  const newDate = document.createElement('p')
  newDate.classList.add('date')
  newDate.innerHTML = currentDate
  newNote.append(newDate)
  return newNote
}


const createNote = function() {

  title = template.children[0].innerHTML
  content = template.children[1].innerHTML

  if (title.length != 0) {
    newNote = buildNoteElement(title, content)
    container.append(newNote)
    setTimeout(function() { newNote.classList.remove('hidden'); }, 0);
    console.log(newNote.clientHeight)

    console.log(newNote)
  }

  template.children[0].innerHTML = ''
  template.children[1].innerHTML = ''
}



noteButton.addEventListener("click", createNote)
template.addEventListener("keypress", function(event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    noteButton.click()

  }

})
template.children[0].innerHTML = 'sshhbj'
template.children[1].innerHTML = ''
createNote()

