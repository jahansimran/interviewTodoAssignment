import './index.css'

const TodoItem = props => {
    const { TodoDetails, onDeleteTodo, checkBoxTodo } = props
    const { id, todoPara } = TodoDetails
    const labelClassName = checkBoxTodo ? 'line ' : 'line through'

    const onDeleteBtn = () => {
        onDeleteTodo(id)
    }

    const onChangeCheckBox = event => {
        checkBoxTodo(event.target.value)
    }

    return (
        <li className="list-item">
            <div className="check-box-para">
                <input type="checkbox" className="check-box" id="checkBox" onChange={onChangeCheckBox} />
                <label className={labelClassName} htmlFor="checkBox">{todoPara}</label>
            </div>
            <button type="button"
                className="delete-btn"
                onClick={onDeleteBtn}>
                Delete
            </button>
        </li>
    )
}

export default TodoItem