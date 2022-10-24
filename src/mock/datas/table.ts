import { ContentApis } from '@/service/api';
import { ITableList } from '@/service/types/table';

const tableData: ITableList = {
  list: [
    {
      id: 1,
      name: '张三',
      sex: 1, // 0:男 1：女
      age: 18,
      dateTime: '2022-02-15 11:31:23'
    },
    {
      id: 2,
      name: '李四',
      sex: 0, // 0:男 1：女
      age: 19,
      dateTime: '2022-02-15 11:31:23'
    },
    {
      id: 3,
      name: '王五',
      sex: 1, // 0:男 1：女
      age: 20,
      dateTime: '2022-02-15 11:31:23'
    },
    {
      id: 4,
      name: '赵六',
      sex: 1, // 0:男 1：女
      age: 20,
      dateTime: '2022-02-15 11:31:23'
    }
  ],
  page: {
    count: 4,
    pageNo: 1,
    pageSize: 10
  }
};

const contentData = {
  [`onPost::${ContentApis.TABLE}`]: () => {
    return {
      message: '成功',
      code: 0,
      data: tableData
    };
  },
  [`onGet::${ContentApis.TABLE}`]: (params: any) => {
    const { name, sex } = params;
    const resData: any = JSON.parse(JSON.stringify(tableData));
    if (name && sex !== 0 && !sex) {
      resData.list = tableData.list.filter((item: any) => item.name.includes(name));
    } else if ((sex || sex === 0) && !name) {
      resData.list = tableData.list.filter((item: any) => item.sex === sex);
    } else if (name && (sex || sex === 0)) {
      resData.list = tableData.list.filter(
        (item: any) => item.name.includes(name) && item.sex === sex
      );
    }
    return {
      message: '成功',
      code: 0,
      data: resData
    };
  },
  [`onPut::${ContentApis.TABLE}`]: (params: any) => {
    const { id, name } = JSON.parse(params);
    tableData.list.forEach((item: any) => {
      if (item.id === id) {
        item.name = name;
      }
    });
    return {
      message: '成功',
      code: 0,
      data: tableData
    };
  },
  [`onDelete::${ContentApis.TABLE}`]: (id: string | number) => {
    const list = tableData.list.filter((item) => item.id !== id);
    tableData.list = list;
    return {
      message: '成功',
      code: 0,
      data: tableData
    };
  }
};

export default contentData;
