/**
 * Created by Vaibhav Kaushal on 19th July 2023
 */

'use strict';


exports.requestMethods  = {
  POST  : 'POST',
  GET   : 'GET',
  PUT   : 'PUT',
  PATCH : 'PATCH',
  DELETE: 'DELETE'
};

exports.responseHttpStatus = {
  BAD_REQUEST              : 400,
  UNAUTHORIZED             : 401,
  SUCCESS                  : 200,
  INTERNAL_SERVER_ERROR    : 500,
  CONFLICT                 : 409,
  NOT_FOUND                : 404
};

exports.modules  = {
  Todo        : "Todo",
};

exports.permissions  = {
  "READ"    : 1,
  "CREATE"  : 2,
  "UPDATE"  : 3,
  "DELETE"  : 4
};

exports.responseStatus = {
  BAD_REQUEST                 : 400,
  UNAUTHORIZED                : 401,
  SESSION_EXPIRED             : 440,
  SUCCESS                     : 200,
  INTERNAL_SERVER_ERROR       : 500,
  CONFLICT                    : 409,
  NOT_FOUND                   : 404,
  PLAN_EXPIRED                : 402
};

exports.responseMessages = {
  SUCCESS                     : "Success",
  FAILURE                     : "Failure",
  UNAUTHORIZED                : "You are not authorized to perform this action.",
  USER_ALREADY_REGISTERED     : "User already registered with us. Try signing in",
  REGISTER_SUCCESS            : "User registered successfully",
  REGISTER_ALREADY_VERIFY     : "User already verified",
  PARAMETER_MISSING           : "Insufficient information was supplied. Please check and try again.",
  INVALID_AUTH_KEY            : "Invalid Token!",
  INVALID_CREDENTIALS         : "Invalid Credentials!",
  REGISTRATION_INCOMPLETE     : "Incomplete registration. Initial setup pending.",
  USER_INACTIVE               : "This account is not active yet. Please contact support.",
  ACCOUNT_INACTIVE            : "This account is not active or blocked by admin. Please contact admin.",
  SESSION_EXPIRED             : "User session expired",
  INTERNAL_SERVER_ERROR       : "Some error occurred.",
  DUPLICATE_ENTRY             : "Something duplicate in database.",
  ALREADY_EXITS               : "User already exists.",
  NOT_FOUND                   : "No data found",
  NO_REQUEST_FOUND            : "No request found",
  USER_NOT_FOUND              : "User not registered with us",
  INVALID_OTP                 : "Invalid OTP!",
  OTP_SUCCESS                 : "OTP sent successfully",
  OTP_EXPIRES                 : "OTP is expired! ",
  DUPLICATE_PHONE_NUMBER      : "Phone number already exists",
  INCOMPLETE_REGISTRATION     : "Please verify your phone number.",
  SKILL_DUPLICATE             : "This Skill is already Added",
  INVALID_SKILL_ID            : "Skill ID is not Valid"
};


exports.LOCATION_TRIGGER = {
  REGISTER                : 1,
  VERIFY_REGISTRATION     : 2,
  LOGIN_VIA_OTP           : 3,
  LOGIN_WITH_PASSWORD     : 4,
  LOGIN_VIA_ACCESS_TOKEN  : 5,
  UPDATE_USER_DETAILS     : 6
}
exports.APP_TYPE = {
  MOBILE_APP  :  1,
  WEB_APP     :  2
}

exports.EMAIL_SERVICE = {
  SES         : 1,
  MANDRILL    : 2
};