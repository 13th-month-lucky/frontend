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
    <Button
      color="light"
      className="items-end justify-end"
      pill
      onClick={handleClick}
    >
      주소 찾기
    </Button>
  );
}

export default Address;
