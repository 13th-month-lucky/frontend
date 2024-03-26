import React from "react";
import moment from "moment";

export default function PriceTable(props) {
  const priceData = props.priceData;
  const isFund = props.isFund;

  const keys = Object.keys(priceData[0]);

  return (
    <div className="mb-36 flex justify-center">
      <table className="table-auto text-center">
        <thead className="h-12 border-b">
          <tr>
            {keys.map((ele, idx) => (
              <th key={idx} className="w-20">
                {ele}
              </th>
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
              <tr key={idx} className={style}>
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
                        {isFund ? ele : Number(ele).toLocaleString()}
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
