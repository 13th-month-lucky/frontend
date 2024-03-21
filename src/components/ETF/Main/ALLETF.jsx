import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import MyResponsiveLine from "~/components/ETF/Main/MyResponsiveLine";
import riskIconImg1 from "~/assets/images/riskIcons/riskIcon1.png";
import axios from "axios";
import { Link } from "react-router-dom";

const ALLETF = () => {
  const [risk1, setRisk1] = useState([]);
  const [risk2, setRisk2] = useState([]);
  const [risk3, setRisk3] = useState([]);
  const [risk4, setRisk4] = useState([]);
  const [risk5, setRisk5] = useState([]);
  const [etf, setEtf] = useState({});
  const code = 12;
  const detailLink = `/etf/detail/12`;

  const updateEtfHistory = async () => {
    for (let i = 0; i < risk1.length; i++) {
      const code = risk1[i].code;
      const history = await axios.get(`~~~~/${code}/chart`);
      setEtf((prev) => {
        return {
          ...prev,
          code: history,
        };
      });
    }
  };

  useEffect(() => {
    updateEtfHistory();
  }, [risk1]);

  // const [etf,setEtf] = useState({'<etfKey>': [
  //   {
  //       "stck_bsop_date": "20240321",
  //       "stck_clpr": "9970",
  //       "stck_oprc": "10025",
  //       "stck_hgpr": "10025",
  //       "stck_lwpr": "9780",
  //       "acml_vol": "303634",
  //       "acml_tr_pbmn": "3010226990",
  //       "flng_cls_code": "00",
  //       "prtt_rate": "0.00",
  //       "mod_yn": "N",
  //       "prdy_vrss_sign": "2",
  //       "prdy_vrss": "40",
  //       "revl_issu_reas": ""
  //   },
  //   {
  //       "stck_bsop_date": "20240320",
  //       "stck_clpr": "9930",
  //       "stck_oprc": "9760",
  //       "stck_hgpr": "9965",
  //       "stck_lwpr": "9755",
  //       "acml_vol": "636232",
  //       "acml_tr_pbmn": "6287391250",
  //       "flng_cls_code": "00",
  //       "prtt_rate": "0.00",
  //       "mod_yn": "N",
  //       "prdy_vrss_sign": "2",
  //       "prdy_vrss": "220",
  //       "revl_issu_reas": ""
  //   },]})
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

      console.log(risks[3]);
    };
    getData();
  }, []); // Empty dependecy array means this effect runs once on mount
  const data = [
    {
      id: "series1", // 시리즈 ID

      data: [
        {
          x: "1",
          y: 55,
        },
        {
          x: "2",
          y: 262,
        },
        {
          x: "3",
          y: 73,
        },
        {
          x: "4",
          y: 77,
        },
        {
          x: "5",
          y: 104,
        },
        {
          x: "6",
          y: 217,
        },
        {
          x: "7",
          y: 85,
        },
        {
          x: "8",
          y: 9,
        },
        {
          x: "9",
          y: 203,
        },
        {
          x: "10",
          y: 104,
        },
      ],
    },
  ];

  return (
    <Card
      className="m-5"
      theme={{
        root: {
          children: "p-3",
        },
      }}
    >
      <Link to="/etf/detail/12">
        <div className="flex flex-row">
          <div className="relative h-8 w-24">
            <MyResponsiveLine data={data} />
          </div>
          <div className="flex flex-col ml-3">
            <div>
              <img src={riskIconImg1} />
            </div>
            <div className="font-bold text-sm">SOL 반도체후공정</div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ALLETF;
