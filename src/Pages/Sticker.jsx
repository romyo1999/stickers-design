import Card from '../component/Card'
import { useProductContext } from '../providers/ProductProvider'

const Sticker = () => {
  const {stickers}=useProductContext()
  return (
    <div className='container'>
            
    <div className='row'>
      {
        stickers?.map((e)=>(
          <Card key={e._id} data={e}/>
          ))
      }
    </div>
  </div>
  )
}

export default Sticker
