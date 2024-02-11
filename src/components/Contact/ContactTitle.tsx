import React from "react";

type Props = {
    title:string
    name:string
};

const ContactTitle = (props: Props) => {
  return (
    <>
        <div className="w-100 justify-content-center d-flex">
          <span className="badge bg-secondary text-white">{props.title}</span>
        </div>
        <br />
        <div className="w-100 justify-content-center d-flex">
          <h3 className="mt-6 mb-6">{props.name}</h3>
        </div>
    </>
  );
};

export default ContactTitle;