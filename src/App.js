/* src/App.js */
import React, { useEffect, useState } from 'react'
import './App.css';
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'

const initialState = { name: '', description: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
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
    <div style={styles.container}>
        <div className="banner"/>
        <div style={styles.content}>
          <div>
          <b>অ্যালামনাই কি?</b><br/>
          স্কুল, কলেজ কিংবা বিশ্ববিদ্যালয়ের প্রাক্তন ছাত্রকে বলা হয় Alumnus, প্রাক্তন ছাত্রীকে বলা হয় Alumna, আর প্রাক্তন ছাত্র-ছাত্রীদেরকে বলা হয় Alumni(plural).ল্যাটিন শব্দ Alumni যার ইংরেজি শব্দ Students এবং বাংলা শব্দ ছাত্র-ছাত্রী। সুতরাং স্কুল,কলেজ কিংবা বিশ্ববিদ্যালয়ের প্রাক্তন ছাত্র-ছাত্রীদেরকে নিয়ে গঠিত সংগঠনকে বলা হয় অ্যালামনাই এসোসিয়েসন।১৮৪০ সালে আমেরিকার মার্শাল কলেজের প্রাক্তন ছাত্র-ছাত্রীরাই সংগঠিত হয়ে গড়ে তুলেছিলো অ্যালামনাই এসোসিয়েসন,একটা ওল্ড নেটওয়ার্ক।তারপর একে একে গড়ে ওঠে পৃথীবি বিখ্যাত অ্যালামনাই এসোসিয়েসনসমুহ হার্ভাড ইউনিভার্সিটি,এমআইটি,ইয়েল ইউনিভার্সিটি অ্যালামনাই এসোসিয়েসনসমুহ। মার্ক জুকারবার্গ,বারাক ওবামা,বিল গেটস সবাই যেমন হার্ভার্ড অ্যালামনাই।
          <br/>
          <p>
          <b>লক্ষ্য-উদ্দ্যেশ্যসমুহঃ</b><br/>
          ১)১৯৬৭ হতে ২০২০ পর্যন্ত স্কুলের সকল অ্যালামনাইদের নিয়ে একটা সামাজিক কল্যানমুলক নেটওয়ার্ক তৈরি করা।<br/>
          ২)গ্রাম থেকে শহর, দেশ থেকে বিদেশ যে যেখানে ছড়িয়ে আছে সকলের সাথে একটা আন্ত:সম্পর্ক নির্মানের মাধ্যমে প্রত্যেকে প্রত্যেকের জন্য সহায়ক হয়ে ওঠার প্লাটফর্ম নির্মান।<br/>
          ৩)নবীন প্রবীনদের মধ্যে একটা যোগসূত্র তৈরি করা,যাতে পুরাতনদের ছায়ায়,নতুনরা নুন্যতম প্রস্ফুটিত হবার নানামুখী সুযোগ পায়।<br/>
          ৪)স্কুলের সাথে নিরন্তর যোগাযোগ স্হাপন,শিক্ষার মানোন্নয়নে,স্কুলের সকল কল্যানমুলক কর্মকান্ডে প্রত্যেক অ্যালামনাই সামর্থ্য অনুযায়ী অবদান রাখা।<br/>
          ৫)অত্র অঞ্চলের সাধারন শিক্ষা,কারিগরি শিক্ষার প্রসারে অনেকের অংশগ্রহনে উদ্বুদ্ধ করা,নির্দেশনা প্রদান,সার্বিক দিক দিয়ে তাদের পাশে দাঁড়ানো।<br/>
          ৬)গরীব মেধাবি শিক্ষার্থীদের সার্বিক সহযোগিতার মাধ্যমে তাদের মেধা বিকাশে সহায়তা করা।<br/>
          ৭)উচ্চ শিক্ষার অধিক সুযোগ সৃষ্টি/অধিক অংশগ্রহন নিশ্চিতকরনের লক্ষ্যে পরিকল্পিতভাবে কার্যকরি পদক্ষেপ গ্রহন করা।<br/>
          ৭)স্কুলে প্রতিবছর দেয়াল পত্রিকা বের করার মাধ্যমে নতুন প্রজন্মকে সৃজনশীল কর্মকান্ডে সম্পৃক্ত করা।<br/>
          ৮)সাহিত্যপত্রিকা/,লিটলম্যাগ/,ভাঁজপত্র/স্যুভেনির প্রকাশ করা,যাতে অ্যালামনাইদের মধ্যে একরকমের সৃজনশীল যোগসূত্র তৈরি হয়।<br/>
          ৯)শীতার্ত মানুষের পাশে দাঁড়ানো,গৃহহীন,দুস্হ,অসুস্হ
          ,অসহায় মানুষের কল্যানে নানামুখি মানবিক পদক্ষেপ গ্রহন করা।<br/>
          ১০) এলাকার শিক্ষা,স্বাস্হ্য, কৃষি,যুব,মৎস,সমবায়,নারী,
          প্রকৃতি, প্রযুক্তিগত উন্নয়নে সরকারের উপজেলা/ জেলা 
          পর্যায়ের প্রশাসনের সাথে লিংক তৈরি করে কার্যকরি সহায়তা প্রদান।<br/>
          ১১)এলাকার সকল সামাজিক উন্নয়নমুলক কর্মকান্ডে অংশগ্রহনের মাধ্যমে সামাজিক দ্বায়বোধ প্রতিপালন করা।<br/>
          ১২)কৈলাশগঞ্জ হাই স্কুলের যে সমস্ত সম্মানীত শিক্ষক অত্র স্কুলের প্রাক্তন ছাত্র নন,তারা স্বয়ংক্রিয়ভাবে অ্যালামনাই এসোসিয়েসন পরিচালনা পর্ষদের সম্মানীত উপদেষ্টা হবেন,যাতে এসোসিয়েসনের  সকল কর্মকান্ডে গুরুত্বপুর্ন অংশীদাররুপে কাজ করতে পারেন।
          </p>
          </div>
       
         <div style={styles.contentPad}>
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
          
        </div>
    </div>
  )
}

const styles = {
  container: { width: 950, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  content: { width: 850, margin: '4px auto', display: 'flex', flex: 1, justifyContent: 'center', padding: 20,border:'1px dotted' },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  contentPad:{padding:5},
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App
//export default withAuthenticator(App)