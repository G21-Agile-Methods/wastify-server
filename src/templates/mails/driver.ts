"use strict";

import lodash from "lodash"

export default {
    DriverCreated: {
        subject: lodash.template("Driver Account Created"),
        message: lodash.template("Dear ${user.othernames} ${user.surname},\n\nYour driver account has been created with\nEmail: ${user.email} \nPassword: ${password}\nRole: DRIVER\n\nLog onto https://.com to explore")
    },
    DriverVerificationCode: {
        subject: lodash.template("Driver Account Verification"),
        message: lodash.template("Dear ${user.othernames} ${user.surname},\n\nYour verification code is ${code}")
    },
    DriverLoggedIn: {
        subject: lodash.template("Account Login"),
        message: lodash.template("Dear ${user.othernames} ${user.surname},\n\nWe just detected a recent login into your account. If this was you, you can safely ignore this email, otherwise you should change your password immediately.")
    },
    DriverAccountSuspended: {
        subject: lodash.template("Account Suspension"),
        message: lodash.template("Dear ${user.othernames} ${user.surname},\n\nYour account has been suspended. Kindly contact your managers to follow up. Until your account is unsuspended, you will not be able to use your account.")
    },
    DriverAccountUnSuspended: {
        subject: lodash.template("Account Unsuspended"),
        message: lodash.template("Dear ${user.othernames} ${user.surname},\n\nYour account has been unsuspended. You can now log into your account.")
    },
}