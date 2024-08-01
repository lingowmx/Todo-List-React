import "./index.css"

export const TodoList = ({children}) => {
  return (
    <ul className="list">
     {children}
    </ul>
  )
}
