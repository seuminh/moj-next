export default function(reg, value) {
  const valueArr = value.replace(reg, ",$&,").split(",");
  return valueArr.map((str) => {
    if (reg.test(str)) {
      return <mark style={{ padding: 0,backgroundColor:'yellow' }}>{str}</mark>;
    }
    return str;
  })
}

