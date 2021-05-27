const uppercamelize = require('uppercamelcase');
const fs = require('fs');
const path = require('path');

function indexEntry () {
  const tips = `/**
 * Created by Tw93 on 17/09/25
 */
`;
  const Components = fs.readdirSync(path.resolve(__dirname, '../packages')).filter(_ => _ !== 'setting'); // 排除setting文件夹
  const importList = Components.map(name => `import ${uppercamelize(name)} from './packages/${name}';`);
  const exportList = Components.map(name => `${uppercamelize(name)}`);
  const content = `${tips}
${importList.join('\n')}

export {
  ${exportList.join(',\n  ')}
};
`;
  fs.writeFileSync(path.join(__dirname, '../index.js'), content);
}

indexEntry();
