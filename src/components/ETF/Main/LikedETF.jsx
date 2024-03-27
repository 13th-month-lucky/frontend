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
      const response = await axios.post("http://localhost:3000/api/user/find", {
        nickname: userState.nickname,
      });
      const likeETF = response.data.likedEtf;
      setLikedEtfCodes(likeETF);
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/etf/overview"
        );
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
    console.log(likedEtfCodes);
  }, [selectedDangerDegree, selectedType]);

  const toggleLike = (code) => {
    if (likedEtfCodes.includes(code)) {
      setLikedEtfCodes(likedEtfCodes.filter((c) => c !== code));
      axios.put("http://localhost:3000/api/user/dislike/etf", {
        userId: userState.userId,
        code: code,
      });
    } else {
      setLikedEtfCodes([...likedEtfCodes, code]);
      axios.put("http://localhost:3000/api/user/like/etf", {
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
      {etf.map(
        (item) =>
          likedEtfCodes.includes(item.code) && (
            <div
              key={item.code}
              onClick={() => clickCard(item.code)}
              style={{ cursor: "pointer" }}
            >
              <div className="border-t pt-4 pb-3 flex justify-between">
                <Risk riskDegree={item.data.dangerDegree} />
                <p className="text-lg mt-2 font-semibold">
                  {item.chart.hts_kor_isnm}
                  {/* {item.code} */}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" h-20 w-52">
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
                <div className="flex item-center justify-center gap-2">
                  <div className="font-xl font-bold text-red-500">수익률</div>
                  <p className="text-lg font-bold text-red-500">
                    {item.chart.profitPercentage}%
                  </p>
                  {likedEtfCodes.includes(item.code) ? (
                    <div>
                      <img
                        src={redLikeIcon}
                        className="h-8"
                        onClick={() => toggleLike(item.code)}
                        alt="Dislike Button"
                      />
                    </div>
                  ) : (
                    <div>
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
          )
      )}
    </div>
  );
};

export default LikedEtf;
