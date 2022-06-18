import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import './admin.css'
export default function Thirdpage() {
    const assign =()=>{
        window.alert("Booked successfully")
    }
  return (
    <div><div class="sidebar">
    <div class="logo-details">
      <i class='bx bxl-c-plus-plus'></i>
      <span class="logo_name">Admin Panel</span>
    </div>
      <ul class="nav-links">
        <li>
          <a href="/first" class="active">
            <i class='bx bx-grid-alt' ></i>
            <span class="links_name">Cab Availability</span>
          </a>
        </li>
        <li>
          <a href="/second">
            <i class='bx bx-box' ></i>
            <span class="links_name">Employee</span>
          </a>
        </li>
        
        <li>
          <a href="/third">
            <i class='bx bx-pie-chart-alt-2' ></i>
            <span class="links_name">Cab Assign</span>
          </a>
        </li>
        
        <li class="log_out">
          <a href="/adminlogin">
            <i class='bx bx-log-out'></i>
            <span class="links_name">Log out</span>
          </a>
        </li>
      </ul>
  </div>
  <section class="home-section">
    <nav>
      <div class="sidebar-button">
        
        <span class="dashboard">Cab Assign</span>
      </div>
      
    </nav>

    <div class="home-content">
      <div>
      </div>

      <div class="sales-boxes">
        <div class="recent-sales box">
        <Card.Title>Shift timing (8.00 am - 5.00 pm)</Card.Title>
        
        <Table striped bordered hover variant="light">
      
        <thead>
        <tr>
          <th>#</th>
          
          <th>Employee Name</th>
          <th>Location</th>
          <th>Confirm cab number</th>
          <th>Cab Driver Number</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          
          <td>Aaron</td>
          <td>Thiruvallur</td>
          <td><input type="text" name=" "></input></td>
          <td>9077653899</td>
          
        </tr>
        <tr>
        <td>2</td>
          
        <td>Megan</td>
          <td>Taramani</td>
          <td><input type="text" name=" "></input></td>
          <td>8589546738</td>
        </tr>
        <tr>
        <td>3</td>
          
        <td>Rachel</td>
          <td>Urapakkam</td>
          <td><input type="text" name=" " Required></input></td>
          <td>9789546780</td>
        </tr>
        <tr>
        <td>4</td>
          
        <td>Teju</td>
          <td>Guindy</td>
          <td><input type="text" name=" "></input></td>
          <td>7089546566</td>
        </tr>
        <tr>
        <td>5</td>
          
        <td>kevin</td>
          <td>Guduvanchery</td>
          <td><input type="text" name=" "></input></td>
          <td>9567765659</td>
        </tr>
        <tr>
        <td>6</td>
          
        <td>Monica</td>
          <td>Chrompet</td>
          <td><input type="text" name=" "></input></td>
          <td>7789546677</td>
        </tr>
        <tr>
        <td>7</td>
        <td>Pugazh barathi</td>
          <td>Tambaram</td>
          <td><input type="text" name=" "/></td>
          <td>9789546733</td>
        </tr>
        

        
      </tbody>
    </Table>
    <Button variant="dark" onClick={()=>assign()}>Submit</Button>
          
          
        </div>
        <div class="top-sales box">
          <div class="title">Pending Routes</div>
          <ul class="top-sales-details">
              <hr/>
            <li>
           
              
              <span class="product">Sithalapakkam</span>
           
            <span class="price">2 members</span>
          </li>
          <li>
            
               
              <span class="product">Medavakam</span>
           
            <span class="price">3 members</span>
          </li>
          <li>
           
             
              <span class="product">Valachery</span>
           
            <span class="price">7 members</span>
          </li>
          <li>
           
              
              <span class="product">Guindy</span>
           
            <span class="price">7 members</span>
          </li>
          <li>
           
              
              <span class="product">Tambaram</span>
          
            <span class="price">2 members</span>
          </li>
          
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="home-section">
    <nav>
      <div class="sidebar-button">
        
        <span class="dashboard">Cab Availability</span>
      </div>
      
    </nav>

    <div class="home-content">
      <div>
      </div>

      <div class="sales-boxes">
        <div class="recent-sales box">
        <Card.Title>Shift timing (3.00 pm - 11.00 pm)</Card.Title>
        <Card.Text>
        <Table striped bordered hover variant="light">
      
        <thead>
        <tr>
          <th>#</th>
          
          <th>Employee Name</th>
          <th>Location</th>
          <th>Confirm cab number</th>
          <th>Cab Driver Number</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          
          <td>Vijay</td>
          <td>Thiruvallur</td>
          <td><input type="text" name=" "></input></td>
          <td>8077653898</td>
          
        </tr>
        <tr>
        <td>2</td>
          
        <td>Bala</td>
          <td>Tambaram</td>
          <td><input type="text" name=" "></input></td>
          <td>9589546736</td>
        </tr>
        <tr>
        <td>3</td>
          
        <td>Prakash</td>
          <td>Urapakkam</td>
          <td><input type="text" name=" " Required></input></td>
          <td>9789546782</td>
        </tr>
        <tr>
        <td>4</td>
          
        <td>Ashwini</td>
          <td>Urapakkam</td>
          <td><input type="text" name=" "></input></td>
          <td>8089546567</td>
        </tr>
        <tr>
        <td>5</td>
          
        <td>Bharathi</td>
          <td>Guindy</td>
          <td><input type="text" name=" "></input></td>
          <td>7867765646</td>
        </tr>
        <tr>
        <td>6</td>
          
        <td>Pushparaj</td>
          <td>Chrompet</td>
          <td><input type="text" name=" "></input></td>
          <td>8789546672</td>
        </tr>
        <tr>
        <td>7</td>
        <td>Pugazh</td>
          <td>Tambaram</td>
          <td><input type="text" name=" "/></td>
          <td>6789546732</td>
        </tr>
        

        
      </tbody>
    </Table>
    <Button variant="dark" onClick={()=>assign()}>Submit</Button>
    
        </Card.Text>
          
        </div>
        <div class="top-sales box">
          <div class="title">Pending Routes</div>
          <ul class="top-sales-details">
              <hr/>
            <li>
           
              
              <span class="product">Tharamani</span>
           
            <span class="price">2 members</span>
          </li>
          <li>
            
               
              <span class="product">Medavakam</span>
           
            <span class="price">3 members</span>
          </li>
          <li>
           
             
              <span class="product">Valachery</span>
           
            <span class="price">7 members</span>
          </li>
          <li>
           
              
              <span class="product">Guindy</span>
           
            <span class="price">7 members</span>
          </li>
        
          
          </ul>
        </div>
      </div>
    </div>
  </section>



 </div>
  )
}
