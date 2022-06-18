import React from 'react'
import { Table } from 'react-bootstrap'
import './admin.css'
export default function Secondpage() {
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
        
        <span class="dashboard">Employee Details</span>
      </div>
      
    </nav>

    <div class="home-content">
      <div class="overview-boxes">
        
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Employee</div>
            <div class="number">200</div>
            <div class="indicator">
             
              
            </div>
          </div>
         
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">HR</div>
            <div class="number">5</div>
            <div class="indicator">
             
            </div>
          </div>
         
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Managers</div>
            <div class="number">10</div>
            <div class="indicator">
              
            </div>
          </div>
          
        </div>
      </div>

      <div class="sales-boxes">
        <div class="recent-sales box">
        <Table striped bordered hover variant="light">
      
      <thead>
      <tr>
        <th>#</th>
        
        <th>Employee Name</th>
        <th>Location</th>
        <th>Co-ordinaters</th>
        <th>Employee Number</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        
        <td>Pugazh</td>
        <td>Tambaram</td>
        <td>Vikram(southzone)</td>
        <td>6789546732</td>
        <td> Present </td>
      </tr>
      <tr>
      <td>2</td>
        
        <td>Pushparaj</td>
        <td>Chithalapakam</td>
        <td>Santhanam</td>
        <td>6789546732</td>
        <td> Absent </td>
      </tr>
      <tr>
      <td>3</td>
        
        <td>Ashwini</td>
        <td>Chrompet</td>
        <td>Santhanam</td>
        <td>6789678923</td>
        <td> Present </td>
      </tr>
      <tr>
      <td>4</td>
        
        <td>Ram</td>
        <td>Guindy</td>
        <td>Santhanam</td>
        <td>6789545566</td>
        <td> Absent </td>
      </tr>
      <tr>
      <td>5</td>
        
        <td>Suresh</td>
        <td>Guindy</td>
        <td>Santhanam</td>
        <td>7543446732</td>
        <td> Present </td>
      </tr>
      <tr>
      <td>6</td>
        
        <td>Ramesh</td>
        <td>Chrompet</td>
        <td>Santhanam</td>
        <td>9845646732</td>
        <td> Absent </td>
      </tr>
      <tr>
      <td>7</td>
        
        <td>Suman</td>
        <td>Guduvanchery</td>
        <td>Vikram</td>
        <td>6489546783</td>
        <td> Present </td>
      </tr>
      <tr>
      <td>8</td>
        
        <td>Prakash</td>
        <td>Urapakkam</td>
        <td>Vikram</td>
        <td>6489546789</td>
        <td> Present </td>
      </tr>
      <tr>
      <td>9</td>
        
        <td>Jeeva</td>
        <td>Chengalpet</td>
        <td>Vikram</td>
        <td>6489589765</td>
        <td> Absent </td>
      </tr>
      

      
      
    </tbody>
  </Table>
          <div class="button">
            <a href="#">See All</a>
          </div>
        </div>
        <div class="top-sales box">
          <div class="title">Mode of working</div>
          <ul class="top-sales-details">
              <hr/>
            <li>
           
              
              <span class="product">Work from Home</span>
           
            <span class="price">55 members</span>
          </li>
          <li>
            
               
              <span class="product">Work from office</span>
           
            <span class="price">45 members</span>
          </li>
         
          </ul>
        </div>
      </div>
    </div>
  </section>


 </div>
  )
}
