function Joke({setup, punchline}) {
    // There can be cases when we dont have one of the parameters for some components, in that case we can use vanilla JS condition to verify if we have the parameter to render each part of the component
    return (
    <div>
        {setup && <p>{setup}</p>}
        <p>{punchline}</p>
        <hr/>
    </div>
    )
}

function App() {
    return (
        // With react, we can pass every type of values to our components, inside the {} we can pass strings, ints, arrays and even other objects
        <div>
            <Joke 
                setup="This is the setup 1" 
                punchline="This is the punchline 1"
                isPun = {true}
                upvotes = {10}
                downvotes = {2}
                comments = {[{author: "", body: "", title: ""}, {}]}
            />
            <Joke 
                setup="This is the setup 2" 
                punchline="This is the punchline 2"
                isPun = {false}
                upvotes = {10}
                downvotes = {2}
                
            />
            <Joke 
                setup="This is the setup 3" 
                punchline="This is the punchline 3"
                isPun = {true}
                upvotes = {10}
                downvotes = {2}
            />
            <Joke 
                setup="This is the setup 4" 
                punchline="This is the punchline 4"
                isPun = {false}
                upvotes = {10}
                downvotes = {2}
            />
            <Joke 
                setup="This is the setup 5" 
                punchline="This is the punchline 5"
                isPun = {false}
                upvotes = {10}
                downvotes = {2}
            />
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"));