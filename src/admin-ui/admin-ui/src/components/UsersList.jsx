import {useContext, useEffect, useMemo, useState} from "react";
import styles from "./UsersList.module.css";
import StatusBadge from "./StatusBadge";
import StatCard from "./StatCard";
import { users } from "../data/mockData";
import {authenticationsList} from "../../../../api/AuthenticationServices";
import {contactContext} from "../../../../contex/Context";
import {Spinner} from "../../../../components";



const UsersList = ()=> {

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
    const {setLoading,loading} = useContext(contactContext);


  useEffect(() => {
      const fetchData = async () => {
          try {
              setLoading(true);
              const {data} = await authenticationsList()
              setUsers(data.data)
          }catch(err) {
              console.log(err);
          }finally {
              setLoading(false);
          }
      }
      fetchData();
  },[])

  const stats = useMemo(
      () => ({
        total: users.length,
        users: users.filter((u) => u.role[0] === "user").length,
        admins: users.filter((u) => u.role[0] === "admin").length,
    }),
    [users]
  );

  const filtered = users.filter(
    (u) => u.user_name.includes(search) || u.email.includes(search)
  );

  return (
    <div>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>لیست کاربران</h1>
          <p className={styles.subtitle}>مدیریت کاربران فعال در سایت</p>
        </div>
      </header>

      <div className={styles.stats}>
        <StatCard label="کل کاربران" value={stats.total} tone="primary" />
        <StatCard label="یوزر ها" value={stats.users} tone="primary" />
        <StatCard label="ادمین ها" value={stats.admins} tone="danger" />
      </div>

      <div className={styles.toolbar}>
        <input
          type="text"
          placeholder="جستجو بر اساس نام یا ایمیل..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
      </div>

      <div className={styles.tableWrap}>
          {loading? <Spinner/>:<table className={styles.table}>
              <thead>
              <tr>
                  <th>نام کاربر</th>
                  <th>ایمیل</th>
                  <th>نقش</th>
                  <th>تاریخ عضویت</th>
                  {/*<th>وضعیت</th>*/}
                  {/*<th>عملیات</th>*/}
              </tr>
              </thead>
              <tbody>
              {filtered.map((u) => (
                  <tr key={u.id}>
                      <td className={styles.nameCell}>
                          <span className={styles.avatar}>{u.user_name?.charAt(0)||"?"}</span>
                          {u.user_name}
                      </td>
                      <td className={styles.mutedCell}>{u.email}</td>
                      <td>
                          <span className={styles.roleTag}>{u.role?.[0]}</span>
                      </td>
                      <td className={styles.mutedCell}>{u.created_at}</td>
                      {/*<td>*/}
                      {/*    <StatusBadge status={u.status} />*/}
                      {/*</td>*/}
                      {/*<td>*/}
                      {/*    <button className={styles.moreBtn}>مشاهده</button>*/}
                      {/*</td>*/}
                  </tr>
              ))}

              {filtered.length === 0 && (
                  <tr>
                      <td colSpan={6} className={styles.empty}>
                          کاربری با این مشخصات پیدا نشد.
                      </td>
                  </tr>
              )}
              </tbody>
          </table>}
      </div>
    </div>
  );
}
export default UsersList;
