import picture from '../img/ik.jpg'
const Home = () => {
    return ( 
          <div className="text">  
      
      <h1>Juliany Rosenblad</h1>
      <h2>Fullstack developer</h2>
      <h2>Hobbies: Gamen, Muziek luisteren en Basketball</h2>
      <div className='picture'>
      <img src={picture} alt="Juliany"/>
      </div>

    </div>
     ); 
}
export default Home;