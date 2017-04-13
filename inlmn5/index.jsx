/*jshint esnext: true, moz: true*/
/*jslint browser:true */
/*global React.Component, React, ReactDOM */


//REACT
//=====================================================
//GLOBALS

var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");
//=====================================================
//CLASSES

//First
class First extends React.Component{
    constructor(props){
        super(props);
        
        this.state={text:""}
        
        this.printText = this.printText.bind(this);
    }
    
    printText(e){
        this.setState({text:e.target.value});
    }
    
    render(){
        return(
            <section>
                <input onChange={this.printText} type="text" value={this.state.text} />
                <p>{this.state.text}</p>
            </section>
        );
    }
}
//END First

//Second

class Second extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.calcResult = this.calcResult.bind(this);
    }
    
    calcResult(e){
        let method = e.target.textContent;
        let inputx = document.getElementById("inputx2");
        let inputy = document.getElementById("inputy2");
        let inputCorrect = (inputx !== null && inputy !== null);
        if(inputCorrect){
            
            if(method == "+"){
               
                this.setState({result: `Result is ${parseInt(inputx.value) + parseInt(inputy.value)}`});
            }
            else if(method == "-"){
                this.setState({result: `Result is ${parseInt(inputx.value) - parseInt(inputy.value)}`});
            }
            else if(method == "*"){
                this.setState({result: `Result is ${parseInt(inputx.value) * parseInt(inputy.value)}`});
            }
            else if(method == "/"){
                console.log(inputx.value, inputy.value);
                this.setState({result: `Result is ${parseInt(inputx.value) / parseInt(inputy.value)}`});
            }
        
        }else{
            this.setState({result: ""});
        }
        
    }
    
    render(){
        let sum = Number(this.state.value1)+Number(this.state.value2)
        
        return(
            <section>
                <input id="inputx2" type="text" name="x2" placeholder="value1"/>
                <input id="inputy2" type="text" name="y2" placeholder="value2"/>
                <br/>
                <button onClick={this.calcResult} id="plus2">+</button>
                <button onClick={this.calcResult} id="minus2">-</button>
                <button onClick={this.calcResult} id="times2">*</button>
                <button onClick={this.calcResult} id="devided2">/</button>
                <p>{this.state.result}</p>
            </section>
        );
    }
}
//END SECOND

//Third
class Third extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:"",
            class_name: "stateChange",
            clicked: 0,
            clickedMost: 0
        };
        this.stateChange = this.stateChange.bind(this);
    }
    
    stateChange(e){
        let btn, btnArr=[],clickedTimes = 0,mostClicked;
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        let btn3 = document.getElementById("btn3");
        btnArr =[btn1,btn2,btn3];
        
        for(let i = 1; i <= 3; i++){
            btn = document.getElementById("btn"+i);
            btn.className = "";
        }
        
        let elm = e.target;
        this.setState({text:elm.title,class_name: "stateChange",clicked:this.state.clicked+1});
        elm.className = this.state.class_name;
        
        if(elm.clicked === undefined){
            elm.clicked = 0;
        }
        elm.clicked++;
        if(elm.clicked > 0){
            for(let i = 0; i < 3; i++){
                clickedTimes = btnArr[i].clicked > clickedTimes ?
                    btnArr[i].clicked:clickedTimes;
                
                if(btnArr[i].clicked == clickedTimes){
                    mostClicked = btnArr[i];
                    
                }
            }
            mostClicked.className = "clickedMost";
            this.setState({clickedMost:mostClicked.clicked});
        }
    }
    
    render(){
        return(
            <section>
                <button title="Första Knappen" onClick={this.stateChange} id="btn1">Btn1</button>
                <button title="Andra Knappen" onClick={this.stateChange} id="btn2">Btn2</button>
                <button title="Tredje Knappen" onClick={this.stateChange} id="btn3">Btn3</button>
                <p>Button:{this.state.text}, Total clicks: {this.state.clicked}, Element clicked most: {this.state.clickedMost}</p>
            </section>
        );
    }
}

//=====================================================
//MAIN
ReactDOM.render(<First />, output1);
ReactDOM.render(<Second />,output2);
ReactDOM.render(<Third />, output3);


//=====================================================
//CALLBACKS


//=====================================================
//FUNCTIONS

