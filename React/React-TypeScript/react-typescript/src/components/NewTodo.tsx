import React, {useRef} from 'react'

export const NewTodo: React.FC<{onAddTodo: (todoText: string) => void}> = ({onAddTodo}) => {
    const textInput = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredInputText = textInput.current!.value;

        if(enteredInputText.trim().length === 0) {
            return;
        }

        onAddTodo(enteredInputText)
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={textInput}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}