import axios from "axios"
const activitytestAPI = axios.create({
  baseURL: "https://activity-test-6.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return activitytestAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_comment_list(payload) {
  return activitytestAPI.get(`/api/v1/comment/`)
}
function api_v1_comment_create(payload) {
  return activitytestAPI.post(`/api/v1/comment/`, payload)
}
function api_v1_comment_retrieve(payload) {
  return activitytestAPI.get(`/api/v1/comment/${payload.id}/`)
}
function api_v1_comment_update(payload) {
  return activitytestAPI.put(`/api/v1/comment/${payload.id}/`, payload)
}
function api_v1_comment_partial_update(payload) {
  return activitytestAPI.patch(`/api/v1/comment/${payload.id}/`, payload)
}
function api_v1_comment_destroy(payload) {
  return activitytestAPI.delete(`/api/v1/comment/${payload.id}/`)
}
function api_v1_follow_list(payload) {
  return activitytestAPI.get(`/api/v1/follow/`)
}
function api_v1_follow_create(payload) {
  return activitytestAPI.post(`/api/v1/follow/`, payload)
}
function api_v1_follow_retrieve(payload) {
  return activitytestAPI.get(`/api/v1/follow/${payload.id}/`)
}
function api_v1_follow_update(payload) {
  return activitytestAPI.put(`/api/v1/follow/${payload.id}/`, payload)
}
function api_v1_follow_partial_update(payload) {
  return activitytestAPI.patch(`/api/v1/follow/${payload.id}/`, payload)
}
function api_v1_follow_destroy(payload) {
  return activitytestAPI.delete(`/api/v1/follow/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return activitytestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_recipe_list(payload) {
  return activitytestAPI.get(`/api/v1/recipe/`)
}
function api_v1_recipe_create(payload) {
  return activitytestAPI.post(`/api/v1/recipe/`, payload)
}
function api_v1_recipe_retrieve(payload) {
  return activitytestAPI.get(`/api/v1/recipe/${payload.id}/`)
}
function api_v1_recipe_update(payload) {
  return activitytestAPI.put(`/api/v1/recipe/${payload.id}/`, payload)
}
function api_v1_recipe_partial_update(payload) {
  return activitytestAPI.patch(`/api/v1/recipe/${payload.id}/`, payload)
}
function api_v1_recipe_destroy(payload) {
  return activitytestAPI.delete(`/api/v1/recipe/${payload.id}/`)
}
function api_v1_recipecollection_list(payload) {
  return activitytestAPI.get(`/api/v1/recipecollection/`)
}
function api_v1_recipecollection_create(payload) {
  return activitytestAPI.post(`/api/v1/recipecollection/`, payload)
}
function api_v1_recipecollection_retrieve(payload) {
  return activitytestAPI.get(`/api/v1/recipecollection/${payload.id}/`)
}
function api_v1_recipecollection_update(payload) {
  return activitytestAPI.put(`/api/v1/recipecollection/${payload.id}/`, payload)
}
function api_v1_recipecollection_partial_update(payload) {
  return activitytestAPI.patch(
    `/api/v1/recipecollection/${payload.id}/`,
    payload
  )
}
function api_v1_recipecollection_destroy(payload) {
  return activitytestAPI.delete(`/api/v1/recipecollection/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return activitytestAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_user_list(payload) {
  return activitytestAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return activitytestAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return activitytestAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return activitytestAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return activitytestAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return activitytestAPI.delete(`/api/v1/user/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return activitytestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return activitytestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return activitytestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return activitytestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return activitytestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return activitytestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return activitytestAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return activitytestAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return activitytestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return activitytestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return activitytestAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_comment_list,
  api_v1_comment_create,
  api_v1_comment_retrieve,
  api_v1_comment_update,
  api_v1_comment_partial_update,
  api_v1_comment_destroy,
  api_v1_follow_list,
  api_v1_follow_create,
  api_v1_follow_retrieve,
  api_v1_follow_update,
  api_v1_follow_partial_update,
  api_v1_follow_destroy,
  api_v1_login_create,
  api_v1_recipe_list,
  api_v1_recipe_create,
  api_v1_recipe_retrieve,
  api_v1_recipe_update,
  api_v1_recipe_partial_update,
  api_v1_recipe_destroy,
  api_v1_recipecollection_list,
  api_v1_recipecollection_create,
  api_v1_recipecollection_retrieve,
  api_v1_recipecollection_update,
  api_v1_recipecollection_partial_update,
  api_v1_recipecollection_destroy,
  api_v1_signup_create,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
