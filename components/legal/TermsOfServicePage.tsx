import Link from "next/link";
import {
  LEGAL_ENTITY,
  LegalContact,
  LegalPage,
  LegalSection,
  legalLinkClass,
} from "@/components/legal/LegalLayout";

export default function TermsOfServicePage() {
  return (
    <LegalPage
      lead="Terms of"
      accent="Service"
      updated="29 September 2026"
      intro={
        <p>
          These Terms of Service govern your use of www.investera.com (the
          &ldquo;Website&rdquo;), operated by {LEGAL_ENTITY} (&ldquo;Investera&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the Website you agree to these
          terms. If you do not agree, please do not use the Website.
        </p>
      }
    >
      <LegalSection title="1. About the Website">
        <p>
          The Website provides information about Investera and the Investera Pro
          investment management platform, and lets you contact us, book a demo and
          subscribe to updates. Access to the Investera Pro platform itself is provided
          under a separate written agreement with each client.
        </p>
      </LegalSection>

      <LegalSection title="2. Information Only, Not Investment Advice">
        <p>
          Content on the Website, including blog articles, case studies and product
          descriptions, is provided for general information. It is not investment,
          financial, legal or tax advice, and it should not be relied on as such. You
          should seek professional advice before making any investment decision.
        </p>
      </LegalSection>

      <LegalSection title="3. Acceptable Use">
        <p>When using the Website, you agree not to:</p>
        <ul>
          <li>use it for any unlawful purpose or in breach of these terms;</li>
          <li>
            attempt to gain unauthorised access to the Website, its servers or any
            connected system;
          </li>
          <li>
            submit false information, spam or malicious code through our forms; or
          </li>
          <li>
            copy, scrape or reproduce Website content for commercial purposes without
            our written permission.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Intellectual Property">
        <p>
          The Website and its content, including text, graphics, logos, images and
          software, belong to Investera or its licensors and are protected by
          intellectual property laws. You may view and print pages for your own
          internal, non-commercial use. Any other use requires our prior written
          consent.
        </p>
      </LegalSection>

      <LegalSection title="5. Third-Party Links and Services">
        <p>
          The Website may link to or embed third-party websites and services, such as
          our social media pages and the HubSpot booking calendar. We are not
          responsible for their content, availability or privacy practices, and your
          use of them is subject to their own terms.
        </p>
      </LegalSection>

      <LegalSection title="6. Availability and Changes">
        <p>
          We aim to keep the Website available and accurate, but we do not guarantee
          that it will be uninterrupted, error-free or always up to date. We may
          change, suspend or withdraw any part of the Website at any time.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Investera is not liable for any
          indirect or consequential loss, or for any loss of profit, data or business
          opportunity, arising from your use of, or inability to use, the Website or
          reliance on its content. Nothing in these terms limits liability that cannot
          be limited by law.
        </p>
      </LegalSection>

      <LegalSection title="8. Privacy">
        <p>
          Our{" "}
          <Link href="/privacy-policy" className={legalLinkClass}>
            Privacy Policy
          </Link>{" "}
          explains how we collect and use personal information submitted through the
          Website.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to These Terms">
        <p>
          We may update these terms from time to time. The version published on this
          page, with its last-updated date, applies to your use of the Website.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing Law">
        <p>
          These terms are governed by the laws of the Emirate of Abu Dhabi and the
          federal laws of the United Arab Emirates. The courts of Abu Dhabi have
          exclusive jurisdiction over any dispute arising from them.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact Us">
        <LegalContact />
      </LegalSection>
    </LegalPage>
  );
}
