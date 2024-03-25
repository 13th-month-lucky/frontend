import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import MyResponsiveLine from "~/components/ETF/Main/MyResponsiveLine";
import axios from "axios";
import riskIconImg1 from "~/assets/images/riskIcons/1.png";
import riskIconImg2 from "~/assets/images/riskIcons/2.png";
import riskIconImg3 from "~/assets/images/riskIcons/3.png";
import riskIconImg4 from "~/assets/images/riskIcons/4.png";
import riskIconImg5 from "~/assets/images/riskIcons/5.png";
import riskIconImg6 from "~/assets/images/riskIcons/6.png";

const VolumeETF = ({ selectedDangerDegree, selectedType }) => {
  const [etf, setEtf] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/etf/overview"
        );
        const data = response.data;

        let filteredETF = data.sort(
          (a, b) => b.chart.hts_avls - a.chart.hts_avls
        );

        if (selectedDangerDegree) {
          console.log(selectedDangerDegree);

          filteredETF = filteredETF.filter(
            (item) => item.data.dangerDegree == selectedDangerDegree
          );

          console.log(filteredETF);
        }

        if (selectedType) {
          filteredETF = filteredETF.filter((item) =>
            item.data.category.includes(selectedType)
          );
        }
        // console.log(filteredETF);
        // setEtf(filteredETF); // result
        // console.log(etf);
        return filteredETF;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData().then((data) => setEtf(data));
  }, [selectedDangerDegree, selectedType]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {etf.map((item) => (
        <Card className="m-5" key={item.code}>
          <div className="flex flex-row">
            <div className="h-8 w-24">
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
            <div className="flex flex-col ml-3">
              <div className="w-20 h-6">
                <img
                  src={getRiskIcon(item.data.dangerDegree)}
                  alt={`Risk Icon ${item.data.dangerDegree}`}
                />
              </div>
              <div className="font-bold text-sm">{item.chart.hts_kor_isnm}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

// Function to get the appropriate risk icon based on the risk degree
const getRiskIcon = (dangerDegree) => {
  switch (dangerDegree) {
    case 1:
      return riskIconImg1;
    case 2:
      return riskIconImg2;
    case 3:
      return riskIconImg3;
    case 4:
      return riskIconImg4;
    case 5:
      return riskIconImg5;
    default:
      return riskIconImg6;
  }
};

export default VolumeETF;
