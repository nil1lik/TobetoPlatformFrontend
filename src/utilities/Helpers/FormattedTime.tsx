import React from "react";

type Props = {
  time: string | undefined; 
};

const FormattedTime: React.FC<Props> = ({ time = '' }) => {
  const getTime = (time: string) => {
    const [hour, minute] = time.split(':').map(Number);
    return { hour, minute };
  };

  const formatTime = (hour: number, minute: number) => {
    if (hour === 0 && minute === 0) {
      return "0 dk";
    } else if (hour === 0) {
      return `${minute} dk`;
    } else if (minute === 0) {
      return `${hour} saat`;
    } else {
      return `${hour} saat ${minute} dk`;
    }
  };

  const { hour, minute } = getTime(time);
  const formattedTime = formatTime(hour, minute);

  return <span>{formattedTime}</span>;
};

export default FormattedTime;
