/*jshint esnext: true, moz: true*/
/*jslint browser:true */
/*global React.Component, React, ReactDOM, console */


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
        
        this.state={text:""};
        
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
        this.state = {x: "", y: ""};
        this.calcResult = this.calcResult.bind(this);
        this.inputValue = this.inputValue.bind(this);
    }
    
    calcResult(e){
        let method = e.target.textContent;
        let x = this.state.x;
        let y = this.state.y;
        let inputCorrect = (x !== "" && y !== "");
        
        if(inputCorrect){
            
            if(method == "+"){
               
                this.setState({result: `Result is ${parseInt(x) + parseInt(y)}`});
            }
            else if(method == "-"){
                this.setState({result: `Result is ${parseInt(x) - parseInt(y)}`});
            }
            else if(method == "*"){
                this.setState({result: `Result is ${parseInt(x) * parseInt(y)}`});
            }
            else if(method == "/"){
                console.log(x, y);
                this.setState({result: `Result is ${parseInt(x) / parseInt(y)}`});
            }
        
        }else{
            this.setState({result: ""});
        }
        
    }
    
    inputValue(e){
        let elm = e.target;
        let val = elm.id === "inputx2" ? this.setState({x:elm.value}) : this.setState({y:elm.value});
    }
    
    render(){
        let sum = Number(this.state.value1)+Number(this.state.value2);
        
        return(
            <section>
                <input onChange={this.inputValue} id="inputx2" type="text" name="x2" placeholder="value1"/>
                <input onChange={this.inputValue} id="inputy2" type="text" name="y2" placeholder="value2"/>
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
            class1: "",
            class2:"",
            class3:"",
            clicked: 0,
            clickedMost: 0
        };
        //this.stateChange = this.stateChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.click1 = this.click1.bind(this);
        this.click2 = this.click2.bind(this);
        this.click3 = this.click3.bind(this);
    
    }
    click1(e) {
        this.clickBtn(e,"stateChange","","" );
    }
     click2(e) {
        this.clickBtn(e,"","stateChange","" );
    }
     click3(e) {
        this.clickBtn(e,"","","stateChange" );
    }
      
                      
    clickBtn(e,class1,class2,class3){
        let btn, btnArr=[],clickedTimes = 0,mostClicked;
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        let btn3 = document.getElementById("btn3");
        btnArr =[btn1,btn2,btn3];
        let elm = e.target;
        console.log(elm);
        this.setState({text:elm.title,class1: class1,class2:class2,class3: class3,clicked:this.state.clicked+1});
        
        
        if(elm.clicked === undefined){
            elm.clicked = 0;
        }
        elm.clicked++;
        
        if(elm.clicked > 0){
            for(let i = 0; i < 3; i++){
                btnArr[i].className = "";
                elm.className = "stateChange";
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
 
    /*
    //stateChange
    stateChange(e){
        let btn, btnArr=[],clickedTimes = 0,mostClicked;
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        let btn3 = document.getElementById("btn3");
        btnArr =[btn1,btn2,btn3];
        
        //reset class
        for(let i = 1; i <= 3; i++){
            btn = document.getElementById("btn"+i);
            btn.className = "";
        }
        
        //set new class
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
    */
    
    render(){
        return(
            <section>
                <button title="Första Knappen" onClick={this.click1} id="btn1" className={this.class1}>Btn1</button>
                <button title="Andra Knappen" onClick={this.click2} id="btn2" className={this.class3}>Btn2</button>
                <button title="Tredje Knappen" onClick={this.click3} id="btn3" className={this.class3}>Btn3</button>
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

