const ListItem = ( items ) => {

  return (
    <ul className={'link'}>
      {  
        items.length && items.map((link, ind) => {
          return <li key={ind} href={ link.href }
            className={'listItem'}
          >
            <a
              href={'d'}
              className={ link.className }
            >
              { link.value }
            </a>
          </li>
        }) 
      }
    </ul>
  )
}

export default ListItem
