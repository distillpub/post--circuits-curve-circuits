export default ({ id, children }) => {
  const _id = id || children.replace(/\ /g, '-').toLowerCase()
  return (
    <a style={{ borderBottom: 'none' }} href={'#' + _id}>
      <h2 id={_id}>{children}</h2>
    </a>
  )
}
