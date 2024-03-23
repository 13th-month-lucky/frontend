import React from "react";
import moment from "moment";

export default function PriceTable(props) {
  const priceData = props.priceData;

  const keys = Object.keys(priceData[0]);

  let month = 0;

  return (
    <div className="mb-36">
      <table className="table-auto text-center">
        <thead className="h-12 border-b">
          <tr>
            {keys.map((ele, idx) => (
              <th className="w-20">{ele}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {priceData.map((obj, idx) => {
            let style = "h-12";

            if (idx % 10 === 0) {
              style += " border-t";
            }

            return (
              <tr className={style}>
                {Object.values(obj).map((ele, idx) => {
                  if (idx == 0) {
                    let dateStyle = "font-xs";

                    return (
                      <td key={idx} className={dateStyle}>
                        {moment(ele, "YYYYMMDD").format("YY.MM.DD")}
                      </td>
                    );
                  }

                  if (idx == 1) {
                    return (
                      <td key={idx} className="font-bold">
                        {Number(ele).toLocaleString()}
                      </td>
                    );
                  }

                  if (idx == 2) {
                    if (ele[0] === "-") {
                      return (
                        <td key={idx} className="text-blue-500">
                          {ele}%
                        </td>
                      );
                    }
                    return (
                      <td key={idx} className="text-red-500">
                        +{ele}%
                      </td>
                    );
                  }

                  return <td key={idx}>{Number(ele).toLocaleString()}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
