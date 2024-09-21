import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import PTECzestochowaLogo from "../public/assets/PTECzęstochowa/Logo_PTE_pionowe_Czestochowa_0ab5a76b3d.png";

export const KoalaWelcomeEmail = () => (
  <Html>
    <Head>
      <style>
        {`
          ul {
            font-size: 0.85rem;
            display: flex;
            gap: 6px;
            flex-direction: column;
            list-style: square;
            list-style-position: inside;
          }

          ul li::marker {
            color: green; /* Ustawienie koloru dla markera */
          }
        `}
      </style>
    </Head>
    <Body style={main}>
      <Container style={{ backgroundColor: "#f8f4f2" }}>
        <div
          style={{
            backgroundColor: "#f8f4f2",
            display: "flex",
            flexDirection: "column",
			padding: 8,
          }}
        >
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
                {" "}
                <path
                  id="mark"
                  d="m 159.2838,1.6227 h 52.0768 l 18.7535,19.3304 V 71.7312 L 211.3606,90.7731 H 158.9953 L 140.9632,72.1641 V 20.5202 Z M 158.3279,0 h 53.9728 l 19.4362,20.034 V 72.6608 L 212.3007,92.3959 H 158.0289 L 139.3404,73.1094 V 19.5853 Z m 2.0744,3.5217 h 49.8582 l 17.9545,18.5068 v 48.615 L 210.2605,88.874 H 160.1261 L 142.8621,71.0578 V 21.6141 Z m 1.7896,3.0385 h 46.3086 l 16.6761,17.1892 V 68.903 L 208.5003,85.8356 H 161.9354 L 145.9007,69.2879 V 23.3645 Z m 0.2995,49.062 0.0345,12.9317 c 2e-4,0.0236 -1e-4,0.0865 0.0374,0.0796 0.315,-0.0575 3.4404,1.9553 1.811,2.3231 h -11.9375 c -0.9584,-0.7835 2.5356,-2.4873 2.7094,-2.4829 l 0.002,-40.4845 c 0,-0.0168 -0.002,-0.0349 -0.0104,-0.0401 -0.404,-0.2688 -1.4161,-0.4681 -1.6291,-1.61 l 9.967,-0.0118 c 1.402,-0.0346 3.1725,0.0512 3.8756,0.2212 3.0516,0.7383 5.0129,2.1187 6.6311,3.949 1.5889,1.797 3.2308,4.3501 3.9136,7.6819 0.4922,2.4021 0.5229,3.3976 0.1612,5.2122 -0.8424,4.2238 -3.1261,7.3829 -4.9724,8.7956 -2.857,2.1859 -6.141,3.3049 -10.6087,3.4445 l -1e-4,-0.01 z m -0.0652,-24.5174 0.0529,19.8688 0.1044,0.0443 2e-4,0.006 c 4.3544,0.9166 8.3632,-5.121 8.2183,-9.3688 -0.1486,-4.355 -2.1995,-7.8568 -5.4019,-10.4275 -0.223,-0.1789 -1.6305,-0.457 -2.9739,-0.1224 z m 26.5053,-11.7084 0.005,57.115 c 0,0.4721 2.129,1.142 2.193,3.1987 l -12.9306,-0.0405 c -0.3296,-1.0531 1.0156,-2.3631 2.5857,-3.3743 L 180.7455,19.2421 166.129,19.2013 c -0.0969,-3e-4 -0.777,1.3298 -1.3128,1.4094 -0.4237,0.063 -0.6138,-0.1676 -0.6189,-0.4976 l -0.0239,-5.7621 43.3495,0.0565 c 0.0394,1.3109 0.1194,3.3878 0.0716,5.7629 -0.0135,0.6728 -0.3962,1.0735 -1.1829,0.1991 -0.3001,-0.3336 -0.4866,-1.0649 -1.3268,-1.0604 z m 14.5127,31.1838 -0.003,15.754 12.0468,0.0347 c 0.0754,0.0232 1.7213,-2.2891 2.7159,-1.5574 l -0.0128,5.8747 -26.2648,0.0649 c -0.4451,-2.3202 4.2196,-3.7435 4.3053,-5.0043 0.3424,-5.0242 0.1499,-10.1781 0.1499,-15.2242 l -2.0722,0.008 c -0.0355,1e-4 -2.4485,2.3378 -2.4439,1.3901 l 0.0369,-7.6299 c 0.005,-0.9925 2.2889,1.2566 2.3633,1.2566 l 2.1159,-0.004 0.035,-17.3445 c 0,-0.007 -2.2423,-0.7622 -1.7699,-1.7098 l 23.7696,0.034 0.0233,5.7627 c -0.2869,1.1974 -2.4419,-1.0172 -2.5692,-1.3005 l -12.4337,-0.003 0.0457,14.5531 12.1754,-0.0187 c 0.0928,-1e-4 1.8934,-2.5245 2.6821,-1.3565 v 8.5351 c -0.7099,1.2527 -2.3852,-2.1358 -2.6373,-2.1355 z"
                  style={{ fill: "rgb(255, 255, 255)", fillRule: "evenodd" }}
                />
              </svg>
              <div style={textContainer}>
                <p style={textStyle}>Oddział w</p>
                <p style={textStyle}>Częstochowie</p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#f8f4f2",
              padding: "8px",
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <h1 style={{ fontSize: "18px", margin: "0" }}>
                Wiadomość Ogólna
              </h1>
              <p style={{ fontSize: "14px", margin: "0", fontWeight: "400" }}>
                Szczegóły Wiadomości:
              </p>
            </div>
            <ul style={UlStyle}>
              <li style={LiStyle}>
                Imię i Nazwisko: <span> Jan Kowalski </span>
              </li>
              <li style={LiStyle}>
                Email: <span> test@gmail.com </span>
              </li>
              <li style={LiStyle}>
                Wiadomość: <span>Lorem ipsum, dolor sit amet...</span>
              </li>
            </ul>

            <Hr style={{ borderColor: "green", opacity: "35%" }} />
			<div style={{display: "flex", gap: "4px", flexDirection: "column", maxWidth: "20rem"}}>
				<Img src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo_PTE_pionowe_Czestochowa_0ab5a76b3d.d01815bf.png&w=640&q=75" alt="logo czestochowa pte" style={{width: "200px", padding: "12px"}} />
				<p style={{ fontSize: "12px", margin: "0", fontWeight: "400" }}>© Polskie Towarzystwo Ekonomiczne Oddział Częstochowa - Wszelkie prawa zastrzeżone</p>
			</div>
          </div>
        </div>
      </Container>
    </Body>
  </Html>
);

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
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

const UlStyle: React.CSSProperties = {
	fontSize: "0.85rem",
	display: "flex",
	gap: "6px",
	flexDirection: "column",
	listStyle: "square",
	listStylePosition: "inside",
  };
  

const LiStyle = {
  color: "black", 
};

const markerStyle = {
  color: "green", 
};
