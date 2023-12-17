"use client"

import React, { useState, useEffect } from 'react'
import { App, Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
import { db, storage, setDoc, collection, doc, onAuthStateChanged, auth, getStorage, ref, uploadBytes, getDocs } from '../firebase/config';
import ButtonGroup from 'antd/es/button/button-group';
import Link from 'next/link';

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
  const post = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log("doc.data", doc.data())
      console.log(data.id)


    });
  }






  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>

      {/* <div>
     
      <ul>
        {data.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div> */}



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
                id="file"

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
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span style={{ textAlign: "center", width: "100%", fontWeight: "bold", fontSize: "18px" }}>Attendance</span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <img src="data:image/png;base64,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" width={25} />
                  <span className="flex-1 ms-3 whitespace-nowrap ">Students</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <img className="rounded-full bg-green-400" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/1200px-Avatar_icon_green.svg.png" width={25} color='green' />
                <Link href={'./Attendance'} className="flex-1 ms-3 whitespace-nowrap">Attendance</Link>
                </a>
              </li>
            </ul>
            {/* <div><button className='border-2 w-20 h-20 mt-60 mr-10 bg-green-200'>Logout</button></div> */}
          </div>
         
        </aside>
        <div className="p-10 w-full">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden w-full">
            <div className="w-full flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full flex">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <img src="data:image/png;base64,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" style={{ width: "45px", height: "45px", borderRadius: "50%" }} />

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
