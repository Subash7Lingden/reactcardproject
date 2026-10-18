import LeftContent from "./LeftContent"
import RightContent from "./RightContent"



const Page1Content = (props) => {
  return (
    <div className="py-16 pt-10 px-18 h-[90vh] flex gap-10 items-center">
      <LeftContent />
      <RightContent user={props.users}/>
    </div>
  )
}

export default Page1Content