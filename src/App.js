// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="container">
      <div className="form">
        <h3>Web3Bridge Form</h3>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="your name" />
          <label htmlFor="">Email</label>
          <input type="text" placeholder="your@email.com" />
          <label htmlFor="">Phone #</label>
          <input type="text" placeholder="234-456-678" />
          <label htmlFor="">Gender</label>
          <select name="" id="">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </form>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
