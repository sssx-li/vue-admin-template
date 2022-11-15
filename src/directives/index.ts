const directiveList: Array<{
  name: string;
  directive: any;
}> = [];

const files = require.context(`./modules`, true, /\.ts$/);
files.keys().forEach((key) => {
  const file = require(`./modules` + key.split('.')[1]).default;
  directiveList.push(file);
});

export default directiveList;
