// Joke.js file
function Joke({setup, punchline}) {
    return (
        <div>
            {setup && <h3>{setup}</h3>}
            <p>{punchline}</p>
            <hr/>
        </div>
    )
}

// jokesData.js file
const jokesData = [
    {
        setup: "I got my daughter a fridge for her birthday.",
        punchline: "I can't wait to see her face light up when she opens it."
    },
    {
        setup: "How did the hacker escape the police?",
        punchline: "He just ransomware!"
    },
    {
        setup: "Why don't pirates travel on mountain roads?",
        punchline: "Scurvy."
    },
    {
        setup: "Why do bees stay in the hive in the winter?",
        punchline: "Swarm."
    },
    {
        setup: "What's the best thing about Switzerland?",
        punchline: "I don't know, but the flag is a big plus!"
    }
]

function App() {
    // Traverse the jokesData array and then return a component with the props inside to pass to the component and then render
    const jokeElements = jokesData.map((joke) => {
        return <Joke 
                    setup = {joke.setup}
                    punchline = {joke.punchline}
                />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));

            // <Joke 
            //     punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            // />
            // <Joke 
            //     setup="I got my daughter a fridge for her birthday." 
            //     punchline="I can't wait to see her face light up when she opens it." 
            //     isPun={false}
            // />
            // <Joke 
            //     setup="How did the hacker escape the police?" 
            //     punchline="He just ransomware!"
            //     isPun={true}
            // />
            // <Joke 
            //     setup="Why don't pirates travel on mountain roads?" 
            //     punchline="Scurvy." 
            //     isPun={true}
            // />
            // <Joke 
            //     setup="Why do bees stay in the hive in the winter?" 
            //     punchline="Swarm." 
            //     isPun={true}
            // />
            // <Joke 
            //     setup="What's the best thing about Switzerland?" 
            //     punchline="I don't know, but the flag is a big plus!" 
            //     isPun={false}
            // />