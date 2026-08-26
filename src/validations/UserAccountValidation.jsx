import * as YUP from 'yup';


export const UserAccountLogInCheckEmailSchema = YUP.object().shape({
    email: YUP.string().required().email("ایمیل به درستی وارد نشده است!"),
    loginBySms: YUP.boolean(),
    forget_password: YUP.boolean()

})
export const UserAccountLogInCheckPasswordSchema = YUP.object().shape({
    email: YUP.string().required("رمز عبور الزامی است"),
    password: YUP.string().required(),

})
export const UserAccountSignUpSchema = YUP.object().shape({
    user_name: YUP.string().required().min(5 , "حداقل کاراکتر 5 حرف باید باشه"),
    email: YUP.string().required("ایمل معتبر نیست!").email("ایمل معتبر نیست!"),
    password: YUP.string().required("رمز عبور الزامی است")
        .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
        .matches(/[A-Z]/, "حداقل یک حرف بزرگ لازم است")
        .matches(/[a-z]/)
        .matches(/[0-9]/, "حداقل یک عدد لازم است")
        .matches(/[!@#$%^&*.,]/, "حداقل یک کاراکتر خاص لازم است"),
    password_confirmation: YUP.string().required().oneOf(
        [YUP.ref("password")],
        "رمز عبور ها یکسان نیستند!"
    )
})