"use client"

import React, { useState, useEffect } from 'react'
import { App, Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
import { db, storage, setDoc, collection, doc, onAuthStateChanged, auth, getStorage, ref, uploadBytes, getDocs } from '../firebase/config';

import Link from 'next/link';


const Attend = () => {
 

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'user'));
        const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(setData(newData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);




  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fileInput, setFileInput] = useState(null)

  const Add = async () => {
    await setDoc(doc(db, "user", email), {
      fisrt: first,
      last: last,
      email: email,
      password: password,
      course: course,
      phonenum: phone,
    })

    alert("data added")
    const fileInputChange = (e) => {
      // Fix: Get the file input value
      const file = e.target.files[0];
      // ... rest of your logic
    };


    const storageRef = ref(storage, "user");
    
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    //     


  }
 






  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (



    <>
      <section className="bg-gray-50 dark:bg-gray-900 antialiased" style={{ fontFamily: "Montserrat", display: "flex", height: "100vh" }}>
        <aside id="default-sidebar" aria-label="Sidebar" style={{ width: "300px" }}>
          <div className="h-full px-3 py-4 overflow-y-auto w-300" style={{ backgroundColor: "white" }}>
            <ul className="space-y-2 font-medium">
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span style={{ textAlign: "center", width: "100%", fontWeight: "bold", fontSize: "18px" }}>Attendance</span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_hVcbG6ntmJuuRO93v2Yl4PYjtt4eZUEMg&usqp=CAU" width={25} />
                  <Link href={'/Home'} className="flex-1 ms-3 whitespace-nowrap ">Students</Link>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <img className="rounded-full bg-green-400" src="https://static.vecteezy.com/system/resources/previews/016/422/826/original/attendance-icon-design-free-vector.jpg" width={25} color='green' />
                <Link href={'./Attendance'} className="flex-1 ms-3 whitespace-nowrap text-green-300">Attendance</Link>
                </a>
              </li>
            </ul>
          
          </div>
         
        </aside>
        <div className="p-10 w-full">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden w-full">
            <div className="w-full flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full flex">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_hVcbG6ntmJuuRO93v2Yl4PYjtt4eZUEMg&usqp=CAU" style={{ width: "45px", height: "45px", borderRadius: "50%" }} />

                    <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>Students</h1>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3" id="id">Id</th>
                    <th scope="col" className="px-4 py-3" id="deails">Details</th>
                    <th scope="col" className="px-4 py-3" id="course">Email</th>
                    <th scope="col" className="px-4 py-3" id="pass">Courses</th>
                    <th scope="col" className="px-4 py-3" id="pass">Password</th>
                  </tr>
                </thead>
                
               
              </table>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}



export default Attend
