# پنل مدیریت – UI

## ساختار
```
src/
 ├─ App.jsx
 ├─ styles/variables.css        ← رنگ‌ها، فونت (Vazirmatn)، متغیرهای پایه
 ├─ data/mockData.js            ← داده‌های نمونه (به‌جای API واقعی)
 └─ components/
     ├─ AdminLayout.jsx/.module.css   ← سایدبار + سوییچ بین دو بخش
     ├─ RegistrationsList.jsx/.module.css ← لیست ثبت‌نامی‌ها (جستجو، فیلتر وضعیت، تایید/رد)
     ├─ UsersList.jsx/.module.css         ← لیست کاربران (جستجو، نقش، وضعیت)
     ├─ StatusBadge.jsx/.module.css       ← بج وضعیت (در انتظار/تایید/رد/فعال/مسدود)
     └─ StatCard.jsx/.module.css          ← کارت‌های آماری بالای هر صفحه
```

## نصب و اجرا (پروژه Vite یا CRA)
1. پکیج‌های react و react-dom باید نصب باشند.
2. فایل `src/styles/variables.css` را در `App.jsx` ایمپورت شده می‌بینید — همان‌جا رنگ‌های شما (نسخه‌ی آبی/نفتی پالت ارسالی) به‌عنوان تم فعال تعریف شده.
3. کامپوننت `<App />` را در `main.jsx` رندر کنید.

## نکات
- طراحی به‌صورت راست‌به‌چپ (RTL) و با فونت وزیرمتن است.
- داده‌ها mock هستند؛ کافیست در `RegistrationsList.jsx` و `UsersList.jsx` بجای import از `mockData.js`، از فراخوانی API خودتان استفاده کنید.
- دکمه‌های «تایید/رد» و «مشاهده» فعلاً فقط ظاهری هستند و باید به منطق واقعی (API) وصل شوند.
- برای تغییر رنگ‌بندی به رنگ‌های سبز یا هر ست دیگری که فرستادید، کافیست مقادیر داخل `variables.css` را عوض کنید؛ چون همه‌جا از `var(--primary)`, `var(--accent)` و... استفاده شده.
