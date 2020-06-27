/* src/App.js */
import React, { useEffect, useState } from 'react'
import './App.css';
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import im1 from './img/01.png';
import im2 from './img/02.png';
import im3 from './img/03.png';
import im4 from './img/04.png';
import './css/Footer.css';
const initialState = { name: '', description: '' }

const App = () =>{
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    //fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <Router>
     <Navbar/>
     <div className="banner">
       
     </div>
      <div style={styles.container}>
      <div className="row" style={styles.content}>
          <div className="col-md-12 col-sm-12">
            <h3>What & Why Alumni</h3>
            <p>
            Students who have graduated from a school, college or university is called an alumnus, a girl alumnus is called an alumna, where alumni is formd as plural. Thus, an organization consisting of alumni of a school, college or university is called an alumni association. MIT, Oxford University Alumni Associations. Mark Zuckerberg, Barack Obama, Bill Gates are all Harvard alumni.
            </p>
          </div>
        </div>
        <div className="row" style={styles.content}>
        <div  className="col-md-12 col-sm-12">            
            <h3>Our Mission</h3>
            <p>
            ※ Creating a social welfare network with all the alumni of the school from 198 to 2020.<br/>
            ※ Building a platform for everyone to become helpful by building an inter-relationship with everyone from village to city, country to foreign wherever it is spread.<br/>
            ※ Createing a link between the young and the old, so that in the shadow of the old, the new has the opportunity to flourish in the least.<br/>
            ※ Establishing constant communication with the school, to improve the quality of education, to contribute to all the welfare activities of the school according to the ability of each alumni.<br/>
            ※ General education in the region, to encourage the participation of many in the expansion of technical education, to give guidance, to stand by them in all aspects.<br/>
            ※ Helping poor meritorious students in developing their talents through overall cooperation.<br/>
            ※ Taking planned and effective steps to create more opportunities / higher participation in higher education.<br/>
            ※ Involving the new generation in creative activities by publishing wall magazines in the school every year.<br/>
            </p>
            <p>
            <div className="btn btn-danger">Know More</div>
            </p>

          {/* <div style={styles.contentPad}>
          <h2>Registration</h2>
            <input
              onChange={event => setInput('name', event.target.value)}
              style={styles.input}
              value={formState.name} 
              placeholder="Name"
            />
            <input
              onChange={event => setInput('description', event.target.value)}
              style={styles.input}
              value={formState.description}
              placeholder="Description"
            />
            <button style={styles.button} onClick={addTodo}>Register</button>
            {
              todos.map((todo, index) => (
                <div key={todo.id ? todo.id : index} style={styles.todo}>
                  <p style={styles.todoName}>{todo.name}</p>
                  <p style={styles.todoDescription}>{todo.description}</p>
                </div>
              ))
            }
          </div>
          
             */}
          </div>
         
        </div>
        {/* <div className="row">
          <div style={styles.joinnetwork} className="col-md-12 col-sm-12">
             Join our Network
          </div>
        </div> */}
        <div className="row" style={styles.content}>
          <div className="col-md-12 col-sm-12">
            <h3>Our Responsibility</h3>
            <div class="col-lg-3 col-sm-6">
                <div className="single-responsibility">
                    <img src={im1} alt="Responsibility"/>
                    <h4>Scholarship</h4>
                    <p>De create building thinking about your requirment and latest treand on our marketplace area</p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div className="single-responsibility">
                    <img src={im2} alt="Responsibility"/>
                    <h4>Help current students</h4>
                    <p>De create building thinking about your requirment and latest treand on our marketplace area</p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div className="single-responsibility">
                    <img src={im3} alt="Responsibility"/>
                    <h4>Help institution</h4>
                    <p>De create building thinking about your requirment and latest treand on our marketplace area</p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div className="single-responsibility">
                    <img src={im4} alt="Responsibility"/>
                    <h4>Build our community</h4>
                    <p>De create building thinking about your requirment and latest treand on our marketplace area</p>
                </div>
            </div>
          </div>

        </div>
      </div>
     <Footer/>
    </Router>
  )
 }

const styles = {
  container: { width: 950, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  content: {padding:"5px", border:'1px #e2e2e2 solid',borderRadius:5,margin:'5px' ,boxShadow: '5px 5px 2px 1px #e2e2e2'},
  todo: {  marginBottom: 15 },
  joinnetwork:{padding:30,borderRadius:50,border:'1px solid' },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  contentPad:{padding:5},
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

//export default App
export default withAuthenticator(App)