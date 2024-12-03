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

//.map() is a method on every array
const nums = [1, 2, 3, 4, 5]
// Inside map we need to declare a function that will be run on every method of the array

const square = nums.map(function(item) {
    return item * item;
})

const names = ["alice", "bob", "chalie", "danielle"];

const uppercase = names.map((name) => {
    // Convert the first latter to Upper letter
    return name[0].toUpperCase() + name.slice(1);
})

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

const elements = pokemon.map(mon => {
    return `<p>${mon}</p>`;
})

// React use elements inside the arrays and place them into the components
const colors = [<h3>Red</h3>, <h3>Orange</h3>, <h3>Yellow</h3>, <h3>Green</h3>, <h3>Blue</h3>, <h3>Indigo</h3>, <h3>Violet</h3>];

function Array() {
    return (
        <div>
            {colors}
        </div>
    )
}