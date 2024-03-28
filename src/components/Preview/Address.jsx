import React from "react";
import DaumPostCode from "react-daum-postcode";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { Button } from "flowbite-react";

function Address(props) {
  const postcodeScriptUrl =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data) => {
    let fullAddress = data.address;

    props.setAddressObj({
      areaAddress: fullAddress,
    });
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <Button size="sm" className="text-center" onClick={handleClick}>
      찾기
    </Button>
  );
}

export default Address;
