import { useRouter } from "next/router";
import { Breadcrumb } from "antd";
import { useState, useEffect } from "react";
import Link from "next/link";

const BreadcrumbComponent = () => {
  const router = useRouter();
  const [breadcrumbList, setBreadcrumbList] = useState([]);
  useEffect(() => {
    let vid = router.asPath;
    let srun = [];
    let cheat = vid.split("/");
    if (vid == "/") {
      srun = [{ link: "/", name: "Home" }];
    } else {
      cheat.forEach((v, i) => {
        i == 0
          ? srun.push({ link: "/", name: "Home" })
          : srun.push({
              link: srun[srun.length - 1].link + v + "/",
              name: cheat[i][0].toUpperCase() + cheat[i].slice(1),
            });
      });
    }
    setBreadcrumbList(srun);
  }, [router]);
  console.log(router);
  return (
    <div className="pageInfo">
      {/* <h1>ព័ត៌មានមន្រ្តីរាជការ</h1> */}
      <Breadcrumb>
        {breadcrumbList.map((v) => {
          return (
            <Breadcrumb.Item>
              <Link href={v.link}>{v.name}</Link>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
