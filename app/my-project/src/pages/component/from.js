import React from 'react';
import axios from 'axios'
import { Card, Button, Table, Modal, Form, Input, Radio, Select, DatePicker, TextArea, message, } from 'antd';
import moment from 'moment';

class Mock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            gData: [
                {
                    id: 1,
                    name: "1",
                    sex: 1,
                    state: "离职",
                    date: "2021-09-29 16:16:07",
                    Address: "未知"
                },
                {
                    id: 2,
                    name: "3",
                    sex: 1,
                    state: "离职",
                    date: "2021-09-29 16:16:07",
                    Address: "未知"
                },
                {
                    id: 3,
                    name: "3",
                    sex: 1,
                    state: "离职",
                    date: "2021-09-29 16:16:07",
                    Address: "未知"
                },

            ],
            pData: [],
            visible: false,
            modifiable: false,
            index: null

        };
    }
    formRef = React.createRef();


    //请求数据 没用

    // getDate2 = () => {
    //     axios.post('/postdata1', {
    //         params: {
    //             name: 'jack'
    //         }
    //     })
    //         .then((res) => {
    //             console.log(res.data.list)
    //             this.setState({
    //                 gData: res.data.list

    //             })
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    //创建员工的模态框
    onhandleAddUser(title) {
        console.log(title)
        this.setState({

            visible: true,
            modifiable: true,
            title: "创建"
        })
    }
    // 模态框取消
    handleCancel = () => {
        this.setState({
            visible: false,

        })
    }

    // 模态框的确认
    handleOk = (info) => {
        if (this.state.title == "创建") {
            const data = [...this.state.gData, { ...info, date: moment(info.date).format('YYYY-MM-DD HH:mm:ss') }]//时间转换

            this.setState({
                gData: data,
                visible: false,

            })
            console.log(info, 88888)

        } else {//修改
            let data = [...this.state.gData]//shuzhu
            data[this.state.index] = { ...info, date: moment(info.date).format('YYYY-MM-DD HH:mm:ss') }//
     //this.state.index   

            this.setState({
                //
                gData: data,
                visible: false,
            }, () => {
                console.log(data, 555555);
            })
        }


    }




    // 成员编辑功能
    onhandleEditUser = (text, index) => {
        this.setState({
            title: "编辑",
            visible: true,
            modifiable: true,
            index
        },()=>{
            text.date = moment(text.date);
            this.formRef.current.setFieldsValue(text);//转换默认值
        })

       

    }
    //删除
    onhandleDelete=(text,index)=>{
        const dataSource = [...this.state.gData];//赋值
       
        dataSource.splice(index,1)//删除数组
      console.log(dataSource)
        this.setState(
           { 
            gData:dataSource//运行赋值
           })
        
    }

    render() {
        const columns = [
            {
                title: "id",
                dataIndex: "id",
            },
            {
                title: "name",
                dataIndex: "name",
            },
            {
                title: "性别",
                dataIndex: "sex",
                render(sex) {
                    return sex == 1 ? "男" : "女";
                }
            },
            {
                title: "状态",
                dataIndex: "state",

            },
            {
                title: "爱好",
                dataIndex: "hobby",
                render(hobby) {
                    return hobby == 1 ? "跑步" : "散步";
                }
            },
            {
                title: "生日",
                dataIndex: "date",
            },
            {
                title: "联系地址",
                dataIndex: "Address",
            },
            {
                title: "操作",
                render: (text, record, index) => (
                    <span>
                        <a style={{ padding: 20 }} onClick={() => { this.onhandleEditUser(text, index) }}>编辑</a>
                        <a onClick={() => { this.onhandleDelete(text, index) }}>删除</a>
                    </span>

                )

            },
        ]
        console.log(this.state.gData, 7777)


        // 多选框
        const selectedRowKeys = this.state.selectedRowKeys;

        const rowCheckSelection = {
            type: "checkbox",
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }

        // 弹出框的样式
        const forItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        }



        return (
            <div>
                <Card className="card-wrap">
                    <Button type="primary" onClick={this.onhandleAddUser.bind(this)} >创建员工</Button>


                </Card>
                <Card className="card-table">
                    <Table bordered
                        columns={columns}
                        dataSource={this.state.gData}
                    >

                    </Table>

                </Card>
                <Modal
                    title={this.state.title}
                    visible={this.state.visible}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <Form ref={this.formRef} onFinish={el => { this.handleOk(el) }}
                        initialValues={{
                            ["id"]: this.state.id,
                            ["username"]: this.state.username,
                            ["sex"]: this.state.sex,
                            ["state"]: this.state.state,
                            ["date"]: (this.state.date == ''),
                            ["address"]: this.state.address
                        }}

                    >
                        <Form.Item label="序号" name="id" {...forItemLayout} rules={[{ required: true, message: '请输入用户名!' }]} >
                            <Input placeholder="请输入id" disabled={!this.state.modifiable} />
                        </Form.Item>
                        <Form.Item label="用户名" name="name" {...forItemLayout} rules={[{ required: true, message: '请输入用户名!' }]} >
                            <Input placeholder="请输入用户名" disabled={!this.state.modifiable} />
                        </Form.Item>

                        <Form.Item label="性别" name="sex" {...forItemLayout} rules={[{ required: true, message: '请选择您的性别!' }]}>
                            <Radio.Group disabled={!this.state.modifiable}>
                                <Radio value={1} >男</Radio>
                                <Radio value={2} >女</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item label="状态" name="state" {...forItemLayout} rules={[{ required: true, message: '请选择您目前的状态!' }]}>
                            <Input placeholder="请输入当前状态" disabled={!this.state.modifiable} >

                            </Input>
                        </Form.Item>

                        <Form.Item label="生日" name="date" {...forItemLayout} rules={[{ required: true, message: '请选择您的生日!' }]}>
                            {/* moment().format('YYYY-MM-DD HH:mm:ss'); */}
                            <DatePicker disabled={!this.state.modifiable} />
                        </Form.Item>

                        <Form.Item label="联系地址" name="Address" {...forItemLayout} rules={[{ required: true, message: '请输入您的联系地址!' }]}>
                            <Input.TextArea disabled={!this.state.modifiable} />
                        </Form.Item>


                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ margin: '0 120px' }} disabled={!this.state.modifiable}  >确认</Button>
                            <Button type="primary" onClick={this.handleCancel} >取消</Button>
                        </Form.Item>
                    </Form>
                </Modal>

            </div>
        );

    }
}

export default Mock;
