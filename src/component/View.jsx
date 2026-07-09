import React from 'react'
import Navigation from './Navigation'

function View() {
  return (
    <div>
          <Navigation />
          <div classNameName="container" style={{padding:10,margin:50}}>
<h1 style={{ color: "blue", marginBottom: 50,  }}>
  DETAILS OF STUDENTS
</h1>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-col-xxl-12">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                
                                <table class="table">
  <thead>
    <tr>
      <th scope="col">SI NO</th>
      <th scope="col">NAME</th>
      <th scope="col">ADMISSION NO.</th>
           <th scope="col">CLASS</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Archana</td>
      <td>123</td>
      <td>MCA</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>345</td>
      <td>MBA</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>789</td>
      <td>BTECH</td>
    </tr>
     <tr>
      <th scope="row">3</th>
      <td>john</td>
      <td>785</td>
      <td>BTECH</td>
    </tr>
     <tr>
      <th scope="row">3</th>
      <td>helen</td>
      <td>745</td>
      <td>MCA</td>
    </tr>
  </tbody>
</table>
                            </div>
                            
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