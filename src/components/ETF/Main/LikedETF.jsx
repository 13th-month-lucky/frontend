import React, { useEffect, useState } from "react";
import MyResponsiveLine from "~/components/ETF/Main/MyResponsiveLine";
import axios from "axios";
import { useSelector } from "react-redux";
import Risk from "~/components/ETF/Risk/Risk";
import { useNavigate } from "react-router";
import blankLikeIcon from "~/assets/images/detail/blankLikeIcon.png";
import redLikeIcon from "~/assets/images/detail/redLikeIcon.png";

const LikedEtf = ({ selectedDangerDegree, selectedType }) => {
  const [likedEtfCodes, setLikedEtfCodes] = useState([]);
  const userState = useSelector((state) => state.user13th);
  const [etf, setEtf] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.post("/api/user/find", {
        nickname: userState.nickname,
      });
      const likeETF = response.data.likedEtf;
      setLikedEtfCodes(likeETF);
    };

    const fetchData = async () => {
      try {
        const response = await axios.get("/api/etf/overview");
        const data = response.data;
        let filteredETF = data;

        if (selectedDangerDegree) {
          filteredETF = filteredETF.filter(
            (item) => item.data.dangerDegree === selectedDangerDegree
          );
        }

        if (selectedType) {
          filteredETF = filteredETF.filter((item) =>
            item.data.category.includes(selectedType)
          );
        }

        setEtf(filteredETF);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    fetchUser();
  }, [selectedDangerDegree, selectedType]);

  const toggleLike = (code) => {
    if (likedEtfCodes.includes(code)) {
      setLikedEtfCodes(likedEtfCodes.filter((c) => c !== code));
      axios.put("/api/user/dislike/etf", {
        userId: userState.userId,
        code: code,
      });
    } else {
      setLikedEtfCodes([...likedEtfCodes, code]);
      axios.put("/api/user/like/etf", {
        userId: userState.userId,
        code: code,
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const clickCard = (code) => {
    navigate("/etf/detail/" + code);
  };

  return (
    <div>
      {etf.map((item) => {
        const profit = item.chart.profitPercentage;

        let profitStyle = "text-xl font-bold";

        if (profit[0] === "-") {
          profitStyle += " text-blue-500";
        } else {
          profitStyle += " text-red-500";
        }

        return (
          <div key={item.code} style={{ cursor: "pointer" }} className="pb-2">
            <div
              className="border-t pt-4 pb-3 flex justify-between gap-4"
              onClick={() => clickCard(item.code)}
            >
              <Risk riskDegree={item.data.dangerDegree} />
              <p className="text-lg font-semibold">
                {item.chart.hts_kor_isnm}
                {/* {item.code} */}
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <div className=" h-16 w-40" onClick={() => clickCard(item.code)}>
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

              <div className="flex-col justify-end">
                <div className="flex gap-1">
                  <div
                    className="text-gray-500 text-sm mt-1"
                    onClick={() => clickCard(item.code)}
                  >
                    6개월
                  </div>

                  <p
                    className={profitStyle}
                    onClick={() => clickCard(item.code)}
                  >
                    {item.chart.profitPercentage}%
                  </p>
                </div>

                {likedEtfCodes.includes(item.code) ? (
                  <div className="mt-4 flex justify-end">
                    <img
                      src={redLikeIcon}
                      className="h-8"
                      onClick={() => toggleLike(item.code)}
                      alt="Dislike Button"
                    />
                  </div>
                ) : (
                  <div className="mt-4 flex justify-end">
                    <img
                      src={blankLikeIcon}
                      className="h-8"
                      onClick={() => toggleLike(item.code)}
                      alt="Like Button"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LikedEtf;
