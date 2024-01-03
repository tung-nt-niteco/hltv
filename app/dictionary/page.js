import Image from 'next/image'
import styles from './../page.module.css'

export default function ConversationStarters() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Dictionary</h1>
        <h2>Privacy Policy</h2>
        <div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/dictionary_192x192.png"
              alt="Dictionary App"
              className={styles.vercelLogo}
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h2>No sensitive data</h2>
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Our commitment <span>-&gt;</span>
          </h2>
          <p>When you use our services (our applications), you are trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.
            <br/>Our Privacy Policy describes the information collected through our applications and the use of the information. Last updated: Jan 1st, 2024.
          </p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            We collect <span>-&gt;</span>
          </h2>
          <p>We collect information about your devices, operating system, crash reports, system activity, the interaction of your apps, but <b>no personal information</b> and no other information, which helps us provide you better service.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Children’s privacy protection <span>-&gt;</span>
          </h2>
          <p>We comply with the Children’s Online Privacy Protection Act (“COPPA”). We <b>do not collect personal information from children</b> under the age of 13.
            <br/>We firmly commit that if in the event that a user identifies himself or herself as a child under the age of 13 through a support request or through any feedback, we will not collect, store or use, and will delete in a secure manner, any personal information of such user.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Your rights <span>-&gt;</span>
          </h2>
          <p>No sensitive personal data is collected, but you may have the legal rights under the applicable data protection laws in relation to your data, and you can exercise these rights free of charge, by contacting us at HighLevelTechValley(@gmail.com).
            <br/>We will respond within a month of receiving the request unless the request is particularly complex, in which case we will respond within three months.
          </p>
        </a>
      </div>
    </main>
  )
}
