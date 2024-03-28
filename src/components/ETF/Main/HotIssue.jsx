import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import MyResponsiveLine from "~/components/ETF/Main/MyResponsiveLine";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const HotIssue = () => {
  const [hotStock, setHotStock] = useState("");
  const [etf, setEtf] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch hot stock
        const response = await axios.post("/api/rising/");
        const risingStock = response.data[0].stbd_nm;
        setHotStock(risingStock);

        // Fetch ETFs based on the hot stock
        const etfResponse = await axios.get("/api/etf/overview");
        const etfData = etfResponse.data;
        const filteredETF = etfData.filter((item) => {
          return item.data.ratio.some(
            (company) => company.companyName === risingStock
          );
        });
        setEtf(filteredETF);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <style>
        {`
          .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
            display: none;
          }
          .react-horizontal-scrolling-menu--scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          /* Centering the items */
          .scroll-menu-wrapper {
            justify-content: center;
          }
        `}
      </style>
      <div className="flex flex-row mt-3 mb-3 font-medium text-lg">
        <p className="font-bold mr-1 ml-2">{hotStock}</p> 포함 ETF
      </div>
      <ScrollMenu onWheel={onWheel} style={{ margin: "0 -1rem" }}>
        <div className="flex flex-row items-center justify-center">
          {etf.length === 1 ? (
            <div className="flex-grow items-center justify-center">
              <Card
                className="m-3"
                theme={{
                  root: {
                    children: "p-3",
                  },
                }}
              >
                <div className="flex flex-col">
                  <h5 className="font-bold text-gray-900 dark:text-white">
                    {etf[0].chart.hts_kor_isnm}
                  </h5>
                  <h6 className="font-bold text-red-600">
                    {numberWithCommas(etf[0].chart.chart[0].y)}
                  </h6>
                  <div className=" h-20 w-28">
                    <MyResponsiveLine
                      data={[
                        {
                          id: "stock",
                          data: etf[0].chart.chart.map((elem) => ({
                            x: elem.x,
                            y: elem.y,
                          })),
                        },
                      ]}
                    />
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            etf.map((item, index) => (
              <Card
                className="m-3 w-2/5"
                theme={{
                  root: {
                    children: "p-3",
                  },
                }}
                key={index}
              >
                <div className="flex flex-col">
                  <h5 className="font-bold text-gray-900 dark:text-white">
                    {item.chart.hts_kor_isnm}
                  </h5>
                  <h6 className="font-bold text-red-600">
                    {numberWithCommas(item.chart.chart[0].y)}
                  </h6>
                  <div className=" h-20 w-28">
                    <MyResponsiveLine
                      data={[
                        {
                          id: "stock",
                          data: item.chart.chart.map((elem) => ({
                            x: elem.x,
                            y: elem.y,
                          })),
                        },
                      ]}
                    />
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </ScrollMenu>
    </>
  );
};
export default HotIssue;

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else {
    apiObj.scrollPrev();
  }
}
