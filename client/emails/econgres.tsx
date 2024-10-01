import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  email: string;
  firstname: string;
  message: string;
  phone: string;
  title: string;
  academicDegree: string;
  affiliation: string;
  courtesy: string;
  middleName: string;
  presentationTopic: string;
  publicationSummary: string;
  institutionName: string;
  streetName: string;
  propertyName: string;
  regionName: string;
  postalCode: string;
  city: string;
  taxId: string;
  fileLinks?: string;
}

export const KoalaWelcomeEmail = ({
  firstname,
  email,
  message,
  phone,
  title,
  academicDegree,
  affiliation,
  courtesy,
  middleName,
  presentationTopic,
  publicationSummary,
  institutionName,
  streetName,
  propertyName,
  regionName,
  postalCode,
  city,
  taxId,
  fileLinks,
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head>
      <style>
        {`
          * {
            color: #333 !important;
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
            Zgłoszenie na kongres
          </h1>
          <p style={{ fontSize: "14px", margin: "0", fontWeight: "400" }}>
            Szczegóły Wiadomości:
          </p>

          <ul>
            <li>
              Forma grzecznościowa: <strong>{courtesy}</strong>
            </li>
            <li>
              Stopień akademicki: <strong>{academicDegree}</strong>
            </li>
            <li>
              Imię i Nazwisko: <strong>{firstname} {title}</strong>
            </li>
            <li>
              Drugie Imię: <strong>{middleName}</strong>
            </li>
            <li>
              Przynależność: <strong>{affiliation}</strong>
            </li>
            <li>
              Tytuł Publikacji: <strong>{title}</strong>
            </li>
            <li>
              Tematyka Prezentacji: <strong>{presentationTopic}</strong>
            </li>
            <li>
              Podsumowanie Publikacji: <strong>{publicationSummary}</strong>
            </li>
            <li>
              Email: <strong>{email}</strong>
            </li>
            <li>
              Telefon: <strong>{phone}</strong>
            </li>
            <li>
              Nazwa instytucji lub nazwa płatnika: <strong>{institutionName}</strong>
            </li>
            <li>
              Nazwa ulicy: <strong>{streetName}</strong>
            </li>
            <li>
              Nazwa majątku: <strong>{propertyName}</strong>
            </li>
            <li>
              Nazwa regionalny: <strong>{regionName}</strong>
            </li>
            <li>
              Kod pocztowy: <strong>{postalCode}</strong>
            </li>
            <li>
              Miasto: <strong>{city}</strong>
            </li>
            <li>
              Identyfikator podatkowy: <strong>{taxId}</strong>
            </li>
            <li>
              Wiadomość: <strong>{message}</strong>
            </li>
            {fileLinks && (
              <li>
                Linki do plików: <span dangerouslySetInnerHTML={{ __html: fileLinks }} />
              </li>
            )}
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
