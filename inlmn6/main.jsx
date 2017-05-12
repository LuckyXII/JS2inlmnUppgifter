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
            list:myList,
            item:"",
            color:"",
            id: "",
            status: "",
            btnTxt:"Add"
        };
        this.addNewItem = this.addNewItem.bind(this);
        this.fillOutForm = this.fillOutForm.bind(this);
        this.inputValue = this.inputValue.bind(this);
        this.editItems = this.editItems.bind(this);
        this.removeItems = this.removeItems.bind(this);
    }
    
    //inputValue
    inputValue(e){
        let inp = e.target;
        
        if(inp.name === "item"){
            this.setState({
                item: inp.value
            });
        }
        else if (inp.name === "color"){
            this.setState({
                color: inp.value
            });
        }
    }
    
    //AddNewItem
    addNewItem(e){
        let oldList = this.state.list;
        let newItem = [{item:this.state.item,color:this.state.color}];

        if(e.target.textContent === "Add"){
        
            this.setState({
                list:oldList.concat(newItem),
                item: "", color:"",
                status:"Item added successfully"
            });
        }else{
            oldList[this.state.id] = {item: this.state.item, color: this.state.color};
            this.setState({btnTxt:"Add",status:"Item updated successfully"});
        }
        
    }
    
    //fillOutForm
    fillOutForm(e){
        let itemID = Number(e.target.id)-1;
        let list = this.state.list;
        this.setState({
            item: list[itemID].item, 
            color: list[itemID].color,
            id: itemID+1
        });
    }
    
    //Edit Items
    editItems(){
        this.setState({btnTxt:"update"});
    }
    //Remove Items
    removeItems(e){
        let li = e.target;
        let parent = li.parentNode;
        let id = parent.children[0].id;
        id = Number(id)-1;
        let oldList = this.state.list;
        let listStart = oldList.slice(0,id);
        let listEnd = oldList.slice(id+1);
        let newList = listStart.concat(listEnd);
        
        this.setState({list: newList,status:"Item removed successfully"});
    }

    //Render
    render(){
        return(
            <section>
                <MyList 
                    fillForm={this.fillOutForm} 
                    list={this.state.list}
                    editItems={this.editItems}
                    removeItems={this.removeItems}
                    id={this.state.id}
                />
                <AddForm 
                    setValue={this.inputValue}  
                    addItem={this.addNewItem}
                    item={this.state.item}
                    color={this.state.color}
                    txt={this.state.btnTxt}
                />
                <p id="status">{this.state.status}</p>
            </section>
        );
    }
}

//ADDFORM
class AddForm extends React.Component{
    render(){
        return(
            <section>
                <form id="form">
                    <input   
                        type="text" className="input" placeholder="Item" name="item" 
                        onChange={this.props.setValue}
                        value={this.props.item}
                    />
                    <input  
                        type="text" className="input" placeholder="Color" name="color" 
                        onChange={this.props.setValue} 
                        value={this.props.color}
                    />
                    <button id="addBtn" type="button"  onClick={this.props.addItem}>{this.props.txt}</button><br/>
                </form>    
            </section>
        );
    }
}

//MYLIST
class MyList extends React.Component{
     
    render(){
        let i = 0;
        const newList = this.props.list.map(()=>{
            i++;
            return (
                <li className ="listItems" key={i}>
                    <div className="itemDiv">
                        <h4 onClick={this.props.fillForm} id={i}>Item {i}</h4>
                        <EditItem id={this.props.id} name={i} editListItem={this.props.editItems}/>
                        <RemoveItem id={this.props.id} name={i} removeListItem={this.props.removeItems}/>
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

class EditItem extends React.Component{
    render(){
        let id = this.props.id;
        let name = this.props.name;
        console.log("id:",id,"name:",name);
        return(
            <div className="wrapper">
                {id === name &&
                    <i onClick={this.props.editListItem} className="fa fa-pencil-square-o" aria-hidden="true"></i>
                }
            </div>
        );
    }
}

class RemoveItem extends React.Component{
    render(){
        let id = this.props.id;
        let name = this.props.name;
        return(
            <div className="wrapper">
                {id === name &&
                    <i onClick={this.props.removeListItem} className="fa fa-trash" aria-hidden="true"></i>
                }
            </div>
        );
    }
}

//=======================================================
//GLOBALS
var app = document.getElementById("app");
const myList = [
    {item: "car" ,color: "red"},
    {item: "banana" ,color: "blue"},
    {item: "shirt" ,color: "yellow"},
    {item: "whale",color: "pink"},
    {item: "mouse" ,color: "orange"},
    {item: "phone" ,color: "banana"}
];
//=======================================================
//MAIN

ReactDOM.render(<App />, app);


