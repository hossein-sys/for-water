import styles from "./StatusBadge.module.css";

const STATUS_MAP = {
  pending: { label: "در انتظار بررسی", className: "pending" },
  approved: { label: "تایید شده", className: "approved" },
  rejected: { label: "رد شده", className: "rejected" },
  active: { label: "فعال", className: "approved" },
  suspended: { label: "مسدود شده", className: "rejected" },
};

export default function StatusBadge({ status }) {
  const info = STATUS_MAP[status] || { label: status, className: "pending" };

  return (
    <span className={`${styles.badge} ${styles[info.className]}`}>
      <span className={styles.dot} />
      {info.label}
    </span>
  );
}
