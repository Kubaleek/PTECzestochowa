import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Section,
  Text,
} from "@react-email/components";
import { color } from "framer-motion";
import * as React from "react";

export const KoalaWelcomeEmail = ({
  firstname,
  email,
  message,
  phone,
}: {
  firstname: string;
  email: string;
  message: string;
  phone: string;
}) => (
  <Html>
    <Head>
      <style>
        {`
            * {
              color: !important #333;
            }
            ul {
              font-size: 0.85rem;
              list-style-type: square;
              padding-left: 1.25rem;
            }
  
            li {
              margin-bottom: 0.5rem;
            }
  
            @media only screen and (max-width: 600px) {
              h1 {
                font-size: 16px;
              }
  
              ul {
                font-size: 0.75rem;
              }
            }
          `}
      </style>
    </Head>
    <Body style={main}>
      <Container>
        <Section style={content}>
          <h1 style={{ fontSize: "18px", margin: "0" }}>
            Kursy
          </h1>
          <p style={{ fontSize: "14px", margin: "0", fontWeight: "400" }}>
            Szczegóły Wiadomości:
          </p>

          <ul>
            <li>
              Tematyka Kursu: <strong></strong>
            </li>
            <li>
              Imię i Nazwisko: <strong></strong>
            </li>
            <li>
              Email: <strong></strong>
            </li>
          </ul>

          <Hr style={{ borderColor: "green", opacity: "35%" }} />

          <div
            style={{
              display: "flex",
              gap: "4px",
              flexDirection: "column",
              maxWidth: "20rem",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                margin: "0",
                fontWeight: "400",
                color: "black",
              }}
            >
              © Polskie Towarzystwo Ekonomiczne Oddział Częstochowa - Wszelkie
              prawa zastrzeżone
            </p>
          </div>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "sans-serif",
  color: "black",
  margin: 0,
  padding: 0,
  boxSizing: "border-box" as "border-box",
};

const content = {
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "600px",
  width: "100%",
};
