import React, { useState, useRef } from "react";
import styles from "../../css/participantRegistration.module.css";

const UploadBox = ({setFile}) => {

    const inputRef = useRef(null);
    const [localFile , setLocalFile] = useState(null);

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (selected) {
            setFile(selected);
            setLocalFile(selected);
        };
    };

    const removeFile = () => {
        setFile(null);
        setLocalFile(null);
        if (inputRef.current) inputRef.current.value = "";
    };

    const formatFileSize = (bytes) => {
        if (!bytes) return "";
        const kb = bytes / 1024;
        if (kb < 1024) return `${kb.toFixed(1)} KB`;
        return `${(kb / 1024).toFixed(1)} MB`;
    };

    return (
        <div className={styles.uploadContainer}>
            <h4 className={styles.uploadTitle}>📎 آپلود فایل ایده شما</h4>
            <p className={styles.uploadHint}>فرمت‌های مجاز: pdf. (حداکثر 2 مگابایت)</p>

            <div className={styles.dropzone} onClick={() => inputRef.current?.click()}>
                <input
                    type="file"
                    ref={inputRef}
                    onChange={handleFileChange}
                    className={styles.hiddenInput}
                    accept=".pdf,.doc,.docx,.zip"
                />
                <div className={styles.dropzoneContent}>
                    <button type="button" className={styles.selectBtn}>
                        انتخاب فایل
                    </button>
                </div>
            </div>

            {localFile && (
                <div className={styles.chosenFileCard}>
                    <div className={styles.fileIcon}>📄</div>
                    <div className={styles.fileInfo}>
                        <div className={styles.fileName}>{localFile.name}</div>
                        <div className={styles.fileSize}>{formatFileSize(localFile.size)}</div>
                    </div>
                    <button
                        type="button"
                        className={styles.removeFileBtn}
                        onClick={removeFile}
                        title="حذف فایل"
                    >
                        ✖
                    </button>
                </div>
            )}
        </div>
    );
};

export default UploadBox;