import React, { useRef } from 'react'
import './styles.css'


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
    goClicks: number;
}

const InputField = ({ todo, setTodo, handleAdd, goClicks }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur();
        }}>
            <input
                ref={inputRef}
                type="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter a task"
                className="input_box"></input>
            <button className="input_submit" type="submit">
                Go
            </button>
            <label className="input_counter">{goClicks}</label>
        </form>
    );
}

export default InputField