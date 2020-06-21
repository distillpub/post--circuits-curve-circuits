export default ({ id, children }) => {
  const _id = id || children.replace(/\ /g, '-').toLowerCase()
  return (
    <a style={{ borderBottom: 'none' }} href={'#' + _id}>
      <h3 id={_id}>{children}</h3>
    </a>
  )
}
