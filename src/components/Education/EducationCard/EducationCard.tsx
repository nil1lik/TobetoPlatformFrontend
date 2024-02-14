import TobetoPlatformVerticalCard from "../../Platform/VerticalCard";
import React from "react";

type Props = {
  id?: number;
  image: string;
  text: string;
  description?: string;
  buttonText?: string;
  date?: string | React.ReactNode;
};
const educationButtonText = "Eğitime Git";

const EducationCard = (props: Props) => {
  return (
    <>
      <TobetoPlatformVerticalCard
        id={props.id}
        image={props.image}
        text={props.text}
        date={props.date}
        buttonText={educationButtonText}
      />
    </>
  );
};
export default EducationCard;
