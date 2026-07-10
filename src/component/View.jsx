import React, { useState } from 'react'
import Navigation from './Navigation'

function View() {

const [data,changeData]=useState(
  [{"si no":1,"name":"archana","class":"mca","admission number":123},
  {"si no":2,"name":"archana","class":"mca","admission number":789},
    {"si no":3,"name":"archana","class":"mca","admission number":111},
    {"si no":4,"name":"archana","class":"mca","admission number":456},
    {"si no":5,"name":"archana","class":"mca","admission number":234},
  ]
)

  return (
    <div>
          <Navigation />
          <div classNameName="container" style={{padding:10,margin:50}}>
<h1 style={{ color: "blue", marginBottom: 50,  }}>
  DETAILS OF STUDENTS 👨‍🎓
</h1>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-col-xxl-12">
                    <div className="container">
                        <div className="row">

                          <table class="table">
  <thead>
    <tr>
      <th scope="col">SI NO</th>
      <th scope="col">NUMBER</th>
      <th scope="col">NAME</th>
      <th scope="col">CLASS</th>
    </tr>
  </thead>
  <tbody>
 
                            {data.map(
                              (value,index)=>{
                                return(
                                
                               
    <tr>
      <th scope="col">{value['si no']}</th>
      <th scope="col">{value['admission number']}</th>
      <th scope="col">{value.name}</th>
           <th scope="col">{value.class}</th>

    </tr>
  
                            )
                              }
                            )}
                            </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default View