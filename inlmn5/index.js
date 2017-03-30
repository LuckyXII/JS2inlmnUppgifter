//REACT
//=====================================================
//GLOBALS

var input1 = document.getElementById("textInput1");
var output1 = document.getElementById("output1");
//=====================================================
//CLASSES
class First extends React.Component{
    render(){
        return(
             <p>HelloWorld</p>
        );
    }
}

//=====================================================
//RENDER
ReactDOM.render(<First />, output1 );