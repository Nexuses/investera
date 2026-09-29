import Link from "next/link";
import {
  LEGAL_ADDRESS,
  LEGAL_ENTITY,
  LegalContact,
  LegalPage,
  LegalSection,
  legalLinkClass,
} from "@/components/legal/LegalLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      lead="Privacy"
      accent="Policy"
      updated="29 September 2026"
      intro={
        <>
          <p>
            This Privacy Policy explains how {LEGAL_ENTITY} (&ldquo;Investera&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;), a company incorporated in the United
            Arab Emirates with commercial number CN-2865994 and its office at{" "}
            {LEGAL_ADDRESS}, collects, uses and protects personal information when you
            visit www.investera.com (the &ldquo;Website&rdquo;), contact us, book a
            demo or subscribe to our updates.
          </p>
          <p>
            It covers the Website only. Use of the Investera Pro platform by our
            clients is governed by the agreement between Investera and that client,
            including its data processing terms.
          </p>
        </>
      }
    >
      <LegalSection title="1. Information We Collect">
        <h3>Information You Give Us</h3>
        <ul>
          <li>
            <strong>Contact form:</strong> your first and last name, work email
            address, phone number (optional) and the message you send.
          </li>
          <li>
            <strong>Newsletter:</strong> your work email address.
          </li>
          <li>
            <strong>Demo bookings:</strong> the name, email address, company details
            and preferred meeting time you enter in our booking calendar.
          </li>
          <li>
            <strong>Correspondence:</strong> anything you share when you email, call or
            message us, including on WhatsApp.
          </li>
        </ul>
        <h3>Information Collected Automatically</h3>
        <p>
          Like most websites, our hosting provider records technical information such
          as your IP address, browser type, device type, pages visited and the date
          and time of your visit. We use this to keep the Website secure and working
          properly. We also use Google Analytics to understand how visitors use the
          Website, such as which pages are viewed and how visitors arrived. We do not
          use advertising or cross-site tracking cookies.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <ul>
          <li>To respond to your enquiry and arrange demos or pricing calls.</li>
          <li>
            To send you Investera news and insights if you have subscribed. You can
            unsubscribe at any time by emailing info@investera.com or using the
            unsubscribe link in any newsletter.
          </li>
          <li>To keep records of our communications with prospective clients.</li>
          <li>To operate, secure and improve the Website.</li>
          <li>To comply with our legal and regulatory obligations.</li>
        </ul>
        <p>
          We rely on your consent (for example, when you subscribe), on steps taken at
          your request before entering into a contract (for example, when you ask for a
          demo), on our legitimate interest in running and promoting our business, and
          on legal obligations, as applicable.
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies">
        <p>
          The Website uses cookies that are strictly necessary for it to function, and
          Google Analytics cookies (such as _ga) that help us measure
          visits and improve the Website. Google processes this data on our behalf
          under its own privacy terms. When you open our Book a Demo page, the embedded HubSpot meetings
          calendar may set its own cookies to operate the booking tool. You can block
          or delete cookies in your browser settings; if you block them, the booking
          calendar may not work, and you can instead contact us directly.
        </p>
      </LegalSection>

      <LegalSection title="4. Sharing Your Information">
        <p>We do not sell your personal information. We share it only with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who help us run the Website and our
            communications, such as website hosting, database hosting, email delivery,
            website analytics (Google Analytics) and our meeting-scheduling provider
            (HubSpot). They may only use your
            information to provide their services to us.
          </li>
          <li>
            <strong>Professional advisers and authorities</strong> where required by
            law or to protect our rights.
          </li>
          <li>
            <strong>A successor business</strong> if Investera is involved in a merger,
            acquisition or sale of assets, in which case this policy will continue to
            apply.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. International Transfers">
        <p>
          Some of our service providers store or process information outside the
          United Arab Emirates. Where this happens, we take reasonable steps to ensure
          your information receives an adequate level of protection, in line with the
          UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) and
          other applicable laws.
        </p>
      </LegalSection>

      <LegalSection title="6. How Long We Keep It">
        <p>
          We keep enquiry and correspondence records for as long as needed to respond
          to you and manage our relationship, and for up to three years after our last
          contact unless a longer period is required by law. Newsletter subscriptions
          are kept until you unsubscribe.
        </p>
      </LegalSection>

      <LegalSection title="7. Security">
        <p>
          We use appropriate technical and organisational measures to protect personal
          information, including encrypted connections (HTTPS) and restricted access
          to stored data. No method of transmission over the internet is completely
          secure, but we work to protect your information and review our safeguards
          regularly.
        </p>
      </LegalSection>

      <LegalSection title="8. Your Rights">
        <p>
          Depending on where you live, you may have the right to access, correct or
          delete your personal information, to object to or restrict how we use it, to
          withdraw consent, and to receive a copy of it. To make a request, email{" "}
          <a href="mailto:info@investera.com" className={legalLinkClass}>
            info@investera.com
          </a>
          . We may need to verify your identity before responding. You also have the
          right to complain to the data protection authority where you live.
        </p>
      </LegalSection>

      <LegalSection title="9. Children">
        <p>
          The Website is intended for business users and is not directed at anyone
          under 18. We do not knowingly collect personal information from children.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The latest version will
          always be available on this page, with the date it was last updated. Please
          also read our{" "}
          <Link href="/terms-of-service" className={legalLinkClass}>
            Terms of Service
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="11. Contact Us">
        <p>For questions about this Privacy Policy or your personal information, contact:</p>
        <LegalContact />
      </LegalSection>
    </LegalPage>
  );
}
