// 1.Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>;

// 2.Create a Complex JSX Element
const JSX = {
  <div>
    <h1></h1>
    <p></p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>}
;

// 3.Add Comments in JSX
const JSX = (
  <div>
  {/* Main Element */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

// 4.Render HTML Elements to the DOM
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Add your code below this line
const targetNode = document.getElementById('challenge-node');
ReactDOM.render(JSX, targetNode);

// 5.Define an HTML Class in JSX
