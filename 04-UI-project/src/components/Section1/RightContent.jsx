
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  
  return (
    <div id='right' className=' p-6 h-full w-2/3 flex flex-nowrap gap-10 overflow-auto rounded-4xl'>
        {props.user.map(function(elem, idx){
          return <RightCard key={idx}color={elem.color} id={idx} img ={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent