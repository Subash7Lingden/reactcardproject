
import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"


const App = () => {
  const users =[
    {
      img:'https://images.unsplash.com/photo-1548783300-70b41bc84f56?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'royalblue',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'lightseagreen',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'pink',
      tag:'Undeebanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'purple',
      tag:'Underdog'
    },
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App