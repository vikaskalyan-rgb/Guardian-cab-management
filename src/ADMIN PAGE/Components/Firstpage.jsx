import React from 'react'
import { Table } from 'react-bootstrap'
import './admin.css'

export default function FirstPage() {
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
        
        <span class="dashboard">Cab Availability</span>
      </div>
      
    </nav>

    <div class="home-content">
      <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total cabs</div>
            <div class="number">40</div>
            
          </div>
        
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Available cabs</div>
            <div class="number">29</div>
            <div class="indicator">
             
              
            </div>
          </div>
         
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Employees</div>
            <div class="number">75</div>
            <div class="indicator">
             
            </div>
          </div>
         
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Not Available cabs</div>
            <div class="number">11</div>
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
          
          <th>Driver Name</th>
          <th>Cab seats</th>
          <th>Cab Number</th>
          <th>Driver Number</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          
          <td>Moorthi</td>
          <td>4 </td>
          <td>6789</td>
          <td>6789546732</td>
          <td>Available</td>
        </tr>
        <tr>
        <td>2</td>
          
          <td>Ramu</td>
          <td>3</td>
          <td>2245</td>
          <td>6789546732</td>
          <td>Not Available</td>
        </tr>
        <tr>
        <td>3</td>
          
          <td>Jegan</td>
          <td>3</td>
          <td>7865</td>
          <td>6789678923</td>
          <td>Not Available</td>
        </tr>
        <tr>
        <td>4</td>
          
          <td>Ram</td>
          <td>4</td>
          <td>6767</td>
          <td>6789545566</td>
          <td>Not Available</td>
        </tr>
        <tr>
        <td>5</td>
          
          <td>Suresh</td>
          <td>6</td>
          <td>2234</td>
          <td>7543446732</td>
          <td>Available</td>
        </tr>
        <tr>
        <td>6</td>
          
          <td>Ramesh</td>
          <td>6</td>
          <td>1144</td>
          <td>9845646732</td>
          <td>Available</td>
        </tr>
        <tr>
        <td>7</td>
          
          <td>Suman</td>
          <td>4</td>
          <td>1324</td>
          <td>6489546783</td>
          <td>Not Available</td>
        </tr>
        <tr>
        <td>8</td>
          
          <td>Prakash</td>
          <td>4</td>
          <td>2278</td>
          <td>6489546789</td>
          <td>Available</td>
        </tr>
        <tr>
        <td>9</td>
          
          <td>Jeeva</td>
          <td>4</td>
          <td>8976</td>
          <td>6489589765</td>
          <td>Available</td>
        </tr>

        
        
      </tbody>
    </Table>
          
          <div class="button">
            <a href="#">See All</a>
          </div>
        </div>
        <div class="top-sales box">
          <div class="title">Emergency Cabs details</div>
          <ul class="top-sales-details">
              <hr/>
            <li>
           
              
              <span class="product">Jegan</span>
           
            <span class="price">8976567889</span>
          </li>
          <li>
            
               
              <span class="product">Santhosh</span>
           
            <span class="price">9845327869</span>
          </li>
          <li>
           
             
              <span class="product">Prasadh</span>
           
            <span class="price">6785476894</span>
          </li>
          
          
          </ul>
        </div>
      </div>
    </div>
  </section>


 </div>
  )
}
