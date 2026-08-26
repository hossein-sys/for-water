import styles from "./StatCard.module.css";

export default function StatCard({ label, value, tone = "primary" }) {
  return (
    <div className={`${styles.card} ${styles[tone]}`}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
