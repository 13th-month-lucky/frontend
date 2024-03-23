import React, { useCallback, useEffect, useState } from "react";
import { Card } from "flowbite-react";
import MyResponsiveLine from "~/components/ETF/Main/MyResponsiveLine";
import riskIconImg1 from "~/assets/images/riskIcons/riskIcon1.png";
import riskIconImg2 from "~/assets/images/riskIcons/riskIcon2.png";
import riskIconImg3 from "~/assets/images/riskIcons/riskIcon3.png";
import riskIconImg4 from "~/assets/images/riskIcons/riskIcon4.png";
import riskIconImg5 from "~/assets/images/riskIcons/riskIcon5.png";
import riskIconImg6 from "~/assets/images/riskIcons/riskIcon6.png";
import axios from "axios";

const ALLETF = () => {
  const [risk0, setRisk0] = useState([]);

  const [risk1, setRisk1] = useState([]);
  const [risk2, setRisk2] = useState([]);
  const [risk3, setRisk3] = useState([]);
  const [risk4, setRisk4] = useState([]);
  const [risk5, setRisk5] = useState([]);
  const [risk6, setRisk6] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const infoResponse = await axios.get(
        "http://localhost:3000/api/etf/info"
      );
      const infoArray = infoResponse.data;

      console.log(infoArray);

      const risks = [[], [], [], [], [], []];

      infoArray.forEach((item) => {
        const dangerDegree = item.data.dangerDegree;
        console.log(">>", risks);
        console.log(dangerDegree);
        risks[dangerDegree - 1].push(item);
      });

      // Update state for each risk category
      setRisk1(risks[0]);
      setRisk2(risks[1]);
      setRisk3(risks[2]);
      setRisk4(risks[3]);
      setRisk5(risks[4]);
      setRisk6(risks[5]);
      setRisk0(risk0.concat(risk1, risk2, risk3));

      console.log(risks[3]);
      return [
        ...risks[0],
        ...risks[1],
        ...risks[2],
        ...risks[3],
        ...risks[4],
        ...risks[5],
      ];
    };
    getData().then((riskArray) => {
      fetchCharts(riskArray).then((chartData) => {
        const chartObj = {};
        for (let chart of chartData) {
          chartObj[chart.code] = chart.chart;
        }
        setEtf(chartObj);
        console.log(chartObj);
      });
    });
  }, []);

  const fetchCharts = useCallback(async (riskArray) => {
    const codeArray = riskArray.map((elem) => elem.code);
    const promiseArr = codeArray.map(async (code) => {
      const chartData = await fetchChart(code);
      return {
        code,
        chart: chartData,
      };
    }, {});
    return await Promise.all(promiseArr);
  }, []);

  const fetchChart = useCallback(async (code) => {
    const response = await axios.get(
      `http://localhost:3000/api/etf/${code}/chart`
    );
    const chartData = response.data[0];

    const stck_bsop_date = chartData.chart.output2.stck_bsop_date;
    const stck_clpr = chartData.chart.output1.stck_clpr;
    const acml_vol = chartData.chart.output1.acml_vol;
    const hts_avls = chartData.chart.output1.hts_avls;
    const prdy_vol = chartData.chart.output1.prdy_vol;
    const hts_kor_isnm = chartData.chart.output1.hts_kor_isnm;
    const chart = {
      id: "stock",
      data: chartData.chart.output2.map((elem) => ({
        x: elem.stck_bsop_date,
        y: elem.stck_clpr,
      })),
    };

    return {
      stck_bsop_date,
      stck_clpr,
      acml_vol,
      hts_avls,
      prdy_vol,
      hts_kor_isnm,
      chart: chart,
    };
  }, []);

  const [etf, setEtf] = useState(null);

  console.log(etf);

  return (
    <div>
      {risk0.map((item) => (
        <Card
          className="m-5"
          key={item.code}
          theme={{
            root: {
              children: "p-3",
            },
          }}
        >
          <div className="flex flex-row">
            <div className="relative h-8 w-24">
              {etf && (
                <MyResponsiveLine
                  data={[
                    {
                      id: "stock",
                      data: etf[item.code]?.chart.data,
                    },
                  ]}
                />
              )}
            </div>
            <div className="flex flex-col ml-3">
              <div className="w-5 h-5">
                {item.data.dangerDegree === 1 ? (
                  <img src={riskIconImg1} />
                ) : item.data.dangerDegree === 2 ? (
                  <img src={riskIconImg2} />
                ) : item.data.dangerDegree === 3 ? (
                  <img src={riskIconImg3} />
                ) : item.data.dangerDegree === 4 ? (
                  <img src={riskIconImg4} />
                ) : item.data.dangerDegree === 5 ? (
                  <img src={riskIconImg5} />
                ) : (
                  <img src={riskIconImg6} />
                )}
              </div>

              <div className="font-bold text-sm">
                {etf[item.code]?.hts_kor_isnm}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ALLETF;
