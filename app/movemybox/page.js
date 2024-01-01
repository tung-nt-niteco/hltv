import Image from 'next/image'
import styles from './../page.module.css'

export default function MoveMyBox() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Privacy Policy</h1>
        <div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/movemybox.svg"
              alt="Move My Box Logo"
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
          <p>When you use our services, you are trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.</p>
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
          <p>We collect information about your devices, operating system, crash reports, system activity, the interaction of your apps, but no other information, which helps us provide you better service.</p>
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
          <p>No sensitive personal data is collected, but you may have the legal rights under the applicable data protection laws in relation to your data, and you can exercise these rights free of charge, by contacting us at HighLevelTechValley(@gmail.com).</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            We care <span>-&gt;</span>
          </h2>
          <p>
            We will respond to any rights that you exercise within a month of receiving the request unless the request is particularly complex, in which case we will respond within three months.
          </p>
        </a>
      </div>
    </main>
  )
}
