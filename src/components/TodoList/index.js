import { Component } from 'react'
import {v4} from 'uuid'
import TodoItem from '../TodoItem'

import './index.css'

class TodoList extends Component {
    state={searchInput:'', list:[], box:'false'}
   

    onSubmitTodo = event => {
        event.preventDefault()
        const {searchInput} = this.state
        if (searchInput === ''){
            alert("Enter a Todo")
        }else {
            const newTodo = {
                id:v4(),
                todoPara:searchInput
            }
            this.setState(prevState => ({
                list: [...prevState.list, newTodo],
                searchInput:'',      
            }))
            
        }
            
    }

    onChangeSearchInput = event => {
        this.setState({searchInput:event.target.value})
      
    }

    onDeleteTodo = id => {
        const {list} = this.state
        const deletedList = list.filter(deletedTodo => 
            deletedTodo.id !== id)
        this.setState({list:deletedList})
    }

    checkBoxTodo = id => {
        this.setState({box:false})
    }

    render() {
     const {searchInput,list} = this.state
        return (
            <div className="page-container">
                <div className="todo-part">
                    <h1 className="heading">Todo List</h1>
                    <form className="input-add-btn-container" onSubmit={this.onSubmitTodo}>
                        <input type="text" className="input-bar" onChange={this.onChangeSearchInput} value={searchInput}/>
                        <button type="submit" className="add-todo-btn">Add Todo</button>
                    </form>
                    <ul className="un-order-list-item">
                        {list.map(each => <TodoItem key={each.id} 
                        TodoDetails={each} 
                        onDeleteTodo={this.onDeleteTodo}
                        checkBoxTodo={this.checkBoxTodo}
                        />)}
                    </ul>
                    
                </div>
            </div>

        )
    }
}

export default TodoList