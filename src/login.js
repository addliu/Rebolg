import React, {Component} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css'
const FormItem = Form.Item;

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    login = (event) => {
        event.preventDefault();
        console.log('登录成功.');
    };

    handleChangeUsername = (event) => {
        this.setState({username: event.target.value});
    };

    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.login} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {rules: [{required: true, message: '必须输入用户名！'}],})
                    (<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} value={this.state.username} placeholder="用户名" />)
                    }
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {rules: [{required: true, message: '必须输入密码！'}],})
                    (<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" value={this.state.password} placeholder="密码" />)
                    }
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        )
    };

}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;