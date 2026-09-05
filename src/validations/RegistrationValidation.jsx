import * as YUP from 'yup';

export const participantRegistrationValidationSchema = YUP.object().shape({
    first_name: YUP.string().required("نام الزامی است").max(20,"حداکثر کاراکتر مجاز 20 عدد است")
        .matches(/^[a-zA-Zآ-ی\s]+$/ , " باید فقط حروف باشد")
        .nonNullable("نباید خالی باشد"),
    last_name: YUP.string().required("نام خانوادگی الزامی است").max(20,"حداکثر کاراکتر مجاز 20 عدد است")
        .matches(/^[a-zA-Zآ-ی\s]+$/ , " باید فقط حروف باشد"),
    national_code: YUP.string()
        .required("کد ملی الزامی است")
        .matches(/^\d{10}$/, "کد ملی باید 10 رقم باشد"),
    idea_file: YUP.string()
        .required("فایل الزامی است")
        .matches(
            /^[a-zA-Z0-9_-]+$/,
            "شناسه فایل نامعتبر است"
        )
})
export const mentorRegistrationValidationSchema = YUP.object().shape({
    first_name: YUP.string().required("نام الزامی است").max(20,"حداکثر کاراکتر مجاز 20 عدد است")
        .matches(/^[a-zA-Zآ-ی\s]+$/ , " باید فقط حروف باشد"),
    last_name: YUP.string().required("نام خانوادگی الزامی است").max(20,"حداکثر کاراکتر مجاز 20 عدد است")
        .matches(/^[a-zA-Zآ-ی\s]+$/ , " باید فقط حروف باشد"),
    national_code: YUP.string()
        .required("کد ملی الزامی است")
        .matches(/^\d{10}$/, "کد ملی باید 10 رقم باشد"),
    idea_file: YUP.string()
        .required("فایل الزامی است")
        .matches(
            /^[a-zA-Z0-9_-]+$/,
            "شناسه فایل نامعتبر است"
        )
})
export const entourageRegistrationValidationSchema = YUP.object().shape({
    idea_file: YUP.string()
        .required("فایل الزامی است")
        .matches(
            /^[a-zA-Z0-9_-]+$/,
            "شناسه فایل نامعتبر است"
        )
})

export const FileSchema = YUP.object({
    idea_file: YUP
        .mixed()
        .required("لطفاً فایل ایده را انتخاب کنید.")
        .test(
            "fileType",
            "فقط فایل PDF مجاز است.",
            (file) =>
                file instanceof File &&
                file.type === "application/pdf"
        )
        .test(
            "fileSize",
            "حجم فایل نباید بیشتر از 5 مگابایت باشد.",
            (file) =>
                file instanceof File &&
                file.size <= 5 * 1024 * 1024
        )
});