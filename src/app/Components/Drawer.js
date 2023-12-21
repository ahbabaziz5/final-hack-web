import React from 'react'







const Drawer = () => {
  return (
    <div>
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
    </div>
  )
}

export default Drawer
