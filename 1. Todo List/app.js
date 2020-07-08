const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const list = document.querySelector('.todos');
const search = document.querySelector('#search');

// Add Todos
const addTodo = todo => {
	html = `<li class="list-group-item">${todo}<span class="material-icons align-middle float-right">delete_outline</span></li>`
	ul.innerHTML += html;
}

addForm.addEventListener('submit', e => {
	e.preventDefault();
	const todo = e.target.add.value.trim();

	if(todo.length){           // if length is 0, it will be false
		addTodo(todo);
		addForm.reset();      // The input field will be resetted
	}
});

// Delete Todos
list.addEventListener('click', e => {
	if(e.target.textContent.includes('delete_outline')){
		e.target.parentElement.remove();
	}
});

//search todos
const searchTodo = searchTerm => {
	Array.from(list.children)														// converts the HTML collection into array  
		.filter(todo => !todo.textContent.toLowerCase().includes(searchTerm))		// if it does not include the search term,
			.forEach(todo => todo.classList.add("filtered"));  						// the filtered class will be added.

	Array.from(list.children)
		.filter(todo => todo.textContent.toLowerCase().includes(searchTerm))		// if it does not include the search term,
			.forEach(todo => todo.classList.remove("filtered")); 					// the filtered class will be removed.
};

search.addEventListener('keyup', e =>{
	const searchTerm = e.target.value.trim().toLowerCase();			
	searchTodo(searchTerm);
});