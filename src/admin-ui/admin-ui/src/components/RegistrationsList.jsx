import {useContext, useEffect, useMemo, useState} from "react";
import styles from "./RegistrationsList.module.css";
import StatusBadge from "./StatusBadge";
import StatCard from "./StatCard";
import {deleteRegister, downLoadFile, getAllRegisters} from "../../../../api/ParticipantsServices";
import {userAllInfo} from "../../../../api/AuthenticationServices";
import {contactContext} from "../../../../contex/Context";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Spinner} from "../../../../components";
import {toast} from "react-toastify"; // Import css
// import { registrations } from "../data/mockData";

const RegistrationsList =({confirmDelete})=> {

  const [registrations, setregistrations] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const {setLoading,loading} = useContext(contactContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const {data} = await getAllRegisters()
                setregistrations(data.data)
            }catch(err) {
                console.log(err);
            }finally {
                setLoading(false)
            }
        }
        fetchData();
    }, []);



const getFilehandler = async (fileId) => {
    try {
        const {data} = await downLoadFile(fileId)
        const url = window.URL.createObjectURL(data);

        window.open(url, "_blank");
    }catch(err) {
        console.log(err);
    }
}






  const stats = useMemo(
    () => ({
      total: registrations.length,
      participants: registrations.filter((r) => r.type === "Participant").length,
      mentors: registrations.filter((r) => r.type === "Referee_Mentor").length,
      entourages: registrations.filter((r) => r.type === "Entourage").length,
    }),
    [registrations]
  );

  const filtered = registrations.filter(
      (r) => {const matchesSearch = r.first_name?.includes(search) || r.last_name?.includes(search) || r.national_code?.includes(search) || r.type?.includes(search);
    const matchesFilter = filter === "all" || r.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>لیست ثبت‌نامی‌ها</h1>
          <p className={styles.subtitle}>
            بررسی و مدیریت درخواست‌های ثبت‌نام جدید کاربران
          </p>
        </div>
      </header>

      <div className={styles.stats}>
        <StatCard label="کل درخواست‌ها" value={stats.total} tone="primary" />
        <StatCard label="شرکت کننده ها" value={stats.participants} tone="accent" />
        <StatCard label="منتور ها" value={stats.mentors} tone="primary" />
        <StatCard label="همراهان" value={stats.entourages} tone="danger" />
      </div>

      <div className={styles.toolbar}>
        <input
          type="text"
          placeholder="جستجو ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />

        {/*<div className={styles.filters}>*/}
        {/*  {[*/}
        {/*    { key: "all", label: "همه" },*/}
        {/*    { key: "pending", label: "در انتظار" },*/}
        {/*    { key: "approved", label: "تایید شده" },*/}
        {/*    { key: "rejected", label: "رد شده" },*/}
        {/*  ].map((f) => (*/}
        {/*    <button*/}
        {/*      key={f.key}*/}
        {/*      className={`${styles.filterBtn} ${*/}
        {/*        filter === f.key ? styles.filterBtnActive : ""*/}
        {/*      }`}*/}
        {/*      onClick={() => setFilter(f.key)}*/}
        {/*    >*/}
        {/*      {f.label}*/}
        {/*    </button>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>

      <div className={styles.tableWrap}>
          {loading?<Spinner/>:
              <table className={styles.table}>
                  <thead>
                  <tr>
                      <th>نام  </th>
                      <th>نام خانوادگی</th>
                      <th>کد ملی</th>
                      <th>تاریخ ثبت‌نام</th>
                      <th>نوع ثبت نام</th>
                      <th>عملیات</th>
                  </tr>
                  </thead>
                  <tbody>
                  {/*filter*/}
                  {filtered.map((r) => (
                      <tr key={r.id}>
                          <td className={styles.nameCell}>
                              <span className={styles.avatar}>{r.first_name?.charAt(0) || "?"}</span>
                              {r.first_name?r.first_name:"---"}
                          </td>
                          <td className={styles.mutedCell}>{r.last_name?r.last_name:"---"}</td>
                          <td className={styles.mutedCell} dir="rtl">
                              {r.national_code?r.national_code:"---"}
                          </td>
                          <td className={styles.mutedCell}>{new Date(r.created_at).toLocaleDateString("fa-IR")}</td>
                          <td className={styles.mutedCell}>{r.type}</td>
                          <td>
                              <div className={styles.actions}>
                                  <button className={styles.approveBtn} onClick={()=>getFilehandler(r.upload.id)}>دریافت فایل کاربر</button>
                                  <button className={styles.rejectBtn} onClick={() => confirmDelete(r.id , r.first_name)}>پاک کردن کاربر</button>
                              </div>
                          </td>
                      </tr>
                  ))}
                  {/*filtered*/}
                  {filtered.length === 0 && (
                      <tr>
                          <td colSpan={6} className={styles.empty}>
                              هیچ درخواستی با این مشخصات پیدا نشد.
                          </td>
                      </tr>
                  )}
                  </tbody>
              </table>}

      </div>
    </div>
  );
}
export default RegistrationsList;
