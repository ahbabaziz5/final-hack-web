"use client"

import React, { useState, useEffect } from 'react'
import { App, Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
import { db, storage, setDoc, collection, doc, onAuthStateChanged, auth, getStorage, ref, uploadBytes, getDocs } from '../firebase/config';
import ButtonGroup from 'antd/es/button/button-group';
import Link from 'next/link';
import Image from 'next/image'


// import React, { useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
// import { Modal, Upload } from 'antd';

const Home = () => {
 

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
 const storageRef = ref(storage, email);
  // 'file' comes from the Blob or File API
    uploadBytes(storageRef, fileInput).then((snapshot) => {
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
 <Drawer
        title="Add new Student"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,

          },
        }}
        extra={
          <Space onClick={Add}>

            <Button onClick={onClose} className='bg-green-400 hover:bg-green-400 ouline-white' >
              Add
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" >
          <Input type='file' id=" file" width={100} className='border border-green-400 hoover:border-green-400'/>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                type="file"
             onChange={(e)=> setFileInput(e.target.files[0])}

                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >


              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="first"
                label=" FirstName"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >

                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="last"
                label="Last Name"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: 'Please enter last name',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}

                  placeholder="Please enter last name"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Course"
                label="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: 'Please select an Course',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}

                  placeholder="Please enter you desired course"
                />
                {/* <Select placeholder="Please select a ourse">
                  <Option value="xiao">Web development</Option>
                  <Option value="mao">Graphics designing</Option>
                </Select> */}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="password"
                label="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: 'Please enter last name',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}

                  placeholder="Please enter last name"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: 'Please enter an email',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}

                  placeholder="Please enter an email"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="number"
                label="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: 'Please enter last name',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}

                  placeholder="Please enter last name"
                />
              </Form.Item>
            </Col>

          </Row>


        </Form>
      </Drawer>


     

      <section className="bg-gray-50 dark:bg-gray-900 antialiased" style={{ fontFamily: "Montserrat", display: "flex", height: "100vh" }}>
        <aside id="default-sidebar" aria-label="Sidebar" style={{ width: "300px" }}>
          <div className="h-full px-3 py-4 overflow-y-auto w-300" style={{ backgroundColor: "white" }}>
            <ul className="space-y-2 font-medium">
              <li>
      <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
 <span style={{ textAlign: "center", width: "100%", fontWeight: "bold", fontSize: "18px" }}>Dashboard</span>
                </span>
              </li>
              <li>
 <Link  href={"./Home"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_hVcbG6ntmJuuRO93v2Yl4PYjtt4eZUEMg&usqp=CAU" width={25} />
                  <span className="flex-1 ms-3 whitespace-nowrap ">Students</span>
                </Link>
              </li>
              <li>
              <Link href={"./Attendance"} className="flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
  <img className="rounded-full bg-green-400" src="https://static.vecteezy.com/system/resources/previews/016/422/826/original/attendance-icon-design-free-vector.jpg" width={25} color='green' />
  <span className="flex-1 ms-3 whitespace-nowrap">Attendance</span>
</Link>

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
                  <button onClick={showDrawer} id="actionsDropdownButton" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-300 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700 bg-green-500" type="button">
                    + Add Students
                  </button>
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
                
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-b dark:border-gray-700">
                      <td className="px-4 py-3">{index + 1}.</td>
                      <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex items-center mr-3">
                          <img src={item.imageUrl} className="mr-3 rounded-lg" style={{ width: "30px", height: "30px" }} />
                          {item.name}
                        </div>
                      </th>
                      <td className="px-4 py-3">{item.email}</td>
                      <td className="px-4 py-3">{item.course}</td>
                      <td className="px-4 py-3">{item.password}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}



export default Home
