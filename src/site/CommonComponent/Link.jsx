const Link = ( linkObj ) => {
  
  const linkAction = linkObj.length && linkObj.forEach(link => {
    <div className={`link ${ linkObj.type}`}>
      <a href={ link.href }
        className={ link.className }
      >
        { link.value } 
      </a>
    </div>
  })

  return (
    linkAction
  )
}

export default Link
