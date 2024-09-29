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
      <Container style={{ backgroundColor: "#f8f4f2", padding: "20px" }}>
        <Section style={header}>
          <div style={logo}>
            <div style={flexContainer}>
              <svg
                version="1.1"
                viewBox="139.31 0 92.39 92.39"
                xmlns="http://www.w3.org/2000/svg"
                width="36px"
                height="36px"
                style={{ zIndex: 1 }}
              >
                <path
                  id="mark"
                  d="..."
                  style={{ fill: "rgb(255, 255, 255)", fillRule: "evenodd" }}
                />
              </svg>
              <div style={textContainer}>
                <p style={textStyle}>Oddział w</p>
                <p style={textStyle}>Częstochowie</p>
              </div>
            </div>
          </div>
        </Section>

        <Section style={content}>
          <h1 style={{ fontSize: "18px", margin: "0" }}>Wiadomość Ogólna</h1>
          <p style={{ fontSize: "14px", margin: "0", fontWeight: "400" }}>
            Szczegóły Wiadomości:
          </p>

          <ul>
            <li>
              Imię i Nazwisko: <strong>{firstname}</strong>
            </li>
            <li>
              Email: <strong>{email}</strong>
            </li>
            <li>
              Wiadomość: <strong>{message}</strong>
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
            <Img
              src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo_PTE_pionowe_Czestochowa_0ab5a76b3d.d01815bf.png&w=640&q=75"
              alt="logo czestochowa pte"
              style={{ width: "200px", padding: "12px" }}
            />
            <p style={{ fontSize: "12px", margin: "0", fontWeight: "400" }}>
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
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  margin: 0,
  padding: 0,
  boxSizing: "border-box" as "border-box",
};

const header = {
  backgroundColor: "#17822e",
  padding: "1rem",
};

const logo = {
  backgroundColor: "#17822e",
  padding: "1rem",
};

const flexContainer = {
  display: "flex",
  alignItems: "center",
};

const textContainer = {
  paddingLeft: "0.5rem",
};

const textStyle = {
  margin: 0,
  fontFamily: "Arrus, sans-serif",
  fontSize: "0.75rem",
  fontWeight: "bold",
  color: "#fff",
};

const content = {
  padding: "20px",
  backgroundColor: "#f8f4f2",
  borderRadius: "8px",
  maxWidth: "600px",
  width: "100%",
};