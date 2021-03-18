import React, {useState} from 'react'

const Todo = () => {
    const [addToDo, setAddToDo] = useState("");
    const [allList, setAllList] = useState(
        [
            {
                id: 1,
                list: "Read React Component",
                complete: false
            },
            {
                id: 2,
                list: "Give Interview",
                complete: false
            },

            {
                id: 3,
                list: "Prepare For Office",
                complete: false
            },

            {
                id: 4,
                list: "Go Officet",
                complete: false
            }
        ]
    );
    

    const formSubmit = (e) =>{
        e.preventDefault();
        const newList = {
            id: new Date().getTime().toString(),
            list: addToDo,
            complete: false,
        }
        setAllList([...allList, newList]);
        setAddToDo("");
    }
    
    const clear = (id) => {
        const newArray = allList.filter((data) =>{
            return data.id !== id;
        })
        setAllList(newArray);
    }

    const completTodo= (data) =>{
        setAllList(
            allList.map((item) => {
                if(item.id === data.id){
                    return {...item, complete: !item.complete}
                }
                return item;
            })
        )
    }

    
    const filter =(button) =>{
        const filterData =allList.filter(data => data.complete === button);
        if(button === true){
           
            setAllList(filterData);       
        }else if(button === false){
            const filterAllData =allList.filter(data => data.complete === button);
            setAllList(filterAllData)
        }
    }
    return (
        <>
            <section style={{background: "#4973d2"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="todosection">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="text-center">Create Todo</h2><hr/>
                                        <form className="form-inline">
                                            <input type="text" className="form-control" placeholder="Enter ToDo List" id="list" name="list" value={addToDo} onChange={(e) => setAddToDo(e.target.value)}/>
                                        
                                        
                                            <button onClick={formSubmit} className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>

                                    <div className="col-12 mt-4 text-center">
                                        <div className="row">
                                            <div className="col-12 col-sm-6">
                                                <button className="btn btn-secondary" onClick={() => filter(false)}>Not Completed</button>
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <button className="btn btn-info" onClick={() => filter(true)}>Completed</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                

                                <div className="col-12 mt-4">
                                    <div className="listpanel mt-2">
                                        <ul className="list-item">
                                            {
                                                allList.map((data) =>{
                                                    return(
                                                        <li key={data.id} className={data.complete ? "complete" : ""}>{data.list} 
                                                            <span>
                                                                <i className="fa fa-check btn btn-primary" aria-hidden="true" onClick={()=> completTodo(data)}></i>

                                                                <i className="fa fa-trash btn btn-danger" aria-hidden="true" onClick={() =>clear(data.id)}></i>
                                                            </span>
                                                        </li>
                                                    );
                                                })    
                                            }
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>   
        </>
    )
}

export default Todo