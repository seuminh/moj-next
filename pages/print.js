import { Checkbox, Button } from "antd";
import { PrinterOutlined } from "@ant-design/icons";
import { useState } from "react";

const Print = () => {
   const [printOptions, setPrintOptions] = useState(["General"]);

   const options = [
      { label: "ព័ត៌មានទូទៅ", value: "General" },
      { label: "គ្រួសារ", value: "Family" },
      { label: "ឋានន្តរសកិ្តនិងថ្នាក់", value: "Rank" },
      { label: "ស្ថានភាពមន្រ្ដី", value: "Status" },
      { label: "ប្រវត្តិការងារ", value: "WorkHistory" },
      { label: "ការលើកសសើរ", value: "Praise" },
      { label: "ការដាក់ពិន័យ", value: "Penalty" },
      { label: "កម្រិតវប្បធម៌", value: "Education" },
   ];

   const onChange = (checkedValues) => {
      console.log("checked = ", checkedValues);
      setPrintOptions(checkedValues);
   };

   const onPrint = () => {
      alert(printOptions);
   };

   return (
      <div style={{ backgroundColor: "#fff", padding: "20px 10px" }}>
         <p>បោះពុម្ព</p>
         <Checkbox.Group
            style={{ margin: "20px 0px", display: "flex" }}
            options={options}
            defaultValue={["General"]}
            onChange={onChange}
         />
         <Button icon={<PrinterOutlined />} onClick={onPrint}>
            បោះពុម្ព
         </Button>
      </div>
   );
};

export default Print;
