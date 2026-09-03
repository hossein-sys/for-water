import * as YUP from 'yup';


export const UserAccountLogInCheckEmailSchema = YUP.object().shape({
    email: YUP.string().required("ایمیل الزامی است!").email("ایمیل به درستی وارد نشده است!"),
    loginBySms: YUP.boolean(),
    forget_password: YUP.boolean()

})
export const UserAccountLogInCheckPasswordSchema = YUP.object().shape({
    email: YUP.string().required("ایمیل الزامی است!"),
    password: YUP.string().required("رمز عبور الزامی است!"),

})
export const UserAccountSignUpSchema = YUP.object().shape({
    user_name: YUP.string().required("نام الزامی است!").min(5 , "حداقل کاراکتر 5 حرف باید باشه"),
    email: YUP.string().required("ایمل الزامی است!").email("ایمل معتبر نیست!"),
    password: YUP.string()
        .required("رمز عبور الزامی است!")
        .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد!")
        .matches(/[A-Z]/, "حداقل یک حرف بزرگ لازم است!")
        .matches(/[a-z]/, "حداقل یک حرف کوچک لازم است!")
        .matches(/[0-9]/, "حداقل یک عدد لازم است!")
        .matches(/[!@#$%^&*.,?_\-+]/, "حداقل یک کاراکتر خاص لازم است!"),
    password_confirmation: YUP.string().required("تکرار رمز عبور الزامی است!").oneOf(
        [YUP.ref("password")],
        "رمز عبور ها یکسان نیستند!"
    )
})