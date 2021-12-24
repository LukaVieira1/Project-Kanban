import "./Background.css"

const Background = (props) => {
  const { children } = props
  return <main><h1 className="title-bg">Kanban</h1>{children}</main>
}

export default Background