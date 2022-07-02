import React, { useState } from 'react';
import {postCollectorData} from "../services/collectorService"

function CollectorForm(){
    
    const medicineList = ["Acetaminophen","Paracetamol","Ibuprofen","chlorpheniramine"]
    const medWeightList = [250,500,650,1000]
    const companyList = ["Cipla","Sun Pharma","Cadila","Divi"]
    const [isDisabled,setIsDisabled] =useState(true)

    const [inputData, setInputData] = useState([
        { medicineName: '', quantity: '',weight:'',companyName:'' },
      ]);

    const handleAddData = () => {
        setIsDisabled(true)
        setInputData([...inputData, { medicineName: '', quantity: '',weight:'',companyName:'' }])
    }
    function disableSubmitButton(len){
        let curLen = 0
        for(let input of inputData){
            if(input.companyName && input.medicineName && input.weight && input.quantity){
                curLen++
            }
        }
        if(curLen===len){
            setIsDisabled(false)
        }
        else{
            setIsDisabled(true)
        }
    }
    const handleRemoveData = id => {

        const values  = [...inputData];
        values.splice(id,1);
        setInputData(values);
        const len = values.length
        disableSubmitButton(len)
      }
    const handleChangeInput = (i,e) => {
        let notNegative = true;
        if(e.target.name==="quantity" || e.target.name==="weight"){
            if(e.target.value<0){
                alert("Value cannot be negative...")
                notNegative = false;
            }
        }
        if(notNegative){
            let newInputData = [...inputData];
            newInputData[i][e.target.name] = e.target.value;
            setInputData(newInputData);
        }
        let len = inputData.length
        disableSubmitButton(len)
      }

      const handleFormSubmit = async(e) => {
        e.preventDefault();
        const dataObj = {
            inputData,
            user: JSON.parse(window.localStorage.getItem('userId'))
        }
        const response = await postCollectorData(dataObj)
        alert('Check your profile for approval. After approval collect your request from nearest hub.')
        setInputData([
            { medicineName: '', quantity: '',weight:'',companyName:'' },
          ])
          setIsDisabled(true)
      };

    return (
        <div>
            <br/>
            <br/>
            <h4 className = 'pl-5'>Collection Form</h4>
            <br/>
            <form className="form-group border mx-5 pl-5 pb-3 pt-2 bg-light" method="POST">
                <div className="row">
                    <h5 className="col-lg-2 mb-3 text-center">Medicine Name</h5> 
                    <h5 className="col-lg-2 mb-3 text-center">Weight(mg)</h5>
                    <h5 className="col-lg-2 mb-3 text-center">Company Name</h5>
                    <h5 className="col-lg-2 mb-3 text-center">Quantity</h5>
                </div>
                { inputData.map((inputDatas,index) => (
                <div className="row mx-auto pb-2" key={index}>
                    <input type="text" name="medicineName" list="medicine" placeholder="medicine name" className="col-lg-2 form-control mr-2" onChange={event => handleChangeInput(index,event)} value={inputDatas.medicineName||''} required/>
                    <datalist id="medicine">
                        {medicineList.map(function(med){
                            return <option key={med}>{med}</option>
                        })}
                    </datalist>
                    <input type="number" min="0" list="weightList" name="weight" placeholder="weight" className="col-lg-2 form-control mr-2" onChange={event => handleChangeInput(index,event)} value={inputDatas.weight||''} required/>
                    <datalist id="weightList">
                        {medWeightList.map(function(wgt){
                            return <option key={wgt}>{wgt}</option>
                        })}
                    </datalist>
                    <input type="text" name="companyName" list="company" placeholder="company name" className="col-lg-2 form-control mr-2" onChange={event => handleChangeInput(index,event)} value={inputDatas.companyName||''} required/>
                    <datalist id="company">
                        {companyList.map(function(comp){
                            return <option key={comp}>{comp}</option>
                        })}
                    </datalist>
                    <input type="number" min="0" name="quantity" placeholder="quantity" className="col-lg-2 form-control mr-2" onChange={event => handleChangeInput(index,event)} value={inputDatas.quantity||''} required/>
                    <button type = "button" disabled={inputData.length === 1} className="btn btn-danger col-lg-1" onClick={() => {handleRemoveData(index)}}>Delete</button>
                </div>
                ))}
                <div className="row mx-auto pb-2 mt-3">
                <button type="button" className="btn btn-primary col-lg-1 mr-2" onClick={handleAddData}>Add</button>
                <button disabled = {isDisabled} className="btn btn-success col-md-1  " onClick={handleFormSubmit}>Submit</button>
                </div>
                
            </form>
        </div>
    )
} 

export default CollectorForm;