import './tag.scss'

function Tag({des}) {

    return (
        <div className='tags_global'> 
        {des?.map((des, index) => (
            <span className='tag' key= {index} >{des} </span>
        ))} 
        </div>

    )


    
  /*   {des.map((des, cle) => {
        return (
          <div className="tag"> {des} </div>
        );
      })}
     */
    
}

export default Tag
