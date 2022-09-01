import { User } from '@/service/api';
import { ILoginResult } from '@/service/api/user/types';
const loginData: ILoginResult = {
  nickname: '管理员',
  token: Date.now().toString(),
  userInfo: {
    nickname: '超级管理员',
    avatar: 'http://minio-test.epshealth.com:7070/uurm/_public/userPic/1'
  }
};

const loginDataMoke = {
  [`onPost::${User.LOGIN}`]: () => {
    return {
      message: '成功',
      code: 0,
      data: {
        ...loginData
      }
    };
  }
};

export default loginDataMoke;
