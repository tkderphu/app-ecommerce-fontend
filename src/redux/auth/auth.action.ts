import { CommonResult } from '../../common/common'
import { AuthLoginReqVO } from '../../page/authen/record/record.req.vo'
import { AuthLoginResVO } from '../../page/authen/record/record.resp.vo'
import authService from '../../page/authen/service/auth.service'
import { UserCreateMemberReqVO } from '../../page/user/record/record.req.vo'
import userService from '../../page/user/service/user.service'
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_ERROR, REGISTER_SUCCESS } from './auth.action.type'



const registerSuccess = (message: any) => {
    return {
        type: REGISTER_SUCCESS,
        message
    }
}

const registerError = (message: any) => {
    return {
        type: REGISTER_ERROR,
        message
    }
}
const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
}

const loginError = (message: any) => {
    return {
        type: LOGIN_ERROR,
        message
    }
} 
const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

const registerAction = (req: UserCreateMemberReqVO) => {
    return (dispatch: any) => {
        userService.createUserMember(req).then(response => {
            const result: CommonResult<any> = response.data
            if(result.code === 200) {
                dispatch(registerSuccess())
            } else {
                dispatch(registerError())
            }
        }).catch(err => {
            dispatch(registerError())
        })
    }
}
const loginAction = (req: AuthLoginReqVO) => {
    return (dispatch: any) => {
        authService.login(req).then(response => {
            const result: CommonResult<AuthLoginResVO> = response.data
            if(result.code === 200) {
                //store item;
            } else {
                dispatch(loginError())
            }
        }).catch(err => {
            dispatch(loginError())
        })
    }
}

const logoutAction = () => {
    return (dispatch: any) => {
        authService.logout().then(res => {
            dispatch(logoutSuccess()) //remove all state in redux store
        }).catch(err => {
            //logout error
        })
    }
}