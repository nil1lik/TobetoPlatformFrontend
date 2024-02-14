import React from "react";

type Props = {
  date: string; 
  format?: "full" | "year" | "month" | "day" | "time" | "minute";
};

const FormattedDate: React.FC<Props> = ({ date, format = "full" }) => {
  const formatDate = (date: string) => {
    const formattedDate = new Date(date);
    switch (format) {
      case "year":
        return formattedDate.getFullYear().toString();
      case "month":
        return formattedDate.toLocaleString("default", { month: "long" });
      case "day":
        return formattedDate.getDate().toString();
      case "time":
        return formattedDate.toLocaleTimeString("tr-TR", {
          timeZone: "Europe/Istanbul",
          hour12: false,
          hour: "numeric",
          minute: "numeric",
        });
      case "minute":
        return formattedDate.getMinutes().toString();
      default:
        return formattedDate.toLocaleString("default", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        });
    }
  };

  const formattedDate = formatDate(date); 

  return <span>{formattedDate}</span>;
};

export default FormattedDate;
