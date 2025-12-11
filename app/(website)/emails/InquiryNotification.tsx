import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface InquiryNotificationProps {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  jobTitle: string;
  phoneNumber: string;
  region: string;
  message: string;
  baseUrl?: string;
  logoUrl?: string;
}

export const InquiryNotification = ({
  firstName,
  lastName,
  email,
  companyName,
  jobTitle,
  phoneNumber,
  region,
  message,
  baseUrl = "https://www.theairconexpert.com",
  logoUrl = "https://www.theairconexpert.com/aircon-experts.png",
}: InquiryNotificationProps) => {
  return (
    <Html>
      <Head />
      <Preview>New inquiry received from {firstName} {lastName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={logoUrl}
            width="140"
            alt="Aircon Experts"
            style={logo}
          />
          <Heading style={h1}>New Inquiry Received</Heading>
          <Text style={text}>
            You have received a new inquiry from the contact form.
          </Text>
          <Section style={section}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{firstName} {lastName}</Text>
          </Section>
          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
          </Section>
          <Section style={section}>
            <Text style={label}>Company:</Text>
            <Text style={value}>{companyName}</Text>
          </Section>
          <Section style={section}>
            <Text style={label}>Job Title:</Text>
            <Text style={value}>{jobTitle}</Text>
          </Section>
          <Section style={section}>
            <Text style={label}>Phone Number:</Text>
            <Text style={value}>{phoneNumber}</Text>
          </Section>
          <Section style={section}>
            <Text style={label}>Region:</Text>
            <Text style={value}>{region}</Text>
          </Section>
          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default InquiryNotification;

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

const section = {
  marginBottom: "16px",
};

const label = {
  color: "#666",
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "4px",
};

const value = {
  color: "#333",
  fontSize: "16px",
  marginTop: "4px",
};

const messageText = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  marginTop: "4px",
  padding: "12px",
  backgroundColor: "#f5f5f5",
  borderRadius: "4px",
};

