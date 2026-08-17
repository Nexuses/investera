import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";

const GDPR_URL =
  "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN";

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[920px] px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-[40px] font-normal leading-tight tracking-[-0.02em] sm:text-[48px]">
            <span className="font-normal text-[#1a1a1a]">Privacy </span>
            <span className="heading-accent text-[#0c2d57]">Policy</span>
          </h1>
          <p className="mt-3 text-[14px] font-medium leading-[1.3] text-[#CCA400]">
            Updated 19 May 2019
          </p>

          <div className="mt-8 space-y-5 text-[16px] leading-[1.6] text-[#4B5563]">
            <p>
              Investera Solutions Business Applications – Sole Proprietorship L.L.C.,
              a company incorporated in accordance with the laws of the United Arab
              Emirates with commercial number CN - 2865994, and having its address at
              Level 20, Tower C2, Al Bateen, Abu Dhabi, United Arab Emirates
              (“Investera”). The software (“Software”) is owned by Investera. It
              offers a next generation investment management platform. When you use
              these services, you will be sharing some information with us. For you
              to be aware about your privacy, this privacy policy (“Privacy Policy”)
              sets out the information we collect, how we use it, whom we share it
              with, and the controls we grant you to access, update, and delete your
              information. Make sure to read the entire policy to fully understand
              all the below terms related to your privacy.
            </p>
            <p>
              Please note that we take part of the European General Data Protection
              Regulation of April 27, 2016 (Regulation (EU) 2016/679) (GDPR) which
              is available on{" "}
              <a
                href={GDPR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#0c2d57] underline decoration-[#0c2d57]/30 underline-offset-2 hover:decoration-[#0c2d57]"
              >
                https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679&from=EN
              </a>
              .
            </p>
            <p className="font-semibold uppercase tracking-[0.02em] text-[#0c2d57]">
              By downloading and using the Software, you fully consent to the
              practices described in this Privacy Policy, including the disclosure
              of your information to locations which the authorities in your
              jurisdiction may not recognise as providing an adequate level of
              protection for personal data.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-12">
          <PolicySection title="1. What Do We Collect">
            <p>There are three basic categories of information we collect:</p>
            <h3>1. Information you share with us</h3>
            <p>
              When you use the Software, we collect the information that you choose
              to share with us. For example, our Software requires you to download
              the Software, create an account, and log in with a password. To make
              it easier for others to find you, we may also ask you to provide us
              with some additional information that will be publicly visible on the
              Software. All information you send through the Software is information
              saved with us as well. When you contact our customer support team, in
              any way, we will collect whatever information you share. Please note
              that we do not store, sell, share, rent or lease any credit/debit card
              numbers to any third parties.
            </p>
            <h3>2. Information from use of the Software</h3>
            <p>Information about your use of the Software services such as:</p>
            <ul>
              <li>
                <strong>Usage Information:</strong> information about your activity
                through the Software.
              </li>
              <li>
                <strong>Content Information:</strong> content you create on the
                Software and information about the content you create or provide.
              </li>
              <li>
                <strong>Device Information:</strong> information from and about the
                devices on which you use the Software.
              </li>
              <li>
                <strong>Device Phonebook.</strong>
              </li>
              <li>
                <strong>Camera and Photos:</strong> images and other information
                from your device’s camera and photos.
              </li>
              <li>
                <strong>Location Information:</strong> information about your
                location. With your permission, we may also collect information
                about your precise location using methods that include GPS, wireless
                networks, cell towers, Wi-Fi access points, and other sensors, such
                as gyroscopes, accelerometers, and compasses.
              </li>
              <li>
                <strong>Information Collected by Cookies and Other Technologies:</strong>{" "}
                Some information about your activity, browser, and device, may be
                collected by cookies and other technologies such as web beacons, web
                storage, and unique advertising identifiers. We may also use these
                technologies to collect information when you interact with the
                Software we offer through one of our partners. Most web browsers are
                set to accept cookies by default. If you prefer, you can usually
                remove or reject browser cookies through the settings on your
                browser or device. Keep in mind, though, that removing or rejecting
                cookies could affect the availability and functionality of our
                services on the Software.
              </li>
              <li>
                <strong>Log Information.</strong> We also collect log information
                when you use the Software. This information includes, among other
                things: error debugging information, user login/logout, usage
                duration, pronunciation audio, text and scoring results.
              </li>
            </ul>
            <h3>3. Information we collect from third parties</h3>
            <p>
              We may collect information that other users of the Software provide
              about you when they are using our Software.
            </p>
          </PolicySection>

          <PolicySection title="2. Use of Information">
            <p>
              We use the information to provide you with a better version of the
              Software that we continuously work on improving. Below are elaborated
              techniques we adopt in this course:
            </p>
            <ul>
              <li>
                develop, operate, improve, deliver, maintain, and protect the
                Software;
              </li>
              <li>monitor and analyze trends and usage;</li>
              <li>
                contextualize your experience and applying other labels based on the
                content;
              </li>
              <li>
                provide and improve ad targeting and measurement, including the use
                of your precise location information (where you grant us permission
                to collect that information), both on and off our Software;
              </li>
              <li>enhance the safety and security of the Software;</li>
              <li>
                verify your identity and prevent fraud or other unauthorized or
                illegal activity;
              </li>
              <li>
                use information we collected from cookies and other technology to
                enhance the Software and your experience throughout the use of the
                Software;
              </li>
              <li>enforce our EULA and other usage policies.</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. How We Share Information">
            <p>We may share information about you in the following ways:</p>
            <h3>With other users of the Software, we may share the following:</h3>
            <ul>
              <li>information about you, such as your username and name;</li>
              <li>information about how you have interacted with our services;</li>
              <li>any additional information you have directed us to share;</li>
              <li>
                content you post or send. Please note that how widely your content
                is shared depends on your personal settings and the type of service
                you are using.
              </li>
            </ul>
            <h3>
              With all users, our business partners, and the general public, we may
              share the following:
            </h3>
            <ul>
              <li>
                public information such as your name, username and profile picture.
              </li>
              <li>
                any content that you submit to an inherently public service. This
                content may be viewed and shared by the public at large both on and
                off the Software, including through search results, on websites, in
                applications, and in online and offline broadcasts.
              </li>
            </ul>
            <p>With our affiliates.</p>
            <h3>With third parties, we may share your information with:</h3>
            <ul>
              <li>service providers who perform services on our behalf.</li>
              <li>business partners that provide services and functionality.</li>
              <li>
                third parties for legal reasons. We may share information about you
                if we believe that disclosing the information is needed to:
                <ul>
                  <li>
                    comply with any valid legal process, governmental request, or
                    applicable law, rule, or regulation.
                  </li>
                  <li>investigate, remedy, or enforce potential EULA violations.</li>
                  <li>
                    protect the rights, property, and safety of us, our users, or
                    others.
                  </li>
                  <li>detect and resolve any fraud or security concerns.</li>
                </ul>
              </li>
              <li>
                third parties as part of a merger or acquisition: If Investera gets
                involved in a merger, asset sale, financing, liquidation or
                bankruptcy, or acquisition of all or some portion of our business to
                another company, we may share your information with that company
                before and after the transaction closes.
              </li>
            </ul>
            <p>
              We may also share with third parties, such as advertisers, aggregated,
              non-personally identifiable, or de-identified information.
            </p>
          </PolicySection>

          <PolicySection title="4. Third-Party Content and Integrations">
            <p>
              The Software may also contain third-party links and search results,
              third-party integrations, or offer a co-branded or third-party-branded
              service. You may be providing information (including personal
              information) directly to these said third parties, us, or both. You
              acknowledge and agree that we are not responsible for how those third
              parties collect or use your information.
            </p>
          </PolicySection>

          <PolicySection title="5. Analytics and Advertising Services">
            <h3>1. Information you share with us</h3>
            <p>
              We may permit other companies to use cookies, web beacons, and similar
              technologies on the Software. These companies may collect information
              about how you use the Software over time and combine it with similar
              information from other services and companies. This information may be
              used to, including but not limited to, analyze and track data,
              determine the popularity of certain content, and better understand
              your online activity. Additionally, some companies, including our
              affiliates, may use information collected on the Software to measure
              the performance of advertisements and deliver more relevant
              advertisements on behalf of us or other companies, including on
              third-party websites and applications.
            </p>
            <h3>2. Information provided by us</h3>
            <p>
              We may collect information about your activity on third-party services
              that use cookies and other technologies provided by us. We use this
              information to improve our advertising services, including measuring
              the performance of advertisements and showing you more relevant
              advertisements.
            </p>
          </PolicySection>

          <PolicySection title="6. How Long We Keep Your Information">
            <p>
              We store the following information for as long as they are required
              for users’ log in:
            </p>
            <ul>
              <li>
                your basic account information, including your name, phone number,
                and email address.
              </li>
              <li>
                location information for different lengths of time based on how
                precise it is and which services you use.
              </li>
              <li>
                Keep in mind that, while our systems are designed to carry out our
                deletion practices upon deletion of accounts, we cannot promise that
                deletion will occur within a specific timeframe. There may be legal
                requirements to store your data and we may need to suspend those
                deletion practices if we receive valid legal process asking us to
                preserve content or if we receive reports of abuse or other Terms of
                Service violations. Finally, we may also retain certain information
                in backup for a limited period of time or as required by law.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="7. Control over Your Information">
            <p>
              We want you to be in control of your information, so we provide you
              with the following tools:
            </p>
            <ul>
              <li>
                <strong>Download data:</strong> you can access and edit most of your
                basic account information right on the Software. Because your
                privacy is important to us, we may ask you to verify your identity
                or provide additional information before we grant you access or
                update your personal information. We may also reject your request to
                access or update your personal information for several reasons,
                including, the request risks the privacy of other users or if the
                request is unlawful.
              </li>
              <li>
                <strong>Revoking permissions:</strong> if you grant us authorization
                to use your information, you can always change your mind and simply
                revoke your permission by changing the settings on your device if
                your device offers this option. By doing that, services on the
                Software will lose full functionality.
              </li>
              <li>
                <strong>Deletion of the Software.</strong>
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="8. Users in the European Union">
            <p>
              If you are a user of the Software in the European Union, you should
              know that Investera is the controller of your personal information.
              Here is some additional information we would like to bring to your
              attention:
            </p>
            <h3>1. Basis for using your information</h3>
            <p>
              We can only use your personal information when certain conditions
              apply:
            </p>
            <ul>
              <li>
                <strong>Contract:</strong> one reason we might use your information
                is because you have entered into an agreement with us. When you
                purchase our Software and accepted our EULA, we need to use some of
                your information to collect payment and make sure your information
                is valid.
              </li>
              <li>
                <strong>Legitimate interest:</strong> another reason we might use
                your information is because we have, or a third party has, a
                legitimate interest in doing so. We also use some information to
                show interesting advertisements. An important point to understand
                about legitimate interest is that our interests do not outweigh your
                right to privacy, so we only rely on legitimate interest when we
                think the way we are using your data does not significantly impact
                your privacy or would be expected by you, or there is a compelling
                reason to do so.
              </li>
              <li>
                <strong>Consent:</strong> in some cases, we will ask for consent to
                use your information for specific purposes. If we do, we will make
                sure you can revoke your consent on the Software or through your
                device permissions. Even if we are not relying on consent to use
                your information, we may ask you for permission to access data like
                contacts and location.
              </li>
              <li>
                <strong>Legal obligation:</strong> we may be required to use your
                personal information for legal compliance.
              </li>
            </ul>
            <h3>2. Your right to object</h3>
            <p>
              You have the right to object to our use of your information. With many
              types of data, we provide you with the ability to simply delete it if
              you do not want us processing it anymore. For other types of data, we
              grant you the ability to stop the use of your data by disabling the
              feature altogether.
            </p>
            <h3>3. International transfers</h3>
            <p>
              We may collect your personal information from, transfer it to, and
              store and process it in the United States and other countries outside
              of where you live. Whenever we share information of EU users outside
              the EU we make sure an adequate transfer mechanism is in place.
            </p>
            <p>
              <strong>Complaints?</strong> If you are based in the EU, you can
              always file a complaint with the supervisory authority in your Member
              State.
            </p>
          </PolicySection>

          <PolicySection title="9. Children">
            <p>
              The Software is not intended for anyone under the age of eighteen
              years old, and that is why we do not knowingly collect personal
              information from anyone under the age of eighteen years old.
            </p>
          </PolicySection>

          <PolicySection title="10. Revisions to the Privacy Policy">
            <p>
              We may change this Privacy Policy from time to time and such change
              will be published in the Software and it will be your responsibility
              to review the changes published in the Software. Investera bears no
              liability in relation to any change it introduces to this Privacy
              Policy.
            </p>
          </PolicySection>

          <PolicySection title="11. Governing Law and Jurisdiction">
            <p>
              Any dispute or claim arising out of or in connection with this website
              shall be governed and construed in accordance with the laws of UAE.
            </p>
          </PolicySection>

          <PolicySection title="12. Contact Us">
            <p>
              For questions about this Privacy Policy, please contact:
            </p>
            <p>
              <strong className="text-[#0c2d57]">
                Investera Solutions Business Applications – Sole Proprietorship
                L.L.C.
              </strong>
              <br />
              Level 20, Tower C2, Al Bateen, Abu Dhabi, United Arab Emirates
              <br />
              Email:{" "}
              <a
                href="mailto:info@investera.com"
                className="font-medium text-[#0c2d57] underline decoration-[#0c2d57]/30 underline-offset-2 hover:decoration-[#0c2d57]"
              >
                info@investera.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+97123093880"
                className="font-medium text-[#0c2d57] underline decoration-[#0c2d57]/30 underline-offset-2 hover:decoration-[#0c2d57]"
              >
                +971 2 309 3880
              </a>
            </p>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <FadeIn>
      <article className="[&_h3]:mt-6 [&_h3]:text-[18px] [&_h3]:font-semibold [&_h3]:leading-[1.3] [&_h3]:text-[#0c2d57] [&_li]:mt-2 [&_p]:mt-4 [&_p]:text-[16px] [&_p]:leading-[1.6] [&_p]:text-[#4B5563] [&_strong]:font-semibold [&_strong]:text-[#344054] [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul_ul]:mt-2 [&_ul_ul]:list-[circle]">
        <h2 className="text-[28px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#0c2d57] sm:text-[32px]">
          {title}
        </h2>
        {children}
      </article>
    </FadeIn>
  );
}
