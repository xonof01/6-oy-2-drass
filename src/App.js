import './App.css';
import Clients from './components/Clients';
import Header from "./components/Header"
import Users from './components/Users';
import {Icon1, Icon2, Icon3} from "./assest/images/Icon"

function App() {
  const usersList = [
    {
      id:1,
      name:"Nuriddin",
      surname:"Askarov",
      imgURL:"https://picsum.photos/id/500/800/800",
      age:"34",
      study:"Out Side"
    },
    {
      id:2,
      name:"Baxodir",
      surname:"Avazxonov",
      imgURL:"https://picsum.photos/id/22/800/800",
      age:"18",
      study:"ISFT"
    }
  ]

  return (
    <>
      <h1 className='text-center font-bold text-[35px]'>Hello JS</h1>
      <Header />
      <Users />
      {usersList.map(item => <Clients userItem={item} />)}
      <Icon1 width={200} height={200} color={"blue"}/>
      <Icon1 width={200} height={200}/>
      <Icon2/>
      <Icon3/>
    </>
  );
}

export default App;
