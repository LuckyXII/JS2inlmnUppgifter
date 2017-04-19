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
            status: ""
        };
        this.addNewItem = this.addNewItem.bind(this);
        this.fillOutForm = this.fillOutForm.bind(this);
    }
    
    //inputValue
    inputValue = (e) =>{
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
        
        
        let inputs = document.getElementsByClassName("input");
        let oldList = this.state.list;
        let newItem = [{item:inputs[0].value,color:inputs[1].value}];
        
        
        if(e.target.textContent == "Add"){
        
            this.setState({
                list:oldList.concat(newItem),
                item: "", color:"",
                status:"Item added successfully"
            });
            inputs[0].value="";
            inputs[1].value="";
            
            
        }else{
            oldList[this.state.id] = {item: this.state.item, color: this.state.color};
            inputs[0].value="";
            inputs[1].value="";
            let btn = document.getElementById("addBtn");
            btn.textContent ="Add"
            this.setState({status:"Item updated successfully"});
        }
        
    }
    
    //fillOutForm
    fillOutForm(e){
        let inputs = document.getElementsByClassName("input");
        let itemID = Number(e.target.id)-1;
        let list = this.state.list;
        this.setState({
            item: list[itemID].item, 
            color: list[itemID].color,
            id: itemID
        });
        
        
        //reset display/hide icons
        let icons = document.getElementsByClassName("fa");
        for(let i = 0; i < icons.length; i++){
            icons[i].style.display = "none";
        }
        //show icons
        let parent = e.target.parentNode;
        let edit = parent.children[1];
        let bin = parent.children[2];
        
        edit.style.display = "inline-block";
        bin.style.display = "inline-block";
    }
    
    //Edit Items
    editItems = (e)=>{
        let btn = document.getElementById("addBtn");
        btn.textContent ="Update"
        
    }
    //Remove Items
    removeItems = (e)=>{
        let li = e.target;
        let parent = li.parentNode;
        let id = parent.children[0].id
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
                />
                <AddForm 
                    setValue={this.inputValue}  
                    addItem={this.addNewItem}
                    item={this.state.item}
                    color={this.state.color}
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
                    <button id="addBtn" type="button"  onClick={this.props.addItem}>Add</button><br/>
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
                        <EditItem name={i} editListItem={this.props.editItems}/>
                        <RemoveItem name={i} removeListItem={this.props.removeItems}/>
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
        return(
            <i onClick={this.props.editListItem} className="fa fa-pencil-square-o" aria-hidden="true"></i>
        );
    }
}

class RemoveItem extends React.Component{
    render(){
        return(
            <i onClick={this.props.removeListItem} className="fa fa-trash" aria-hidden="true"></i>
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
]
//=======================================================
//MAIN

ReactDOM.render(<App />, app);


