import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ABOUT from './ABOUT PAGE/ABOUT'
import AdminPage from './ADMIN PAGE/admin-main'
import FirstPage from './ADMIN PAGE/Components/Firstpage'
import Secondpage from './ADMIN PAGE/Components/Secondpage'
import Thirdpage from './ADMIN PAGE/Components/Thirdpage'
import HOME from './HOME PAGE/Home-page-main'
import Adminmainlogin from './LOGIN PAGE/Admin-main-login'
import Alert from './LOGIN PAGE/Pages/Alert'
import Login from './LOGIN PAGE/Pages/Login'
import LeaveForm from './USER FORM/LeaveForm'
import UserForm from './USER FORM/UserForm'
import Feedback from './USER FORM/Feedback'
import EmpSignup from './EMPLOYEE LOGIN PAGE/Pages/EmpSignup'
import EmployeeLogin from './EMPLOYEE LOGIN PAGE/EmployeeLogin'
import LSignup from './LOGIN PAGE/Pages/Signup'

export default function App() {
  return (
    <>
        <div>
        <Alert/>
            <Routes>
                <Route path='/' element={<HOME />} />
                <Route path='/About' element={<ABOUT />} />
                <Route path='/adminlogin' element={<Adminmainlogin />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<LSignup/>} />
                <Route path="/emplog" element={<EmployeeLogin/>} />
                <Route path="/empsignup" element={<EmpSignup/>} />
                <Route path='/leaveform' element={<LeaveForm />} />
                <Route path='/user' element={<UserForm />} />
                <Route path="/adminpage" element={<AdminPage/>} />
                <Route path='/first' element={<FirstPage/>}/>
                <Route path='/second' element={<Secondpage/>}/>
                <Route path='/third' element={<Thirdpage/>}/>
                <Route path='/feedback' element={<Feedback/>}/>
            </Routes>
        </div>
    </>
  )
}
