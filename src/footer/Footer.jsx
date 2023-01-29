import React, { useEffect, useState } from "react";
import { StyledButton } from "../shared/components/buttons/StyledButton";
import { StyledForm } from "../shared/components/form/StyledForm";
import { StyledInput } from "../shared/components/form/StyledInput";
import { StyledTextArea } from "../shared/components/form/StyledTextArea";
import { RiSendPlaneFill } from "react-icons/ri";

export const Footer = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setSubject(`New request from ${name}`);
  }, [name]);

  return (
    <div style={{ padding: "15% 7%", background: "#224477", color: "#ffffff" }}>
      <h1>Contact me</h1>
      <StyledForm>
        <StyledInput
          value={name}
          placeholder="Your Name"
          type={"text"}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <StyledTextArea
          value={body}
          placeholder="How can I help you?"
          rows={10}
          required
          onChange={(e) => setBody(e.target.value)}
        />
        <a style={{
          display: 'block',
          textDecoration: 'none',
          fontFamily: 'Bebas Neue',
          color: 'black',
          background: '#d3fd3f',
          padding: 12,
          fontSize: 18,
        }}
          href={`mailto:shanukmr197@gmail.com?subject=${subject}&body=${body}`}
        >
          <RiSendPlaneFill style={{ marginBottom: -2, paddingRight: 5 }} />
          Send Request
        </a>
      </StyledForm>
    </div>
  );
};
