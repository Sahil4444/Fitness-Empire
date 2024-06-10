import React, { useState } from 'react'
import { toast } from 'react-toastify';

const BMIcalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const bmiCalculator = (e)=>{
    e.preventDefault();
    if(!height || !weight || !gender){
      toast.error("Please fill all fields with valid values!");
      return
    }
    const heightMeter = height / 100;
    const bmiValue = (weight / (heightMeter*heightMeter)).toFixed(2);

    if(bmiValue < 18.5){
      toast.warning("You are underweight!");
    }else if(bmiValue >= 18.5 && bmiValue < 25){
      toast.success("You have normal weight.");
    }else if(bmiValue >= 25 && bmiValue < 30){
      toast.warning("You are overweight!");
    }
    else{
      toast.error("You have a critical health! Please refer any doctor!");
    }
  }
  return (
    <section className='bmi'>
      <h1>BMI Calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={bmiCalculator}>
            <div>
              <label>Height (cm)</label>
              <input type="number" value={height} onChange={(e)=> setHeight(e.target.value)} required />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input type="number" value={weight} onChange={(e)=> setWeight(e.target.value)} required />
            </div>
            <div>
              <label>Gender</label>
              <select type="text" value={gender} onChange={(e)=> setGender(e.target.value)} required >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type='submit' style={{cursor: 'pointer'}}>Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="./bmi.jpg" alt="bmiImage" />
        </div>
      </div>
    </section>
  )
}

export default BMIcalculator
