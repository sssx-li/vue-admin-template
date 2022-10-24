import { IData } from '@/baseUI/syTree/types';

export const dataToTree = (data: IData[], parentID = '') => {
  const itemArr: any[] = [];
  for (let i = 0; i < data.length; i++) {
    const node: any = data[i];
    if (node.parentID == parentID) {
      const newNode = {
        ...node,
        children: dataToTree(data, node.id)
      };
      itemArr.push(newNode);
    }
  }
  return itemArr;
};
