

const todoFormEl = document.querySelector('.todo-form')
const todoListEl = document.querySelector('.todo-list')


todoFormEl.addEventListener('submit', e=> {
  e.preventDefault()
  addTodo(e.target.elements.todo.value)
  //input 안의 내용을 초기화
  //1. `.value` 에 값을 대입하기.
  //e.target.elements.todo.value = ''

  //2. 폼의 reset method 사용하기.
  e.target.reset()
})

function addTodo (newTodoText) {
  //클릭 한번이 되었을때 수행되어야 할 작업
  //alert (newTodoList)

  //li태그를 만들어서, 내용을 채운뒤에 문서 안에 삽입하기
  const todoItemEl = document.createElement('li')
  todoItemEl.classList.add('todo-list-item')
  todoItemEl.textContent = newTodoText
  todoListEl.appendChild(todoItemEl)

  //삭제 버튼을 만들어서 문서안에 넣기
  const deleteButtonEl= document.createElement('button')
  deleteButtonEl.classList.add("todo-list-btns")
  deleteButtonEl.textContent = 'DELETE'
  //todoItemEl 그러니까 추가된 할일 목록에다 DeleteButton 넣기
  todoItemEl.appendChild(deleteButtonEl)
  //삭제 버튼을 클릭했을때 할일 항목이 삭제 되게 만들기
  deleteButtonEl.addEventListener('click', e=> {
    todoListEl.removeChild(todoItemEl)
    //e.target.parentElement.parentElement.removeChild(e.target.parentElemnet)
    //todolistEl로 부터 자식인 todoitemel을 지우겠다.
  })
  //위로 버튼 만들어서 문서안에 넣기
  const upButtonEl=document.createElement('button')
  upButtonEl.classList.add("todo-list-btns")
  upButtonEl.textContent = 'UP'
  //Button의 이름이 UP이야
  todoItemEl.appendChild(upButtonEl)
  upButtonEl.addEventListener('click', e=>{
    //alert('Just pressed UP Button')
    todoListEl.insertBefore(todoItemEl, todoItemEl.previousElementSibling)
  })
 // insertBefore의 특징을 조사해보잣 !

  //아래로 버튼 만들어서 문서안에 넣기
  const downButtonEl=document.createElement('button')
  downButtonEl.classList.add("todo-list-btns")
  downButtonEl.textContent = 'DOWN'
  //Button의 이름이 DOWN이야
  todoItemEl.appendChild(downButtonEl)
  downButtonEl.addEventListener('click', e=>{
    if(todoItemEl.nextElementSibling != null){
      //null check
      todoListEl.insertBefore(
      todoItemEl.
      todoItemEl.nestElementSibling.nestElementSibling)
    }
    //alert('Just pressed DOWN Button')
    todoListEl.insertBefore(todoItemEl, todoItemEl.nextElementSibling.nextElementSibling)
  })
}


// //
// document.querySelector('todo-input').addEventListener('keydown', e=>{
//   console.log('키가 눌렀을때')
//   console.log('key:',e.key)
//   e.preventDefault() // 스크롤이 안된다.
// })

// document.querySelector('todo-input').addEventListener('keyup', e=>{
//   console.log('키가 떼졌을때')
//   console.log('key:',e.key)
// })

// documnet.querySelector('.todo-input').addEventListener('keypress', e=>{
//   console.log('keypress')
//   console.log('key:', e.key)
// })

