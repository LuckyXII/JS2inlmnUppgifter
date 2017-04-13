/*jshint esnext: true, moz: true*/
/*jslint browser:true */
/*global React, ReactDOM, React.Component, console */


//=======================================================
//CLASSES

//APP
class App extends React.Component{
    //CONSTRUCTOR
    constructor(props){
        super(props);
        this.state = {
            list:[{item:"some",color:"thing"}],
            item:"",
            color:""
        };
        this.addNewItem = this.addNewItem.bind(this);
        this.fillOutForm = this.fillOutForm.bind(this);
    }
    
    //AddNewItem
    addNewItem(){
        let inputs = document.getElementsByClassName("input");
        let oldList = this.state.list;
        let newItem = [{item:inputs[0].value,color:inputs[1].value}];
        this.setState({
            list:oldList.concat(newItem),
            item: "", color: ""
        });
        inputs[0].value="";
        inputs[1].value="";
    }
    
    //fillOutForm
    fillOutForm(e){
        let itemID = Number(e.target.id)-1;
        let list = this.state.list;
        this.setState({
            item: list[itemID].item, 
            color: list[itemID].color,
            id: itemID
        });
    }

    //Render
    render(){
        return(
            <section>
                <MyList fillForm={this.fillOutForm} list={this.state.list} />
                <AddForm  addItem={this.addNewItem} item={this.state.item} color={this.state.color} />
            </section>
        );
    }
}

//ADDFORM
class AddForm extends React.Component{
    //CONSTRUCTOR
    constructor(props){
        super(props);
        this.state = {item: this.props.item, color: this.props.color};
        this.setValueItem = this.setValueItem.bind(this);
        this.setValueColor = this.setValueColor.bind(this);
        this.updateState = this.updateState.bind(this);
    
    }
    
    //update state
    updateState(){
        console.log("state:",this.state);
        this.setState({
            item: this.props.item, 
            color: this.props.color
        });
    }
    //Set item value
    setValueItem(e){
        let value = e.target.value;
        this.setState({item:value});
    }
    //Set color value
    setValueColor(e){
        let value = e.target.value;
        this.setState({color:value});
    }
    
    //Render
    render(){
        let value = `Item: ${this.props.item}  Color: ${this.props.color}`;
        this.props.update;
        console.log(this.props);
      
        return(
            <section>
                <form id="form">
                    <input  onChange={this.setValueItem} type="text" className="input" placeholder="prop1" value={this.state.item}/>
                    <input  onChange={this.setValueColor} type="text" className="input" placeholder="prop2" value={this.state.color}/>
                 
                    <button type="button"  onClick={this.props.addItem}>Add</button><br/>
                    <input type="text" className="input" placeholder="Item Info" value={value} readOnly="true"/>
                </form>    
            </section>
        );
    }
}

//MYLIST
class MyList extends React.Component{
     
    render(){
        let i = 0;
        const newList = this.props.list.map((item)=>{
            i++;
            return (
                <li className ="listItems" key={i}>
                    <div className="itemDiv">
                        <h4 onClick={this.props.fillForm} id={i}>Item {i}</h4>
                    </div>
                </li>);    
        });
        
        return(
            <section>
                <ol>{newList}</ol>
            </section>
        );
    }
}

//=======================================================
//GLOBALS
var app = document.getElementById("app");
//=======================================================
//MAIN

ReactDOM.render(<App />, app);


