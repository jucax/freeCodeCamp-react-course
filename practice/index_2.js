
// First parameter of ReactDOM is what I want to place, and the second is where to place it 
ReactDOM.render(<h1>Hello React</h1>,document.getElementById("root"));

// We can wrtite multiple lines in the first parameter
ReactDOM.render(<ul><li>Thing 1</li><li>Thing 2</li></ul>,
document.getElementById("root"));

// Navbar from bootstrap
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}


ReactDOM.render(
    <div>
        <Navbar />
        <MainContent /> 
    </div>,
    document.getElementById("root")
)

// Declarative -> What should be done?: The program solve how to get it done -> React
// Imperative -> How should it be done?: The program need every step of how to do it -> Vanilla JS

/* 
Challenge - recreate the above line of code in vanilla JS by creating and appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// I have to give step by step
const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
history.className = "header";
document.getElementById("root").append(h1);
console.log(h1);

// React solve how to render it
// ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

// JSX -> A type of JS that looks like HTML
// We can just add one parent element in the render, so we need <div>
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

ReactDOM.render(
    page, 
    document.getElementById("root")
)

// JSX actually create JS objects with the HTML code
/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navBar = (
    <nav>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navBar, document.getElementById("root"));

// Another way to render the nav bar
// ReactDOM.createRoot(document.getElementById("root")).render(navBar);

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append your JSX
3. See if you can guess what will show up in the browser before running the code
4. See if you can explain what actually shows up in the browser
 */

const page2 = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's hirable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

// It doesnt work because we are converting React to JS script object, and we need to use React function to interpret them
//document.getElementById("root").append(JSON.stringify(page2));
ReactDOM.render(page2, document.getElementById("root"));

// Props allow us to insert changing values inside HTML code
function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
    const date = new Date();

    // Anythin inside {} can be run as JS code, it can be a value or a function
    return (
        <div>
            <h1>Hello {firstName} {lastName}</h1>
            <h1>It is currectly about {date.getHours() % 12}</h1>
        </div>
    )
}

// We receive the props as an object
const person = {
    img: image.png,
    name: "Name",
    phone: "5555"
}

// When we use it in react we can do it as
console.log(person.img);

// Or we can destructure it and use
const {img, name, phone} = person;
console.log(img);