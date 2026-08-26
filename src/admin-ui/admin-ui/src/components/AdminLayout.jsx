import { useState } from "react";
import styles from "./AdminLayout.module.css";
import RegistrationsList from "./RegistrationsList";
import UsersList from "./UsersList";
import {Link} from "react-router-dom";

const NAV_ITEMS = [
  {
    key: "registrations",
    label: "لیست ثبت‌نامی‌ها",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12h6m-6 4h6M9 8h6M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "users",
    label: "لیست کاربران",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm10.5 9v-1a3.5 3.5 0 0 0-2.5-3.36M14.5 3.13a3.5 3.5 0 0 1 0 6.74"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const AdminLayout = ({confirmDelete})=> {
  const [activeTab, setActiveTab] = useState("registrations");

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>A</span>
          <span className={styles.logoText}>پنل مدیریت</span>
            <Link to={"/"} className={styles.backButton}>برگشت</Link>
        </div>

        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              className={`${styles.navItem} ${
                activeTab === item.key ? styles.navItemActive : ""
              }`}
              onClick={() => setActiveTab(item.key)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.adminAvatar}>مد</div>
          <div>
            <div className={styles.adminName}>مدیر سیستم</div>
            <div className={styles.adminRole}>دسترسی کامل</div>
          </div>
        </div>

      </aside>

      <main className={styles.content}>
        {activeTab === "registrations" ? <RegistrationsList confirmDelete={confirmDelete} /> : <UsersList />}
      </main>

    </div>
  );
}
export default AdminLayout;
