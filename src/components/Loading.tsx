import styles from '@/app/styles/loading.module.css'

export default function SpinnerLoading() {
  return (
    <div className="spinner-container">
      <div className={styles.loading_spinner} />
    </div>
  )
}
