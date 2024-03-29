import React from "react";

type Props = {
  title: string;
  desc: string;
};

const ContactTable = (props: Props) => {
  return (
    <>
      <tr className="contact_contactTr__90ggf">
        <td className="td-style">{props.title}</td>
        <td>{props.desc}</td>
      </tr>
    </>
  );
};

export default ContactTable;
