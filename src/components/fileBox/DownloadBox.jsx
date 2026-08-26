import styles from '../../css/participantRegistration.module.css';


const DownloadBox = ({ formId }) => {
    // لیست فایل‌های نمونه بر اساس id تب
    const files = [
        { id: 0, url:"/registerForm/signUp.docx" , name: "sample-participant.docx" },
        { id: 1, url:"/registerForm/mentorSignUp.docx" ,     name: "sample-judge.docx" },
        { id: 2, url:"/registerForm/companySignUp.docx" , name: "sample-companion.docx" }
    ];

    const handleDownload = (event) => {
        event.preventDefault();
        // پیدا کردن فایل متناظر با formId
        const selectedFile = files.find(f => f.id === formId);
        if (!selectedFile) return;

        const link = document.createElement('a');
        link.href = selectedFile.url;
        link.download = selectedFile.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.downloadBox}>
            <h4>📥 دانلود فایل نمونه</h4>
            <p>برای تکمیل اطلاعات مورد نیاز، فایل نمونه را دانلود کنید و سپس آن را در باکس زیر آپلود نمایید.</p>
            <button onClick={handleDownload}>دانلود فایل {formId === 0 ? 'شرکت کننده' : formId === 1 ? 'داور/منتور' : 'همراهان'}</button>
        </div>
    );
};

export default DownloadBox;