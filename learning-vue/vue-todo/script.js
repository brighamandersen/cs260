let app = new Vue({
	el: '#app',
	data: {
		todos: [{
			text: "make an app",
			completed: false,
		}, {
			text: "declare victory",
			completed: false,
		}, {
			text: "profit",
			completed: false
		}],
		message: '',
		show: 'all',
		drag: {},
	},
	methods: {
		addItem() {
			this.todos.push({text: this.message, completed: false});
			this.message = '';
		},
		deleteItem(item) {
			const index = this.todos.indexOf(item);
			if (index > -1) {	// If found
				this.todos.splice(index, 1);
			}
		},
		showAll() {
	      this.show = 'all';
	    },
	    showActive() {
	      this.show = 'active';
	    },
	    showCompleted() {
	      this.show = 'completed';
	    },
	    deleteCompleted() {
	      this.todos = this.todos.filter((item) => !item.completed);
	    },
	    dragItem(item) {
	    	this.drag = item;
	    },
	    dropItem(item) {
	    	const indexItem = this.todos.indexOf(this.drag);
	    	const indexTarget = this.todos.indexOf(item);
	    	this.todos.splice(indexItem, 1);	// Remove from old spot
	    	this.todos.splice(indexTarget, 0 , this.drag);	// Add to new spot
	    },
	},
	computed: {
		activeTodos() {
			return this.todos.filter((item) => !item.completed);
		},
		filteredTodos() {
			if (this.show === 'active') {
				return this.todos.filter((item) => !item.completed);
			} else if (this.show === 'completed') {
				return this.todos.filter((item) => item.completed);
			}
			return this.todos;	// if this.show === 'all'
		}
	},
});