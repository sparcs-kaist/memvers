import type { FC } from 'react'
import styles from './footer.module.scss'

export const Footer: FC = () => (
  <div className={styles.footerWrapper}>
    <footer className={styles.footer}>
      <div className={styles.contents}>
        <ul>
          <li>웹사이트</li>
          <li>
            <a href="https://sparcs.org" target="_blank">
              공식 홈페이지
            </a>
          </li>
        </ul>
        <address>
          <ul>
            <li>문의</li>
            <li>
              <a href="mailto:staff@sparcs.org">이메일: staff@sparcs.org</a>
            </li>
          </ul>
        </address>
      </div>
      <strong className={styles.copyright}>
        Copyright 2025. SPARCS all rights reserved.
      </strong>
      <p className={styles.address}>
        (34141) 대전광역시 유성구 대학로 291 (구성동), 교양분관 N10 1층
      </p>
    </footer>
  </div>
)
