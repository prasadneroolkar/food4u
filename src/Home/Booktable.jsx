import React, { useState } from 'react';

const Booktable = () => {

    const [setInput,updateInput]=useState({
        Name:"",
        Email:"",
        time:"",
        date:"",
        people:""

    });


    const inputChange = (e) =>{
        const name = e.target.name;
        const value =e.target.value;
        
         updateInput((preValue)=>{
             return{
             ...preValue,[name]:value
         }
         });
        
    }

    // const clickSubmit = (v) =>{
    //     v.preventDefault();
    //     alert(`Name:${setInput.Name} `);
       
        

    // }

    return (<>
        <div className="container-fluid choose_div ">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="choose_heading ">
                        <p>reservation</p>
                        <h1>book your table</h1>
                    </div>
                    <div className="row ">
                        <div className="col-lg-10 col-sm-8 mx-auto">
                            <form className="row gy-4" >
                                <div class="col-lg-6 ">
                                    <input type="text" className="form-control" placeholder="Name" 
                                     onChange={inputChange} value={setInput.Name} 
                                      name="Name"   
                                     required/>
                                </div>
                                <div className="col-lg-6">
                                    <input type="email" className="form-control" placeholder="Email" 
                                    onChange={inputChange} value={setInput.Email}  name="Email" required/>
                                </div>
                                <div className="col-lg-6">
                                    <input type="date" className="form-control" placeholder="Date" onChange={inputChange} value={setInput.date}
                                    name="Dte" required/>
                                </div>
                                <div className="col-lg-6">
                                    <input type="time" className="form-control" placeholder="Time" onChange={inputChange} value={setInput.time}
                                    name="watch" required/>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" placeholder="People"  onChange={inputChange} value={setInput.people}
                                        name="people"
                                        required/>
                                </div>
                                <div className="col-lg-6">
                                    <button type="submit" className="button btn-find">Find A table</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Booktable;