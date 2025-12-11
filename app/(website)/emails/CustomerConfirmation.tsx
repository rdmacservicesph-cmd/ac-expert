import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface CustomerConfirmationProps {
  firstName: string;
  lastName: string;
  baseUrl?: string;
  logoUrl?: string;
}

export const CustomerConfirmation = ({
  firstName,
  lastName,
  baseUrl = "https://www.theairconexpert.com",
  logoUrl = "https://www.theairconexpert.com/aircon-experts.svg",
}: CustomerConfirmationProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Aircon Experts</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={logoUrl}
            width="120"
            height="100"
            alt="Aircon Experts"
            style={logo}
          />
          <Heading style={h1}>Thank You for Your Inquiry!</Heading>
          <Text style={text}>
            Hi {firstName} {lastName},
          </Text>
          <Text style={text}>
            We have received your inquiry and our team of experts is ready to
            assist you with your HVAC and air conditioning needs.
          </Text>
          <Text style={text}>
            We will review your message and get back to you as soon as possible,
            typically within 24 hours.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href={baseUrl}>
              Visit Our Website
            </Button>
          </Section>
          <Text style={footer}>
            If you have any urgent questions, please feel free to contact us
            directly at +63 (02) 8296 0623 or +63 939 981 5829.
          </Text>
          <Text style={footer}>
            Best regards,<br />
            The Aircon Experts Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default CustomerConfirmation;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 48px 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  display: "block",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center" as const,
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#0065E1",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
};

const footer = {
  color: "#666",
  fontSize: "14px",
  lineHeight: "24px",
  marginTop: "20px",
};

