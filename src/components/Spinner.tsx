import Image from 'next/image'
import espinner from 'public/icons/phosphor/spinner.svg'
import styles from '../styles/espinner.module.css'

export default function Spinner() {
  return (
    <Image
      className={styles['rotating-image']}
      src={espinner}
      width={32}
      height={32}
      alt="Loading icon"
    />
  )
}
